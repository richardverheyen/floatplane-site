<script lang="ts">
  import Button, { Label } from "@smui/button";
  import rich from "$lib/images/rich.png";
  import jan from "$lib/images/jan.png";

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
    <div class="avatars">
      <div>
        <picture>
          <!-- <source
            type="image/webp"
            srcset={yodaw}
          /> -->
          <img src={rich} width=240 height=240 alt="Rich headshot">
        </picture>
        <h3>Rich</h3>
      </div>
      <div>
        <picture>
          <!-- <source
            type="image/webp"
            srcset={jarjarw}
          /> -->
          <img src={jan} width=240 height=240 alt="Jan headshot">
        </picture>
        <h3>Jan</h3>
      </div>
      
    </div>
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
        style="height: 44px; min-width: 180px; margin-top: 10px;"
      >
        <Label style="pointer-events: none">Work with us</Label>
      </Button>
    </div>
  </div>
</section>

<style lang="scss">
  .gutters {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 60px auto;

    @media (max-width: 1000px) {
      flex-direction: column-reverse;
    }
  }

  .avatars {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 40px auto;
    padding-right: 20px;
    box-sizing: border-box;

    @media (max-width: 1000px) {
      justify-content: center;
      width: 100%;
      padding-right: 0px;
      margin-bottom: 0;
      max-width: calc(100vw - 2em);
      overflow: hidden;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 180px;
        margin: 10px;
        height: auto;

        @media (max-width: 500px) {
          width: 140px;
          margin: 20px 5px 0;
        }
      }
    }
  }

  .text {
    max-width: 600px;
    width: 50%;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    p {
      margin-top: 0;
    }
  }
</style>
