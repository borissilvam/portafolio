import { Component, Input } from '@angular/core';
import { Cv, Work,  } from '../../interfaces/cv.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  @Input()
  public works?: Work[];

}
