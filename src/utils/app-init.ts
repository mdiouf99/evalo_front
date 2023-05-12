import { KeycloakService } from 'keycloak-angular';


export function initializeKeycloak(keycloak: KeycloakService):() => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'Evalo',
        clientId: 'evalo_front'
      },
      initOptions: {
        checkLoginIframe:true,
        checkLoginIframeInterval:25,
      },
      shouldAddToken: (request) => {
        const { method, url } = request;

        const isGetRequest = 'GET' === method.toUpperCase();
        const acceptablePaths = ['/eval'];
        let urls;
        // @ts-ignore
        const isAcceptablePathMatch = urls.some((path: string) => url.includes(path));

        return !(isGetRequest && isAcceptablePathMatch);
      }
    });
}
