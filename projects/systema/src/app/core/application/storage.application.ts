import { StorageInfrastructure } from './../infrastructure/storage.infrastructure';
import { Inject, Injectable } from "@angular/core";
import { StorageRepository } from '../domain/storage.repository';

@Injectable()
export class StorageApplication {

  constructor(@Inject(StorageInfrastructure) private readonly _storageRepository: StorageRepository) {}

  public setField(property: string, value: string): void {
    this._storageRepository.setStorage(property, value);
  }

  public getField(property: string): string | null {
    return this._storageRepository.getStorage(property);
  }

  public getFieldInToken(field: string): string | string[] {
    return this._storageRepository.getFieldInToken(field);
  }

  public clear(): void {
    this._storageRepository.clear();
  }
}
