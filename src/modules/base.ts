import { EventEmitter, DefaultEventMap } from 'tsee';
import HttpClient from "core/http-client";

export default class Base<T extends DefaultEventMap> extends EventEmitter<T> {
  http: HttpClient;

  constructor(httpClient: HttpClient) {
    super();
    this.http = httpClient;
  }
}