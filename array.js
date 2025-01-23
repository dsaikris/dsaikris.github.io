
const NS = "http://www.w3.org/2000/svg";
const BOX_SIZE = 50;

function addBox(svg, i, j, largeText, smallText, color) {
  var s = BOX_SIZE;
  var rect = document.createElementNS(NS, "rect");
  rect.setAttribute("width", s);
  rect.setAttribute("height", s);
  rect.setAttribute("x", i*s);
  rect.setAttribute("y", j*s);
  rect.setAttribute("rx", s/5);
  rect.setAttribute("ry", s/5);
  rect.setAttribute("style", "fill:"+ color +";stroke:black;stroke-width:3;opacity:0.5");
  svg.appendChild(rect);

  var text = document.createElementNS(NS, "text");
  text.textContent = smallText;
  text.setAttribute("width", s);
  text.setAttribute("height", s);
  text.setAttribute("x", i*s + s/10);
  text.setAttribute("y", j*s + s/5);
  text.setAttribute("font-size", 12);
  svg.appendChild(text);

  var content = document.createElementNS(NS, "text");
  content.textContent = largeText;
  content.setAttribute("width", s);
  content.setAttribute("height", s);
  content.setAttribute("x", i*s + s/3);
  content.setAttribute("y", j*s + 3*s/4);
  content.setAttribute("font-size", 20);
  svg.appendChild(content);

}

function drawArray(svgId, array, variables, values) {
  var n = array.length >=8? array.length:8;
  var svg = document.getElementById(svgId);
  svg.setAttribute("width", n*BOX_SIZE);
  svg.setAttribute("height", 2*BOX_SIZE);
  for (var i = 0; i < n; i++) {
	addBox(svg, i, 0 ,array[i], i, i<array.length? "red" : "white");
  };
  for (var i = 0; i < n; i++) {
	addBox(svg, i, 1 ,values[i], variables[i], i<values.length? "blue" : "white");
  };
}