/*jshint esversion: 6 */
import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {DefaultState, DefaultCtrl} from './default';
import {AwwState, AwwCtrl, AwwService } from './aww';
import '../style/app.css';

// console.log(DefaultState);
// console.log(AwwState);

let app = () => {
  return {
    template: require('./app.html'),
    controllerAs: 'app'
  };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state(DefaultState.name, DefaultState)
      .state(AwwState.name, AwwState);
  })
  .directive('app', app)
  .run(($state) =>{
    $state.go('default');
  })
  .controller('DefaultCtrl', DefaultCtrl)
  .controller('AwwCtrl', AwwCtrl)
  .service('AwwService', AwwService);

export default MODULE_NAME;