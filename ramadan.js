// ====== زر Hire Me ======
function showMessage() {
  // رسالة تظهر عند الضغط على زر Hire Me
  alert("Thanks for your interest! 🚀");
}

// ====== فورم Contact ======
function handleForm(event) {
  // منع إعادة تحميل الصفحة عند الإرسال
  event.preventDefault();

  // جمع بيانات الفورم (اختياري)
  const name = event.target.querySelector('input[type="text"]').value;
  const email = event.target.querySelector('input[type="email"]').value;
  const message = event.target.querySelector('textarea').value;

  // عرض رسالة تأكيد
  alert(`Thank you, ${name}! Your message has been sent ✅`);

  // هنا يمكن إضافة كود لإرسال البيانات لقاعدة بيانات أو API إذا أحببت
}
// ===== HIRE ME POPUP ONLY =====
const hireBtn = document.getElementById("hireBtn");
const popup = document.getElementById("popupMessage");
const closeBtn = document.getElementById("closePopup");

// عرض الـ Popup عند الضغط على زر Hire Me
hireBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

// إغلاق الـ Popup عند الضغط على زر Close
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// إغلاق الـ Popup عند الضغط خارج الصندوق
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});