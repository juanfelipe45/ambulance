import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: '[upload]'
})
export class UploadDirective {

  @Output() public onHover: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onFileDropped: EventEmitter<File> = new EventEmitter<File>();

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    event.preventDefault();
    this.onHover.emit(true);
  }

  @HostListener('dragleave', ['$event']) onDragOLeave(event: DragEvent) {
    event.preventDefault();
    this.onHover.emit(false);
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    event.preventDefault();
    this.onHover.emit(false);

    const files: FileList = event.dataTransfer.files;
    if (files.length > 0) {
      const fileSelected: File = files[0];
      console.log(fileSelected);
      this.onFileDropped.emit(fileSelected);
    }

  }
}
