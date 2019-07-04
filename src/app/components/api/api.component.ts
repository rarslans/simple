import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(private httpclient: HttpClient) {

  }
  users;
  calistir() {
    let path = 'https://jsonplaceholder.typicode.com/users'
    this.httpclient.get(path).subscribe((res: any) => {
      this.users = res;
      console.log(res );
    })
  }

  ngOnInit() {
  }

}
