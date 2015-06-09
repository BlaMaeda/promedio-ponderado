angular.module('MyApp', [])
.controller('MyCtrl', ['$scope', function($scope) {
    $scope.grades = [
        {grade: 7.0, weight: 1.0},
        {grade: 7.0, weight: 1.0},
        {grade: 7.0, weight: 1.0}
    ];

    $scope.weightedAverage = function(grades) {
        var weightsSum = grades
            .map(function(grade) {return +grade.weight;})
            .reduce(function(a, b) {return a+b;}, 0);
        return grades
            .map(function(grade) {
                return +grade.weight * grade.grade;
            })
            .reduce(function(a, b) {return a+b;}, 0) / weightsSum;
    }
}]);
