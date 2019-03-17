import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VercategoriasComponent } from './vercategorias.component';

describe('VercategoriasComponent', () => {
  let component: VercategoriasComponent;
  let fixture: ComponentFixture<VercategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VercategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VercategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
