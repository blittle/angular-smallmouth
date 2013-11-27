angular-smallmouth
==================

A simple [Firebase](http://firebase.com)/[SmallMouth](https://github.com/blittle/smallmouth) adapter for AngularJS projects. Similar to [AngularFire](http://angularfire.com/) but more lightweight.

##Motivation
In building an Angular project with Firebase, we found AngularFire to be unintuitive and complex.
We simply wanted a module which would automate adding snapshot.val() to an angular scope and watch 
that value on the scope and update a firebase reference. This library solves that need.

##Installation
Install angular-smallmouth by downloading angular-smallmouth.min.js into your project or automatically through bower:

```bash
bower install angular-smallmouth
```

After adding a `<script src="bower_components/angular-smallmouth/angular-smallmouth.min.js"></script>` to your index html file, make sure you add angular-smallmouth as a dependency to your angular project:

```javascript
var myApp = angular.module("MyApp", ["angular-smallmouth"]);
```

##Example
An example angular controller with SmallMouth and angular-smallmouth:

```javascript
function UserController($scope, AngularSmallMouth) {
  // instead of using SmallMouth, you can use a FireBase statement, ie: 
  // var users = new Firebase("https://<my-firebase>.firebaseio.com/users");
  var users = new SmallMouth.Resource("http://<my-largemouth-instance>/users");

  SmallMouthAdapter.watchResource(users, $scope, 'users');

  $scope.addUser = function() {
  	users.push({
  		name: $scope.newUser
  	});
  	$scope.newUser = "";
  }
}
```

```html
<div ng-controller="ChatsController">
  <ul ng-repeat="user in users">
    <li>{{user.name}}</li>
  </ul>
  <input type="text" ng-model="newUser"/>
  <button type="submit" ng-click="addUser()">Add New User</button>
</div>
```

##LargeMouth and SmallMouth
[LargeMouth](https://github.com/blittle/largemouth) is an open-source replacement for Firebase written on top of NodeJS and Socket.io. [SmallMouth](https://github.com/blittle/smallmouth) is the client library for LargeMouth.