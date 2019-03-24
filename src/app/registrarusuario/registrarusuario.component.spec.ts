import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarusuarioComponent } from './registrarusuario.component';

describe('RegistrarusuarioComponent', () => {
  let component: RegistrarusuarioComponent;
  let fixture: ComponentFixture<RegistrarusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
