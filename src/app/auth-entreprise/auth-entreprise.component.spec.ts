import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEntrepriseComponent } from './auth-entreprise.component';

describe('AuthEntrepriseComponent', () => {
  let component: AuthEntrepriseComponent;
  let fixture: ComponentFixture<AuthEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
