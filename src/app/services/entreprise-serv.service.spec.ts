import { TestBed } from '@angular/core/testing';

import { EntrepriseServService } from './entreprise-serv.service';

describe('EntrepriseServService', () => {
  let service: EntrepriseServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrepriseServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
