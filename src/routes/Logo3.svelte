<script>
  export let alt = false;
</script>
<div>
  <h1 class={alt ? "white" : ""}>Good Call Copywriting</h1>
  <h2 class="tagline {alt ? "white" : ""}">Words that work</h2>
</div>

<style lang="scss">
  @import "../theme/colors";

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;
    pointer-events: none;

    @media (max-width: 450px) {
      align-items: flex-start;
    }

    h1 {
      font-family: "Outfit", sans-serif;
      font-weight: 700;
      font-size: 1.4em;
      line-height: 100%;
      text-transform: uppercase;
      display: block;
      padding-bottom: 0.2em;
      margin: 0;
      color: black;
      transition: ease 400ms color;

      &.white {
        color: white;
      }

      @media (max-width: 450px) {
        text-align: left;
      }
    }
    h2 {
      font-family: "Outfit", sans-serif;
      font-weight: 700;
      font-size: 0.8em;
      line-height: 100%;
      text-transform: uppercase;
      padding: 0;
      margin: 0;
      color: $secondary;
      transition: ease 400ms color;

      &.white {
        color: white;
      }

      @media (max-width: 450px) {
        text-align: left;
      }
    }
  }
</style>
