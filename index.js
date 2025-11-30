let menu = document.getElementById("menu");
let navbar = document.querySelectorAll(".navbar ul li");

menu.onclick = () =>{
    navbar.forEach(item=>{
        item.classList.toggle('active');
    })

}
window.onscroll =()=>{
    navbar.forEach(item=>{
        item.classList.remove('active');
    })
}