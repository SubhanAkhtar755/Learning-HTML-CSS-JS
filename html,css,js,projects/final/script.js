document.addEventListener('DOMContentLoaded', () => {
  const navToggle1 = document.getElementById('navToggle1');
  const navLinks1 = navToggle1.closest('.navbar').querySelector('.nav-links');

  navToggle1.addEventListener('click', () => {
    navLinks1.classList.toggle('active');
    
    // Animate hamburger menu
    const spans1 = navToggle1.getElementsByTagName('span');
    navToggle1.classList.toggle('active');
    
    if (navToggle1.classList.contains('active')) {
      spans1[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans1[1].style.opacity = '0';
      spans1[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans1[0].style.transform = 'none';
      spans1[1].style.opacity = '1';
      spans1[2].style.transform = 'none';
    }
  });

  // Second Navbar Toggle
  const navToggle2 = document.getElementById('navToggle2');
  const navLinks2 = navToggle2.closest('.navbar').querySelector('.nav-links');
  
  navToggle2.addEventListener('click', () => {
    navLinks2.classList.toggle('active');
    navToggle2.classList.toggle('active');
  });

  // Add this sidebar code
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && 
        !sidebarToggle.contains(e.target) && 
        sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }
  });

  // Language selection
  const langLinks = document.querySelectorAll('[data-lang]');
  langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = e.target.getAttribute('data-lang');
      // Add your language switching logic here
      console.log(`Switching to ${lang}`);
    });
  });

  // Add mobile dropdown functionality
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    
    // Only for mobile view
    if (window.innerWidth <= 768) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
        
        // Close other dropdowns
        dropdowns.forEach(other => {
          if (other !== dropdown) {
            other.classList.remove('active');
          }
        });
      });
    }
  });

  // Add click handlers for mobile collapsible sections
  const collapsibleSections = document.querySelectorAll('.mobile-collapsible');
  
  collapsibleSections.forEach(section => {
    const header = section.querySelector('.section-header');
    header.addEventListener('click', () => {
      section.classList.toggle('active');
    });
  });

  // Add mobile sidebar toggle functionality
  const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');

  mobileSidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    // Toggle icon between bars and times
    const icon = mobileSidebarToggle.querySelector('i');
    if (sidebar.classList.contains('show')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && 
        !mobileSidebarToggle.contains(e.target) && 
        sidebar.classList.contains('show')) {
      sidebar.classList.remove('show');
      const icon = mobileSidebarToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}); 