// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Contact form handling
  let public_key = "R6pBVvdsqv0wN_Gqi"
  let service_id = "service_j6rxabe"
  let template_id = "template_2g04g09"
  emailjs.init(public_key);

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Add current time dynamically to the form
      const now = new Date().toLocaleString();
      let timeInput = contactForm.querySelector("input[name='time']");

      // If time field doesn't exist, create and append it
      if (!timeInput) {
        timeInput = document.createElement("input");
        timeInput.type = "hidden";
        timeInput.name = "time";
        contactForm.appendChild(timeInput);
      }
      timeInput.value = now;

      // Send form using EmailJS
      emailjs.sendForm(service_id, template_id, this)
        .then(function () {
          alert("✅ Message sent successfully!");
          contactForm.reset();
        }, function (error) {
          console.error("❌ Error sending message:", error);
          alert("Failed to send message. Please try again.");
        });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
  
      // Skip if href is just "#"
      if (!targetId || targetId === '#') return;
  
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault(); // only prevent default when we are scrolling
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Toast notification function
function showToast(title, message) {
  // Create toast elements
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const toastContent = document.createElement('div');
  
  const toastTitle = document.createElement('div');
  toastTitle.className = 'toast-title';
  toastTitle.textContent = title;
  
  const toastDescription = document.createElement('div');
  toastDescription.className = 'toast-description';
  toastDescription.textContent = message;
  
  toastContent.appendChild(toastTitle);
  toastContent.appendChild(toastDescription);
  toast.appendChild(toastContent);
  
  // Add toast to document
  document.body.appendChild(toast);
  
  // Show toast
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  // Hide toast after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    
    // Remove toast from DOM after transition
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 5000);
}
