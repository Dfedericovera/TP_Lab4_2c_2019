import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';


@Injectable()
export class MiHttpService {



  constructor(public http: HttpClient, private httpClient: HttpClient) { }

  private headers: Headers = new Headers({});


  public httpGetP(url: string) {
    return this.http
      .get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any) {
    /* console.log("ENVIANDO"); */
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = {
      headers: headers
    }
    /* console.log(JSON.stringify(objeto)); */
    return this.httpClient.post(url,JSON.stringify(objeto),options)
    /* { "correo": "admin", "clave": "admin" },.subscribe(data => {
      console.log(data);
    });*/


    /* this.httpClient.post("http://localhost/Apache/PHP/TPSALADEJUEGOS/usuario/login/", { "correo": "admin", "clave": "admin" }, this.options)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {

          console.log("Error", error);

        } ); */

    /* return this.http.post(url,objeto,httpOptions) */
    /* return this.http
    .post( url, objeto, httpOptions)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError ); */
  }

  public httpGetO(url: string) {
    return this.http.get(url)
  }


  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    console.log(error);
    return error;
  }
}
