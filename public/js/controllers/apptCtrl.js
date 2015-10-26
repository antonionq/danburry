var app = angular.module('dburry');

app.controller('appt', function ($scope, apptService) {

  //Main Object
  $scope.newAppointment = {};

  //Haircut
    $scope.haircuts = [
        {value: 'haircut1', displayName: 'Basic Haircut (w/ Beard Trim)'},
        {value: 'haircut2', displayName: "Gentleman's Haircut"},
        {value: 'haircut3', displayName: 'Face Shave'},
        {value: 'haircut4', displayName: 'Head Shave w/ Straight Razor'},
        {value: 'haircut5', displayName: 'Beard Trim'}
     ]

    // $scope.timeSlots = [
    //     {value: 'first', displayName: '10:00'},
    //     {value: 'second', displayName: '11:00'},
    //     {value: 'third', displayName: '12:00'},
    //     {value: 'fourth', displayName: '1:00'},
    //     {value: 'fifth', displayName: '2:00'},
    //     {value: 'sixth', displayName: '3:00'},
    //     {value: 'seventh', displayName: '4:00'},
    //     {value: 'eighth', displayName: '5:00'}
    //  ]

  //Barber
    $scope.barbers = [
        {value: 'danB', displayName: 'Dan'},
        {value: 'jamesM', displayName: 'James'}
     ]


  //Date
    var currentTime = new Date();
    $scope.currentTime = currentTime;
    $scope.month = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    $scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    $scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    $scope.disable = [false, 1, 2];
    $scope.today = 'Today';
    $scope.clear = 'Clear';
    $scope.close = 'Close';
    var days = 16;
    $scope.minDate = (new Date($scope.currentTime.getTime() + ( 1000 * 60 * 60 * 6))).toLocaleDateString('en-US');
    $scope.maxDate = (new Date($scope.currentTime.getTime() + ( 1000 * 60 * 60 *24 * days ))).toLocaleDateString('en-US');
    $scope.onStart = function () {
        // console.log('onStart');
    };
    $scope.onRender = function () {
        // console.log('onRender');
    };
    $scope.onOpen = function () {
        // console.log('onOpen');
    };
    $scope.onClose = function () {
        // console.log('onClose');
    };
    $scope.onSet = function () {
      //  console.log($scope.currentTime)
    };
    $scope.onStop = function () {
        // console.log('onStop');
    };

    //Info

    $scope.haircutType = "";
    $scope.barberSelect = "";
    $scope.firstNameSelect = "";
    $scope.lastNameSelect = "";
    $scope.phoneSelect = "";
    $scope.emailSelect = "";

    $scope.submit = function () {
      // console.log($scope.haircutSelect)
      // console.log($scope.barberSelect)
      // console.log($scope.currentTime)
      // console.log($scope.firstNameSelect)
      // console.log($scope.lastNameSelect)
      // console.log($scope.phoneSelect)
      // console.log($scope.emailSelect)

      currentTime.toLocaleDateString('en-US')

      var data = {
        "haircutType": $scope.haircutType,
        "barber": $scope.barberSelect,
        "apptDate": $scope.currentTime,
        "firstName": $scope.firstNameSelect,
        "lastName": $scope.lastNameSelect,
        "phoneNum": $scope.phoneSelect,
        "email": $scope.emailSelect
      }

      apptService.addAppt(data);
      if(data.email = $scope.emailSelect) {
        Materialize.toast('Submitted', 3000);
      }
      else {
        Materialize.toast('Please Fill Out All Fields', 3000);
      }

      console.log($scope.currentTime);
      console.log(data.apptDate);

    }

})
