import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisrarUsuarioComponent } from './regisrar-usuario.component';

describe('RegisrarUsuarioComponent', () => {
  let component: RegisrarUsuarioComponent;
  let fixture: ComponentFixture<RegisrarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisrarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
