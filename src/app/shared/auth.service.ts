import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface AuthResult {

}

export interface AuthStrategy {

}

export interface AuthToken {

}

@Injectable({
  providedIn: 'root',
})


export class AuthService {

//authenticate('email', {email: 'email@example.com', password: 'test'})
  authenticate(strategyName: string, data: any) : Observable<AuthResult> {
    return of([])
  }

  //getStrategy('email')
  getStrategy(strategyName: string): Observable<AuthStrategy>{ 
    return of([])
  }
  

  getToken() { }
  
  isAuthenticated(): Observable<boolean>{
    return of(true)
  }

  isAuthenticatedOrRefresh(): Observable<boolean> {
    return of(true)
  }

  logout(): Observable<AuthResult>{
    return of([])
  }

  onAuthenticationChange() { }
  
  onTokenChange() { }
  
  refreshToken() { }
  

  register() { }
  
  requestPassword() { }
  

  resetPassword() {}
  }