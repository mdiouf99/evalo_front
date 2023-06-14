import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Directive({
  selector: '[hasAnyAuthority]'
})
export class HasAnyAuthorityDirective {
  @Input('hasAnyAuthority') authorities?: string[] ;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private keycloakService: KeycloakService
  ) {}

  ngOnInit() {
    const hasAuthority = this.checkAuthorities();
    if (hasAuthority) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  private checkAuthorities(): boolean {
    // @ts-ignore
    const userRoles: string[] = this.keycloakService.getKeycloakInstance().realmAccess.roles;
    // @ts-ignore
    return this.authorities.some(authority => userRoles.includes(authority));
  }
}
