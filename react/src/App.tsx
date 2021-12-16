import React from "react";
import update from 'immutability-helper';

import './App.css';
import { StudioLabel, StudioAxis, StudioPad, StudioSlider }  from 'studio-web-components/studio-react';
import { StudioSliderValueEvent } from 'studio-web-components/slider/slider-events';
import { Theming } from 'studio-web-components/helpers/theming';

interface iSliderData { readonly id: number, readonly value: number };

export default class App extends React.Component {
  theming = new Theming();

  constructor(props: any) {
    super(props);
    this.state = {
      sliders: [
        { id: 0, value: 0 },
        { id: 1, value: 25 },
        { id: 2, value: 50 },
        { id: 3, value: 75 },
      ]
    };
  }

  get sliders(): Readonly<iSliderData[]> { return (this.state as any).sliders; }

  onSliderValue(event: Event, id: number) {
    const studioSliderEvent = (event as StudioSliderValueEvent);
    const newValue = studioSliderEvent.studio.value;
    const newState = update(this.state, {
      sliders: {[id]: { value: { $set: newValue}}}
    });
    this.setState(newState);
  }

  render() {
    return (
      <div id="app" className="App">
        <div className="studio-column">
          <StudioLabel>Studiö Web Components</StudioLabel>
          <StudioLabel>with React</StudioLabel>
          <div className="studio-row">
          <StudioPad className="button" onClick={() => this.theming.toggleTheme()}>Theme<div slot="secondary">Toggle</div></StudioPad>
          <StudioPad className="button" onClick={() => this.theming.toggleScale()}>Scale<div slot="secondary">Toggle</div></StudioPad>
          </div>
          <div className="studio-row">
            {this.sliders.map((slider) => {
              return (
                <StudioSlider value={slider.value} end-value="100" step={1} key={slider.id}
                  studioSliderValue={e => this.onSliderValue(e, slider.id)}>
                  <StudioAxis fit slot="cursor-range"></StudioAxis>
                  <StudioLabel slot="label-start" className="slider-label">{slider.value}</StudioLabel>
                </StudioSlider>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}