import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  SharedUiButtonModule,
  UiButtonComponent,
} from 'component-base-ui-button';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SharedUiButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'moon';

  handleButtonClick() {
    console.log('Button clicked!');
  }
}
