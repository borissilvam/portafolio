import { Component, Input } from '@angular/core';
import { Cv, Skill } from '../../interfaces/cv.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {



  @Input()
  public skillsName? : string[];






}
