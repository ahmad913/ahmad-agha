import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/components/main-page/main-page.component';
import { SplashAnimationType } from './pages/splash-screen/components/splash-animation-type';
import { SplashScreenComponent } from './pages/splash-screen/components/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SplashScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
