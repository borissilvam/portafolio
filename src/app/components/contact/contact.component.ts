import { Component, Input } from '@angular/core';
import { Profile } from '../../interfaces/cv.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @Input()
  public profiles?: Profile[];

}
