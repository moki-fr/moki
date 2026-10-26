let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;

$(document).mousemove(function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Plus la valeur est faible, plus le retard est important
  const ease = 0.2;

  circleX += (mouseX - circleX) * ease;
  circleY += (mouseY - circleY) * ease;

  $("#follow").css({
    left: circleX-25 + "px",
    top: circleY-25 + "px"
  });

  requestAnimationFrame(animate);
}

animate();


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fadeIn");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
