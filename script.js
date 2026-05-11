(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.getElementById("signupForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const contact = String(fd.get("contact") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const subject = "Запись на консультацию";
    const body = [
      "Здравствуйте, Ольга!",
      "",
      "Хочу записаться на консультацию.",
      "",
      `Имя: ${name}`,
      `Контакт: ${contact}`,
      "",
      "Запрос:",
      message,
      "",
      "Спасибо!",
    ].join("\n");

    // TODO: замените на реальный email получателя
    const to = "example@email.com";

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
})();

