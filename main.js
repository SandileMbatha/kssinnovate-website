// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Contact form handling
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword_or_app_password'
    }
  });
  
  const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'recipient@example.com',
    subject: 'Subject Here',
    text: 'Your message here'
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
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
