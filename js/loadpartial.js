function loadPartial(path){
    fetch(path)
    .then(content => content.text())
    .then(content => {
        const main = document.querySelector("main");
        let position = null;
        if(path.endsWith("header.html")){
            position = "beforebegin";
        }else{
            position = "beforeend";
        }
        main.insertAdjacentHTML(position,content)
    }
    )
}
export default loadPartial