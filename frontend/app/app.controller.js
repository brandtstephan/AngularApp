(function() {
  "use strict";
  angular
    .module("app")
    .factory("User", function() {
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
    .controller("mainCtrl", function($scope, User, commands) {
      const ctrl = this;

      $scope.commands = commands;
      $scope.getUsers = User.getUsers();
      $scope.testRequest = ()=>{
        $scope.commands.requestTest()
        .then((reply)=>{
          console.log(reply);
        });
      };
    })
    .controller("uiCtrl", function($scope) {
      $scope.oneAtATime = true;
      $scope.groups = [
        {
          open: false,
          title: "Information",
          content: [
            {
              title: "Adress",
              content: "Kochstrasse 5, 54290 Trier"
            },
            {
              title: "Birthday",
              content: "12.07.1993 in Caracas, Venezuela"
            },
            {
              title: "Phone",
              content: "+49 17663118"
            },
            {
              title: "Email",
              content: "stephan.alexander.brandt@gmail.com"
            },
            {
              title: "Nationality",
              content: "German"
            }
          ]
        },
        {
          open: false,
          title: "Bildung",
          content: [
            {
              title: "2014-Jetzt",
              content:
                "Hochschulebildung an der Hochschule Trier Fachrichtung: Informatik. \nSchwerpunkt: Digitale Medien und Spieler"
            },
            {
              title: "2013-2014",
              content:
                "Internationale Studienkolleg an der Hochschule Kaiserslautern\nSchwerpunkt: Naturwissenschaft"
            },
            {
              title: "2011-2012",
              content: "Sprachschule Schwerpunkt: Deutsch als Fremdsprache"
            },
            {
              title: "2000-2011",
              content:
                "Primär-und Sekundärschule an der Champagnat Schule in\nCaracas, Venezuela"
            }
          ]
        },
        {
          open: false,
          title: "Technische Details",
          content: [
            {
              title: "Programmiersprachen",
              content: "Java, C++, C#, JavaScript, HTML, CSS, Python"
            },
            {
              title: "Werkzeuge",
              content:
                "Android Studioes, Unity3D, Node.js und npm, Repository, Adobe XD, Bash für Linux, Verschidene IDEs"
            }
          ]
        },
        {
          open: false,
          title: "Berufserfahrung",
          content: [
            {
              title: "2016-2017",
              content: "Eiskaffe Christis Trier: Verkäufer."
            },
            {
              title: "2012-2014",
              content: "Kaffe Nr. 15 Kaiserslautern: Kellner und Barkeeper.	"
            }
          ]
        }
      ];

      $scope.radioModel = "Left";
    });

  ////////////CHART//////////
  var data = [
    { name: "Javascript", value: "7" },
    { name: "Java", value: "7" },
    { name: "C++", value: "3" },
    { name: "HTML", value: "5" },
    { name: "CSS", value: "5" },
    { name: "Python", value: "5" },
    { name: "C#", value: "6" }
  ];

  var margin = { top: 20, right: 30, bottom: 30, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);

  var y = d3.scale.linear().range([height, 0]);

  var xAxis = d3.svg
    .axis()
    .scale(x)
    .orient("bottom");

  var yAxis = d3.svg
    .axis()
    .scale(y)
    .orient("left");

  var chart = d3
    .select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  x.domain(
    data.map(function(d) {
      return d.name;
    })
  );
  y.domain([
    0,
    d3.max(data, function(d) {
      return d.value;
    })
  ]);

  chart
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  chart
    .append("g")
    .attr("class", "y axis")
    .call(yAxis);

  chart
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function(d) {
      return x(d.name);
    })
    .attr("y", function(d) {
      return y(d.value);
    })
    .attr("height", function(d) {
      return height - y(d.value);
    })
    .attr("width", x.rangeBand());
})();
