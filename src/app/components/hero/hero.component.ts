import { Component, Input, OnInit, inject } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Basics, Cv } from '../../interfaces/cv.interface';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  @Input()
  public basic?: Basics ;







}
