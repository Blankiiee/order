const rooms = [
  {
    id: "studio",
    name: "Стандарт",
    category: "double",
    tag: "Для пари",
    image: "assets/white-sail-property.jpg",
    description: "Комфортний двомісний номер для спокійного відпочинку біля озера.",
    price: "Ціну уточнюйте",
    features: ["Власний санвузол", "Душ", "Туалет", "Умивальник"]
  },
  {
    id: "family",
    name: "Сімейний",
    category: "family",
    tag: "Сімейний",
    image: "assets/white-sail-property.jpg",
    description: "Просторий номер для відпочинку з дітьми або рідними.",
    price: "Ціну уточнюйте",
    features: ["Власний санвузол", "Душ", "Туалет", "Умивальник"]
  },
  {
    id: "deluxe",
    name: "Комфорт",
    category: "premium",
    tag: "Комфорт",
    image: "assets/white-sail-property.jpg",
    description: "Розкішніший варіант для тих, хто хоче більше простору й затишку.",
    price: "Ціну уточнюйте",
    features: ["Власний санвузол", "Душ", "Туалет", "Умивальник"]
  },
  {
    id: "eco",
    name: "Затишний",
    category: "double",
    tag: "Улюблений",
    image: "assets/white-sail-property.jpg",
    description: "Міні-номер для тихого відпочинку й коротких вихідних біля води.",
    price: "Ціну уточнюйте",
    features: ["Власний санвузол", "Душ", "Туалет", "Умивальник"]
  },
  {
    id: "family-plus",
    name: "Сімейний плюс",
    category: "family",
    tag: "Поблизу озера",
    image: "assets/white-sail-property.jpg",
    description: "Комфорт для кількох гостей із зоною для відпочинку та сну.",
    price: "Ціну уточнюйте",
    features: ["Власний санвузол", "Душ", "Туалет", "Умивальник"]
  },
  {
    id: "suite",
    name: "Люкс",
    category: "premium",
    tag: "Люкс",
    image: "assets/white-sail-property.jpg",
    description: "Великий номер із зоною відпочинку й родинним розташуванням.",
    price: "Ціну уточнюйте",
    features: ["Власний санвузол", "Душ", "Туалет", "Умивальник"]
  }
];

const roomGrid = document.querySelector("#room-grid");
const tabs = document.querySelectorAll(".tab");
let activeFilter = "all";

function renderRooms() {
  const visibleRooms = activeFilter === "all"
    ? rooms
    : rooms.filter((room) => room.category === activeFilter);

  roomGrid.innerHTML = visibleRooms.map((room) => `
    <article class="room-card">
      <div class="room-photo">
        <img src="${room.image}" alt="Фото садиби «Білий парус»; категорія «${room.name}» показана як концепт" loading="lazy" />
        <span class="room-tag">${room.tag}</span>
      </div>
      <div class="room-body">
        <div class="room-head">
          <h3>${room.name}</h3>
          <span class="room-price">${room.price}</span>
        </div>
        <p>${room.description}</p>
        <ul class="room-features" aria-label="Переваги номера">
          ${room.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        <div class="room-cta">
          <button class="button button-primary" type="button" data-room="${room.id}">Бронювати</button>
          <button class="button ghost" type="button">Детальніше</button>
        </div>
      </div>
    </article>
  `).join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeFilter = tab.dataset.filter;
    tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    renderRooms();
  });
});

roomGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-room]");
  if (!trigger) return;
  const selectedRoom = rooms.find((room) => room.id === trigger.dataset.room);
  if (!selectedRoom) return;
  const bookingButton = document.querySelector("#booking .button-primary");
  bookingButton.textContent = `Бронювати ${selectedRoom.name}`;
  bookingButton.scrollIntoView({ behavior: "smooth", block: "center" });
  bookingButton.focus();
});

renderRooms();
