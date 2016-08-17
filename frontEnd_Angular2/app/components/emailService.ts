import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {StatusCode} from "../common/constant";
import {EventManager} from "./eventManager";

@Injectable()
export class EmailService {
    private http: Http;
    private baseUrl: string = "http://localhost:19698/api/";
    private headers: Headers;

    constructor(http: Http) {
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Accept", "application/json");
        this.http = http;
    }

    public getEmails() {       
        let url = this.baseUrl + "emails";
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then((response: any) => response.json());
    }

    public getEmail(id: string) {
        let url = this.baseUrl + "emails/" + id;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then((response: any) => {
                return this.handleDataResponse(response);
            });
    }

    public deleteEmail(id: string) {
        let url = this.baseUrl + "emails/" + id;
        return this.http.delete(url, { headers: this.headers }).toPromise()
            .then((response: any) => {
                return this.handleDataResponse(response);
            });
    }

    public createEmail(email: any) {
        let url = this.baseUrl + "emails";
        let dataString: string = JSON.stringify(email);
        return this.http.post(url, dataString, { headers: this.headers })
            .toPromise()
            .then((response: any) => {
                return this.handleDataResponse(response);
            });
    }

    public updateEmail(emailId: string, email: any) {
        let url = this.baseUrl + "emails/" + emailId;
        let dataString: string = JSON.stringify(email);
        return this.http.put(url, dataString, { headers: this.headers })
            .toPromise()
            .then((response: any) => {
                return this.handleDataResponse(response);
            });
    }

    private isValidationResponse(statusCode: Number) {
        if (statusCode === StatusCode.Susscess)
            return true;
        return false;
    }

    private handleDataResponse(object: any) {
        let jsonData = object.json();
        if (this.isValidationResponse(jsonData.statusCode)) {
            return jsonData.data;
        }
        else {
            EventManager.getInstance().publish(jsonData.errors);
        }
    }
}