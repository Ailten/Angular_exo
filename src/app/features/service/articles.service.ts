import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';
import { Article } from '../layout/article/article';

@Service()
export class ArticlesService {

    getAll() {
        // call fake DB end-point select all.
        return httpResource<Article[]>(() => 'http://localhost:3000/articles', {defaultValue: []});
    }

}
