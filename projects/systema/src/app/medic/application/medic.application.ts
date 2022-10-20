import { Inject, Injectable } from "@angular/core";

// Domains
import { MedicProperties } from "../domain/medic";
import { MedicRepository } from "../domain/medic.repository";

// Infrastructure
import { MedicInfrastructure } from "../infrastructure/medic.infrastructure";

// Application
import { BaseApplication } from "../../shared/application/base.application";

@Injectable()
export class MedicApplication extends BaseApplication<MedicProperties, MedicRepository> {

  constructor(@Inject(MedicInfrastructure) private readonly _medicRepository: MedicRepository) {
    super(_medicRepository);
  }
}
