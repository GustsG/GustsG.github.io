function switchSection() {
  var section1 = document.getElementById('pirmais');
  var section2 = document.getElementById('pirmaisdivi');

  if (section1.style.display === 'none') {
    section1.style.display = 'block';
    section2.style.display = 'none';
  } else {
    section1.style.display = 'none';
    section2.style.display = 'block';
  }
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })

