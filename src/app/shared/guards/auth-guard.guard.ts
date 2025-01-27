// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard extends KeycloakAuthGuard {
//   constructor(protected router: Router,protected readonly keycloak: KeycloakService) {
//     super(router,keycloak);
//   }

//   public  async isAccessAllowed(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Promise<boolean> {
//     if (!this.authenticated) {
//       await this.keycloak.login({
//         redirectUri: window.location.origin +state.url
//       }
//     );
//     }
//     return this.authenticated;
//   }
// }