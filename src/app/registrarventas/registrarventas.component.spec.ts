import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarventasComponent } from './registrarventas.component';

describe('RegistrarventasComponent', () => {
  let component: RegistrarventasComponent;
  let fixture: ComponentFixture<RegistrarventasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarventasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
