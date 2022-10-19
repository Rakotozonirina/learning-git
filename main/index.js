function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
    document.getElementById("dropdown").style.display = "block";
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".close").style.display = "block";
    document.querySelector(".close").addEventListener("click", function(){
        document.getElementById("dropdown").style.display = "none";
        document.querySelector(".close").style.display = "none";
        document.querySelector(".menu").style.display = "block";
    });
}