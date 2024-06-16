import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppComponent,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
