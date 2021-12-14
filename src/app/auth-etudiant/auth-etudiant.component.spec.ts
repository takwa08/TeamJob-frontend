import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEtudiantComponent } from './auth-etudiant.component';

describe('AuthEtudiantComponent', () => {
  let component: AuthEtudiantComponent;
  let fixture: ComponentFixture<AuthEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
