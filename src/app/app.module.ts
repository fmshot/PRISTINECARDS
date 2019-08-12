import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DataService } from "./data.service";

// used to create fake backend
import { fakeBackendProvider } from "./_helpers";

import { AppComponent } from "./app.component";
// import { appRoutingModule } from "./app.routing";

import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { IdcardComponent } from "./idcard/idcard.component";
import { IdtableComponent } from "./idtable/idtable.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CardsRoutingModule } from "./cards/cards-routing.module";
import { APP_ROUTES } from "./app.routing";
import { RouterModule } from "@angular/router";
import { IdformComponent } from "./idform/idform.component";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    // appRoutingModule,
    // CardsRoutingModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // IdcardComponent,
    // IdformComponent,
    // IdtableComponent,
    NavbarComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DataService,
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
