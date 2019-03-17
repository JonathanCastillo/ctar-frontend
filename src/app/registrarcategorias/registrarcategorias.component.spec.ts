import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarcategoriasComponent } from './registrarcategorias.component';

describe('RegistrarcategoriasComponent', () => {
  let component: RegistrarcategoriasComponent;
  let fixture: ComponentFixture<RegistrarcategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarcategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
