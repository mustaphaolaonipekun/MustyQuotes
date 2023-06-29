var url = "https://api.themotivate365.com/stoic-quote";
async function quote() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  document.querySelector(".quotes").innerHTML = data.quote;
  document.querySelector(".author").innerHTML = data.author;
  if (data.author == "") {
    document.querySelector(".author").innerHTML = "musty dev";
  }
}
quote();

var urls = "https://api.adviceslip.com/advice";
async function advice() {
  const response = await fetch(urls);
  const data = await response.json();
  console.log(data);
  document.querySelector(".quotes").innerHTML = data.slip.advice;
  document.querySelector(".author").innerHTML = "musty dev";
}
advice();

var link =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single&idRange=0-319";
async function joke() {
  const response = await fetch(link);
  const data = await response.json();
  console.log(data);
  document.querySelector(".quotes").innerHTML = data.joke;
  document.querySelector(".author").innerHTML = data.category;
}
joke();

var links = "https://api.themotivate365.com/stoic-quote";
async function Inspiration() {
  const response = await fetch(links);
  const data = await response.json();
  console.log(data);
  document.querySelector(".quotes").innerHTML = data.quote;
  document.querySelector(".author").innerHTML = "musty dev";
}
Inspiration();

var uls = "https://www.affirmations.dev/";
async function facts() {
  const response = await fetch(uls);
  const data = await response.json();
  console.log(data);
  document.querySelector(".quotes").innerHTML = data.affirmation;
  document.querySelector(".author").innerHTML = "musty dev";

}
facts();
