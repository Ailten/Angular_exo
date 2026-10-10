import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ArticleList } from '../../layout/article-list/article-list';
import { ArticleAdd } from '../../layout/article-add/article-add';
import { Article } from '../../layout/article/article';

@Component({
  selector: 'app-exo-5',
  imports: [ArticleList, ArticleAdd],
  templateUrl: './exo-5.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './exo-5.scss',
})
export class Exo5 {
  articles: Article[] = [
    { name: 'product-A', price: 10.0 },
    { name: 'product-B', price: 15.0 },
    { name: 'product-C', price: 20.0 },
  ];

  addArticle(event: Article): void {
    console.log('add article');
    this.articles.push(event);
  }

  removeArtile(indexToRemove: number): void {
    console.log('REMOVE');
    // remove by index.
    this.articles = this.articles.filter((a, i) => i !== indexToRemove);
  }
}
