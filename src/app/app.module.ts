import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VtumordxComponent } from './vtumordx/vtumordx.component';
import { UploadComponent } from './vtumordx/upload/upload.component';
import { ResultComponent } from './vtumordx/result/result.component';
import { FormsModule } from '@angular/forms';
import { API_CONFIG, API_SERVICE } from './AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { RgaocComponent } from './rgaoc/rgaoc.component';
import { ApproachComponent } from './approach/approach.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { TrainingComponent } from './approach/training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VtumordxComponent,
    UploadComponent,
    ResultComponent,
    HomeComponent,
    OverviewComponent,
    RgaocComponent,
    ApproachComponent,
    EvaluationComponent,
    ComparisonComponent,
    TrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
  ],
  providers: [
    {
      provide: API_SERVICE,
      useValue: API_CONFIG,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
