import { Component, EventEmitter, Input, Output } from '@angular/core';
import { empty } from 'rxjs';
import { toBase64 } from './util';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent {
  imageBase64!:string;
  @Input() urlCurrentImage:any = null;
  @Output()
  onChangeImage = new EventEmitter<File>;
  change($event: any)
  {
    if($event?.target.files.length > 0)
    {
      console.log($event?.target.files.length)
      console.log($event)

       const file : File = $event.target.files[0];
       toBase64(file).then((value:any) => {this.imageBase64 = value;});
       this.onChangeImage.emit(file);
       this.urlCurrentImage=null ;
    }
  }
}
