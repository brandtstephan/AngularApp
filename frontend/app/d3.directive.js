(function () {
    "use strict";
    angular
        .module("app")
        .directive("d3Directive", function () {
            return {
                restrict: "AE",
                replace: true,
                scope: {

                },
                templateUrl: "app/d3-template.html",

                link: function (scope, element, attrs) {
                    var data = [
                        { name: "Javascript", value: "2.8" },
                        { name: "Python", value: "1.5" },
                        { name: "C++", value: "0.8" },
                        { name: "HTML", value: "2.5" },
                        { name: "CSS", value: "2" },
                        { name: "Java", value: "3.3" },
                        { name: "C#", value: "2.7" }
                    ];

                    var names = [
                        { name: "Newcomer" },
                        { name: "Beginner" },
                        { name: "Apprentice" },
                        { name: "Junior" },
                        { name: "Senior" },
                        { name: "Master" },
                        { name: "Guru" }
                    ]

                    var svg = d3.select("svg"),
                        margin = { top: 20, right: 20, bottom: 30, left: 60 },
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
                        data.length - 1
                    ])

                    var yAxis = d3.axisLeft(y).tickFormat(function (d) {
                        console.log(d);
                        return names[d] ? names[d].name : "";
                    });

                    g.append("g")
                        .attr("class", "axis axis--x")
                        .attr("transform", "translate(0," + height + ")")
                        .call(d3.axisBottom(x));

                    g.append("g")
                        .attr("class", "axis axis--y")
                        .call(yAxis)
                        .append("text")
                        .attr("transform", "rotate(-90)")
                        .attr("y", 6)
                        .attr("dy", "0.71em")
                        .attr("text-anchor", "end")
                        .text("Frequency");





                    g.selectAll("#bar")
                        .data(data)
                        .enter()
                        .append("rect")
                        .attr("id", "bar")
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
        });
})();