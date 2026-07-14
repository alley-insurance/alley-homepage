// モバイルメニューの開閉
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// お問い合わせフォームの簡易チェックと送信
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formNote.textContent = "未入力の必須項目があります。ご確認ください。";
      formNote.style.color = "#e53e3e";
      contactForm.reportValidity();
      return;
    }

    const submitButton = contactForm.querySelector("button[type=submit]");
    submitButton.disabled = true;
    formNote.textContent = "送信中です…";
    formNote.style.color = "#4a5568";

    fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          formNote.textContent = "お問い合わせを送信しました。担当者よりご連絡いたします。";
          formNote.style.color = "#2a6fdb";
          contactForm.reset();
        } else {
          formNote.textContent = "送信に失敗しました。お手数ですがお電話にてご連絡ください。";
          formNote.style.color = "#e53e3e";
        }
      })
      .catch(() => {
        formNote.textContent = "送信に失敗しました。お手数ですがお電話にてご連絡ください。";
        formNote.style.color = "#e53e3e";
      })
      .finally(() => {
        submitButton.disabled = false;
      });
  });
}
