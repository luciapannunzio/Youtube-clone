const div = document.querySelector(".dark-theme");

const theme = () => {
  const checkbox = document.querySelector("#light-dark").checked;
  const body = document.querySelector("body");
  if(checkbox /* === true*/) {
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
  }
};