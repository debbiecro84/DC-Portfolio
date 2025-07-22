document.addEventListener('DOMContentLoaded', function() {
    var logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        logoImg.addEventListener('click', function(e) {
            e.stopPropagation();
            logoImg.classList.add('rotate-right');
        });
        logoImg.addEventListener('mouseleave', function() {
            logoImg.classList.remove('rotate-right');
        });
        document.addEventListener('click', function(e) {
            if (!logoImg.contains(e.target)) {
                logoImg.classList.remove('rotate-right');
            }
        });
    }
    // Burger menu for mobile navigation
    var burger = document.querySelector('.burger');
    var navLinks = document.querySelector('.nav-links');
    var navLinkItems = document.querySelectorAll('.nav-link');
    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
        // Close menu when a nav-link is clicked (on mobile)
        navLinkItems.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            });
        });
    }
}); 


function openModal(projectName, links) {
  document.getElementById("modal-title").innerText = projectName;

  const container = document.getElementById("modal-links");
  container.innerHTML = "";
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.innerText = link.text;
    container.appendChild(a);
  });

  document.getElementById("projectModal").style.display = "block";
}

document.querySelector(".close").onclick = function() {
  document.getElementById("projectModal").style.display = "none";
};

window.onclick = function(event) {
  const modal = document.getElementById("projectModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
