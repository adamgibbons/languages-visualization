var treeJSON = d3.json('languages.json', function(error, treeData) {

  console.log(treeData.result);

  var totalNodes = 0;

  var tree = d3.layout.tree()
    .size([500, 500]);
    //.links(5)

  var diagonal = d3.svg.diagonal()
    .projection(function(d) {
      return [d.y, d.x];
    });

  var baseSvg = d3.
})