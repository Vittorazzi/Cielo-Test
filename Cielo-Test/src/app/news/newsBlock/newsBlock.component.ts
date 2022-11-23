import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-block',
  templateUrl: './newsBlock.component.html',
  styleUrls: ['./newsBlock.component.css']
})

export class NewsBlock{

  @Input('titulo') tituloNoticia: string;
  @Input('conteudo') conteudoNoticia: string;
  @Input('link') linkNoticia: string;
  @Input('expandido') noticiaExpandida: boolean = false;

  constructor() { }

  clickExpandir() {
    this.noticiaExpandida = !this.noticiaExpandida;
  }
}
