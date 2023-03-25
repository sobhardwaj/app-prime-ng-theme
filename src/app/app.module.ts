import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_PRIMENG_COMPONENTS, APP_PRIMENG_MODULE } from './shared/shared.module'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    APP_PRIMENG_MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
