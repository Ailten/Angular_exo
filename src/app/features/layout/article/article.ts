
export interface Article{
    id?: number;
    name: string;
    price: number;
};

// for insert (exo 8).
export type ArticleCreateForm = Omit<Article, 'id'>;