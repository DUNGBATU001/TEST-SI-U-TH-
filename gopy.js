document.getElementById("gopy-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const output = document.getElementById("gopy-message");

  if (name && email && message) {
    output.style.color = "green";
    output.textContent = "Cảm ơn bạn đã gửi góp ý! Chúng tôi sẽ tiếp thu và cải thiện.";
    this.reset();
  } else {
    output.style.color = "red";
    output.textContent = "Vui lòng điền đầy đủ thông tin trước khi gửi.";
  }
});
