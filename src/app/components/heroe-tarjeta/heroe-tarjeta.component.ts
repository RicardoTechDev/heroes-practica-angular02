import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  
  //Con el decorador Input le indico que puedo recibirlo desde fuera
  //en este caso desde el ngFor en heroes.component.html
  //<app-heroe-tarjeta [heroe]="heroe" *ngFor="let heroe of heroes; let indice = index"></app-heroe-tarjeta>
  @Input() heroe: any = {};
  @Input() indice: number = 0;
  

  constructor( private router:Router ){}

  ngOnInit(){
    
  }

  verHeroe(){
    this.router.navigate( ['/heroe',this.indice] );
  }
}
