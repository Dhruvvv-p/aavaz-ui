// ✅ Define scrollToForm globally FIRST
window.scrollToForm = function () {
  const formSection = document.getElementById("watchlist-form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Form section not found");
  }
};

// ✅ Then listen for DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joinForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      alert("Please fill in your name and email.");
      return;
    }

    console.log("Form submitted:", {
      name,
      email,
      interest: document.getElementById("interest").value,
      referral: document.getElementById("referral").value.trim(),
    });

    form.reset();
    alert("Thanks for joining the waitlist!");
  });
});
