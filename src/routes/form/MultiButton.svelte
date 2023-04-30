<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import Textfield from "@smui/textfield";
  import SegmentedButton, { Segment } from "@smui/segmented-button";
  import { Label } from "@smui/common";

  export let label: string;
  export let choices: any;
  export let selected: any;
  export let selectedCustom: any;
</script>

<fieldset>
  <p>{label}</p>
  <SegmentedButton
    segments={[...choices, "Other"]}
    let:segment
    singleSelect
    bind:selected
    style="display: flex"
  >
    <Segment
      {segment}
      type="button"
      style="height: 40px; font-size: 16px; display: inline-flex; justify-content: center;"
    >
      <Label>{segment}</Label>
    </Segment>
  </SegmentedButton>
</fieldset>

{#if selected === "Other"}
  <fieldset in:slide out:slide={{ delay: 200 }}>
    <div in:fade={{ delay: 200 }} out:fade>
      <Textfield
        variant="outlined"
        bind:value={selectedCustom}
        label="{label} Custom"
        placeholder="Your answer"
        style="width: 100%;"
      />
    </div>
  </fieldset>
{/if}

<style>
  p {
    margin: 0;
  }
  fieldset {
    display: block;
    margin-top: 40px;
  }
</style>
