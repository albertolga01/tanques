import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentProductos } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentProductos;
  let fixture: ComponentFixture<IndexComponentProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponentProductos ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
