import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { RealEstate } from './realestate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lionard';
  data: any;
  pageSize = 10;
  currentPage = 0;
  totalResult!: number;
  readonly ROOT_URL =
    'https://devlts.lionard.com/ws/immobilesito/temp/interview/';

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http
      .get<any>(
        this.ROOT_URL +
          `${this.currentPage * this.pageSize}/${
            (this.currentPage + 1) * this.pageSize
          }`,
        {}
      )
      .subscribe((data) => {
        this.data = data.immobili as RealEstate[];
        this.totalResult = data.count;
      });
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
    console.log(page);
    this.getData();
  }
}
