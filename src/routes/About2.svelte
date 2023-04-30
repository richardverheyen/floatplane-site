<script lang="ts">
  import Button, { Label } from "@smui/button";
  import kwigonw from "$lib/images/kwigon.webp";
  import kwigon from "$lib/images/kwigon.png";
  import yodaw from "$lib/images/yoda.webp";
  import yoda from "$lib/images/yoda.png";
  import jarjarw from "$lib/images/jarjar.webp";
  import jarjar from "$lib/images/jarjar.png";

  function scrollIntoView(e: any) {
	e.preventDefault();
    const el = document.querySelector("#contact");
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
	  block: "start"
    });
  }
</script>

<section id="about">
  <div class="gutters">
    <div class="text">
      <p class="about mdc-typography--header3">
        At Good Call Copywriting, we understand that when it comes to selling real estate in Melbourne,
        the stakes are high.
      </p>
      <p class="about mdc-typography--body1">
        We specialise in telling each property's unique story, creating engaging
        and impactful copy that will help drive conversions.
      </p>
      <p class="about mdc-typography--body1">
        Our team of experienced writers are passionate about crafting persuasive
        content that will make your property stand out from the competition.
      </p>
      <Button
        type="button"
        variant="raised"
        color="secondary"
		    on:click={scrollIntoView}
        style="height: 44px; min-width: 180px; margin: 10px auto 0;"
      >
        <Label style="pointer-events: none">Work with us</Label>
      </Button>
    </div>
  </div>
</section>

<style lang="scss">
  .gutters {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px auto;
  }

  .text {
    max-width: 600px;
    width: 100%;

    p {
      margin-top: 0;
    }
  }
</style>
