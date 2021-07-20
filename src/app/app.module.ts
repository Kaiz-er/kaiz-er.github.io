import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LandingComponent } from './landing/landing.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ProjectCardComponent } from './my-work/project-card/project-card.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [AppComponent, AboutMeComponent, LandingComponent, MyWorkComponent, ProjectCardComponent, ContactMeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
