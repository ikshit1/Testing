import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor(private httpClient: HttpClient) {}

    getLanguage(obj) {
        return this.httpClient.post('http://localhost:4600/api/language', obj);
    }
}
