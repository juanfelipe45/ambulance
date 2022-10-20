import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Domains
import { UserProperties } from './../domain/user';
import { UserRepository } from './../domain/user.repository';

// Infrastructure
import { BaseInfrastructure } from '../../shared/infrastructure/base.infrastructure';

@Injectable()
export class UserInfrastructure extends BaseInfrastructure<UserProperties> implements UserRepository {

  constructor (_http: HttpClient) {
    super(_http, 'users');
    this.http = _http;
  }

  execute(): void {
    throw new Error('Method not implemented.');
  }

}
