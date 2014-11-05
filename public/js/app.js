// (function() {
//   var app = angular.module('registerApp', []);

//   app.controller('RegisterController', function(){

//       this.users = AllUsers;
//   });


// app.controller('AddUser', function(){

//   this.AllUsers = {};
  
//   this.addUser = function(user){
//     AllUsers.push(this.user);
//     //console.log("hello from AddComment");
//      console.log(user);
//      };
//  });


// var AllUsers=[{
//   email: 'q@mail.com',
//   password: 'itsmebdy'
// }];


//   })();


  (function() {
  var app = angular.module('registerApp', []);

  app.controller('RegisterController', function($http){

      var _this = this;
      
      _this.users = [{
      email: 'q@mail.com',
      password: 'itsmebdy'
      }];


      $http.get('/api/user').success(function(data){
        _this.users = data;
      })
      .error(function(data){
        console.log('Error');
      });


      this.user = {};
  
      this.addUser = function(user){
         _this.users.push(this.user);
        //console.log("hello from AddComment");
         console.log(users);
     };//addUser



  });







  })();