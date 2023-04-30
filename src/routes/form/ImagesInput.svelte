<script lang="ts">
  import {
    ref,
    uploadBytesResumable,
    deleteObject,
    getDownloadURL,
  } from "firebase/storage";

  import { storage, auth } from "$lib/firebase";

  import toast from "svelte-french-toast";
  import IconButton, { Icon } from "@smui/icon-button";
  import LinearProgress from "@smui/linear-progress";
  import ImageList, {
    Item,
    ImageAspectContainer,
    Image,
    Supporting,
  } from "@smui/image-list";

  export let images: any;
  export let imageRefs: any;

  function handleFileUpload() {
    Array.from(images).forEach((image) => {
      if (image.size > 5000000) {
        toast.error(
          `Image ${image.name} is too large at ${(image.size / 1000000).toFixed(
            2
          )}mb. The file size limit is 5mb.`,
          {
            duration: 10000,
          }
        );
        return;
      }

      const storageRef = ref(
        storage,
        `images/${auth.currentUser.uid}/${image.name}`
      );

      imageRefs[image.name] = {
        ref: storageRef,
        name: image.name,
        progress: 0,
        state: "running",
        blob: image,
        url: undefined,
      };

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

          imageRefs[image.name].state = snapshot.state;

          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          imageRefs[image.name].progress = progress;
        },
        (error) => {
          imageRefs[image.name].state = "Failed";
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            toast.success("Image added successfully");
            imageRefs[image.name].state = "complete";
            imageRefs[image.name].url = downloadURL;
          });
        }
      );
    });
  }

  function removeImage(image) {
    deleteObject(image.ref)
      .then(() => {
        console.log({ imageRefs });
        delete imageRefs[image.name];
        imageRefs = imageRefs;

        toast.success("Image successfully deleted");
        // File deleted successfully
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        toast.error("Image failed to delete");
      });
  }
</script>

<fieldset>
  <p>Images of the property:</p>

  <ImageList>
    <Item style="width: calc((100% / 3) - 10px);margin: 10px 0 0 10px;">
      <label for="file-upload" style="cursor: pointer">
        <input
          bind:files={images}
          on:change={handleFileUpload}
          id="file-upload"
          multiple
          type="file"
          accept="image/x-png,image/gif,image/png,image/jpeg"
          style="display: none"
        />
        <ImageAspectContainer>
          <Image style="background: white;" />
          <Icon
            class="material-icons"
            style="position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%)"
            >file_upload</Icon
          >
        </ImageAspectContainer>
        <Supporting>
          <span class="mdc-typography--caption">Upload images</span>
        </Supporting>
      </label></Item
    >
    {#each Object.keys(imageRefs) as imageRefKey}
      <Item style="width: calc((100% / 3) - 10px);margin: 10px 0 0 10px;">
        <ImageAspectContainer>
          <Image
            style="background-image: url({URL.createObjectURL(
              imageRefs[imageRefKey].blob
            )}); background-size: contain; background-color: white"
          />

          {#if imageRefs[imageRefKey].state === "running"}
            <LinearProgress
              progress={imageRefs[imageRefKey].progress / 100}
              style="position: absolute;bottom:0;width: 100%;"
            />
            <IconButton
              type="button"
              size="mini"
              aria-label="Progress"
              style="position: absolute;top: -10px;right: -10px;background: white;border-radius: 50%;font-size: 14px"
            >
              {Math.floor(imageRefs[imageRefKey].progress)}%
            </IconButton>
          {:else if imageRefs[imageRefKey].state === "complete"}
            <IconButton
              type="button"
              size="mini"
              on:click={() => removeImage(imageRefs[imageRefKey])}
              aria-label="Delete Image"
              style="position: absolute;top: -10px;right: -10px;background: white;border-radius: 50%;"
            >
              <Icon class="material-icons" style="color: black">close</Icon>
            </IconButton>
          {/if}
        </ImageAspectContainer>
        <Supporting>
          <span class="mdc-typography--caption"
            >{imageRefs[imageRefKey].name}
          </span>
        </Supporting>
      </Item>
    {/each}
  </ImageList>
</fieldset>

<style>
  p {
    margin: 0;
  }
  fieldset {
    display: block;
    margin-top: 40px;
  }
</style>
