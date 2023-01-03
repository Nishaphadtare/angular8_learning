import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebasePost } from '../models/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url = 'https://angular-crud-operation-37775-default-rtdb.firebaseio.com/';

  constructor(private _httpClientL: HttpClient) { }
  
  users : any[] = []



  createPost(){
    let postData = {
      title : 'This  is angular 8 crud',
      content: 'This is firebase crud operation with post'
    }

   return this._httpClientL.post(this.url + 'posts.json', postData);
  }
  createPostDataReactiveForm(firebasePost: FirebasePost) {
    return this._httpClientL.post(this.url + 'posts.json', firebasePost);
  }
  getPostsDataFirbase(){
    return this._httpClientL.get(this.url + 'post.json')
  }
}
