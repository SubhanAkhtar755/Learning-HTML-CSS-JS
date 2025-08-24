document.addEventListener("DOMContentLoaded", function () {
    // Get all parent menu items
    const parentMenus = document.querySelectorAll('.parent-menu');
  
    // Ensure sub-menus are hidden on page load
    parentMenus.forEach(menu => {
      const subMenu = menu.querySelector('.sub-menu');
      
      // Hide the sub-menu initially
      subMenu.style.display = 'none';
  
      // Function to adjust the position of the sub-menu to fit within the viewport
      function adjustSubMenuPosition() {
        const menuRect = menu.getBoundingClientRect();
        const subMenuWidth = subMenu.offsetWidth;
        const viewportWidth = window.innerWidth;
  
        // Check if the sub-menu overflows on the right side
        if (menuRect.right + subMenuWidth > viewportWidth) {
          subMenu.style.left = `-${subMenuWidth - menu.offsetWidth}px`;
        } else {
          subMenu.style.left = '0';
        }
      }
  
      // Show the dropdown when mouse enters the parent menu item
      menu.addEventListener('mouseenter', function () {
        subMenu.style.display = 'block';
        adjustSubMenuPosition();  // Adjust position when dropdown is shown
      });
  
      // Keep the dropdown visible when mouse enters the sub-menu
      subMenu.addEventListener('mouseenter', function () {
        subMenu.style.display = 'block';
      });
  
      // Hide the dropdown only when both parent and sub-menu are left
      let hideDropdownTimeout;
      function hideDropdown() {
        hideDropdownTimeout = setTimeout(() => {
          if (!menu.matches(':hover') && !subMenu.matches(':hover')) {
            subMenu.style.display = 'none';
          }
        }, 200);
      }
  
      // Only set timeout when both menu and sub-menu are left
      menu.addEventListener('mouseleave', hideDropdown);
      subMenu.addEventListener('mouseleave', hideDropdown);
  
      // Cancel hide timeout when entering parent menu or sub-menu
      menu.addEventListener('mouseenter', function () {
        clearTimeout(hideDropdownTimeout);
      });
      subMenu.addEventListener('mouseenter', function () {
        clearTimeout(hideDropdownTimeout);
      });
    });
  
    document.querySelectorAll('.parent-menu').forEach(item => {
      item.addEventListener('touchstart', function(e) {
        this.classList.toggle('active');
        e.preventDefault();
      });
    });
  
    if (window.innerWidth <= 768) {
      // Lazy load non-essential content
      const loadNonEssential = () => {
        document.querySelectorAll('.bottom-right, .empty-div').forEach(el => {
          el.style.display = 'block';
        });
      };
  
      // Load after initial content is displayed
      setTimeout(loadNonEssential, 1000);
    }
  });
  
  function toggleMenu() {
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const body = document.body;
    
    nav.classList.toggle('active');
    
    // Toggle body scroll
    if (nav.classList.contains('active')) {
      menuToggle.innerHTML = '<i class="bi bi-x-lg"></i>';
      body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      menuToggle.innerHTML = '<i class="bi bi-list"></i>';
      body.style.overflow = 'auto';
    }
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!nav.contains(e.target) && !menuToggle.contains(e.target) && nav.classList.contains('active')) {
      toggleMenu();
    }
  });
  
  // Handle submenu on mobile
  document.querySelectorAll('.parent-menu').forEach(item => {
    const submenu = item.querySelector('.sub-menu');
    
    item.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        
        // Toggle submenu with animation
        if (submenu.style.maxHeight) {
          submenu.style.maxHeight = null;
        } else {
          submenu.style.maxHeight = submenu.scrollHeight + "px";
        }
        
        item.classList.toggle('active');
      }
    });
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    const nav = document.querySelector('.nav');
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
      toggleMenu();
    }
  });
  