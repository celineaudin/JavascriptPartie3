function onClickRed() {
  document.getElementById("demo").style.color = "red";
}
function onClickBlue() {
  document.getElementById("demo").style.color = "blue";
}
function onClickGreen() {
  document.getElementById("demo").style.color = "green";
}

//SOLUTION 2
//j'ai crée une fonction à laquelle j'ai passé deux paramètres
//function onClickColor (id, color) {
//j'ai appliqué à mon élément portant un id, la couleur que je passe en argument de ma fonction
//document.getElementById(id).style.color = color;
//}
//<button type="button" onclick="onClickColor('demo','red')"></button>
//<button type="button" onclick="onClickColor('demo','blue')"></button>
//<button type="button" onclick="onClickColor('demo','green')"></button>
