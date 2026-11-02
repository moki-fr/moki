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
    left: circleX + "px",
    top: circleY + "px"
  });

  requestAnimationFrame(animate);
}

animate();


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fadeIn");

    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    elements.forEach(element => {
        observer.observe(element);
    });
});


const follow = document.querySelector("#follow");
const hint = follow.querySelector("p");

document.querySelectorAll("[data-hint]").forEach(el => {
    el.addEventListener("mouseenter", () => {
        hint.textContent = el.dataset.hint;
        follow.classList.add("has-text");
    });

    el.addEventListener("mouseleave", () => {
        hint.textContent = "";
        follow.classList.remove("has-text");
    });
});
