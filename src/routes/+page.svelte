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
  <title>Floatplane | Launch Confidently</title>
  <meta
    name="description"
    content="Captivating, conversion-driven copy that turns browsers into buyers using words that work."
  />
  <meta property="og:title" content="Good Call Copywriting | Words that Work" />
  <meta name="theme-color" content="{y < 700 ? "#20717D" : "#FFFFFF"}" />
</svelte:head>

<svelte:window bind:scrollY={y} />

<Hero />
<About />
<Service />
<Products />
<OurWork />
<!-- <Testimonials /> -->
<Contact />
