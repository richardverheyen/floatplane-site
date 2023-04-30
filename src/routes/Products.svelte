<script lang="ts">
  import Paper from "@smui/paper";
</script>

<section>
  <div id="products" />
  <div class="gutters">
    <h2 class="mdc-typography--headline2">The Product We Offer</h2>

    <ul>
      <li>
        <Paper>
          <h3 class="mdc-typography--headline2">$100</h3>
          <p class="mdc-typography--headline3">Residential Listing Copy</p>
          <ul>
            <li>24 hour turnaround</li>
            <li>Copy for three elements: online, print + signboard</li>
            <li>
              Easy to use information template to submit your listings and
              photos
            </li>
            <li>Written to suit your brand, style, and goals</li>
            <li>Edits completed within an hour (during business hours)</li>
            <li>Unlimited proofreading</li>
            <li>Final version in a Word or PDF Document</li>
          </ul>
        </Paper>
      </li>
      <!-- <li style="opacity: 0.4">
        <Paper>
          <h3 class="mdc-typography--headline2">Coming Soon</h3>
          <p class="mdc-typography--headline3">"Everything" Copy</p>
          <p>
            Get us the details and we'll deliver everything you'll need to sell
            a house in one package. Includes online listing, signage and brochure.
          </p>
        </Paper>
      </li>
      <li style="opacity: 0.4">
        <Paper>
          <h3 class="mdc-typography--headline2">Coming Soon</h3>
          <p class="mdc-typography--headline3">"Everything" + Site Visit</p>
          <p>
            In some cases a property will require a site visit to learn more
            about it's unique story. This can take a little longer to book in.
          </p>
        </Paper>
      </li> -->
    </ul>
  </div>
</section>

<style lang="scss">
  section {
    position: relative;
    margin-bottom: 60px;

    div#products {
      position: absolute;
      top: -80px;
    }

    div.gutters {
      h2 {
        margin-top: 60px;
        margin-bottom: 0;
        text-align: center;
      }

      > ul {
        display: flex;
        justify-content: center;
        width: calc(100% + 20px);
        padding: 0;
        margin: 0 0 0 -20px;
        @media (max-width: 1000px) {
          flex-direction: column;
          align-items: center;
        }

        > li {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: calc(100% / 2 - 20px);
          margin-top: 40px;
          margin-left: 20px;
          text-align: center;
          height: 100%;

          @media (max-width: 1000px) {
            flex-wrap: wrap;
            width: calc(100% / 1 - 20px);
            max-width: 440px;
          }

          h3 {
            margin: 20px 0;
          }

          ul {
            display: block;
            padding-left: 20px;

            li {
              text-align: left;

              &:not(:last-child) {
                padding-bottom: 5px;
              }
            }
          }
        }
      }
    }
  }
</style>
