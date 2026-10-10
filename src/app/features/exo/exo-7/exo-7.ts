import { Component, inject, linkedSignal } from '@angular/core';
import { ArticlesService } from '../../service/articles.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-exo-7',
  styleUrl: './exo-7.scss',
  templateUrl: './exo-7.html',
})
export class Exo7 {

  // inject the service.
  private readonly articlesService = inject(ArticlesService);

  // method get all (from service).
  private articleResource = this.articlesService.getAll();

  // articles list, on a linkedSignal (to lisen articleResource).
  articles = linkedSignal({
    source: () => ({ articles: this.articleResource.value() }),
    computation: ({ articles }) => articles,
  });

}
