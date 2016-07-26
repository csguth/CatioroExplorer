'use strict';

/**
 * @ngdoc function
 * @name catioroExplorerApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the catioroExplorerApp
 */
angular.module('catioroExplorerApp')
  .controller('FeedCtrl', function ($scope, $facebook) {

    $scope.isLoggedIn = false;
    $scope.myPostTextArea = 'TESTE';
    $scope.posts = [];
    $scope.entered = false;

        $scope.login = function() {
            $facebook.login().then(function() {
               console.log('Logged in');
                $scope.isLoggedIn = true;
                refresh();
            });
        }

        $scope.logout = function() {
            $facebook.logout().then(function() {
               console.log('Logged out');
                $scope.isLoggedIn = false;
                refresh();
            });
        }

        $scope.postStatus = function() {
            var myPostTextArea = $scope.myPostTextArea; // get data from ng-model=myPostTextArea

            $facebook.api("/me/feed", 'post', {message: myPostTextArea}).then(function(response){
                $scope.msg = "Thanks for posting";
                this.myPostTextArea = '';
                refresh();
            });
        }

        $scope.like = function(postId) {
          console.log("liked post "+ postId);
          $facebook.api("/"+postId+"/likes", 'post').then(function(result){
            console.log(result);
              if(result.success)
                $scope.likes++;
          });
        }

        function refresh() {
          $scope.posts = [];
          $facebook.api("/CatioroReflexivo/posts?fields=full_picture,message,created_time").then(function(feedData){
            $scope.posts = feedData.data;
          });
        }

        if(!$scope.entered)
        {
          refresh();
          $scope.entered = true;
        }





  });
