import { Injectable } from '@angular/core';
import { MetaColumns } from '../../interfaces/metaColumn.interface';

//  const Data
const DATA = [
  {id: 1, name: 'Sergio', lastName: 'Hidalgo'},
  {id: 2, name: 'Juan', lastName: 'Gonzalez'},
  {id: 3, name: 'Sergio', lastName: 'Hidalgo'},
  {id: 4, name: 'Juan', lastName: 'Gonzalez'},
  {id: 5, name: 'Sergio', lastName: 'Hidalgo'},
  {id: 6, name: 'Juan', lastName: 'Gonzalez'},
  {id: 7, name: 'Sergio', lastName: 'Hidalgo'},
  {id: 8, name: 'Juan', lastName: 'Gonzalez'},
  {id: 9, name: 'Sergio', lastName: 'Hidalgo'},
  {id: 10, name: 'Juan', lastName: 'Gonzalez'},
  {id: 11, name: 'Sergio', lastName: 'Hidalgo'},
  {id: 12, name: 'Juan', lastName: 'Gonzalez'},
  {id: 12, name: 'Sergio', lastName: 'Hidalgo'},
  {id: 14, name: 'Juan', lastName: 'Gonzalez'},
  {id: 15, name: 'Sergio', lastName: 'Hidalgo'},
  {id: 16, name: 'Juan', lastName: 'Gonzalez'},
  {id: 17, name: 'Sergio', lastName: 'Hidalgo'},
  {id: 18, name: 'Juan', lastName: 'Gonzalez'},
  {id: 19, name: 'Sergio', lastName: 'Hidalgo'},
  {id: 20, name: 'Juan', lastName: 'Gonzalez'},
];

const DISPLAYED_COLUMNS: MetaColumns = [
  {field: 'id', title: 'ID'},
  {field: 'name', title: 'Nombre'},
  {field: 'lastName', title: 'Apellido'},
];

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public getDefaultData() : any {
    return [...DATA];
  }

  public getDefaultDisplayedColumns() : MetaColumns {
    return [...DISPLAYED_COLUMNS];
  }

}
