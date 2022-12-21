export function openSearch() {
    document.getElementById("bcsearch").style.width = "100%";
  }
  export function openNav() {
    document.getElementById("bcsearch2").style.width = "100%";
  }
  export function closeNav() {
    document.getElementById("bcsearch2").style.width = "0%";
    
  }

  


  export function closeFormChat() {
    document.getElementById("bcmyFormChat").style.display = "none";
  }

  export function myFunction_change(x) {
    x.classList.toggle("change");
  }

  

  // export function openNav() {
  //   document.getElementById("sidenav2").style.width = "250px";
  // }

  // export function closeNav() {
  //   document.getElementById("sidenav2").style.width = "0";
  // }


  export function myFunction_mode() {
    var element = document.body;
    element.classList.toggle("body");
 }



