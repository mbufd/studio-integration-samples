import { defineComponent } from "vue";
import { StudioSliderValueEvent } from "studio-web-components/slider/slider-events";
import { Theming } from "studio-web-components/helpers/theming";

export default defineComponent({
  name: "StudioExample",
  data() {
    return {
      theming: new Theming(),
      sliders: [
        { id: 0, value: 0 },
        { id: 1, value: 25 },
        { id: 2, value: 50 },
        { id: 3, value: 75 },
      ]
    };
  },
  methods: {
    onSliderValue(ev: Event, sliderIndex: number) {
      const sliderEvent = ev as StudioSliderValueEvent;
      this.sliders[sliderIndex].value = sliderEvent.studio.value;
    },
  }
});