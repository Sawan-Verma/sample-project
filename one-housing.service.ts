/**
* angular dependency
*/
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Observable';
/**
* user defined dependency
*/
import { constants as CONSTANTS,  TEXTLABELS } from './properties/properties';
import { Filters } from '../shared/model/filter';
import { CONTRACTOR_BE as GATEWAYS } from './properties/business-entities';
/**
* @brief This class contains All the methods i.e.
*        get     for fetch the list
*        create  for creating the dataItem
*        update  for updating the dataItem
*        delete  for deleting the dataItem
*        count   for pagination
*
*/

@Injectable()
export class OneHousingService {

  /**
   * @brief      This is param options
   */
  private options: RequestOptions = new RequestOptions();
  /**
   * @brief      This is parameter to pass the filter
   */
  private params: URLSearchParams = new URLSearchParams();
  /**
   * @brief      hold the URL data
   */
  private URL: undefined;
  /**
   * @brief      hold the filterOptions data
   */
  private filterOptions: any = {};

  constructor(private http: Http) { }

  /**
   * @brief      function for creating the url
   *
   * @param      {any} url   The requested url
   *
   * @return     new url with basepath
   */
  createUrl(url): any {
    return `${GATEWAYS.BASEPATH}${url}`;
  }

  /**
   * @brief      function for getting the list
   *
   * @param      {any} url      The requested url
   * @param      {any} filter   contains the filter data
   *
   * @return     list of data
   */
  get(url: string, filter: Filters): Observable<any[]> {
    this.URL = this.createUrl(url);
    this.filterOptions = filter;
    this.options.params = this.filterOptions;
    return this.http.get(this.URL, this.options)
      .map(this.extractData)
  }

  /**
   * @brief      function for creating the dataItem
   *
   * @param      {any} url        The requested url
   * @param      {any} payload    contains the payload dataItem
   *
   * @return     created new row data
   */
  create(url, payload): Observable<any[]> {
    this.URL = this.createUrl(url);
    return this.http.post(this.URL, payload)
      .map(this.extractData)
  }

  /**
   * @brief      function for updating the existing dataItem
   *
   * @param      {any} url        The requested url
   * @param      {any} payload    contains the payload dataItem
   *
   * @return     modify the existing row data
   */
  update(url, payload): Observable<any[]> {
    this.URL = this.createUrl(url);
    return this.http.put(this.URL, payload)
      .map(this.extractData)
  }

  /**
   * @brief      function for deleting the selected dataItem
   *
   * @param      {any} url        The requested url
   * @param      {any} payload    contains the payload dataItem
   *
   * @return     delete the seleted row data
   */
  delete(url, payload): Observable<any[]> {
    this.URL = this.createUrl(url);
    this.options.body = payload;
    return this.http.delete(this.URL, this.options)
      .map(this.extractData)
  }

  /**
   * @brief      function for getting the count value
   *
   * @param      {any} url      The requested url
   * @param      {any} filter   contains the filter data
  *
   * @return     new list based on count value
   */
  count(url, filter: Filters): Observable<any[]> {
    this.URL = this.createUrl(url);
    this.filterOptions = filter;
    this.options.params = this.filterOptions;
    return this.http.put(`${this.URL}/count`, null, this.options)
      .map(this.extractData)
  }

  /**
    * @brief      Extract a Data i.e response of map and return the data.
    *
    * @param      {any} res   The responce
    *
    * @return     return the data
    */
  private extractData(res: Response) {
    const body = res.json();
    return body || [];
  }

  /**
   * @brief      Error Handling
   *
   * @param      error  The error
   *
   * @return     return the error status code
   */
  // private handleError(error: any) {
  //   const errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   return Observable.throw(errMsg);
  // }

}
