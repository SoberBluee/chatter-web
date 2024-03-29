import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("api_token") ?? "";
    const authReq = req.clone({
      headers: req.headers
        .set("Access-Control-Allow-Origin", "*")
        .set("Access-Control-Allow-Methods", "*")
        .set("Content-Type", "application/json")
        .set("api-token", token),
    });
    return next.handle(authReq);
  }
}
