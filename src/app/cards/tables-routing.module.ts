import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../_helpers";
import { IdtableComponent } from "../idtable/idtable.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "", component: IdtableComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IdtableComponent],
  exports: [IdtableComponent]
})
export class TablesRoutingModule {}
