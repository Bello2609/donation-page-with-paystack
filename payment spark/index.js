const menuSlide = ()=>{
    const burger = document.querySelector(".burger");
    const menu_links = document.querySelector(".menu");
    const menuLinks = document.querySelectorAll(".menu li");
    
    burger.addEventListener("click", ()=>{
        //toggle function
        menu_links.classList.toggle("menu-active");
        //animation
         menuLinks.forEach((link, index)=>{
             if(link.style.animation){
                 link.style.animation = "";
             }
             else{
                link.style.animation = `menuLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`; 
             }
    });
    //burger animation
    burger.classList.toggle("toggle");
    });
   
}
menuSlide();