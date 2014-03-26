var json = d3.json('languages.json', function(error, data) {

  var familyNumberData = [];
  data.result.forEach(function(object) {
    langs = object["/language/language_family/languages"]
    familyNumberData.push({name: object.name, languages: langs});
  });

  console.log(familyNumberData[0]);

  d3.select('#bar-chart')
    .selectAll("div")
    .data(familyNumberData)
    .enter().append("div")
    .style("width", function(d){
      return d.languages.length * 10 + "px";
    })
    .text(function(d) { return "" + d.name + " " + d.languages.length; });

});
