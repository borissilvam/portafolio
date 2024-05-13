import { Component, inject } from '@angular/core';
import { Cv, Skill } from './interfaces/cv.interface';
import { CvService } from './services/cv.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'porfolio';



  public cv?: Cv ;



  public skillNames?: string[];

  private cvService = inject(CvService);

  ngOnInit(): void {
    this.getDataCv();

  }


  getDataCv(){

    this.cvService.getCv().pipe(

    )
    .subscribe(cv => {
      this.cv = cv  ;

      this.cv.skills.forEach( (skill)=> {
        this.skillNames = skill.keywords
      })


    })

  }


}
