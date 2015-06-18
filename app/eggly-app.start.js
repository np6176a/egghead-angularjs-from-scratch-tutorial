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

            cancelCreating();
            cancelEditing();
        }

        //this uses the tracking of category by current.Category to show which is active or not using ng-class in the html
        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }

        //this lets the functions available to be used in view by attaching them to scope
        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;

        //--------------------------------------------
        // CRUD
        //--------------------------------------------

        //to reset the form
        function resetCreateForm() {
            $scope.newBookmark = {
                title: '',
                url: '',
                category: $scope.currentCategory.name
            };
        }
        //to push the newly created values in the view to the data stored on bookmarks
        function createBookmark(bookmark) {
            bookmark.id = $scope.bookmarks.length;
            $scope.bookmarks.push(bookmark);

            resetCreateForm();
        }

        $scope.createBookmark = createBookmark;

        //-----------------------------------------------------
        //    Creating and editing states
        //------------------------------------------------------

        //the default state
        $scope.isCreating = false;
        $scope.isEditing = false;

        //manages the creating and editing functionalities so that both are available at the same time, and one of either is
        function startCreating() {
            $scope.isCreating = true;
            $scope.isEditing = false;

            resetCreateForm();
        }
        function cancelCreating() {
            $scope.isCreating = false;
        }

        function startEditing() {
            $scope.isCreating = false;
            $scope.isEditing = true;
        }
        function cancelEditing() {
            $scope.isEditing = false;
        }

        function shouldShowCreating() {
            return $scope.currentCategory && !$scope.isEditing;
        }
        function shouldShowEditing() {
            return $scope.isEditing && !$scope.isCreating;
        }

        //attaching the functions to scope to allow them to be used in view
        $scope.startCreating = startCreating;
        $scope.cancelCreating = cancelCreating;
        $scope.startEditing = startEditing;
        $scope.cancelEditing = cancelEditing;
        $scope.shouldShowCreating = shouldShowCreating;
        $scope.shouldShowEditing = shouldShowEditing;
    });