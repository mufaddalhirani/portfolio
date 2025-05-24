document.addEventListener('DOMContentLoaded', () => {
  // Data
  const SKILLS_DATA = [
    { name: 'JavaScript (ES6+)', level: 'Proficient', iconClass: 'fab fa-js-square text-yellow-400 text-2xl' },
    { name: 'HTML5', level: 'Proficient', iconClass: 'fab fa-html5 text-orange-500 text-2xl' },
    { name: 'CSS3', level: 'Proficient', iconClass: 'fab fa-css3-alt text-blue-600 text-2xl' },
    { name: 'Tailwind CSS', level: 'Proficient', iconClass: 'fas fa-wind text-teal-500 text-2xl' }, // Using a generic wind icon for tailwind
    { name: 'Node.js', level: 'Intermediate', iconClass: 'fab fa-node-js text-green-500 text-2xl' },
    { name: 'Python', level: 'Intermediate', iconClass: 'fab fa-python text-yellow-500 text-2xl' },
    { name: 'Java', level: 'Basic', iconClass: 'fab fa-java text-red-500 text-2xl' },
    { name: 'SQL (MySQL)', level: 'Intermediate', iconClass: 'fas fa-database text-blue-400 text-2xl' },
    { name: 'Git & GitHub', level: 'Proficient', iconClass: 'fab fa-github text-gray-800 text-2xl' },
    { name: 'Problem Solving', level: 'Strong', iconClass: 'fas fa-lightbulb text-yellow-500 text-2xl' },
    { name: 'Teamwork', level: 'Collaborative', iconClass: 'fas fa-users text-purple-500 text-2xl' },
    { name: 'Communication', level: 'Effective', iconClass: 'fas fa-comments text-blue-500 text-2xl' },
  ];

  const PROJECTS_DATA = [
    {
      title: 'Personal Portfolio Website (This one!)',
      description: 'A responsive portfolio website showcasing my skills and projects. Built with HTML, Tailwind CSS, and vanilla JavaScript for a clean and fast user experience.',
      technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
      imageUrl: 'https://picsum.photos/seed/portfolio-js/400/300',
      repoUrl: '#' // Replace with actual repo URL if available
    },
    {
      title: 'College Event Management (Concept)',
      description: 'Conceptual design for a platform to manage college events, registrations, and schedules. Focus on user-friendly interface and efficient information dissemination.',
      technologies: ['HTML', 'CSS', 'JavaScript (for interactivity)', 'UI/UX Design'],
      imageUrl: 'https://picsum.photos/seed/event-concept/400/300',
      // liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Basic To-Do List App',
      description: 'A simple and intuitive to-do list application built with vanilla JavaScript to practice DOM manipulation and local storage for data persistence.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      imageUrl: 'https://picsum.photos/seed/todoapp/400/300',
      // liveUrl: '#',
      repoUrl: '#'
    }
  ];

  const CONTACT_LINKS_DATA = [
    { name: 'Email', url: 'mailto:mufaddal.hiranix@example.com', iconClass: 'fas fa-envelope' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/mufaddalhirani-example', iconClass: 'fab fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/mufaddalhirani', iconClass: 'fab fa-github' }, // Placeholder
  ];

  // DOM Elements
  const skillsGrid = document.getElementById('skills-grid');
  const projectsGrid = document.getElementById('projects-grid');
  const contactLinksContainer = document.getElementById('contact-links-container');
  const menuToggle = document.getElementById('menu-toggle');
  const menuIcon = document.getElementById('menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const currentYearSpan = document.getElementById('current-year');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mainNavLinks = document.querySelectorAll('header nav a[href^="#"], .mobile-nav-link');


  // Render Functions
  function renderSkills() {
    if (!skillsGrid) return;
    skillsGrid.innerHTML = SKILLS_DATA.map(skill => `
      <div class="bg-white shadow-xl rounded-lg p-4 flex flex-col items-center text-center h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        ${skill.iconClass ? `<i class="${skill.iconClass} text-primary mb-3"></i>` : ''}
        <h3 class="text-lg font-semibold text-darkText mb-1">${skill.name}</h3>
        ${skill.level ? `<p class="text-sm text-gray-600">${skill.level}</p>` : ''}
      </div>
    `).join('');
  }

  function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = PROJECTS_DATA.map(project => `
      <div class="bg-white shadow-xl rounded-lg flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 overflow-hidden">
        ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title}" class="w-full h-48 object-cover">` : ''}
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-xl font-semibold text-primary mb-2">${project.title}</h3>
          <p class="text-gray-700 text-sm mb-3 flex-grow">${project.description}</p>
          <div class="mb-3">
            <h4 class="text-sm font-semibold text-darkText mb-1">Technologies:</h4>
            <div class="flex flex-wrap gap-2">
              ${project.technologies.map(tech => `<span class="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full">${tech}</span>`).join('')}
            </div>
          </div>
          <div class="mt-auto pt-4 border-t border-gray-200 flex space-x-4">
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-secondary font-medium flex items-center">
                <i class="fas fa-external-link-alt mr-1"></i> Live Demo
              </a>` : ''}
            ${project.repoUrl ? `
              <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="text-sm text-darkText hover:text-primary font-medium flex items-center">
                <i class="fab fa-github mr-1"></i> View Code
              </a>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderContactLinks() {
    if (!contactLinksContainer) return;
    contactLinksContainer.innerHTML = CONTACT_LINKS_DATA.map(link => `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="bg-white hover:bg-gray-50 text-darkText font-medium py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-3 text-lg border border-gray-200">
        <span class="text-primary text-2xl"><i class="${link.iconClass}"></i></span>
        <span>${link.name}</span>
      </a>
    `).join('');
  }

  // Mobile Menu Toggle
  if (menuToggle && mobileMenu && menuIcon) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      if (mobileMenu.classList.contains('hidden')) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        // Allow body scroll
        document.body.style.overflow = '';

      } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
      }
    });
  }
  
  // Close mobile menu when a link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
      document.body.style.overflow = ''; // Restore scroll
    });
  });


  // Smooth Scrolling for all internal links
  mainNavLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Calculate offset for fixed header
          const headerOffset = document.querySelector('header').offsetHeight || 80; // 80px is header height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });


  // Update Footer Year
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Initial Renders
  renderSkills();
  renderProjects();
  renderContactLinks();
});