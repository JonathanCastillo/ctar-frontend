import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarventasComponent } from './listarventas.component';

describe('ListarventasComponent', () => {
  let component: ListarventasComponent;
  let fixture: ComponentFixture<ListarventasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarventasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
