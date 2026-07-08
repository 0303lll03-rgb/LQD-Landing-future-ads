const revealElements = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileViewport = window.matchMedia("(max-width: 700px)");

if (prefersReducedMotion.matches || mobileViewport.matches) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

const header = document.querySelector(".header");
const desktopViewport = window.matchMedia("(min-width: 1101px)");

if (header) {
  let headerTicking = false;

  const updateHeaderVisibility = () => {
    header.classList.toggle("header--hidden", desktopViewport.matches && window.scrollY > 60);
    headerTicking = false;
  };

  const requestHeaderUpdate = () => {
    if (!headerTicking) {
      window.requestAnimationFrame(updateHeaderVisibility);
      headerTicking = true;
    }
  };

  window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
  desktopViewport.addEventListener("change", updateHeaderVisibility);
  updateHeaderVisibility();
}

const servicesDetails = {
  heating: {
    icon: "heating",
    title: "Опалення",
    subtitle: "Сервіс котлів, теплових насосів і опалювальної техніки",
    description: "Сервісна служба LQD виконує ремонт, діагностику та поточне обслуговування побутових газових і електричних котлів, теплових насосів Buderus, Bosch та Viessmann. Проводимо пуско-налагоджувальні роботи, підготовку обладнання до опалювального сезону та усунення несправностей.",
    includedItems: [
      "Діагностика опалювального обладнання",
      "Ремонт газових та електричних котлів",
      "Пуско-налагоджувальні роботи",
      "Підготовка до опалювального сезону",
      "Сервіс теплових насосів",
      "Перший пуск пальників OXI Ceramik"
    ]
  },
  water: {
    icon: "water",
    title: "Водоочистка",
    subtitle: "Сервіс систем фільтрації, питної води та комплексного очищення",
    description: "Проводимо сервісне обслуговування систем очищення води Ecosoft та BWT. Виконуємо заміну картриджів, діагностику, чистку, запуск в експлуатацію, модернізацію систем і лабораторний аналіз води.",
    includedItems: [
      "Заміна картриджів",
      "Діагностика та чистка системи",
      "Запуск в експлуатацію",
      "Модернізація фільтрації",
      "Лабораторний аналіз води",
      "Доставка таблетованої солі"
    ]
  },
  wells: {
    icon: "wells",
    title: "Свердловини",
    subtitle: "Регламентний сервіс обладнання свердловин водопостачання",
    description: "Сервісна служба LQD проводить регулярний огляд та обслуговування побутових свердловин водопостачання. Перевіряємо свердловинні насоси, гідроакумулятори, реле тиску, запірну та захисну арматуру, а за необхідності виконуємо роботи для відновлення продуктивності свердловини.",
    includedItems: [
      "Регламентний огляд двічі на рік",
      "Сервіс свердловинних насосів",
      "Перевірка гідроакумуляторів",
      "Налаштування реле тиску",
      "Огляд запірної та захисної арматури",
      "Відновлення продуктивності свердловини",
      "Покращення якості води"
    ]
  },
  heatPumps: {
    icon: "heatPumps",
    title: "Теплові насоси",
    subtitle: "Сервіс, діагностика та підготовка теплових насосів до сезону",
    description: "Сервісна служба LQD виконує обслуговування теплових насосів для стабільної та ефективної роботи системи опалення, охолодження та гарячого водопостачання. Проводимо діагностику обладнання, перевірку робочих параметрів, очищення основних вузлів і підготовку системи до сезону.",
    includedItems: [
      "Діагностика теплового насоса",
      "Перевірка робочих параметрів",
      "Очищення основних вузлів системи",
      "Перевірка гідравлічної частини",
      "Підготовка до опалювального сезону",
      "Виявлення та усунення несправностей"
    ]
  },
  automation: {
    icon: "automation",
    title: "Автоматика",
    subtitle: "Налаштування та сервіс автоматики інженерних систем",
    description: "Сервісна служба LQD виконує діагностику, налаштування та обслуговування автоматики інженерних систем будинку. Перевіряємо контролери, датчики, реле, насосні групи та захисні елементи, щоб обладнання працювало стабільно, безпечно та узгоджено між собою.",
    includedItems: [
      "Діагностика контролерів і датчиків",
      "Налаштування режимів роботи систем",
      "Перевірка реле та захисної автоматики",
      "Сервіс насосних груп",
      "Узгодження роботи обладнання",
      "Виявлення помилок і несправностей"
    ]
  },
  homeService: {
    icon: "homeService",
    title: "Сервіс будинку",
    subtitle: "Комплексне регулярне обслуговування інженерних систем",
    description: "Сервісна служба LQD пропонує укладення договору на комплексне регулярне обслуговування інженерних систем будинку. Наші адміністратори заздалегідь планують візити інженера для виконання регламентних робіт, а фахівці перевіряють як основне обладнання топкової, так і допоміжні елементи системи.",
    includedItems: [
      "Договір на регулярний сервіс",
      "Планування візитів інженера",
      "Регламентне обслуговування систем",
      "Сервіс основного обладнання топкової",
      "Діагностика допоміжних елементів",
      "Контроль стану інженерних систем"
    ]
  }
};

const serviceModal = document.querySelector("#service-modal");
const serviceModalDialog = serviceModal?.querySelector(".service-modal__dialog");
const serviceModalIcon = serviceModal?.querySelector(".service-modal__icon");
const serviceModalTitle = serviceModal?.querySelector(".service-modal__title");
const serviceModalSubtitle = serviceModal?.querySelector(".service-modal__subtitle");
const serviceModalDescription = serviceModal?.querySelector(".service-modal__description");
const serviceModalList = serviceModal?.querySelector(".service-modal__list");
const serviceLinks = document.querySelectorAll(".service-card__link[data-service]");
let lastFocusedServiceLink = null;

const closeServiceModal = () => {
  if (!serviceModal) return;

  serviceModal.classList.remove("is-open");
  serviceModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("service-modal-open");

  if (lastFocusedServiceLink) {
    lastFocusedServiceLink.focus();
    lastFocusedServiceLink = null;
  }
};

const renderServiceIcon = (serviceKey) => {
  if (!serviceModalIcon) return;

  serviceModalIcon.innerHTML = "";
  const sourceIcon = document
    .querySelector(`.service-card__link[data-service="${serviceKey}"]`)
    ?.closest(".service-card")
    ?.querySelector(".service-card__icon svg");

  if (sourceIcon) {
    serviceModalIcon.appendChild(sourceIcon.cloneNode(true));
  }
};

const openServiceModal = (serviceKey, trigger) => {
  const service = servicesDetails[serviceKey];
  if (!service || !serviceModal) return;

  lastFocusedServiceLink = trigger;
  renderServiceIcon(service.icon);

  serviceModalTitle.textContent = service.title;
  serviceModalSubtitle.textContent = service.subtitle;
  serviceModalDescription.textContent = service.description;
  serviceModalList.innerHTML = service.includedItems
    .map((item) => `<li>${item}</li>`)
    .join("");

  serviceModal.classList.add("is-open");
  serviceModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("service-modal-open");
  serviceModalDialog?.focus();
};

serviceLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openServiceModal(link.dataset.service, link);
  });
});

serviceModal?.addEventListener("click", (event) => {
  if (event.target.closest("[data-modal-close]")) {
    closeServiceModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && serviceModal?.classList.contains("is-open")) {
    closeServiceModal();
  }
});
