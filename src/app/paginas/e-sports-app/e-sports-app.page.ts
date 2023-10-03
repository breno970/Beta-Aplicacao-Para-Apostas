import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-sports-app',
  templateUrl: './e-sports-app.page.html',
  styleUrls: ['./e-sports-app.page.scss'],
})
export class ESportsAppPage implements OnInit {

  componentes: Componente[] = [
    {
      icone: 'headset-outline',
      nome: 'Campeonatos',
      link:'/campeonatos'
    },
    {
      icone: 'shield-outline',
      nome: 'Equipes',
      link:'/equipes'
    },
    {
      icone: 'trending-up-outline',
      nome: 'Apostas',
      link:'/apostas'
    },
    {
      icone: 'reorder-three-outline',
      nome: 'Tipos',
      link:'/tipos'
    }
   

  ]


  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icone: string;
  nome: string;
  link: string;
}
