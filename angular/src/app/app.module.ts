// Use CUSTOM_ELEMENTS_SCHEMA for integration of Web Components
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Import the Studiö Web Components
import 'studio-web-components';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule ],
  providers: [],
  schemas: [ 
    // Use CUSTOM_ELEMENTS_SCHEMA for integration of Web Components
    CUSTOM_ELEMENTS_SCHEMA 
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
