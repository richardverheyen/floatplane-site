<script lang="ts">
  import Paper from "@smui/paper";
</script>

<section>
  <div id="products" />
  <div class="gutters">
    <h2 class="mdc-typography--headline2">The Services We Offer</h2>

    <ul>
      <li>
        <Paper>
          <h3 class="mdc-typography--headline2"></h3>
          <p class="mdc-typography--headline3">Web Application Development</p>
          <ul>
            <li>Full Stack development in your technology of choice</li>
            <li>Project lifecycle management</li>
            <li>Design first, test first development</li>
            <li>Measured KPIs</li>
          </ul>
        </Paper>
      </li>
      <li>
        <Paper>
          <h3 class="mdc-typography--headline2"></h3>
          <p class="mdc-typography--headline3">EDM Coding</p>
          <p>
            Our bread and butter. 
            We use our experience with automation and templating to deliver fully tested EDMs with fast turn around times.
          </p>
        </Paper>
      </li>
      <li>
        <Paper>
          <h3 class="mdc-typography--headline2"></h3>
          <p class="mdc-typography--headline3">Consulting Services</p>
          <ul>
            <li>Tech leads</li>
            <li>Team training</li>
            <li>Design first, test-driven development</li>
            <li>Measured KPIs</li>
          </ul>
        </Paper>
      </li>
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
