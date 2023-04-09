import { Router, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
    private http: HttpClient
  ) {}

  public canActivate(): boolean {
    const token = localStorage.getItem("api_token") ?? null;
    const session = localStorage.getItem("session") ?? null;

    if (this.router.url !== "/login" && !token && !session) {
      this.router.navigate(["login"]);
    }

    if (token && session) {
      return true;
    }
    return false;
  }
}
