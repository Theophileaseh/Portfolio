const projects = [
  {
    id: 1,
    name: 'Bookstore',
    description:
      'Bookstore is a react-redux web application that enables one to store books from different authors.',
    featuredImage: 'bookstore.png',
    technologies: ['css', 'html', 'javascript', 'React', 'Redux'],
    liveLink: 'https://react-bookstore-apps.netlify.app/',
    sourceLink: 'https://github.com/Theophileaseh/Bookstore',
    circle: 'circle3',
  },
  {
    id: 2,
    name: 'Math-magicians',
    description:
      'Math Magicians is a website with an online calculator that enables one to perform mathematical calculations',
    featuredImage: 'math-magicians.png',
    technologies: ['css', 'html', 'javascript', 'React', 'Redux'],
    liveLink: 'https://math-magicians-apps.netlify.app/',
    sourceLink: 'https://github.com/Theophileaseh/Math-magicians',
    circle: 'circle4',
  },
  {
    id: 3,
    name: 'Leaderboard',
    description:
      'Leaderboard is a poject build using HTML, CSS, Javascript, Webpack, Babel and an API. It is a platform that enables one to add users and their scores.',
    featuredImage: 'leaderboard.png',
    technologies: ['css', 'html', 'javascript', 'React', 'Redux'],
    liveLink: 'https://theophileaseh.github.io/Leaderboard',
    sourceLink: 'https://github.com/Theophileaseh/Leaderboard',
    circle: 'circle5',
  },
  {
    id: 4,
    name: 'To Do List',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. ",
    featuredImage: 'to-do-list.png',
    technologies: ['css', 'html', 'javascript'],
    liveLink: 'https://theophileaseh.github.io/To-Do-List-Webpack/',
    sourceLink: 'https://github.com/Theophileaseh/To-Do-List-Webpack',
    circle: 'circle6',
  },
  {
    id: 5,
    name: 'Bois 237',
    description:
      'Bois 237 is a B2B platform for the purchase and sale of timber and timber related products. It was developed using HTML, CSS, and PHP (Wordpress CMS).',
    featuredImage: 'bois237.png',
    technologies: ['css', 'html', 'php', 'wordpress'],
    liveLink: 'https://bois237.com/',
    sourceLink: '#',
    circle: 'circle3',
  },
  {
    id: 6,
    name: 'Portfolio',
    description:
      'Software Developer portfolio website developed using HTML, CSS and Javascript',
    featuredImage: 'portfoilo.png',
    technologies: ['css', 'html', 'javascript'],
    liveLink: 'https://theophileaseh.github.io/Portfolio-setup/',
    sourceLink: 'https://github.com/Theophileaseh/Portfolio-setup',
    circle: 'circle4',
  },
  {
    id: 7,
    name: 'Robust Events',
    description:
      'An event website to host conferences developed using HTML, CSS and Javascript',
    featuredImage: 'robust.png',
    technologies: ['css', 'html', 'javascript'],
    liveLink: 'https://theophileaseh.github.io/Conference-Page/',
    sourceLink: 'https://github.com/Theophileaseh/Conference-Page',
    circle: 'circle5',
  },
  {
    id: 8,
    name: 'Awesome Books',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. ",
    featuredImage: 'awesome-books.png',
    technologies: ['css', 'html', 'javascript'],
    liveLink: 'https://theophileaseh.github.io/Awesome-Books-ES6/',
    sourceLink: 'https://github.com/Theophileaseh/Awesome-Books-ES6',
    circle: 'circle6',
  },
  {
    id: 9,
    name: 'TC Design',
    description:
      'TC Design Classic is a fashion design website and an online shop used to showcase their designs. It was developed using HTML, CSS, and PHP (Wordpress CMS)',
    featuredImage: 'tc-design.png',
    technologies: ['css', 'html', 'php', 'wordpress'],
    liveLink: 'http://tcdesign.fashion/',
    sourceLink: '#',
    circle: 'circle3',
  },
  {
    id: 10,
    name: 'HITL',
    description:
      'HITL is a website for an educational institution that enables them to post their events, news, and other information concerning them. It was developed using HTML, CSS, Javascript, and PHP.',
    featuredImage: 'hitl.png',
    technologies: ['css', 'html', 'javascript', 'php'],
    liveLink: 'https://www.hitlbamenda.cm',
    sourceLink: '#',
    circle: 'circle4',
  },
/*  {
    id: 11,
    name: 'FL Events And Tours',
    description:
      'FL Events and Tours is a website for a travel agency used
      to showcase their work and other information about them. It was developed using HTML, CSS,
      and PHP (Wordpress CMS).',
    featuredImage: 'fl.png',
    technologies: ['css', 'html', 'php', 'wordpress'],
    liveLink: 'https://fleventsandtours.com/',
    sourceLink: '#',
    circle: 'circle5',
  }, */
];

const projectsContainer = document.getElementById('projects-container');
const modal = document.getElementById('project-modal');
const stopScroll = document.querySelector('.wrapper');

const allProjects = projects
  .map(
    (project) => `
    <div class="main-work1">
        <div class="work1">
        <div class="img1">
          <img src="img/projects/${project.featuredImage}" class="image" alt="software-portfolio">
        </div>
        <div class="info1">
          <h2 class="sub1">${project.name}</h2>
          <p class="desc1">
            ${project.description}
          </p>
          <ul class="main-works">${project.technologies.map((technology) => `<li class='works'>${technology}</li>`).join('')}
          </ul>
          <div class="button">
              <button onclick="showModal(${project.id})" class="main-button">See Project</button>
          </div>
        </div>
      </div>
      <div class="work1 ${project.circle}"></div>
      </div>
  `,
  ).join('');

projectsContainer.innerHTML = allProjects;

const modalTemplate = (project) => `
      <div class="modal-container">
        <div class="modal-head">
          <h2 class="modal-title">${project.name}</h2>
          <button id="modal-close" onclick="modalClose()" class="modal-close">
            <img
              src="images/Icon-Cancel.svg"
              alt="Close button"
              class="modal-close-icon"
            />
          </buttton>
        </div>
        <div class="modal-body">
          <img
            src="img/projects/${project.featuredImage}"
            alt="${project.name}"
            class="detail-img"
          />
          <p class="modal-desc">
            ${project.description}
          </p>
          <ul class="technologies">
            ${project.technologies.map((technology) => `
                <li class="technology">
                  ${technology}
                </li>`).join('')}
          </ul>
        </div>
        <div class="modal-footer">
          <a href = "${project.liveLink}" class = "modal-btn">
            <span class = "span">See live</span>
            <i class="fa-brands fa-github"></i>
          </a>
          <a href = "#" class = "modal-btn">
            <span class = "span">See source</span>
            <i class="fa-brands fa-github"></i>
          </a>
      </div>
  `;

/* eslint-disable no-unused-vars */

const showModal = (projectId) => {
  const modalData = projects.find((element) => {
    if (Number(projectId) === Number(element.id)) {
      return true;
    }
    return undefined;
  });

  modal.innerHTML = modalTemplate(modalData);
  stopScroll.classList.add('blur');
};

const modalClose = (source) => {
  modal.innerHTML = '';
  stopScroll.classList.remove('blur');
};

/* eslint-disable no-unused-vars */
