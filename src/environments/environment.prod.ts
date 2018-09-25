export const environment = {
  production: true,
  apiUrl: 'http://localhost:8082',

  tokenWhitelistedDomains: [ /sipe-api.herokuapp.com/ ],
  tokenBlacklistedRoutes: [/\/oauth\/token/]
};
