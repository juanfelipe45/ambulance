import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

// Domains
import { RoleProperties } from '../domain/role';
import { RoleRepository } from '../domain/role.repository';

// Infrastructure
import { BaseInfrastructure } from "../../shared/infrastructure/base.infrastructure";

@Injectable()
export class RoleInfrastructure extends BaseInfrastructure<RoleProperties> implements RoleRepository {

  constructor(_http: HttpClient) {
    super(_http, 'roles');
    this.http = _http;
  }
}
