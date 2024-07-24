import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {

  public eventos: any = [
    {
      Tema: 'Angular',
      Local: 'Chapecó'
    },
    {
      Tema: '.NET',
      Local: 'Chapecó'
    },
    {
      Tema: 'Typescript e CSharp',
      Local: 'Chapecó'
    }
  ]

  constructor(){

  }

  ngOnInit(): void {

  }

}
