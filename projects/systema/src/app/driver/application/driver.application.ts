import { Inject, Injectable } from "@angular/core";

// Domain
import { DriverProperties } from "../domain/driver";
import { DriverRepository } from "../domain/driver.repository";

// Application
import { BaseApplication } from "../../shared/application/base.application";

//Infrastructure
import { DriverInfrastructure } from "../infrastructure/driver.infrastructure";

@Injectable()
export class DriverApplication extends BaseApplication<DriverProperties, DriverRepository> {

  constructor(
    @Inject(DriverInfrastructure) private readonly _driverRepository: DriverRepository
  ) {
    super(_driverRepository);
  }
}
