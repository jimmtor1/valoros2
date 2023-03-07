let listElements = document.querySelectorAll('.despliegue');

listElements.forEach(listElement => {
  listElement.addEventListener('click', ()=>{

    listElement.classList.toggle('iconarrow');

    let height = 0;
    let menu = listElement.nextElementSibling;

    if(menu.clientHeight == "0"){
      height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`;
     
  });
});