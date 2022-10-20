import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Domains
import { DriverProperties } from '../domain/driver';
import { DriverRepository } from '../domain/driver.repository';

// Infrastructure
import { BaseInfrastructure } from '../../shared/infrastructure/base.infrastructure';

@Injectable()
export class DriverInfrastructure extends BaseInfrastructure<DriverProperties> implements DriverRepository {

  constructor(_http: HttpClient) {
    super(_http, 'drivers');
    this.http = _http;
  }

}
