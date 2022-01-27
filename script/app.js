const exerciseText = document.getElementById("exercise-text");
const input = document.getElementById("input-text");
const container = document.getElementById("container");
const time = document.getElementById("time");
const msg = document.getElementById("message");
const select = document.getElementById("userlevel");

const harf = document.getElementsByClassName("harf");

const levelDescription=document.getElementById("level-description")
const infoTrigger=document.getElementById("level-description-trigger")

const tekrarDene=document.getElementById("tekrarDene")
const understoodBtn=document.getElementById("understand")

infoTrigger.addEventListener("click",()=>{
  levelDescription.classList.remove("remove")
})

understoodBtn.addEventListener("click",()=>{
levelDescription.classList.add("remove")

})

tekrarDene.addEventListener("click", ()=>{
  location.reload()
})

const harfArray = [
  "fdsa",
  "jklş",
  "fdsajklş",
  "fdsaghjklş",
  "hgfdsaşi,jklş",
  "hgfdsaşi,jklşASDFGHJKLŞİ",
  "hgfdsaşiqwert,jklşASDFGHJKLŞİQWERT",
  "hgfdsaşiqwert,jklşASDFGHJKLŞİQWERTyYuUıIoOPp",
  "hgfdsaşiqwert,jklşASDFGHJKLŞİQWERTyYuUıIoOPpğüĞÜ",
  "hgfdsaşiqwert,jklşASDFGHJKLŞİQWERTyYuUıIoOPpğüĞÜzxcvbZXCVB",
  "hgfdsaşiqwert,jklşASDFGHJKLŞİQWERTyYuUıIoOPpğüĞÜzxcvbZXCVBnmöç.NMÖÇ",
  "hgfdsaşiqwert,jklşASDFGHJKLŞİQWERTyYuUıIoOPpğüĞÜzxcvbZXCVBnmöç.NMÖÇ12345",
  "hgfdsaşiqwert,jklşASDFGHJKLŞİQWERTyYuUıIoOPpğüĞÜzxcvbZXCVBnmöç.NMÖÇ1234567890",
  "hgfdsaşiqwert,jklşASDFGHJKLŞİQWERTyYuUıIoOPpğüĞÜzxcvbZXCVBnmöç.NMÖÇ1234567890!'^%&/()?;-",
  "hgfdsaşiqwert,jklşASDFGHJKLŞİQWERTyYuUıIoOPpğüĞÜzxcvbZXCVBnmöç.NMÖÇ1234567890!'^%&/()?;-+_",
];

let selectValue = select.value;

window.onload = () => {
  input.focus();
};

const removeTextSpans = () => {
  exerciseText.innerHTML = "";
};

const setText = (levelHarf) => {
  let text = "";

  for (let i = 0; i < 20; i++) {
    const harfler = levelHarf;
    let rasgeleNumara = [3, 3, 4, 5];
    let rasgele = rasgeleNumara[Math.floor(Math.random() * 4)];

    for (let j = 0; j < rasgele; j++) {
      text += harfler[Math.floor(Math.random() * levelHarf.length)];
    }

    text += " ";
  }

  text = text.slice(0, text.length - 1);
  for (let t = 0; t < text.length; t++) {
    const harf = document.createElement("span");
    const h = document.createTextNode(text[t]);
    harf.appendChild(h);
    harf.classList.add("harf");
    exerciseText.appendChild(harf);
  }
};

setText(harfArray[selectValue]);

input.value.toLocaleLowerCase("tr-Tr");

var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
  time.innerText = "Geçen Süre: " + c;
  c = c + 1;
  t = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}

input.addEventListener("input", () => {
  const gameTime=document.getElementById("game-time")
  const hataSayısı=document.getElementById("hata")
  const gameInfoSection=document.getElementById("game-info")
  const harfPerSeconds=document.getElementById("harf-per-second")
  let hata=0
  startCount();

  

  if (input.value == "") {
    msg.innerHTML = "";
    container.classList.remove("correct");
    container.classList.remove("incorrect");
  }

  for (let i = 0; i < harf.length; i++) {
    if (harf[i].innerText === input.value[i]) {
      harf[i].classList.add("correct");
      container.classList.add("correct");
      container.classList.remove("incorrect");
      harf[i].classList.remove("incorrect");
      msg.innerHTML = "İyi gidiyorsunuz!";
    } else if (input.value[i] == null) {
      harf[i].classList.remove("incorrect");
      harf[i].classList.remove("correct");
    } else {
      harf[i].classList.add("incorrect");
      container.classList.add("incorrect");
      container.classList.remove("correct");
      harf[i].classList.remove("correct");
      msg.innerHTML = "Hata yaptınız!";
      hata++
    }
  }

  if (input.value.length === harf.length) {
    stopCount();
    input.readOnly=true;
    gameInfoSection.classList.toggle("active")
    gameTime.innerText=c-1;
    harfPerSeconds.innerText=(harf.length/(c-1)).toFixed(2)
    hataSayısı.innerText=hata;
    
  }
});

select.addEventListener("change", () => {
  input.value = "";
  msg.innerHTML = "";
  container.classList.remove("incorrect");
  container.classList.remove("correct");

  c = 0;
  time.innerText = "Geçen Süre: " + c;

  selectValue = select.options[select.selectedIndex].value;

  removeTextSpans();

  setText(harfArray[selectValue]);

  stopCount();
});
