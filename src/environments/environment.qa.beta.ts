import { Environment } from '@abp/ng.core';

const baseUrl = 'https://geoforms-qa.beta.azurewebsites.net';

export const environment = {
  appVersion: require('../../package.json').version + '-qa',
  headerClass: 'bg-yellow-100',
  production: true,
  application: {
    baseUrl,
    name: 'GeoForms',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://geoforms-qa-api.azurewebsites.net',
    redirectUri: baseUrl,
    clientId: 'GeoForms_App',
    requireHttps: true,
    dummyClientSecret: '1q2w3e*',
    scope: 'offline_access GeoForms',
  },
  apis: {
    default: {
      url: 'https://geoforms-qa-api.azurewebsites.net',
      rootNamespace: 'GeoForms',
    },
  },
  appInsights: {
    instrumentationKey: 'e7b9e0bc-7d50-4059-b96d-5273b168d778',
  },
} as Environment;

const responseType = localStorage.getItem('oAuthConfig.responseType');
if (responseType) environment.oAuthConfig.responseType = responseType;
