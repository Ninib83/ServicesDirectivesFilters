angular.module("mainModule")
    .directive("voteUpButton", [
        function () {
            return {
                restrict: "E",
                scope: {
                    clicked: "=ngModel"
                },
                templateUrl: "Scripts/Directives/Vote-Up-Button/Vote-Up-Button.html"
            };
        }
    ]);