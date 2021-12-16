import { Component } from '@angular/core';
import { StudioSliderValueEvent } from 'studio-web-components/slider/slider-events';
import { Theming } from 'studio-web-components/helpers/theming';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theming = new Theming();
  // Data for studio-slider elements using *ngFor
  sliders: any[] = [
    { value: 0 },
    { value: 25 },
    { value: 50 },
    { value: 75 }
  ];

  // Update the slider data when the slider value changes
  onSliderValue(event: Event, sliderIndex: any) {
    const value: number = (event as StudioSliderValueEvent).studio.value;
    this.sliders[sliderIndex].value = value;
  }
}
