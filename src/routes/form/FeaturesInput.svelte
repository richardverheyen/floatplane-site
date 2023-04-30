<script lang="ts">
  import Chip, { Set, LeadingIcon, Text } from '@smui/chips';

  export let features: any;

  const featuresChoices = [
    "Balcony",
    "Dishwasher",
    "Intercom",
    "Study",
    "Built-in wardrobes",
    "Reverse-cycle air con",
    "Air conditioning",
    "Floorboards",
    "Remote Garage",
    "Split-system heating",
    "Swimming pool",
    "Swimming pool - in-ground",
    "Swimming pool - above-ground",
    "Kitchen",
    "Outdoor spa",
    "HVAC",
    "Storage cage",
    "Wheelchair access",
    "Elevator",
    "Built-in robes"
  ];

  const icons = {
    ac_unit: ["air conditioning", "air con"],
    dishwasher_gen: ["dishwasher"],
    pool: [],
    balcony: [],
    garage: [],
    local_parking: ["parking"],
    hot_tub: ["spa", "outdoor spa"],
    contact_phone: ["intercom"],
    kitchen: [],
    checkroom: ["wardrobes", "built-in wardrobes", "robes"],
    auto_stories: ["library", "study"],
    hvac: ["heating"],
    shelves: ["storage"],
    accessible: ["wheelchair"],
    elevator: [],
  }

  function getIconByChip(object, value) {
    return Object.keys(object).find(key => object[key].includes(value) || object[key].find(val => value.includes(val)) || value.includes(key));
  }

</script>

<fieldset>
  <p>Property Features</p>
  <Set chips={featuresChoices.sort()} let:chip filter bind:selected={features} style="margin-left: -8px; width: calc(100% + 16px)">
    <Chip {chip} touch style="overflow: hidden">
      <LeadingIcon class="material-symbols-outlined">
        {getIconByChip(icons, chip.toLowerCase()) || "check_box_outline_blank"}
      </LeadingIcon>
      <Text>{chip}</Text>
    </Chip>
  </Set>
</fieldset>

<style>
  p {
    margin: 0;
  }
  fieldset {
    display: block;
    margin-top: 40px;
  }
</style>
