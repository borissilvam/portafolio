import { Component, Input } from '@angular/core';
import { Education } from '../../interfaces/cv.interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  @Input()
  public educations?: Education[];

}
