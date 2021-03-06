/* jshint node: true */

module.exports = function (environment) {
  'use strict';
  const ENV = {
    modulePrefix: 'ga-wdi-boston.test-run',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    apiHost: 'http://localhost:3000/',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    let port = +('GA'.split('').reduce((p, c) =>
      p + c.charCodeAt().toString(16), '')
    );
    ENV.apiHost = `http://localhost:${port}`;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootUrl = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.rootURL = '/ember-auth-template-master';
    ENV.locationType = 'hash';
    ENV.apiHost = 'http://foobar.com';
  }

  return ENV;
};
