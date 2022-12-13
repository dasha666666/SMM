import imageKastroma from "./images/Kastroma.jpg";
import imageProNogti from "./images/proNogti.png";
import imageOksanaMartynova from "./images/OksanaMartynova.png";
import imageOnTime from "./images/onTime.png";
import imageLaptop from "./images/laptop.png";
import imageSearch from "./images/search.png";
import imageKirsach from "./images/Kirsash.png";
import imageNekludov from "./images/Nekludov.png";
import imageBaby from "./images/Baby.jpg";


const HEAD = "NDN";

const HOST = 'http://localhost:8080'

const OUR_MAIL = "9mmndn@gmail.com";
const OUR_PHONE = "8 (961) 432-94-93";

const linksMainPageHeader = [
  { text: "О нас", path: "/about", key: "dsfsdfsd31" },
  { text: "Услуги", path: "/service", key: "dsfsdfsd32" },
  { text: "Кейсы", path: "/cases", key: "dsfsdfsd33" },
  { text: "Контакты", path: "/contacts", key: "dsfsdfsd34" },
];

const clientsInfo = [
  {
    src: imageKastroma,
    text: 'Ювелирный завод "Кострома"',
  },
  {
    src: imageProNogti,
    text: 'Ногтевая студия "Про Ногти"',
  },
  {
    src: imageOksanaMartynova,
    text: `Мини-мастерская по 
    изготовлению кожанных изделий 
    Оксаны Мартыновой`,
  },
];

const coreValues = [
  {
    name: "Экспертиза",
    src: imageSearch,
    text: "Помогаем непрерывно развиваться",
    key: "dsfsdfdsf123",
  },
  {
    name: "Технологии",
    src: imageLaptop,
    text: "Используем автоматизированные платформы",
    key: "dsfsdfdsf124",
  },
  {
    name: "Скорость",
    src: imageOnTime,
    text: "Результат виден через сутки",
    key: "dsfsdfdsf125",
  },
];

const ourTeam = [
  {
    name: "Лактионова Дарья",
    src: imageBaby,
    job: "SMM - специалист",
    experience: "с опытом работы 3 года.",
    key: "123safcxbry",
  },
  {
    name: "Кирсанов Никита",
    src: imageKirsach,
    job: "Копирайтер",
    experience: "с опытом работы более 5 лет.",
    key: "124safcxbry",
  },
  {
    name: "Никита Неклюдов",
    src: imageNekludov,
    job: "Таргетолог",
    experience: "успешно более 100 проектов.",
    key: "125safcxbry",
  },
];

const benefits = [
  "Выполняем в краткий срок",
  "Один из лидеров в Ростовской области",
  "3 Высоко- квалифицирова- нных специалиста",
  "Даём гарантию результата",
];

const caseEyelashExtensions = [
  {
    header: "Задача:",
    text: "Создать эстетичный визуал",
  },
  {
    header: "Сложность:",
    text: `Проект существует давно и уже оброс своей аудиторией 
      и ассоциациями. Тут было важно изучить клиентов кофейни и 
      передать основную ценность через посты и визуал.`,
  },
  {
    header: "Итоги работы:",
    text: `За неделю работы над проектом мы увеличили количество 
      подписчиков на ~ 1000, создали тот стиль, который отличает 
      мастера от конкурентов. А также привлекли более молодую 
      аудиторию.`,
  },
];

const caseMobileApplications = [
  {
    header: "Задача:",
    text: `Запустить таргетированую рекламу и увеличить чило новых подписок`,
  },
  {
    header: "Сложность:",
    text: `Данная сфера нетипична для продвижения в соцсетях, это связанно 
      с тем, что из всей массы аудитории выделить потенциальных заказчиков 
      (а именно - лиц принимающих решения) крайне трудно. Но мы справились 
      с поставленной задачей!`,
  },
];

const caseMobileApplicationsTwo = [
  {
    header: "Задача:",
    text: "Создать рекламный макет",
  },
  {
    header: "Сложность:",
    text: `Отель раньше не развивался в соцсетях и не запускал рекламу`,
  },
  {
    header: "Итоги работы:",
    text: `Запуск рекламы на определённую ЦА прошёл успешно. Приход 20 
      новых посетителей`,
  },
];

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];


const services = [
  {
    name: "Таргет",
    text: [
      "Настройка маркетинговой рекламы для вашего бизнеса",
      "Срок выполнения от 3 до 20 дней",
    ],
    key: "sgdgher24312",
  },
  {
    name: "SMM стратегия",
    text: [
      "Контент план для вашей ниши",
      "Распаковка по архетипам",
      "Визуал вашей страницы/аккаунта",
      "Стратегия продвижения для увеличения продаж",
      "Срок выполнения от 3 до 30 дней",
    ],
    key: "sdfwf34v2c3exfw",
  },
  {
    name: "Копирайтинг",
    text: [
      "Написание продающих, развлекательных и информационных постов",
      "От 1000 символов",
      "Срок выполнения от 1 до 3 дней",
    ],
    key: "rsgb5uj676uy54t32cqwdc",
  },
];

const CONTACTS = [
  "Телефон:",
  "+7(961)432-94-93",
  "+7(951)500-72-61",
  "Почта:",
  "dasha.laktionova.2003@gmail.com",
];

export {
  caseMobileApplicationsTwo,
  caseMobileApplications,
  caseEyelashExtensions,
  linksMainPageHeader,
  clientsInfo,
  coreValues,
  OUR_PHONE,
  OUR_MAIL,
  benefits,
  services,
  ourTeam,
  CONTACTS,
  HEAD,
  HOST,
};
