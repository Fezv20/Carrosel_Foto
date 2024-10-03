//horas
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let timetoday = new Date();
  let hr = timetoday.getHours();
  let min = timetoday.getMinutes();
  let seg = timetoday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (seg < 10) seg = "0" + seg;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;

  //dias que passaram
  const diaPassou = document.getElementById("dia_passou");
  const mesPassou = document.getElementById("mes_passou");
  const anoPassou = document.getElementById("ano_passou");

  let datePassou = new Date();

  let d = datePassou.getDate();
  let m = datePassou.getMonth() + 1;
  let a = datePassou.getYear() + 1900;

  //dia for menor que 12 ainda nao completou o mes.
  if (m < 6) {
    a = a - 1;
  }

  if (d < 12) {
    m = m - 1;
  }

  let quantos_anos = a - 2023;
  let quantos_meses = m - 6;
  let quantos_dias = d - 12;

  if (d < 12) {
    quantos_dias = 19 + d;
  }

  if (m < 6) {
    quantos_meses = 6 + m;
  }

  diaPassou.textContent = quantos_dias;
  mesPassou.textContent = quantos_meses;
  anoPassou.textContent = quantos_anos;
});

document.getElementById("button").onclick = function () {
  myFunction();
};

//CLICK ME
/*function myFunction() {
  document.getElementById("body").innerHTML = "TE AMO";
  document.body.style.fontSize = "80px";
  document.body.style.textAlign = "center";

  //VOLTAR
  var batsu = document.createElement("input");
  batsu.type = "button";
  batsu.value = "VOLTAR";

  batsu.onclick = function () {
    window.history.go(0);
  };
  document.body.appendChild(batsu);
}
*/