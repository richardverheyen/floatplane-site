<script lang="ts">
  import IconButton, { Icon } from '@smui/icon-button';

  export let open = false;
  export let toggleDrawer:any;
</script>

<IconButton on:click={toggleDrawer} toggle bind:pressed={open} aria-label="Menu">
  <Icon class="material-icons" on>close</Icon>
  <Icon class="material-icons">menu</Icon>
</IconButton>