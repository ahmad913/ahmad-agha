import { Component } from '@angular/core';
import { SplashAnimationType } from './pages/splash-screen/components/splash-animation-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ahmad-agha';
  public SplashAnimationTypesEnum = SplashAnimationType
}
