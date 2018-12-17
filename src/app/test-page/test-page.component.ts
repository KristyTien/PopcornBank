import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http/';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  private url = 'http://localhost:8080';

  constructor(private http: Http) { }

  ngOnInit() {
  }

  testGetFile(){
    this.http.get(this.url + '/test_file')
  }
}
