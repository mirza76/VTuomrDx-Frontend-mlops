import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { VtumordxServicesService } from 'src/app/vtumordx-services.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @Output() myimage = new EventEmitter<any>();
  image: any;
  typeDetected: string = "-";
  myformData: FormData = new FormData();

  constructor(private service: VtumordxServicesService) {

  }

  onUpload(file: any) {
    this.typeDetected = "-"
    
    const imageFile = file.target.files[0];

    const formData: FormData = new FormData();
    formData.append("image", imageFile, imageFile.name);

    this.myformData = formData;

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      this.image = reader.result;
      // console.log(this.image, typeof(this.image), this.image.length);
      this.myimage.emit({ photo: reader.result, detectedType: this.typeDetected });
    }
  }

  uploadImage() {
    this.service.getPredictions(this.myformData).subscribe((data: HttpResponse<Blob>) => {
      console.log(data);
      if (data.body != null && data.headers.get('tumor_type') != null) {
        this.typeDetected = data.headers.get('tumor_type') ?? "Unknown";
        const fileReader = new FileReader;
        fileReader.readAsDataURL(data.body);
        fileReader.onloadend = () => {
          if (data.body != null) {
            const file = new File([data.body], "filename.jpg", { type: data.body?.type })
            this.image = [file]
            this.myimage.emit({ photo: fileReader.result, detectedType: this.typeDetected });
          }
        }
      }
    });

  }
}

