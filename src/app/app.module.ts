import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VtumordxComponent,
    UploadComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
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
