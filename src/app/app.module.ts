import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CezarComponent } from './views/cezar/cezar.component';
import { PolybiusComponent } from './views/polybius/polybius.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CezarFormComponent } from './views/cezar/cezar-form/cezar-form.component';
import { PolybiusFormComponent } from './views/polybius/polybius-form/polybius-form.component';
import { HomophonicComponent } from './views/homophonic/homophonic.component';
import { HomophonicFormComponent } from './views/homophonic/homophonic-form/homophonic-form.component';
import { TrithemiusComponent } from './views/trithemius/trithemius.component';
import { TrithemiusFormComponent } from './views/trithemius/trithemius-form/trithemius-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CezarComponent,
    PolybiusComponent,
    NotFoundComponent,
    CezarFormComponent,
    PolybiusFormComponent,
    HomophonicComponent,
    HomophonicFormComponent,
    TrithemiusComponent,
    TrithemiusFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
