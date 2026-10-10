import {
  Component,
  signal,
  output,
  OutputEmitterRef,
  WritableSignal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Article } from '../article/article';

@Component({
  selector: 'app-article-add',
  imports: [],
  templateUrl: './article-add.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './article-add.scss',
})
export class ArticleAdd {
  createArticle = output<Article>();

  articleName: WritableSignal<string> = signal('');
  articlePrice = signal(0);

  addArticle() {
    let newArticle: Article = {
      name: this.articleName(),
      price: this.articlePrice(),
    };

    this.createArticle.emit(newArticle);

    // reset parameters.
    this.articleName.set('');
    this.articlePrice.set(0.0);
  }
}
