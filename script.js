const form = document.querySelector(".invite-form");

form.addEventListener("submit", function (event) {
  // Запрещаем браузеру перезагружать страницу
  event.preventDefault();

  const selectedAnswer = document.querySelector(
    'input[name="answer"]:checked'
  );

  if (!selectedAnswer) {
    alert("Сначала выбери ответ 💌");
    return;
  }

  if (selectedAnswer.value === "yes") {
    alert("Ура! Буду тебя ждать ❤️");
  } else {
    alert("Очень жаль, но спасибо за ответ ❤️");
  }
});