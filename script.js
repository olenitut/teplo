var map = L.map("map", {
  center: [50.45179, 30.52585],
  zoom: 17,
});

var tiles = new L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
).addTo(map);

var marker = L.marker([50.45179, 30.52585], {
  title: "IHub",
});

marker.addTo(map);

document.querySelector(".program__list").addEventListener("click", (e) => {
  const item = e.target.closest(".program__item");

  if (!item) return;

  item.classList.toggle("program__item--open");
});

var map2 = L.map("map2", {
  center: [50.45179, 30.52585],
  zoom: 17,
});

var tiles = new L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
).addTo(map2);

var marker = L.marker([50.45179, 30.52585], {
  title: "IHub",
});

marker.addTo(map2);

document.querySelector(".header__menu-btn").addEventListener("click", () => {
  document.querySelector(".menu").classList.add("menu--open");
});

document.querySelector(".menu").addEventListener("click", (e) => {
  if (
    e.target.closest(".header__nav-link") ||
    e.target.closest(".menu__icon")
  ) {
    document.querySelector(".menu").classList.remove("menu--open");
  }
});
