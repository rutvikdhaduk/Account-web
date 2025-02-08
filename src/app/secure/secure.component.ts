import { Component } from '@angular/core';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-secure',
  standalone: true,
  imports: [SharedComponentsModule,RouterOutlet],
  templateUrl: './secure.component.html',
  styleUrl: './secure.component.scss'
})
export class SecureComponent {

}
