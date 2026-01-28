const scriptURL = "https://script.google.com/macros/s/AKfycbwdJ3N_DC9FEu2Az9UGEjazMBczK_oVhbuWARKRcotHFfcKZO07I99DUYhBsQ11XWeJ/exec";

const form = document.getElementById("waitlist-form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const country = document.getElementById("country");
const stateDesktop = document.getElementById("state-desktop");
const support = document.getElementById("support");
const formPage = document.getElementById("form-page");
const thankYouPage = document.getElementById("thank-you-page");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const payload = {
    fullName: fullName.value.trim(),
    country: country.value.trim(),
    state: stateDesktop.value.trim(),
    support: support.value.trim(),
    email: email.value.trim(),
    submittedAt: new Date().toISOString(),
  };

  try {
    await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    // UI switch
    formPage.style.display = "none";
    thankYouPage.style.display = "flex";

  } catch (error) {
    console.error("Submission error:", error);
    alert("Something went wrong. Please try again.");
  }
});