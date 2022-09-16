// import coschedule from "../images/coschedule.png";
const Projects = [
  {
    name: "NetFlix",
    about:
      "A Web application Clone of Netflix to Search for and Watch movies just like Netflix.",
    img: "./netflix-p.jpg",
    gitrepo: "https://github.com/Deepu2560/Netflix",
    blog: "https://medium.com/@mohanpalleti/our-first-project-coschedule-5fa76fea2a3a",
    tech_stack: "React |NodeJS | MongoDB  ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/48/000000/react-native.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/nodejs.png"/>`,
    ],
    project_link: "https://netflix-lake-two.vercel.app/",
    project_type: "Team Project",
  },
  {
    name: "Clone of CoSchedule",
    about:
      "CoSchedule is the marketing industry’s leading provider of content calendar, content optimization, and marketing education products. Collectively, CoSchedule products empower nearly 100,000 marketers to complete more high-quality work in less time.",
    img: "./coschedule.png",
    gitrepo: "https://github.com/mohan-palleti/CoSchedule-clone",
    blog: "https://medium.com/@mohanpalleti/our-first-project-coschedule-5fa76fea2a3a",
    tech_stack: "HTML | CSS | JAVASCRIPT ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://coscheduleclone.netlify.app/",
    project_type: "Team Project",
  },
  {
    name: "Clone of Sony",
    about:
      "Sony website that sells All kinds of sony products like phones, TV's, Headphone etc.,",
    img: "./sony.png",
    gitrepo: "https://github.com/mohan-palleti/unit-3_project_Sony.co.in",
    blog: "https://medium.com/@mohanpalleti/our-group-project-connecting-frontend-and-backend-b159a686b3d0",
    tech_stack: "HTML | CSS | JAVASCRIPT",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/redis.png"/>`,
    ],
    project_link: "https://sonyclone.netlify.app/index.html",
    project_type: "Team Project",
  },
  {
    name: "Trending Movies App",
    about:
      "This is a mini-app which shows trending movies and movies you search for (Implementing basic search functionality with optimizing the performance using debouncing.) built with HTML , CSS , JS .",
    img: "./screenshot.png",
    gitrepo: "https://github.com/mohan-palleti/Trending-movies",
    blog: "",
    tech_stack: "HTML | CSS | JAVASCRIPT | API's",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
    ],
    project_link: "https://trending-filmy.netlify.app/",
    project_type: "Individual Project",
  },
];

let projects__container = document.getElementById("projects--container");

Projects.forEach((pro) => {
  let main = document.createElement("div");
  main.setAttribute("class", "portfolio-item padd-15");
  main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="photo" class="pro-i">
      <div class="project-desc"> <h1 class="project-name"><b>${
        pro.name
      }</b></h1> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <button> <a href=${
        pro.project_link
      } target="_blank" class="see-project">LIVE</a></button>
      <button> <a href=${
        pro.gitrepo
      } target="_blank" class="github-repo">GitHub💻</a> </button>
      
     
      </div>
    
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span >${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ""}
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ""}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ""}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ""}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ""}
      </span> </div>
     
      
    </div>
  </div>
    `;
  projects__container.append(main);
});
