'use strict';

/**
 * @ngdoc overview
 * @name catioroExplorerApp
 * @description
 * # catioroExplorerApp
 *
 * Main module of the application.
 */
angular
  .module('catioroExplorerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFacebook'
  ])
  .config( function( $facebookProvider ) {
    $facebookProvider.setAppId('1726021611005392');
    $facebookProvider.setPermissions('email, public_profile, user_posts, user_photos, publish_actions');
  })
  .run( function($rootScope) {

    (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "//connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'))

  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/feed', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl',
        controllerAs: 'feed'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
