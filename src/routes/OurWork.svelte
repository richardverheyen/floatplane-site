<script>
  import Card, {
    Content,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from "@smui/card";

  // import Badge from "@smui-extra/badge";
  // import Button, { Label } from "@smui/button";
  import IconButton, { Icon } from "@smui/icon-button";

  // import Dialog, {
  //   Title,
  //   Content as DialogContent,
  //   Actions as DialogActions,
  // } from "@smui/dialog";

  let open = false;

  import { analytics } from "$lib/firebase";
  import { logEvent } from "firebase/analytics";

  import ember from "$lib/images/ember.svg";
  import rails from "$lib/images/rails.png";
  import postgres from "$lib/images/postgres.svg";
  import interflux from "$lib/images/interflux.jpg";
  import ndis from "$lib/images/ndis.jpg";
  import lwc from "$lib/images/lwc.png";
  import salesforce from "$lib/images/salesforce.png";
  import w3c from "$lib/images/w3c.png";
  import react from "$lib/images/react.png";
  import mulesoft from "$lib/images/mulesoft.png";
  import poncho from "$lib/images/poncho.png";

  import banner from "$lib/images/banner.webp";
  import bannerj from "$lib/images/bannerj.jpg";

  import entry from "$lib/images/work/2/entry.jpg";
  import entryw from "$lib/images/work/2/entry.webp";
  import livingRoom from "$lib/images/work/2/living-room.jpg";
  import livingRoomw from "$lib/images/work/2/living-room.webp";

  let work = [{
    title: "Interflux Electronics",
    technologies: [
      ember,
      rails,
      postgres
    ],
    example: "... designed with luxury and space in mind. The entry will immediately leave you in awe with 9-foot ceilings and a welcoming private lounge.  The home then opens into a large, open plan kitchen, dining and family room that flows seamlessly ...",
    lines: [
      "Welcome to the perfect lifestyle home! Positioned in a stunning country location and within walking distance to local amenities, this recently built four bedroom house is brimming with luxurious features. Showcasing a large 598sqm block with double garage that includes exterior and interior roller door access, this property offers convenient everyday living.",
      "Inside, this home has been designed with luxury and space in mind. The entry will immediately leave you in awe with 9-foot ceilings and a welcoming private lounge.  The home then opens into a large, open plan kitchen, dining and family room that flows seamlessly onto the gorgeous alfresco area - perfect for long lunches and BBQ's! Further features include gas central heating, and a carpeted rumpus room ensuring plenty of space for everyone to play.",
      "The master bedroom includes an ensuite for the added convenience of grown ups, while all bedrooms have comfy carpet underfoot.",
      "This property is just a stone's throw from the centre of town, where you will find restaurants, cafes and the local shops. Just a short walk away lies the Bannockburn P-12 College as well as numerous parklands and public transport routes to ensure you are connected in all directions!",
      "If an amazing house combined with size, convenience and modern creature comforts is what you're after - then look no further! This home just won't last long on the market - call today to book your inspection!"
    ],
    images: [
      [
        // {srcset: frontw, type: "image/webp"},
        {srcset: interflux, type: "image/jpg"},
      ],
      // [
      //   {srcset: kitchenw, type: "image/webp"},
      //   {srcset: kitchen, type: "image/jpg"},
      // ]
    ]
  }, {
    title: "NDIS",
    technologies: [
      w3c,
      lwc,
      salesforce
    ],
    example: "... designed with luxury and space in mind. The entry will immediately leave you in awe with 9-foot ceilings and a welcoming private lounge.  The home then opens into a large, open plan kitchen, dining and family room that flows seamlessly ...",
    lines: [
      "Welcome to the perfect lifestyle home! Positioned in a stunning country location and within walking distance to local amenities, this recently built four bedroom house is brimming with luxurious features. Showcasing a large 598sqm block with double garage that includes exterior and interior roller door access, this property offers convenient everyday living.",
      "Inside, this home has been designed with luxury and space in mind. The entry will immediately leave you in awe with 9-foot ceilings and a welcoming private lounge.  The home then opens into a large, open plan kitchen, dining and family room that flows seamlessly onto the gorgeous alfresco area - perfect for long lunches and BBQ's! Further features include gas central heating, and a carpeted rumpus room ensuring plenty of space for everyone to play.",
      "The master bedroom includes an ensuite for the added convenience of grown ups, while all bedrooms have comfy carpet underfoot.",
      "This property is just a stone's throw from the centre of town, where you will find restaurants, cafes and the local shops. Just a short walk away lies the Bannockburn P-12 College as well as numerous parklands and public transport routes to ensure you are connected in all directions!",
      "If an amazing house combined with size, convenience and modern creature comforts is what you're after - then look no further! This home just won't last long on the market - call today to book your inspection!"
    ],
    images: [
      [
        // {srcset: frontw, type: "image/webp"},
        {srcset: ndis, type: "image/jpg"},
      ],
      // [
      //   {srcset: kitchenw, type: "image/webp"},
      //   {srcset: kitchen, type: "image/jpg"},
      // ]
    ]
  }, {
    title: 'Poncho Car Insurance',
    technologies: [
      react,
      mulesoft,
      salesforce
    ],
    example: "... includes a large and inviting dining room, next to a private living area which boasts both a fireplace and split-system airconditioning. Natural light pours in through the gorgeous lited doors that provide access to the courtyard.",
    lines: [
      "Set in a classic, columned brick facade, and superbly tucked away in the heart of one of Melbourne's most desirable suburbs, this classic two-bedroom apartment is perfect for the discerning buyer seeking both luxury and value.",
      "Renovated for contemporary living, the property features a well-appointed kitchen with stainless steel Bosch appliances, granite benchtops, and plenty of storage. It also enjoys both a front courtyard and a private, leafy back patio with lush turf for alfresco dining and entertaining.",
      "The home also includes a large and inviting dining room, next to a private living area which boasts both a fireplace and split-system airconditioning. Natural light pours in through the gorgeous lited doors that provide access to the courtyard.",
      "Superbly located in on the country quiet Cambridge Street, with proximity to elite schools, restaurants, shops and transport links, this superb package ticks all the boxes.",
      "This is a home that truly has it all - location, style, and luxury - and it's waiting to welcome you."
    ],
    images: [
      [
        // {srcset: entryw, type: "image/webp"},
        {srcset: poncho, type: "image/jpg"},
      ],
      // [
      //   {srcset: livingRoomw, type: "image/webp"},
      //   {srcset: livingRoom, type: "image/jpg"},
      // ]
    ]
  }];

  let activeWork = 0;

  // function toggleOpen() {
  //   open = !open;

  //   logEvent(analytics, 'select_content', {
  //     content_type: 'article',
  //     content_id: activeWork
  //   });
  // }
  function nextExample() {
    // logEvent(analytics, 'search', {
    //   value: "our-work"
    // });

    if (activeWork === work.length - 1) {
      activeWork = 0;
    } else {
      activeWork = activeWork + 1;
    }
  }
</script>

<section>
  <div id="our-work"></div>
  <picture>
    <source type="image/webp" srcset={banner} />
    <img src={bannerj} alt="A person working at a computer" />
  </picture>

  <main>
    <div class="gutters">
      <div class="left">
        <h2 class="mdc-typography--headline2">Work we're <b>proud</b> of</h2>
        <p class="about mdc-typography--body1">
          We've been around for a while, working behind the scenes to build fantastic 
          user experiences for people all over the world. Here are some of the projects
          that our team has been instrumental in creating.
        </p>
      </div>
      <div class="right">
        <Card style="max-width: 400px;margin: auto;">
          <Media class="card-media-16x9" style="border-top-left-radius: 4px; border-top-right-radius: 4px; overflow: hidden;" aspectRatio="16x9">
            <MediaContent
              style="background-image: url({work[activeWork].images[0][0].srcset}); background-size: cover;"
            />
          </Media>
          <Content>
            <IconButton on:click={nextExample} aria-label="Next work" style="position: absolute;top: -10px;right: -10px;background: white;border-radius: 50%;">
              <Icon class="material-icons" style="color: black">redo</Icon>
            </IconButton>
            <h2 class="mdc-typography--headline6" style="margin: 0 0 10px;">
              {work[activeWork].title}
            </h2>
            <p class="mdc-typography--body1" style="margin: 0">
              {work[activeWork].example}
            </p>
          </Content>
          <Actions>
            <!-- <ActionButtons>
              <Button color="secondary" on:click={toggleOpen}>
                <Label>Show me</Label>
              </Button>
            </ActionButtons> -->
            <ActionIcons>
              {#each work[activeWork].technologies as tech}
                <!-- <IconButton
                  style="position: relative;margin: 0 0.5em"
                  size="normal"
                > -->
                  <img src={tech} alt="Property" style="width: auto; height: 40px; max-width: 55px;margin: 0.5em"/>
                <!-- </IconButton> -->
              {/each}
            </ActionIcons>
          </Actions>
        </Card>
      </div>
    </div>
  </main>
</section>

<!-- <Dialog
  bind:open
  aria-labelledby="large-scroll-title"
  aria-describedby="large-scroll-content"
  surface$style="width: 850px; max-width: calc(100vw - 32px);"
>
  <Title id="large-scroll-title">Example Copy</Title>
  <DialogContent id="large-scroll-content" style="padding-top: 40px;padding-bottom: 40px;">
    <h3 class="mdc-typography--heading3">{work[activeWork].title}</h3>

    {#each work[activeWork].images as image}
      <picture>
        {#each image as src}
          <source type={src.type} srcset={src.srcset} />
        {/each}

        <img src={image[0].srcset} alt="Property" style="max-width: 100%;margin-bottom: 20px" />
      </picture>
    {/each}

    {#each work[activeWork].lines as p}
      <p class="mdc-typography--body1">{p}</p>
    {/each}
  </DialogContent>

  <DialogActions>
    <Button action="accept">
      <Label>Done</Label>
    </Button>
  </DialogActions>
</Dialog> -->

<style lang="scss">
  section {
    position: relative;
    overflow: hidden;

    div#our-work {
      position: absolute;
      top: -80px;
    }

    picture {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: auto;
      max-width: 1964px;
      height: 100%;
      background-color: black;
      user-select: none;
      pointer-events: none;
      overflow: hidden;

      @media (min-width: 1601px) {
        width: 100%;
        height: auto;
      }

      img {
        height: 100%;
        min-height: 100%;
        min-width: 100%;
        width: auto;
        filter: blur(2px);

        @media (min-width: 1601px) {
          width: 100%;
          height: auto;
        }
      }
    }

    main {
      position: relative;

      .gutters {
        display: flex;
        height: 100%;

        @media (max-width: 1000px) {
          flex-direction: column;
          align-items: center;
        }

        > div {
          &.left {
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media (min-width: 1001px) {
              width: 60%;
              padding-right: 2em;
            }

            @media (max-width: 1000px) {
              text-align: center;
              max-width: 600px;
              margin-top: 60px;
            }

            h2 {
              margin: 0;
            }
            p {
              margin-bottom: 0;
            }
          }

          &.right {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            // min-height: 450px;
            padding: 60px 0;

            @media (min-width: 1001px) {
              width: 40%;
            }
          }
        }
      }
    }
  }
</style>
