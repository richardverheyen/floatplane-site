<script lang="ts">
  import { AppContent, Scrim } from "@smui/drawer";
  import { Toaster } from "svelte-french-toast";
  import Header from "./Header.svelte";
  import Drawer from "./Drawer.svelte";
  import Footer from "./Footer.svelte";

  let open = false;

  function toggleDrawer() {
    if (open) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
    open = !open;
  }
  function scrollIntoView({ target }: { target: any }) {
    toggleDrawer();

    setTimeout(() => {
      const el = document.querySelector(target.getAttribute("href"));
      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
      });
    }, 400);
  }
</script>

<div class="app">
  <Drawer bind:open {scrollIntoView} />

  <Scrim fixed={true} on:click={toggleDrawer} />

  <AppContent class="app-content">
    <Header bind:open {toggleDrawer} />

    <main>
      <slot />
    </main>

    <Footer />
  </AppContent>

  <Toaster />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
</style>
