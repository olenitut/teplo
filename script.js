// document.querySelectorAll(".btn__border").forEach((el) =>
//   el.addEventListener("click", () => {
//     console.log("here");
//     fetch(
//       "https://graph.facebook.com/v18.0/1413267286204643/events?access_token=EAABZBrK85TNcBOzae031rNWlb3jMkFhQ1ZC4rtvFEIdZAxzqyOZA7NjLS3rLZBjGmijzyBcN6ZA7BNMQCj6JItvZAsmr0R6WfeKkdxCRYGJOYyqAlZA2qPDUiJQa66SBGQD0vv6CjLIqjuwlLWo3PtGHVZAanRG13FaK2VhcBZCwrbLD5RlytQN6KqMaoAIvfVZAufbkgZDZD",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           data: [
//             {
//               event_name: "Click",
//               event_time: Date.now(),
//               action_source: "website",
//               event_source_url: "https://teplo.netlify.app/",
//               user_data: {
//                 // "em": [
//                 //     "7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"
//                 // ],
//                 ph: [null],
//               },
//             },
//           ],
//         }),
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   })
// );

if (document.querySelector("#map")) {
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
}

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
  if (e.target.closest(".menu-close")) {
    document.querySelector(".menu").classList.remove("menu--open");
  }
});
