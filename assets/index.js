// This is NOT for a nodejs version of ham labs. this is a <script> asset for HamCraft UB in index.html
function loadPage(url, el) {
  document.getElementById("frame").src = url;

  document.querySelectorAll(".side-btn").forEach(b => b.classList.remove("active"));
  el.classList.add("active");
}

const c = document.getElementById("bg");
const ctx = c.getContext("2d");

c.width = innerWidth;
c.height = innerHeight;

let dots = Array.from({length: 80}, () => ({
  x: Math.random()*c.width,
  y: Math.random()*c.height,
  r: Math.random()*2
}));

function draw() {
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle = "#f0c6ff";
  dots.forEach(d => {
    ctx.beginPath();
    ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
    ctx.fill();
    d.y += 0.2;
    if (d.y > c.height) d.y = 0;
  });
}

setInterval(draw, 30);

window.onresize = () => {
  c.width = innerWidth;
  c.height = innerHeight;
};
