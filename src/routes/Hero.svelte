<script>
  import logo from "$lib/images/logo.svg";
</script>

<section id="top">
  <div class="gutters">
    <picture>
      <source
        type="image/webp"
        srcset={logo}
      />
      <img id="hero-logo" src={logo} width=400 height=300 alt="Floatplane">
    </picture>
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
    background: linear-gradient(#20717D, #569F9E, #E7C29F);

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
