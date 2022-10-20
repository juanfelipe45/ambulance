import { Inject, Injectable } from '@angular/core';

// Domains
import { UserProperties } from '../domain/user';
import { UserRepository } from '../domain/user.repository';

// Infrastructures
import { UserInfrastructure } from '../infrastructure/user.infrastructure';

// Applications
import { BaseApplication } from '../../shared/application/base.application';

@Injectable()
export class UserApplication extends BaseApplication<UserProperties, UserRepository> {

  constructor(
    @Inject(UserInfrastructure) private readonly userRepository: UserRepository) {
    super(userRepository);
  }

  execute() {
    return this.userRepository.execute();
  }

}
