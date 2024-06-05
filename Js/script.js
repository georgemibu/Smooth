let links = document.querySelectorAll('.header .navbar a');
console.log(links)

links.forEach(target =>{
    
    target.onclick = function(e){
        e.preventDefault();
        let href = target.getAttribute('href')
        let offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        })
    }
})