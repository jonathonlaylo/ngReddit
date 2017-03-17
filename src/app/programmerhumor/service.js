/*jshint esversion: 6 */
export const programmerhumorServiceName = 'programmerhumor';
export const programmerhumorService = [
  '$http',
  class programmerhumorService {
    constructor($http){
      this.$http = $http;
      this.endpoint = 'https://www.reddit.com/r/programmerhumor.json';
      }
      getPosts(){
        return this.$http.get(this.endpoint);
    }
  }
];