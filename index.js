function slideshow() {
    let slider = [
      "images/learn_with_me-1920-5da5b0.png",
      "images/isp24-1920-f2b840.png",
  
      "images/eat_sleep_intern_repeat-1255-f0ce94.png",
      "images/college_specific_slab1_ext-1255-ce0e4d.png",

      "images/home_internships-1920.png",
      "images/is_social_work_movement_aug21-575-b0dbc0.png",
    ];
  
    let div = document.getElementById("slider");
    let div_1 = document.getElementById("dot");
  
    let img = document.createElement("img");
    let dot1 = document.getElementById("button2");
  
    let add = document.createElement("div");
    let add1 = document.createElement("div");
    let add2 = document.createElement("div");
    let add3 = document.createElement("div");
    let add4 = document.createElement("div")
    let add5 = document.createElement("div")
    add.id = "five";
  
    let i = 0;
  
    img.src = slider[0];
    img.setAttribute("id", "carasol");
  
    div.insertBefore(img, dot1);
    if (i == 0) {
      div_1.append(add, add1, add2, add3, add4, add5);
    }
  
    setInterval(function () {
      img.src = slider[i];
      if (i == 0) {
        div_1.append(add, add1, add2, add3, add4, add5);
      }
  
      if (i == 1) {
        div_1.append(add1, add, add2, add3, add4, add5);
      }
      if (i == 2) {
        div_1.append(add1, add2, add, add3, add4, add5);
      }
      if (i == 3) {
        div_1.append(add1, add2, add3, add, add4, add5);
      }

      if (i == 4) {
        div_1.append(add1, add2, add3, add, add4, add5);
      }

      if (i == 5) {
        div_1.append(add1, add2, add3, add, add4, add5);
      }
  
      i++;
  
      if (i == 5) {
        i = 0;
      }
    }, 3000);
  }
  slideshow();