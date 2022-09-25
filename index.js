const navbar=document.querySelector('.navbar')
const navbarOffsetTop = navbar.offsetTop
const sections = document.querySelectorAll('section')
const navbarlinks = document.querySelectorAll('.navbar-link')
window.addEventListener('scroll' ,()=>{

    if(window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add('sticky')
        
    }else{
        navbar.classList.remove('sticky')
    }

    sections.forEach((section , i) =>{
        if(window.pageYOffset >= section.offsetTop -10) {
        navbarlinks.forEach(navbarlink =>{
            navbarlink.classList.remove('change')
        })
        navbarlinks[i].classList.add('change')
        }
       
    })
})