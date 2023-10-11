const form = document.getElementById("form");
const feedback = new URLSearchParams(location.search).get("feedback");

if (feedback) {
  form.style.display = "none";
  document.querySelector(".feedback-result").innerHTML += feedback;
}
