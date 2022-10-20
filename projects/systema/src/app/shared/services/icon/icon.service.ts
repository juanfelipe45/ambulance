import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface Icon {
  name: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private listIcons: Icon[] = [
    {name: "driver", path: "../../../assets/icons/conductor.svg"},
    {name: "history", path: "../../../assets/icons/historia.svg"},
    {name: "medic", path: "../../../assets/icons/medico.svg"},
    {name: "user", path: "../../../assets/icons/programador.svg"},
    {name: "dashboard", path: "../../../assets/icons/tablero.svg"},
    {name: "logo", path: "../../../assets/icons/logo.svg"},
    {name: "excel", path: "../../../assets/icons/excel.svg"},
    {name: "pdf", path: "../../../assets/icons/pdf.svg"},
  ]

  constructor(
    private _domSanitizer: DomSanitizer,
    private _matIconRegistry: MatIconRegistry,
  ) {
    this.listIcons.forEach((icon: Icon) => {
      this._matIconRegistry.addSvgIcon(icon.name, this._domSanitizer.bypassSecurityTrustResourceUrl(icon.path));
    });
  }
}
