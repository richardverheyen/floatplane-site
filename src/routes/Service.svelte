<script lang="ts">
  import coding from "$lib/images/coding.jpg";
</script>

<section style="background-image: url({coding})">
  <div id="service" />
  <div class="gutters">
    <h2 class="mdc-typography--headline2">We make it look easy.</h2>
    <p>We'll deliver your end to end web solution <br/><u>on time</u> and <u>on budget</u>. When we're done, <br/>we can even <u>train your team</u> to maintain it.</p>
  </div>
</section>

<style lang="scss">
  section {
    position: relative;
    background-size: cover;
    background-position: center;
    color: white;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    max-width: 1964px;

    #service {
      position: absolute;
      top: -80px;
    }

  }
  .gutters {
    display: flex;
    flex-direction: column;
  }
  h2 {
    margin-top: 60px;
    margin-bottom: 40px;
    margin-right: auto;
  }
  p {
    display: block;
    text-align: right;
    margin-left: auto;
    font-size: 1.4em;
    line-height: 120%;
    margin-bottom: 60px;

    @media (max-width: 500px) {
      br {
        display: none;
      }
    }
  }

  
</style>
