<script>
  import Logo from "./Logo.svelte";
  import logo from "$lib/images/logo.svg";
  import cloud from "$lib/images/cloud-1.svg";
</script>

<section 
  id="top"
  style="background: calc(50vw - 900px) 30% / 700px no-repeat url({cloud}), calc(50vw + 40px) 70% / 800px no-repeat url({cloud}), linear-gradient(#20717D, #569F9E, #E7C29F);">
  <div class="gutters">
    <Logo />
  </div>
</section>

<style lang="scss">
  @import "../theme/_colors";

  section {
    position: relative;
    width: 100%;
    min-height: 700px;
    display: flex;
    align-items: center;
    overflow: hidden;
    // background: linear-gradient(#20717D, #569F9E, #E7C29F);

    > div.gutters {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      #hero-logo {
        padding-right: 50px;

        @media (max-width: 500px) {
          width: 240px;
          height: 200px;
          padding-right: 30px;
        }
      }
    }
  }
</style>
