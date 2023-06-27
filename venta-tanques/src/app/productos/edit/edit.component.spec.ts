import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentProductos } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponentProductos;
  let fixture: ComponentFixture<EditComponentProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponentProductos ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
