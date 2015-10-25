'use strict';

/**
 * @ngdoc function
 * @name mdAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mdAngularApp
 */
angular.module('mdAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.buttonName = "Example button";
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
