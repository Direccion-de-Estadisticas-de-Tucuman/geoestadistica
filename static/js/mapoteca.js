//estoy seleccionando el li que justo debajo tiene un ul
const listItemsWithSubList = document.querySelectorAll(
  ".mapoteca-nav li:has(> ul)"
);

//para cada uno de estos li seleccionados

listItemsWithSubList.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    // Le asigno la clase 'shown' al ul dentro del li, no al li
    const subList = item.querySelector("ul");
    subList.classList.toggle("shown");
  });
});
