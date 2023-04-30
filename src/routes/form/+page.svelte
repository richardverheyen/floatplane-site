<script lang="ts">
  import { onMount } from "svelte";
  import toast from "svelte-french-toast";
  import {
    initialiseFirebase,
    initialiseAuth,
    initialiseStorage,
    initialiseFunctions,
    storage,
    auth,
    functions,
  } from "$lib/firebase";

  import Button, { Label } from "@smui/button";
  import CircularProgress from "@smui/circular-progress";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import FormField from "@smui/form-field";
  import Checkbox from "@smui/checkbox";

  import MultiButton from "./MultiButton.svelte";
  import FeaturesInput from "./FeaturesInput.svelte";
  import ImagesInput from "./ImagesInput.svelte";

  onMount(() => {
    initialiseFirebase();
    initialiseAuth();
    initialiseStorage();
    initialiseFunctions();
  });

  let email: any = "";
  let address: string = "";

  let images;
  let imageRefs = {};
  let propertyType: Array<String> = [];

  let bedrooms: string = "0";
  let bedroomsCustom: string = "";
  let bathrooms: string = "0";
  let bathroomsCustom: string = "";
  let carspaces: string = "0";
  let carspacesCustom: string = "";
  let sqm: string = "";

  let features: Array<String> = [];
  let featuresExtended: any = "";
  let audience: any = "";
  let other: any = "";

  let loading = false;
  let sent = false;

  async function postRequest() {
    loading = true;
    sent = true;

    const payload = {
      email,
      address,
      propertyType,
      images: Object.keys(imageRefs).map(
        (key) => ({
          name: imageRefs[key].name,
          path: imageRefs[key].ref._location.path_,
          url: imageRefs[key].url
        })
      ),
      bedrooms: bedrooms === "Other" ? bedroomsCustom : bedrooms,
      bathrooms: bathrooms === "Other" ? bathroomsCustom : bathrooms,
      carspaces: carspaces === "Other" ? carspacesCustom : carspaces,
      sqm,
      features,
      featuresExtended,
      audience,
      other,
    };

    functions
      .createJob(payload)
      .then((data) => {
        sent = true;

        toast.success("Request Sent, we'll be in touch shortly", {
          duration: 4000,
          position: "bottom-center",
        });
      })
      .catch(() => {
        toast.error(
          "That didn't work! Please contact us at contact@goodcallcopywriting.com",
          {
            duration: 10000,
            position: "bottom-center",
          }
        );
      })
      .finally(() => {
        loading = false;
      });
  }
</script>

<svelte:head>
  <title>Good Call Copywriting | Form</title>
  <meta
    property="og:title"
    content="Good Call Copywriting | Copy Request Form"
  />
</svelte:head>

<section>
  <div class="gutters">
    <form on:submit|preventDefault={postRequest}>
      <h2 class="mdc-typography--headline2">Copy Request Form</h2>
      <p>
        Thanks for choosing Good Call Copywriting! Please take a few moments to
        provide us with your the details of your property so our team can get to
        work writing your story.
      </p>

      <fieldset>
        <Textfield
          variant="outlined"
          bind:value={email}
          label="Email"
          type="email"
          placeholder="Your email"
          style="width: 100%;"
          input$autocomplete="email"
          required
        />
      </fieldset>

      <fieldset>
        <Textfield
          variant="outlined"
          bind:value={address}
          label="Property Address"
          placeholder="Your answer"
          style="width: 100%;"
          required
        />
      </fieldset>

      <ImagesInput {images} {imageRefs} />

      <fieldset>
        <p>Property Type</p>
        <ul
          style="columns: 2; padding: 0;margin: 0 0 0 -8px;width: calc(100% + 16px)"
        >
          {#each ["Apartment & Unit", "Villa", "Acreage", "Block of Units", "House", "Townhouse", "Land", "Rural", "Retirement Living"] as type}
            <FormField style="display: flex; ">
              <Checkbox bind:group={propertyType} value={type} />
              <span slot="label">{type}</span>
            </FormField>
          {/each}
        </ul>
      </fieldset>

      <MultiButton
        choices={["0", "1", "2", "3", "4"]}
        bind:selected={bedrooms}
        bind:selectedCustom={bedroomsCustom}
        label="Bedrooms"
      />

      <MultiButton
        choices={["0", "1", "2", "3", "4"]}
        bind:selected={bathrooms}
        bind:selectedCustom={bathroomsCustom}
        label="Bathrooms"
      />

      <MultiButton
        choices={["0", "1", "2", "3", "4"]}
        bind:selected={carspaces}
        bind:selectedCustom={carspacesCustom}
        label="Car Spaces"
      />

      <fieldset>
        <Textfield
          variant="outlined"
          bind:value={sqm}
          label="Property SQM"
          placeholder="SQM"
          style="width: 100%;"
        />
      </fieldset>

      <FeaturesInput {features} />

      <fieldset>
        <Textfield
          textarea
          bind:value={featuresExtended}
          style="width: 100%;"
          input$rows={8}
          label="Highlighted Features"
        >
          <HelperText slot="helper"
            >What features would you like us to highlight? E.g. nearby
            landmarks, fireplace, terracotta tiles, Tuscan inspired façade, en
            suite etc.</HelperText
          >
        </Textfield>
      </fieldset>

      <fieldset>
        <Textfield
          textarea
          bind:value={audience}
          input$rows={4}
          style="width: 100%;"
          label="Tone and target audience"
        >
          <HelperText slot="helper"
            >Feel free to leave this to the experts if you're not feeling
            inspired!</HelperText
          >
        </Textfield>
      </fieldset>

      <fieldset>
        <Textfield
          textarea
          input$rows={8}
          bind:value={other}
          style="width: 100%;"
          label="Anything else you'd like us to mention?"
        />
      </fieldset>

      <Button
        type="submit"
        variant="raised"
        color="secondary"
        disabled={loading || sent}
        style="height: 44px; min-width: 180px; margin: 40px auto"
      >
        <Label
          style="display: flex; align-items: center; justify-content: center"
        >
          {#if loading}
            <CircularProgress
              style="height: 24px; width: 24px;"
              indeterminate
            />
          {:else if sent}
            Order Sent, we'll be in touch
          {:else}
            Send Work Order
          {/if}
        </Label>
      </Button>
    </form>
  </div>
</section>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 0 auto 60px;

    > h2 {
      text-align: center;
      margin-top: 140px;
    }

    p {
      margin: 0;
    }

    fieldset {
      display: block;
      margin-top: 40px;
    }
  }
</style>
