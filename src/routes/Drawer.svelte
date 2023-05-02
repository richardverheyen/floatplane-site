<script lang="ts">
  import { page } from "$app/stores";
  import Drawer, { Content, Header, Title, Subtitle } from "@smui/drawer";
  import Footer from "./Footer.svelte";
  import logo from "$lib/images/logo.svg";

  export let open = false;
  export let scrollIntoView: any;
</script>

<Drawer variant="modal" fixed={true} bind:open style="background: #f5f5f7">
  <Header>
    <a 
      style="display: flex"
      href="#top" on:click|preventDefault={scrollIntoView}>
      <img 
        id="drawer-logo" 
        class="visible"
        src={logo} 
        width=200 
        height=60 
        style="pointer-events: none"
        alt="Floatplane">  
    </a>
  </Header>
  <Content>
    <div class="gutters">
      {#if $page.url.pathname === "/"}
        <nav>
          <a href="#service" on:click|preventDefault={scrollIntoView}
            >What we do</a
          >
          <a href="#our-work" on:click|preventDefault={scrollIntoView}
            >Our Work</a
          >
          <a href="#contact" on:click|preventDefault={scrollIntoView}
            >Contact Us</a
          >
        </nav>
      {:else}
        <nav>
          <a href="/#service">What we do</a>
          <a href="/#our-work">Words that worked</a>
          <a href="/#contact">Contact us</a>
        </nav>
      {/if}
      <Footer />
    </div>
  </Content>
</Drawer>

<style lang="scss">
  @import "../theme/_colors";

  #drawer-logo {
    padding-right: 28px;
    padding-top: 20px;
    filter: invert(1);
    transition: opacity ease 200ms;

    &.hidden {
      opacity: 0;
    }
}

  .gutters {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  nav {
    width: 100%;
    margin-bottom: auto;

    > a,
    > a:link,
    > a:visited {
      display: block;
      color: $primary;
      text-decoration: none;
      line-height: 40px;
      text-transform: capitalize;

      @media (min-width: 768px) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
