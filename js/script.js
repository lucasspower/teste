const idomas = [
  "Inglês",
  "Indo-Europeia",
  "Chinês mandarim",
  "Sino-Tibetana",
  "Hindi",
  "Indo-Europeia",
  "Espanhol",
  "Indo-Europeia",
  "Árabe padrão",
  "Afro-Asiática",
  "Bengali",
  "Indo-Europeia",
  "Francês",
  "Indo-Europeia",
  "Russo",
  "Indo-Europeia",
  "Português",
  "Indo-Europeia",
  "Urdu",
  "Indo-Europeia",
  "Indonésio",
  "Austronésia",
  "Alemão padrão",
  "Indo-Europeia",
  "Japonês",
  "Japônica",
  "Marata",
  "Indo-Europeia",
  "Telugo",
  "Dravídica",
  "Turco",
  "Túrquica",
  "Chinês yue",
  "Sino-Tibetana",
  "Chinês wu",
  "Sino-Tibetana",
  "Coreano",
  "Coreânica",
  "Vietnamita",
  "Austro-Asiática",
  "Indo-Europeia",
  "Árabe coloquial egípcio",
  "Nigero-Congolesa",
  "Italiano",
  "Punjabi ocidental",
  "Indo-Europeia",
  "Indo-Europeia",
  "Tailandês",
  "Canarim",
  "Dravídica",
];
const inputIdiomas = document.querySelector("#selectIdoma");

idomas.forEach((lingua) => {
  const newOption = document.createElement("option");
  if (lingua === "Português") newOption.setAttribute("selected", "");
  newOption.innerText = lingua;
  inputIdiomas.appendChild(newOption);
});

const cabecalho = document.getElementsByClassName("cabecalho")[0];

document.addEventListener("scroll", funScroll);

function funScroll(e) {
  const isScroll = document.body.getBoundingClientRect().top;
  if (isScroll !== 0) cabecalho.classList.add("ativado");
  else cabecalho.classList.remove("ativado");
}

const controlAnimacaoDep = document.querySelector(".controlAimation");

const btnLeft = document.querySelector('[data-control="left"]');
const btnRigth = document.querySelector('[data-control="rigth"]');
const itemsCarrossel = document.querySelectorAll(".itemCarrossel");

const itemsDepoimentos = document.querySelectorAll(".item-dep");
function preventBtn(e) {
  e.preventDefault();
}
const btns = document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", preventBtn);
});

function activeSection(seletor) {
  console.log(seletor);
  itemsDepoimentos.forEach((item) => {
    console.log(item);
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
    if (item.classList.contains(seletor)) {
      item.classList.add("active");
    }
  });
}

function checkedDepAtual(direction) {
  for (let i = 0; i < itemsCarrossel.length; i++) {
    if (itemsCarrossel[i].classList.contains("activeDepoimento")) {
      itemsCarrossel[i].classList.remove("activeDepoimento");
      if (i + direction > itemsCarrossel.length - 1) {
        itemsCarrossel[0].classList.add("activeDepoimento");
        activeSection(itemsCarrossel[0].dataset.animedep);

        break;
      } else if (i + direction < 0) {
        itemsCarrossel[itemsCarrossel.length - 1].classList.add(
          "activeDepoimento"
        );
        activeSection(
          itemsCarrossel[itemsCarrossel.length - 1].dataset.animedep
        );

        break;
      } else {
        itemsCarrossel[i + direction].classList.add("activeDepoimento");
        activeSection(itemsCarrossel[i + direction].dataset.animedep);

        break;
      }
    }
  }
}

function handleBtnLeft(e) {
  e.preventDefault();
  checkedDepAtual(-1);
}
function handleBtnRigth(e) {
  e.preventDefault();
  checkedDepAtual(+1);
}
btnLeft.addEventListener("click", handleBtnLeft);
btnRigth.addEventListener("click", handleBtnRigth);
