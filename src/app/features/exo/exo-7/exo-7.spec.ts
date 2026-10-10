import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exo7 } from './exo-7';

describe('Exo7', () => {
  let component: Exo7;
  let fixture: ComponentFixture<Exo7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo7],
    }).compileComponents();

    fixture = TestBed.createComponent(Exo7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
