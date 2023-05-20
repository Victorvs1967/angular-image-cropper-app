import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ImageCropperModule } from 'ngx-image-cropper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CropImageComponent } from './components/crop-image/crop-image.component';

@NgModule({
  declarations: [
    AppComponent,
    CropImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
