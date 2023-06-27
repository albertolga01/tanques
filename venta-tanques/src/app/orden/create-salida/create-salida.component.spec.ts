import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalidaComponent } from './create-salida.component';

describe('CreateSalidaComponent', () => {
  let component: CreateSalidaComponent;
  let fixture: ComponentFixture<CreateSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
