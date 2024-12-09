// Element references
const balanceEl = document.getElementById("account-balance");
const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");
const historyList = document.getElementById("history-list");
const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
// const modal = document.getElementById('modal');
// const closeModal = document.getElementById('close-modal');
const blogSection = document.getElementById('blog-section');
const blogBtn = document.getElementById('blog-btn')

// blogBtn.addEventListener("click", () => toggleSections(true));

let balance = parseInt(balanceEl.textContent);



// Toggle sections
function toggleSections(showDonation) {
  donationSection.style.display = showDonation ? "block" : "none";
  historySection.style.display = showDonation ? "none" : "block";
  blogSection.style.display = showDonation ? "none" : "block";
  donationBtn.classList.toggle("active", showDonation);
  historyBtn.classList.toggle("active", !showDonation);
  blogBtn.classList.toggle("active", !showDonation);
  // blogBtn.classList.toggle("active", showDonation);
}



// Handle donations
document.querySelectorAll(".donate-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const donationInput = card.querySelector(".donation-input");
    const donationAmountEl = card.querySelector(".donation-amount");
    const donationAmount = parseInt(donationInput.value);

    if (
      isNaN(donationAmount) ||
      donationAmount <= 0 ||
      donationAmount > balance
    ) {
      alert("Invalid donation amount.");
      return;
    }

    // Update values
    balance -= donationAmount;
    balanceEl.textContent = balance;
    donationAmountEl.textContent =
      parseInt(donationAmountEl.textContent) + donationAmount;
    donationInput.value = "";
    // Add to history
    const donationName = card.querySelector(".donation-name").textContent;
    const dateTime = new Date().toLocaleString();
    // historyList.innerHTML += `<li class='flex'>${dateTime}: Donated ${donationAmount} coins to ${donationName}</li>`;
    historyList.innerHTML += `<div class="border-2 border-e-gray-700 p-5 w-[90%] mx-auto rounded-lg mt-3">
        <h1 class="text-2xl font-bold">${donationAmount} Taka is ${donationName}</h1>
        <p>
          Date : ${dateTime} GMT +0600 (Bangladesh Standard Time)
        </p>
      </div>`;

    // Show modal
    // modal.classList.add('active');
    donationInput.value = "";
  });
});

// // Event listeners
donationBtn.addEventListener("click", () => toggleSections(true));
historyBtn.addEventListener("click", () => toggleSections(false));
blogBtn.addEventListener("click", () => toggleSections(false));
// closeModal.addEventListener('click', () => modal.classList.remove('active'));
