const scrollRevealOption = {
    distance: "40px",
    origin: "top",
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    duration:700,
};

const sr = ScrollReveal();

// Apply the reveal effect
sr.reveal(".icon", {
    ...scrollRevealOption,
    delay: 500
});

// feature container
ScrollReveal().reveal(".icon", {
    ...scrollRevealOption,
    interval: 500,
  });


  
  function initMap() {
    const mapOptions = {
      zoom: 8,
      center: { lat: -1.2921, lng: 36.8219 } // Coordinates of Nairobi, Kenya
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);


    const marker = new google.maps.Marker({
      position: { lat: -1.286389, lng: 36.817223 }, // Custom marker position
      map: map,
      title: "Custom Location"
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "<h4>Nairobi</h4><p>The capital city of Kenya.</p>"
    });

    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  }

  const sections = document.querySelectorAll('.menu-menu-container li a'); 
const navLinks = document.querySelectorAll('.photo-holder'); 

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Use window.scrollY instead of pageYOffset
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
 
