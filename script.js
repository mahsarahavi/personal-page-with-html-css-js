const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector(".icon")

if(localStorage.getItem("darkMode") === "enabled"){
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}

themeToggle.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("darkMode", "enabled");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else{
        localStorage.setItem("darkMode", "disabled");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun")
    }
});

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link =>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        navLinks.forEach(link =>{
            link.classList.remove("active");
        })
        const target = document.getElementById(link.getAttribute('data-target'))
        sections.forEach(section =>{
            section.style.display = "none";
            section.classList.remove('active');
        });
        target.style.display = "block";
        link.classList.add("active");
        setTimeout(() => {
            target.classList.add("active");
        }, 10);
    });
})

const menuToggle = document.getElementById("menu-toggle");
const navMain = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(){
    navMain.classList.toggle("active");
});


const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thanks ${name}! Your message has been sent.`);

    this.reset();
});