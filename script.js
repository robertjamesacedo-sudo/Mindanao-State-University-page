// Show welcome message
window.addEventListener("load", () => {
  alert("Welcome to Mindanao State University Website!");
});

// Live Date and Time
function updateDateTime() {
  const now = new Date();
  const datetime = now.toLocaleString();
  document.getElementById("datetime").textContent = `📅 ${datetime}`;
}
setInterval(updateDateTime, 1000);
updateDateTime(); // initial call

// Dynamic News Loading
const newsData = [
  {
    title: "MSU Intramurals 2025",
    content: "Join the fun and competition this October at the annual University Intramurals!"
  },
  {
    title: "Engineering Complex Opens",
    content: "The new Engineering Building has been inaugurated with modern labs and facilities."
  },
  {
    title: "MSU Ranks Top 5 in Research",
    content: "MSU earns national recognition for research output and innovation."
  }
];

const newsContainer = document.getElementById("news-container");

newsData.forEach(news => {
  const card = document.createElement("div");
  card.classList.add("news-card");
  card.innerHTML = `
    <h3>${news.title}</h3>
    <p>${news.content}</p>
  `;
  newsContainer.appendChild(card);
});

// Back to Top Button Logic
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});