import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentCompras } from './create.component';

describe('CreateComponentCompras', () => {
  let component: CreateComponentCompras;
  let fixture: ComponentFixture<CreateComponentCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponentCompras ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponentCompras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
