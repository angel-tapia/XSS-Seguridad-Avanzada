import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickQ = false;
  clickP = true;
  clickT = false;

  changeClickT(): boolean{
    this.clickT = true;
    return this.clickT
  }

  changeClickQTrue() : boolean{
    this.clickQ = true;    
    return this.clickQ;
  }

  changeClickQFalse() : boolean{
    this.clickQ = false;    
    return this.clickQ;
  }

  changeClickPTrue() : boolean{
    this.clickP = true;
    return this.clickP;
  }

  changeClickPFalse() : boolean{
    this.clickP = false;    
    return this.clickP;
  }

  changeClickQ() : boolean{
    return this.clickQ;
  }

  changeClickP() : boolean{
    return this.clickP;
  }

  reloadB(){
    this.router.navigate(['/post'])
    setTimeout(() => {
      window.location.reload();
    }, 100)
  }
  
  reloadC(){
    this.router.navigate(['/perfil'])
    setTimeout(() => {
      window.location.reload();
    }, 100)
  }
}