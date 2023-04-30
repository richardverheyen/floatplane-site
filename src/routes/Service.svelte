<script lang="ts">
  import livingRoomw from "$lib/images/services/dark-living-room.webp";
</script>

<section style="background-image: url({livingRoomw})">
  <div id="service" />
  <div class="gutters">
    <h2 class="mdc-typography--headline2">We make it look easy.</h2>
    <p><u>Great</u> real estate ad copy <br/>should be clear, concise, and persuasive. <br/>Our team writes <b>SEO rich</b> copy <br/>based on our extensive <br/>experience in the real estate industry.</p>
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
  }
</style>
