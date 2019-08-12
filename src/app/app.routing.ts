import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { IdcardComponent } from "./idcard/idcard.component";
import { AuthGuard } from "./_helpers";
import { IdformComponent } from "./idform/idform.component";
import { IdtableComponent } from "./idtable/idtable.component";

export const APP_ROUTES: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  
  
  //Lazy Loading Routes
  {
    path: "idform",
    loadChildren: "./cards/cards-routing.module#CardsRoutingModule"
  },
  {
    path: "idtable",
    loadChildren: "./cards/tables-routing.module#TablesRoutingModule"
  },
  
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

// export const appRoutingModule = RouterModule.forRoot(routes);
