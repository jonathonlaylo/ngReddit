/*jshint esversion: 6 */
export const AwwCtrl = class AwwCtrl {
  constructor($scope, AwwService) {
    this.title = "aww";
    // console.log(AwwService.getPosts());
    AwwService.getPosts()
      // .then((data) =>{
      // $scope.post = {data: {data: {data}}};
      //   console.log(data.data.data.children);
      // });
      .then( ({
          status,
          data : {
            data : {
              children
            }
          }
        }) => {
          if( status !== 200 ){
            $scope.error = `Error fetching /r/aww.json\nStatus: ${status}`;
          }
          $scope.posts = children
            .filter( child => child.data.preview )
            .map( child => child.data );
        })
        .catch( err => console.error(err) );
  }
};