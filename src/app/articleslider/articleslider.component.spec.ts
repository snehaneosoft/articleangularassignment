import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesliderComponent } from './articleslider.component';

describe('ArticlesliderComponent', () => {
  let component: ArticlesliderComponent;
  let fixture: ComponentFixture<ArticlesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
