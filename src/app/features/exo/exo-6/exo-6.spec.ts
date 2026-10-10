import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo6 } from './exo-6';

describe('Exo6', () => {
  let component: Exo6;
  let fixture: ComponentFixture<Exo6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo6],
    }).compileComponents();

    fixture = TestBed.createComponent(Exo6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
