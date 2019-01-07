import {Component, OnInit, ViewChild} from '@angular/core';
import { AlbumService } from './album.service';
import {ImageCroppedEvent, ImageCropperComponent} from 'ngx-image-cropper';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-place-album',
  templateUrl: './place-album.component.html',
  styleUrls: ['./place-album.component.css']
})
export class PlaceAlbumComponent implements OnInit {

  images = [];
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  private readonly notifier: NotifierService;

  constructor(private albumService: AlbumService, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;

  ngOnInit() {
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
  uploadImage() {
    console.log(this.croppedImage);
    this.notifier.notify( 'success', 'تصویر با موفقیت بارگذاری شد' );
  }
}
