import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
