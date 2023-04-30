<script lang="ts">
  import { page } from "$app/stores";
  import Ripple from "@smui/ripple";
  import Hamburger from "./Hamburger.svelte";
  import logo from "$lib/images/logo.svg";

  let scrollY: number;
  let heroLogoMidPoint = 350;

  export let open: boolean = false;
  export let toggleDrawer: any;

  function scrollIntoView({ target }: { target: any }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<svelte:window bind:scrollY />

{#if $page.url.pathname === "/"}
  <header class={scrollY > heroLogoMidPoint ? "opaque" : ""}>
    <div class="gutters main">
      <a
        href="#top"
        style="text-decoration: none"
        on:click|preventDefault={scrollIntoView}
      >
        <img 
          id="nav-logo" 
          class={scrollY > heroLogoMidPoint ? "visible" : "hidden"}
          src={logo} 
          width=200 
          height=60 
          alt="Floatplane">
      </a>

      <nav class={scrollY > heroLogoMidPoint ? "black" : "white"}>
        <a
          href="#service"
          on:click|preventDefault={scrollIntoView}
          use:Ripple={{ surface: true }}>What we do</a
        >
        <a
          href="#our-work"
          on:click|preventDefault={scrollIntoView}
          use:Ripple={{ surface: true }}>Words that worked</a
        >
        <a
          href="#contact"
          on:click|preventDefault={scrollIntoView}
          use:Ripple={{ surface: true }}>Contact Us</a
        >
      </nav>
      <div class="toggle {scrollY > heroLogoMidPoint ? 'black' : 'white'}">
        <Hamburger bind:open {toggleDrawer} />
      </div>
    </div>
  </header>
{:else}
  <header class="opaque">
    <div class="gutters main">
      <a href="/" style="text-decoration: none">
        <Logo alt={false} />
      </a>

      <nav class="black">
        <a href="/#service" use:Ripple={{ surface: true }}>What we do</a>
        <a href="/#our-work" use:Ripple={{ surface: true }}>Words that worked</a
        >
        <a href="/#contact" use:Ripple={{ surface: true }}>Contact us</a>
      </nav>
      <div class="toggle black">
        <Hamburger bind:open {toggleDrawer} />
      </div>
    </div>
  </header>
{/if}

<style lang="scss">
  @import "../theme/_colors";

  header {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    transition: ease 400ms background-color;

    &.opaque {
      background-color: rgba($background, 0.8);
    }

    .main {
      box-sizing: border-box;
      width: 100%;
      max-width: 88rem;
      padding: 0 1rem;
      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 767px) {
        justify-content: center;
      }

      @media (max-width: 450px) {
        justify-content: flex-start;
      }

      #nav-logo {
        padding-right: 28px;
        padding-top: 10px;
        filter: invert(1);
        transition: opacity ease 200ms;

        &.hidden {
          opacity: 0;
        }
      }

      nav {
        display: flex;
        align-items: center;

        @media (max-width: 767px) {
          display: none;
        }

        color: black;

        &.white {
          > a,
          > a:link,
          > a:visited {
            color: white;
          }
        }

        > a,
        > a:link,
        > a:visited {
          display: inline-block;
          color: $primary;
          padding: 0 0.5em;
          margin-left: 0.5em;
          text-decoration: none;
          font-weight: 500;
          line-height: 40px;
          overflow: hidden;
          border-radius: var(--mdc-shape-small, 4px);
          text-transform: capitalize;

          &:last-child {
            margin-right: -0.5em;
          }

          @media (min-width: 768px) {
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    .toggle {
      position: absolute;
      right: 1em;

      &.white {
        filter: invert(1);
      }

      @media (min-width: 768px) {
        display: none;
      }

      @media (max-width: 450px) {
        position: static;
        margin-left: auto;
      }
    }
  }
</style>
