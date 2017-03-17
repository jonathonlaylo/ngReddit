/*jshint esversion: 6 */
export const programmerhumorCtrl = class programmerhumorCtrl{
  constructor($scope, programmerhumorService){
    this.title =  "programmerhumor";
    programmerhumorService.getPosts()
    .then(({
      status,
      data : {
        data : {
          childrenK
        }
      }
    }) => {
      if (status !== 200){
        $scope.error = `Error fetching /r/programmerhumor\nStatus: ${status}`;
      }
      $scope.posts = children
        .filter(child => child.data.precview)
        .map(child => child.data);
    })
    .catch( err => console.log(err));
  }
};