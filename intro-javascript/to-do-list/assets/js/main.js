console.log("olha aqui.")
var addWapper = document.getElementById('add');
var descritionWapper = document.getElementById('descrition')
var listWapper = document.getElementById('list');
var list = [];
// console.log(addWapper)
// console.log(listWapper)
// console.log(list)

addWapper.addEventListener("click", () => {
  console.log(descritionWapper.value);
  createItem(descritionWapper.value);
})


function createItem(name) {
  // create ckeckbox input e add event checked
  const newInput = document.createElement("input");
  newInput.type = "checkbox"
  newInput.addEventListener('click', (e) => {
    console.log(e.target.checked)
    const liTarger = document.getElementById(name)
    if (e.target.checked == true)
      liTarger.style.textDecoration = "line-through";
    else {
      liTarger.style.textDecoration = "none";
    }
  });

  // create li e add list
  const node = document.createElement("LI");
  node.id = name;
  const textNode = document.createTextNode(name)
  node.appendChild(newInput);
  node.appendChild(textNode);
  console.log(node);
  listWapper.appendChild(node)
}

