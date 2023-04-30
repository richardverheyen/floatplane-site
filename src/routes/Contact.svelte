<script>
  import Textfield from "@smui/textfield";
  import CircularProgress from "@smui/circular-progress";
  import Button, { Label } from "@smui/button";
  import toast from "svelte-french-toast";
  import { functions } from "$lib/firebase";

  let name = "";
  let email = "";
  let subject = "";
  let message = "";

  let loading = false;
  let sent = false;

  function handleSubmit() {
    loading = true;
    sent = true;

    functions
      .contactForm({name, email, subject, message})
      .then((data) => {
        toast.success("Message Sent, we'll be in touch shortly", {
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

<section>
  <div id="contact"></div>
  <div class="gutters">
    <form on:submit|preventDefault={handleSubmit}>
      <h2 class="mdc-typography--headline2">Get In Touch</h2>
      <fieldset>
        <Textfield
          variant="outlined"
          bind:value={name}
          label="Name"
          style="width: 100%;"
          input$autocomplete="name"
          required
        />
      </fieldset>
      <fieldset>
        <Textfield
          variant="outlined"
          bind:value={email}
          label="Email"
          type="email"
          style="width: 100%;"
          input$autocomplete="email"
          required
        />
      </fieldset>
      <fieldset>
        <Textfield
          variant="outlined"
          bind:value={subject}
          label="Subject"
          style="width: 100%;"
        />
      </fieldset>
      <fieldset>
        <Textfield
          variant="outlined"
          bind:value={message}
          label="Your Message"
          style="width: 100%;min-height: 240px;"
          textarea
          required
        />
      </fieldset>

      <Button
        type="submit"
        variant="raised"
        color="secondary"
        disabled={loading || sent}
        style="height: 44px; min-width: 180px; margin: auto"
      >
        <Label style="display: flex; align-items: center; justify-content: center">
          {#if loading}
            <CircularProgress
              style="height: 24px; width: 24px;"
              indeterminate
            />
          {:else if sent}
            Message Sent, we'll be in touch
          {:else}
            Send Message
          {/if}
        </Label>
      </Button>
    </form>
  </div>
</section>

<style lang="scss">
  section {
    position: relative;

    > div#contact {
      position: absolute;
      top: -80px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 0 auto 60px;

    > h2 {
      text-align: center;
      margin-top: 60px;
    }

    > fieldset {
      margin-bottom: 1em;
    }
  }
</style>
