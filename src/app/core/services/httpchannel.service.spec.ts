import { TestBed } from '@angular/core/testing';

import { HttpchannelService } from './httpchannel.service';

describe('HttpchannelService', () => {
  let service: HttpchannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpchannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
