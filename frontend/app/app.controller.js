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
    .controller("mainCtrl", function($scope, User) {
      const ctrl = this;

      $scope.getUsers = User.getUsers();
    })
    .controller("uiCtrl", function($scope) {
      $scope.oneAtATime = true;
      $scope.groups = [
        {
          open = false,
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
          open = false,
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
          open = false,
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
          open = false,
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

      $scope.status = {
        isCustomHeaderOpen: false
      };
    });
})();
