class ProfileCard extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open'});
    }

    connectedCallback() {
        const {shadowRoot} = this;
        shadowRoot.innerHTML = `
        <link href="./node_modules/@fortawesome/fontawesome-free/css/fontawesome.css" rel="stylesheet">
        <link href="./node_modules/@fortawesome/fontawesome-free/css/brands.css" rel="stylesheet">
        <link href="./node_modules/@fortawesome/fontawesome-free/css/solid.css" rel="stylesheet"> 
        <style>
                .wrapper {
                  font-family: "Open Sans", sans-serif;
                  width: 320px;
                  height: 500px;
                  background: #fdfeff;
                  transition: background 0.6s ease;
                  border-radius: 10px;
                  padding: 20px 20px 20px 20px;
                  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
                }
            
                .wrapper .profile {
                  margin-top: 2.2em;
                  position: relative;
                }
                .wrapper .profile:after {
                  width: 100%;
                  height: 1px;
                  content: " ";
                  display: block;
                  margin-top: 1.3em;
                  background: #e9eff6;
                }
                .wrapper .profile .thumbnail {
                  width: 124px;
                  height: 124px;
                  display: flex;
                  margin-left: auto;
                  margin-right: auto;
                  margin-bottom: 1.5em;
                  border-radius: 100%;
                  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.2);
                }
                .wrapper .profile .name {
                  color: #2d354a;
                  font-size: 24px;
                  font-weight: 600;
                  text-align: center;
                }
                .wrapper .profile .title {
                  color: #7c8097;
                  font-size: 0.75em;
                  font-weight: 300;
                  text-align: center;
                  padding-top: 0.5em;
                  padding-bottom: 0.7em;
                  letter-spacing: 1.5px;
                  text-transform: uppercase;
                }
                .wrapper .profile .description {
                  color: #080911;
                  font-size: 14px;
                  font-weight: 300;
                  text-align: center;
                  margin-bottom: 1.3em;
                }
                
                .wrapper .social-icons {
                  display: flex;
                  margin-top: 2.5em;
                  justify-content: space-between;
                }
                .wrapper .social-icons .icon {
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  cursor:pointer;
                }
                .wrapper .social-icons .icon a { 
                  width: 60px;
                  text-align: center;
                  
                }
                .hoverable {
                    -moz-transition: all 0.2s ease;
                    transition: all 0.2s ease;
                }
                .hoverable:hover {
                  transform: scale(1.2);
                }
                
                .wrapper .social-icons .icon .text-icon {
                  margin-top: 1.5em;
                  color: #666b7d;
                  font-size: 14px;
                }
                            
            </style>
        <div class="wrapper">
            <div class="profile">
                <img src=${this.getAttribute("img-src")} class="thumbnail"/>
                <h3 class="name">${this.getAttribute("name")}</h3>
                <p class="title">${this.getAttribute("title")}</p>
                <p class="description">${this.getAttribute("description")}</p>
            </div>
            
            <div class="social-icons">
                <div class="icon">
                    <a class="hoverable" href=${this.getAttribute("github")}>
                        <i class="fa-brands fa-github fa-2xl clickable"></i>
                    </a>
                    <a class="text-icon" href=${this.getAttribute("github")}>Github</a>
                </div>
                    
                <div class="icon">
                    <a class="hoverable" href=${this.getAttribute("linkedin")}>
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                     <a class="text-icon" href=${this.getAttribute("linkedin")}>Linkedin</a>
                </div>
                <div class="icon">
                    <a class="hoverable" href=${this.getAttribute("twitter-x")}>
                        <i class="fa-brands fa-square-x-twitter fa-2xl"></i>
                    </a>
                    <a class="text-icon" href=${this.getAttribute("twitter-x")}>X</a>
                </div>
            </div>
        </div>
    `
    }
}

window.customElements.define('profile-card', ProfileCard);