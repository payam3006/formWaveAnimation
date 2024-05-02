const q = console.log;

const checkGoUp = () => {
  if (document.getElementById("password").value !== "") {
    document.getElementById("passLable").classList.add("goUp");
  } else {
    document.getElementById("passLable").classList.remove("goUp");
  }
};
