document.getElementById("question-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const question = this.question.value.trim();
  const messageBox = document.getElementById("question-message");

  if (question) {
    messageBox.style.color = "green";
    messageBox.textContent = "Câu hỏi của bạn đã được gửi thành công!";
    this.reset();
  } else {
    messageBox.style.color = "red";
    messageBox.textContent = "Vui lòng nhập câu hỏi trước khi gửi.";
  }
});
