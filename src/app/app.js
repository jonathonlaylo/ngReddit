/*jshint esversion: 6 */
import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {DefaultState, DefaultCtrl} from './default';
// import DefaultCtrl from './default/controller';
import '../style/app.css';

console.log(DefaultState);

let app = () => {
  return {
    template: require('./app.html'),
    // controllerAs: 'app'
  };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state(DefaultState.name, DefaultState);
  })
  .directive('app', app)
  .run(($state) =>{
    $state.go('default');
  })
  .controller('DefaultCtrl', DefaultCtrl);


export default MODULE_NAME;