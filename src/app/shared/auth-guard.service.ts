import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

class UserToken { }
class Permissions {
  canActivate(currentUser: any, route: any): boolean {
    return true;
  }
}

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private authService: AuthService, private permissions: Permissions,
              private currentUser: UserToken) {
  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.permissions.canActivate(this.currentUser, route.params.id);
    return this.authService.isAuthenticated(); // canActive can return Observable<boolean>, which is exactly what isAuthenticated returns
  }
}

// imports: [
//   RouterModule.forRoot([
//     {
//       path: 'team/:id',
//       component: TeamComponent,
//       canActivate: [CanActivateTeam]
//     }
//   ])
// ],
//   providers: [CanActivateTeam, UserToken, Permissions]
// })