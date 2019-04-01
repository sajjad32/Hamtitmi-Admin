import {Component, OnInit, ViewChild} from '@angular/core';
import {ImageCroppedEvent, ImageCropperComponent} from 'ngx-image-cropper';
import { NotifierService } from 'angular-notifier';
import {AdminService} from '../../_services/admin.service';
import {Image} from './Image';

@Component({
  selector: 'app-place-album',
  templateUrl: './place-album.component.html',
  styleUrls: ['./place-album.component.css']
})
export class PlaceAlbumComponent implements OnInit {

  images = Array(Image);
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  private readonly notifier: NotifierService;

  constructor(notifierService: NotifierService,
              private adminService: AdminService) {
    this.notifier = notifierService;
  }

  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;

  ngOnInit() {
    this.getImages();
  }

  cleanImageUpload() {
    this.imageChangedEvent = '';
    this.croppedImage = '';
    this.showCropper = false;
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event);
  }
  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }
  cropperReady() {
    console.log('Cropper ready');
  }
  loadImageFailed () {
    console.log('Load failed');
  }

  getImages() {
    this.adminService.getImages().subscribe(
      data => {
        this.images = data['data']['place_images'];
        console.log('get-images response: \n', data);
      },
      error => {
        console.log('get-images response error: \n', error);
      }
    );
  }

  addImage() {
    this.adminService.addImage(this.croppedImage).subscribe(
      data => {
        this.notifier.notify( 'success', 'تصویر با موفقیت بارگذاری شد' );
        console.log('add-image response: \n', data);
        this.getImages();
      },
      error => {
        console.log('add-image response error: \n', error);
      }
    );
  }

  removeImage(image_name: string, image_id: string) {
    this.adminService.removeImage(image_name, image_id).subscribe(
      data => {
        console.log('remove-image response: \n', data);
        this.getImages();
      },
      error => {
        console.log('remove-image response error: \n', error);
      }
    );
  }
}
