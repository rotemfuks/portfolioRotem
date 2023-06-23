/* ================ toggle icon navbar=========== */

let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};






/* ================ scroll sections active link=========== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            });
        };
    });

    /* ================ sticky navbar=========== */
let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY>100);


/* ================ remove toggle icon and navbar when click navbar link (scroll)=========== */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};



    /* ================ scroll reveal =========== */
          ScrollReveal({
          /*   reset: true, */
             distance:'80px',
             duration:2000,
             delay:200
             });

             ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

             ScrollReveal().reveal('.home-img, .services-container, .protfolio-box, contact form', { origin: 'bottom' });

             ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

             ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


    /* ================ typed script =========== */
  
    const typed = new Typed ('.multiple-text',{
strings: ['Frontend Developer', 'Backend developer'],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
    });



/*

    /* validation contact 



    function validateForm(event) {
  event.preventDefault(); // Prevent form submission if validation fails

  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var emailSubject = document.getElementById("emailSubject").value;
  var message = document.getElementById("message").value;

  // Validate full name field
  if (fullName.trim() === "") {
    alert("Please enter your full name");
    return;
  }

  // Validate email field
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Validate mobile number field
  if (mobileNumber.trim() === "") {
    alert("Please enter your mobile number");
    return;
  }

  // Validate email subject field
  if (emailSubject.trim() === "") {
    alert("Please enter the email subject");
    return;
  }

  // Validate message field
  if (message.trim() === "") {
    alert("Please enter your message");
    return;
  }

  // If all validations pass, you can proceed with form submission
  // You can send the form data to a server using AJAX or perform any other necessary actions
  // For example, you can use fetch() or XMLHttpRequest to send the data to a server

  // Clear form fields after submission
  document.getElementById("contactForm").reset();

  // Display success message
  alert("Thank you! Your message has been sent.");
}


*/