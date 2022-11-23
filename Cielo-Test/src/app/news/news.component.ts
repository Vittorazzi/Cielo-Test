import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {

  news: any = [
    {
      titulo: 'Noticia 1',
      conteudo: "BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla",
      link: 'https://g1.globo.com/',
      expand: false
    },
    {
      titulo: 'Noticia 2',
      conteudo: 'BleBleBleBleBleBleBleBleBleBleBleBleBleBleBleBleBleBle',
      expand: false
    },
    {
      titulo: 'Noticia 3',
      conteudo: 'BliBliBliBliBliBliBliBliBliBliBliBliBliBliBliBliBliBli',
      expand: false
    }
  ]
  @Input('titulo') titulo: string = '';

  constructor() { }

}
