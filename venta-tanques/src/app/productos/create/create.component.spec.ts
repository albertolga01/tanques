import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentProductos } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponentProductos;
  let fixture: ComponentFixture<CreateComponentProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponentProductos ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponentProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
