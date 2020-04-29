import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'corsTest';
  url;
  constructor (private http: HttpClient){

  }

  callRequest() {
    this.http.get(this.url).subscribe(console.log)
  }
}
