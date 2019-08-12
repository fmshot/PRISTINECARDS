import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IdcardComponent } from "@app/idcard/idcard.component";
import { AuthGuard } from "../_helpers";

// import { IdformComponent } from "@app/idform/idform.component";
import { IdformComponent } from "../idform/idform.component";
import { IdtableComponent } from "../idtable/idtable.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "", component: IdformComponent, canActivate: [AuthGuard]}];

// @NgModule({
//   imports: [IdformComponent, RouterModule.forChild(routes)],
//   declarations: [IdformComponent],
//   exports: [IdformComponent, RouterModule]
// })

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IdformComponent, IdcardComponent],
  exports: [IdformComponent, IdcardComponent]
})
export class CardsRoutingModule {}
