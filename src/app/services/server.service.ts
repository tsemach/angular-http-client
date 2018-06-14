import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerService {

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };

  constructor(private http: HttpClient) {
  }

  storeServers(servers: any[]) {
    /**
     * Angular using observable behind the scenes.
     * The http.post just return an observable that need to subscribe.
     * 
     * No mesage is sent to the server yet. Only until the observer is subscribe.
     */
    //return this.http.post('https://udemy-ng-http.firebaseio.com/data.json', servers);
    return this.http.post('http://localhost:3000/angular/data.json', servers, this.httpOptions);
  }

  getServers() {
    return this.http.get('http://localhost:3000/angular/data.json');
  }
}