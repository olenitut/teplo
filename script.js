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
