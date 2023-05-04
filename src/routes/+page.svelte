<script>
  import Hero from "./Hero.svelte";
  import About from "./About.svelte";
  import Service from "./Service.svelte";
  import Products from "./Products.svelte";
  import OurWork from "./OurWork.svelte";
  // import Testimonials from "./Testimonials.svelte";
  import Contact from "./Contact.svelte";

  import { onMount } from "svelte";
  import {
    initialiseFirebase,
    initialiseAnalytics,
    initialiseFunctions,
  } from "$lib/firebase";

  onMount(() => {
    initialiseFirebase();
    initialiseAnalytics();
    initialiseFunctions();
  });

	let y = 0;
</script>

<svelte:head>
  <meta name="theme-color" content="{y < 350 ? "#20717D" : "#FFFFFF"}" />
</svelte:head>

<svelte:window bind:scrollY={y} />

<Hero />
<About />
<Service />
<Products />
<OurWork />
<!-- <Testimonials /> -->
<Contact />
