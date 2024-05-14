import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  searchTerm: string = '';
  searchResults: any[] = [
    {
      imageUrl: 'https://picsum.photos/id/10/300/200',
      title: 'Result 1',
      description: 'Description of result 1'
    },
    {
      imageUrl: 'https://picsum.photos/id/20/300/200',
      title: 'Result 2',
      description: 'Description of result 2'
    },
    {
      imageUrl: 'https://picsum.photos/id/30/300/200',
      title: 'Result 3',
      description: 'Description of result 3'
    },
    {
      imageUrl: 'https://picsum.photos/id/40/300/200',
      title: 'Result 4',
      description: 'Description of result 4'
    },
    {
      imageUrl: 'https://picsum.photos/id/50/300/200',
      title: 'Result 5',
      description: 'Description of result 5'
    }
  ];


  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
      console.log('Search term:', this.searchTerm);
      this.sendGetRequest(this.searchTerm);
    });
  }

  evaluateExpression(expression: string): any {
    try {
      eval(expression);
      this.searchTerm = "";
      return expression;
    } catch (error) {
      return expression;
    }
  }

  sendGetRequest(searchTerm: string) {
    const url = `https://api.example.com/search?q=${searchTerm}`;
    console.log('Sending request to:', url);
    // Make the HTTP request using this.http.get(url)
    // Handle the response and any errors
  }
}