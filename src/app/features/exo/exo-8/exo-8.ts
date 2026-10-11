import { Component, inject, linkedSignal, signal } from '@angular/core';
import { ArticlesService } from '../../service/articles.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Article, ArticleCreateForm } from '../../layout/article/article';
import { form, FormField, min, required } from '@angular/forms/signals';

@Component({
  imports: [CurrencyPipe, JsonPipe, FormField],
  selector: 'app-exo-8',
  styleUrl: './exo-8.scss',
  templateUrl: './exo-8.html',
})
export class Exo8 {

  // list, same as exo 7.
  private readonly articlesService = inject(ArticlesService);
  private articleResource = this.articlesService.getAll();
  articles = linkedSignal({
    source: () => ({ articles: this.articleResource.value() }),
    computation: ({ articles }) => articles,
  });


  // exo 8.
  private state = signal<ArticleCreateForm>({ name: '', price: 0});
  protected articleToAddForm = form(
    this.state, // link form with the model fill.
    (shema) => {  // constraint of form.
      required(shema.name)
      required(shema.price)
      min(shema.price, 1.0, {message: 'prix trop bas, min 1€ !'})
    }
  );

  submitAddArticle($event: SubmitEvent) {
    $event.preventDefault();  // cancel the reload page form.

    console.log(this.state());  // item before insertion.
    if(this.articleToAddForm().valid()){  // if contraint form is all valid.
      const articleToAdd = this.state();
      this.articlesService.insert(articleToAdd)  // call service function, insert element.
        .subscribe(newArticleAfterInserted => {
          this.articles.update(old => [...old, newArticleAfterInserted])  // when insert done, update the list loaded (to add it without re-ask backend), 
          console.log(newArticleAfterInserted);  // item after insertion (has ID).
        });
    }
  }


}
