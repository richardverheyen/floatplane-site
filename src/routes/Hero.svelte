<script>
  import mobile from "$lib/images/hero/hero-mobile.jpg";
  import mobilew from "$lib/images/hero/hero-mobile.webp";
  import mobile1 from "$lib/images/hero/hero-mobile1.jpg";
  import mobile1w from "$lib/images/hero/hero-mobile1.webp";
  import desktop from "$lib/images/hero/hero-desktop.jpg";
  import desktopw from "$lib/images/hero/hero-desktop.webp";
  import laptop from "$lib/images/hero/hero-laptop.jpg";
  import laptopw from "$lib/images/hero/hero-laptop.webp";
  import desktop1 from "$lib/images/hero/hero-desktop1.jpg";
  import desktopw1 from "$lib/images/hero/hero-desktop1.webp";
  import laptop1 from "$lib/images/hero/hero-laptop1.jpg";
  import laptopw1 from "$lib/images/hero/hero-laptop1.webp";

  import underline from "$lib/images/underline.png";
</script>

<section id="top">
  <picture>
    <source type="image/webp" srcset={mobilew} media="(min-resolution: 50dpi) and (max-width: 500px)" />
    <source type="image/jpg" srcset={mobile} media="(min-resolution: 50dpi) and (max-width: 500px)" />
    <source type="image/webp" srcset={mobile1w} media="(max-width: 500px)" />
    <source type="image/jpg" srcset={mobile1} media="(max-width: 500px)" />
    <source
      type="image/webp"
      srcset={desktopw}
      media="(min-resolution: 50dpi) and (min-width: 1465px)"
    />
    <source
      type="image/webp"
      srcset={laptopw}
      media="(min-resolution: 50dpi) and (max-width: 1464px)"
    />
    <source
      type="image/jpg"
      srcset={desktop}
      media="(min-resolution: 50dpi) and (min-width: 1465px)"
    />
    <source
      type="image/jpg"
      srcset={laptop}
      media="(min-resolution: 50dpi) and (max-width: 1464px)"
    />
    <source type="image/webp" srcset={desktopw1} media="(min-width: 1465px)" />
    <source type="image/webp" srcset={laptopw1} media="(max-width: 1464px)" />
    <source type="image/jpg" srcset={desktop1} media="(min-width: 1465px)" />
    <source type="image/jpg" srcset={laptop1} media="(max-width: 1464px)" />

    <img src={desktop1} alt="A person working at a computer" />
  </picture>
  <div class="gutters">
    <h2 class="mdc-typography--headline1">
      <i>Captivating, <br />Conversion-Driven Copy</i>
    </h2>
    <h2 class="mdc-typography--headline2">
      That turns browsers<br /> into buyers
    </h2>
    <h2 class="mdc-typography--headline2">
      Using <span style="background-image: url({underline})"
        >Words that Work</span
      >
    </h2>
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
    // background: #09110e;


    &::before,
    img,
    picture {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 1964px;
      height: 100%;
      margin: auto;
      width: auto;
      user-select: none;
      pointer-events: none;
    }


    &::before {
      content: "";
      background: #09110e;
      width: 1964px;
    }

    img {
      mask-image: linear-gradient(rgba(#000, 0.3), #000 30%, #000);
      -webkit-mask-image: linear-gradient(rgba(#000, 0.3), #000 30%, #000);

      @media (max-width: 500px) {
        mask-image: linear-gradient(rgba(#000, 0.3), rgba(#000, 0.8) 30%, rgba(#000, 0.8));
        -webkit-mask-image: linear-gradient(rgba(#000, 0.3), rgba(#000, 0.8) 30%, rgba(#000, 0.8));
      }
    }

    > div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      @media (min-width: 1001px) {
        position: absolute;
        top: 50%;
        left: 35%;
        transform: translate(-50%, -50%);
        height: calc(100% - 100px);
        width: 100%;
      }

      h2 {
        font-weight: 400;
        line-height: 100%;
        text-align: center;
        margin: 0.2em 0;

        &:nth-child(1) {
          font-size: 4.5em;
          color: $surface;

          @media (max-width: 800px) {
            font-size: 9vw;
          }

          @media (max-width: 440px) {
            font-size: 2.5em;
          }
        }

        &:nth-child(2) {
          font-size: 3.2em;
          text-transform: uppercase;
          color: $secondary-light;

          @media (max-width: 640px) {
            font-size: 8vw;
          }

          @media (max-width: 440px) {
            font-size: 2.2em;
          }
        }

        &:nth-child(3) {
          color: $surface;

          > span {
            padding-bottom: 26px;
            padding-right: 2px;
            background-size: 106%;
            background-repeat: no-repeat;
            background-position: bottom;
            color: black;
            filter: invert(1);
          }
        }
      }
    }
  }
</style>
