import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {
  
  arrPosts: Post[] = [];
  httpClient: any;
  dialog: any;
  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts().subscribe(res => {
      this.arrPosts = res;
      console.log('arraydata', this.arrPosts);
    })
  } 
  // displayStyle = "none";
  
  // openPopup() {
  //   this.displayStyle = "block";
  // }
  // closePopup() {
  //   this.displayStyle = "none";
  // }'
 
}


