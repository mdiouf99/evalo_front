import { KeycloakService } from 'keycloak-angular';


export function initializeKeycloak(keycloak: KeycloakService):() => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'Evalo',
        clientId: 'evalo_backend',
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25,
      },

      shouldAddToken: (request) => {
        const {method, url} = request;

        const isGetRequest = 'GET' === method.toUpperCase();
        const acceptablePaths = ['/assets', '/clients/public'];
        const isAcceptablePathMatch = acceptablePaths.some((path) =>
          url.includes(path)
        );

        return !(isGetRequest && isAcceptablePathMatch);
      }
    });
}
