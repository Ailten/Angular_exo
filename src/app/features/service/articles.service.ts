import { httpResource, HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Article } from '../layout/article/article';

@Service()
export class ArticlesService {

    // exo 7.
    getAll() {
        // call fake DB end-point select all.
        return httpResource<Article[]>(() => 'http://localhost:3000/articles', {defaultValue: []});
    }

    private readonly $http = inject(HttpClient);
    insert(article: Article){
        return this.$http.post<Article>('http://localhost:3000/articles', { ...article });
    }

}
