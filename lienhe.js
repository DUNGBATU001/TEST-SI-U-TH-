document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const subject = this.subject.value.trim();
  const message = this.message.value.trim();

  const output = document.getElementById("form-message");

  if (name && email && subject && message) {
    output.style.color = "green";
    output.textContent = "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.";
    this.reset();
  } else {
    output.style.color = "red";
    output.textContent = "Vui lòng điền đầy đủ thông tin trước khi gửi.";
  }
});
