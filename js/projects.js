const projects = [
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. ",
    featured_image: 'detail-img.svg',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live_link: '#',
    source_link: '#',
    circle: 'circle3',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. ",
    featured_image: 'detail-img.svg',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live_link: '#',
    source_link: '#',
    circle: 'circle4',
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. ",
    featured_image: 'detail-img.svg',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live_link: '#',
    source_link: '#',
    circle: 'circle5',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. ",
    featured_image: 'detail-img.svg',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live_link: '#',
    source_link: '#',
    circle: 'circle6',
  },
];

const projectsContainer = document.getElementById('projects-container');
const modal = document.getElementById('project-modal');
const stopScroll = document.querySelector('.wrapper');

const allProjects = projects
  .map(
    (project) => `
        <div class="work1">
        <div class="img1">
          <img src="images/${project.featured_image}" class="image" alt="software-portfolio">
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
      <div class="${project.circle}"></div>
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
            src="images/${project.featured_image}"
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
          <a href = "#" class = "modal-btn">
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
