import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Domain
import { MedicProperties } from '../domain/medic';
import { MedicRepository } from '../domain/medic.repository';

// Infrastructure
import { BaseInfrastructure } from '../../shared/infrastructure/base.infrastructure';

@Injectable()
export class MedicInfrastructure extends BaseInfrastructure<MedicProperties> implements MedicRepository {

  constructor(_http: HttpClient) {
    super(_http, 'medics');
    this.http = _http;
  }

}
