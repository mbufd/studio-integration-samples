
<template>
    <StudioExample />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StudioExample from "./components/StudioExample/StudioExample.vue";

// Import the Studiö elements
import "studio-web-components";

export default defineComponent({
  name: "App",
  components: {
    StudioExample,
  },
});
</script>

<!-- Import Studiö CSS files -->
<style src="studio-web-components/css/studio-css.css"></style>
<style src="studio-web-components/css/studio-light.css"></style>
<style src="studio-web-components/css/studio-dark.css"></style>
<style src="studio-web-components/css/studio-scale-100.css"></style>
<style src="studio-web-components/css/studio-scale-125.css"></style>

<style>
/* Load the prefered font for the Studiö Web Components */
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@600&display=swap');

body {
    /* Use Studiö paper and ink */
    background-color: var(--studio-paper-30);
    color: var(--studio-ink-30);
}

#app {
  margin-top: var(--studio-size-1b);
}
</style>
