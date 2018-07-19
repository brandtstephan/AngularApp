(function () {
  "use strict";
  angular
    .module("app")
    .directive("dataChart", function (d3) {
      return {
        restrict: "E",
        template: '<svg id="chart" width="960" height="500"></svg>',
        link: function ($scope, element, attrs) {
          var data = [
            { name: "Javascript", value: "7" },
            { name: "Java", value: "7" },
            { name: "C++", value: "3" },
            { name: "HTML", value: "5" },
            { name: "CSS", value: "5" },
            { name: "Python", value: "5" },
            { name: "C#", value: "6" }
          ];
          console.log("hello");
          var svg = d3.select("svg"),
            margin = { top: 20, right: 20, bottom: 30, left: 40 },
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom;

          var x = d3
            .scaleBand()
            .rangeRound([0, width])
            .padding(0.1),
            y = d3.scaleLinear().rangeRound([height, 0]);

          var g = svg
            .append("g")
            .attr(
              "transform",
              "translate(" + margin.left + "," + margin.top + ")"
            );

          x.domain(
            data.map(function (d) {
              return d.name;
            })
          );
          y.domain([
            0,
            d3.max(data, function (d) {
              return d.value;
            })
          ]);

          g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

          g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y).ticks(10, "%"))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Frequency");

          g.selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
              return x(d.name);
            })
            .attr("y", function (d) {
              return y(d.value);
            })
            .attr("width", x.bandwidth())
            .attr("height", function (d) {
              return height - y(d.value);
            });

        }
      };
    })
    .factory("User", function () {
      const users = [
        {
          name: "Stephan",
          last: "Brandt"
        }
      ];

      let getUsers = () => {
        return { name: users[0].name, last: users[0].last };
      };

      return {
        getUsers: getUsers
      };
    })
    .controller("mainCtrl", function ($scope, User, commands) {
      const ctrl = this;

      $scope.commands = commands;
      $scope.getUsers = User.getUsers();
      $scope.testRequest = () => {
        $scope.commands.requestTest().then(reply => {
          console.log(reply);
        });
      };
    })
    .controller("uiCtrl", function ($scope, commands, socket) {
      $scope.oneAtATime = true;

      $scope.commands = commands;

      $scope.groups = "";

      $scope.commands.requestData().then(reply => {
        console.log(reply);

        $scope.$apply(() => {
          $scope.groups = reply.groups;
        })
      });

      /*$scope.data = () => {
        $scope.commands.requestData().then(reply => {
          console.log(reply);
          $scope.$apply(() => {
            $scope.groups = reply.groups;
          });
        });
      };
      $scope.data();
      */

      /*socket.emit(
        "data",
        {},
        {
          apply: args => {
            $scope.groups = args.groups;
          }
        }
      );
    */
      console.log($scope.groups);

      $scope.radioModel = "Left";
    });
})();
