import { environment } from './../../../../environments/environment';
import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.sass'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PhotoComponent), multi: true}
  ]
})
export class PhotoComponent implements OnInit, AfterViewInit {

  public value: File;
  public onChange: any;
  public onTouched: any;
  public statusHover: boolean = false;
  public isUsingWebCam: boolean = false;

  private triggerSnapshot: Subject<void> = new Subject();

  @Input() photoByDefault: string;

  @ViewChild('photo') photo!: ElementRef;
  @ViewChild('file') fileInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.photoByDefault) {
      const path = `${environment.apiUrl}/photos/${this.photoByDefault}`;
      this.loadPhotoFromUrlOrDataUrl(path);
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(val: File): void {
    if (val) {
      this.value = val;
    }
  }

  private loadPhotoFromUrlOrDataUrl(dataUrlOrPath: string): void {
    this.photo.nativeElement.style.backgroundImage = 'url(' + dataUrlOrPath + ')';
  }

  public fileDropped(file: File): void {
    console.log(file);
    if (!file.type.startsWith('image/')) {
      return;
    }

    this.onTouched();
    this.onChange(file);
    this.writeValue(file);

    const fr: FileReader = new FileReader();
    fr.readAsDataURL(file);
    fr.onloadend = (response: any) => {
      const dataBase64 = response.target.result;
      this.loadPhotoFromUrlOrDataUrl(dataBase64);
    };
  }

  public executeLoadImage(): void {
    this.fileInput.nativeElement.click();
  }

  public selectImage(event: any): void {
    const file = event.target.files[0];
    this.fileDropped(file);
  }

  public triggerAsObservable(): Observable<void> {
    return this.triggerSnapshot.asObservable();
  }

  public takePhoto(): void {
    this.triggerSnapshot.next();
  }

  public imageCapture(event: WebcamImage) {
    console.log(event);
    fetch(event.imageAsDataUrl)
      .then((response) => response.arrayBuffer())
      .then((buffer) => new File([buffer], 'image-profile', {type: 'image/jpg'}))
      .then((file) => {
        this.isUsingWebCam = false;
        this.fileDropped(file);
      });
  }

  public changeOriginPhoto(event: MatSlideToggleChange) {
    this.isUsingWebCam = !this.isUsingWebCam;
  }
}
