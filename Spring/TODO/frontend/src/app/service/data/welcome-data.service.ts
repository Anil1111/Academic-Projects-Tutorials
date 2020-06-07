import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HellowWorldBean { // provide type support to the response object
  constructor(public message: string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HellowWorldBean>('http://localhost:8085/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.http.get<HellowWorldBean>(`http://localhost:8085/hello-world-path-variable/${name}`);
  }

}
