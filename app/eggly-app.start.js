angular.module('Eggly', [])
.controller('MainCtrl', function ($scope) {

        //The category and bookmark data from the data/json files
       $scope.categories = [
           {"id": 0, "name": "Development"},
           {"id": 1, "name": "Design"},
           {"id": 2, "name": "Exercise"},
           {"id": 3, "name": "Humor"}
       ];
        $scope.bookmarks = [
            {"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
            {"id":1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
            {"id":2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
            {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
            {"id":4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
            {"id":5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
            {"id":6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
            {"id":7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
            {"id":8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
        ];

        $scope.currentCategory = null;

        //These functions are also called methods
        //this functions tracks which category we are in and allows the bookmarks to be filtered so only the bookmarks for the category are shown
        function setCurrentCategory(category) {
            $scope.currentCategory = category;
        }

        //this uses the tracking of category by current.Category to show which is active or not using ng-class in the html
        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }

        //this lets the function visible in view
        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;

    });