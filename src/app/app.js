/*jshint esversion: 6 */
import angular from 'angular';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controllerAs: 'app'
  };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app);

export default MODULE_NAME;