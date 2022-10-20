import { Inject, Injectable } from '@angular/core';

// Domains
import { RoleProperties } from '../domain/role';
import { RoleRepository } from './../domain/role.repository';

// Infrastructures
import { RoleInfrastructure } from '../infrastructure/role.infrastructure';

// Applications
import { BaseApplication } from "../../shared/application/base.application";

@Injectable()
export class RoleApplication extends BaseApplication<RoleProperties, RoleRepository> {

  constructor(@Inject(RoleInfrastructure) private readonly roleRepository: RoleRepository) {
    super(roleRepository);
  }
}
