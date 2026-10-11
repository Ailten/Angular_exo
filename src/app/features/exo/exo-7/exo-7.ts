import { Component, inject, linkedSignal } from '@angular/core';
import { ArticlesService } from '../../service/articles.service';
import { CurrencyPipe } from '@angular/common';
import { Article } from '../../layout/article/article';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-exo-7',
  styleUrl: './exo-7.scss',
  templateUrl: './exo-7.html',
})
export class Exo7 {

  // inject the service.
  private readonly articlesService = inject(ArticlesService);

  // method get all (from service) (! get the methode getAll, not the result list article !).
  private articleResource = this.articlesService.getAll();

  // articles list, on a linkedSignal (to lisen articleResource, and print it), (linkedSignal, to refresh if we edit the list with set([...old, newElement])).
  articles = linkedSignal({
    source: () => ({ articles: this.articleResource.value() }),  // source, signal lisen, for re-calcul it when it change.
    computation: ({ articles }) => articles,  // computation, function who get the new value, and return it.
  });

}
