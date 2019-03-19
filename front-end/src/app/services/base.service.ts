import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    config: any;

    constructor(private http: HttpClient) {
        this.config = environment;
    }

    updateParams() {
        let headers = new HttpHeaders();
        return headers;
    }
   
    /**
     * @param url relative url of the api
     * @param apiBaseUrl Currently this service auto used base url from environment variable
     * If we need to override this then pass that url here.
     */
    get(url, apiBaseUrl: string = "") {
        if (apiBaseUrl)
        {
            url = apiBaseUrl + url;        
        }
        else
        {
            url = this.config.api + url;
        }
        let headers = this.updateParams();
        return this.http.get(url, { headers: headers }).toPromise();
    }

}
