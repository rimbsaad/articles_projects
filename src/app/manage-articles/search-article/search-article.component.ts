import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css'],
})
export class SearchArticleComponent implements OnInit {
  searchTerm: string = '';
  showCityList: boolean = false;
  searchResults: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCities();
  }

  fetchCities(): void {
    this.http.get<any[]>('http://localhost:3000/api/cities').subscribe(
      (response) => {
        this.searchResults = response;
        this.showCityList = true;
      },
      (error) => {
        console.error('Error fetching cities:', error);
      }
    );
  }

  handleSearch(): void {
    let url = 'http://localhost:3000/api/cities';
    if (this.searchTerm) {
      url += `?cityName=${this.searchTerm}`;
    }
    this.http.get<any[]>(url).subscribe(
      (response) => {
        this.searchResults = response;
        this.showCityList = true;
      },
      (error) => {
        console.error('Error searching cities:', error);
      }
    );
  }

  handleInput(value: string): void {
    this.searchTerm = value;
    if (!value) {
      this.fetchCities();
    }
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    if (this.searchTerm) {
      this.handleSearch();
    } else {
      this.searchTerm = '';
      this.fetchCities();
    }
  }
}
