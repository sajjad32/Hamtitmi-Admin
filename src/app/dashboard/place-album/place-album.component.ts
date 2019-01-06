import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-place-album',
  templateUrl: './place-album.component.html',
  styleUrls: ['./place-album.component.css']
})
export class PlaceAlbumComponent implements OnInit {

  images = [];
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

}
