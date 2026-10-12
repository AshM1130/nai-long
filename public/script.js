const phrases = [
  "咩～今天也要元气满满！",
  "摸摸头，我好开心！",
  "我是一只小恐龙，奶龙！",
  "一起去看星星吧 ✨",
  "咕噜咕噜～（开心地转圈）",
  "再摸一次好不好～",
  "我最爱喝奶了 🥛",
  "哈哈哈哈！"
];

const dragon = document.getElementById("dragon");
const bubble = document.getElementById("bubble");
const counter = document.getElementById("pet-count");
let pets = 0;

dragon.addEventListener("click", () => {
  pets += 1;
  counter.textContent = pets;
  bubble.textContent = phrases[Math.floor(Math.random() * phrases.length)];

  bubble.classList.remove("show");
  void bubble.offsetWidth;
  bubble.classList.add("show");

  dragon.classList.remove("bounce");
  void dragon.offsetWidth;
  dragon.classList.add("bounce");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
