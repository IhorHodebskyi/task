import data from "./data.js";

const wrapper = document.querySelector(".section");

const markup = `
  ${data
    .map(
      ({ img, title, services, color }) => `
    <div class="card ${color}">
      <svg class="svg" width="110px" height="100px">
        <use href="${img}"></use>
      </svg>
      <div>
        <h2 class="title">${title}</h2>
        <ul class="list">
          ${services.map((el) => `<li class="item"><p class="text">${el}</p></li>`).join("")}
        </ul>
      </div>
      <a href="#" class="link">View more</a>
    </div>
  `
    )
    .join("")}
`;

wrapper.innerHTML = markup;
