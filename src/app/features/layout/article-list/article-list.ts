import { Component, input, output, model } from '@angular/core';
import { ArticleAdd } from '../article-add/article-add';
import { Article } from '../article/article';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-article-list',
  imports: [CurrencyPipe],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss',
})
export class ArticleList {

  articlesToRender = input<Article[]>([]);

  indexArticleToDel = output<number>();
  deleteArticle(event: Event, indexArticle: number): void {
    console.log(indexArticle);
    this.indexArticleToDel.emit(indexArticle);
  }

}
