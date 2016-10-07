/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })
                .when("/CMS", {
                    templateUrl: "Views/CMS.html",
                    controller: "CMSController",
                    caseInsensitiveMatch: true,
                    activeTab: "CMS"
                })
                .when("/Subscriptions", {
                    templateUrl: "Views/Subscriptions.html",
                    controller: "SubscriptionsController",
                    caseInsensitiveMatch: true,
                    activeTab: "Subscriptions"
                })

                .when("/Posts/New", {
                    templateUrl: "Views/Posts/NewPost.html",
                    controller: "NewPostController",
                    caseInsensitiveMatch: true,
                    activeTab: "CMS"
                })

                .when("/Posts/Edit/:id", {
                    templateUrl: "Views/Posts/EditPost.html",
                    controller: "EditPostController",
                    caseInsensitiveMatch: true,
                    activeTab: "CMS"
                });
        }
    ]);