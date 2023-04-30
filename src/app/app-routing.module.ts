import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { RgaocComponent } from './rgaoc/rgaoc.component';
import { ApproachComponent } from './approach/approach.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { VtumordxComponent } from './vtumordx/vtumordx.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "overview", component: OverviewComponent },
  { path: "rgaoc", component: RgaocComponent },
  { path: "approach", component: ApproachComponent },
  { path: "evaluation", component: EvaluationComponent },
  { path: "comparison", component: ComparisonComponent },
  { path: "prediction", component: VtumordxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
