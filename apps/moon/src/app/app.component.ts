import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedUiButtonModule } from 'component-base-ui-button';
import { SharedUiPasswordModule } from 'component-base-ui-password';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    SharedUiButtonModule,
    SharedUiPasswordModule,
  ],
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
