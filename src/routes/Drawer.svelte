<script lang="ts">
  import { page } from "$app/stores";
  import Drawer, { Content, Header, Title, Subtitle } from "@smui/drawer";
  import Footer from "./Footer.svelte";
  import Logo3 from "./Logo3.svelte";

  export let open = false;
  export let scrollIntoView: any;
</script>

<Drawer variant="modal" fixed={true} bind:open style="background: #f5f5f7">
  <Header>
    <Logo3 />
  </Header>
  <Content>
    <div class="gutters">
      {#if $page.url.pathname === "/"}
        <nav>
          <a href="#service" on:click|preventDefault={scrollIntoView}
            >What we do</a
          >
          <a href="#our-work" on:click|preventDefault={scrollIntoView}
            >Words that worked</a
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
