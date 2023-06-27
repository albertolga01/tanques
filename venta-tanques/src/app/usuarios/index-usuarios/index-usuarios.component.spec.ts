import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUsuariosComponent } from './index-usuarios.component';

describe('IndexUsuariosComponent', () => {
  let component: IndexUsuariosComponent;
  let fixture: ComponentFixture<IndexUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
