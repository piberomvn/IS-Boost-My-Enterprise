import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGrupoComponent } from './header-grupo.component';

describe('HeaderGrupoComponent', () => {
  let component: HeaderGrupoComponent;
  let fixture: ComponentFixture<HeaderGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
