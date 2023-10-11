const form = document.getElementById("form");
const feedback = new URLSearchParams(location.search).get("feedback");
if (feedback) {
  form.classList.add("hide");
  document.querySelector(".feedback-result").innerHTML += feedback;
}
