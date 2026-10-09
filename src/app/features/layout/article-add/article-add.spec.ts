import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAdd } from './article-add';

describe('ArticleAdd', () => {
  let component: ArticleAdd;
  let fixture: ComponentFixture<ArticleAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
