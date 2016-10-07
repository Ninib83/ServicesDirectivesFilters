angular.module("mainModule")
    .directive("subscribeButton", [
        function () {
            return {
                restrict: "E",
                scope: {
                    clicked: "=ngModel"
                },
                templateUrl: "Scripts/Directives/Subscribe-Button/Subscribe-Button.html"
            };
        }
    ]);