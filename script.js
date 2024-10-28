// Set the donation goal in BTC
const goalAmount = 1; // Goal of 1 BTC
let currentDonations = 0.0; // Replace with actual amount if available

// Function to update the donation display and progress bar
function updateDonationTracker() {
    const progressElement = document.getElementById("progress");
    const currentDonationsElement = document.getElementById("current-donations");
    
    // Calculate progress percentage
    const progressPercentage = (currentDonations / goalAmount) * 100;
    progressElement.style.width = progressPercentage + "%";
    
    // Update donation text
    currentDonationsElement.textContent = currentDonations.toFixed(2); // Displayed to two decimal places
}

// Call updateDonationTracker initially to display current state
updateDonationTracker();

// Simulate donations (for demo purposes only)
function simulateDonation(amount) {
    currentDonations += amount;
    if (currentDonations > goalAmount) currentDonations = goalAmount; // Cap at goal amount
    updateDonationTracker();
}

// Donation simulation (remove or replace this with real-time data fetching)
setTimeout(() => simulateDonation(0.1), 5000); // Adds 0.1 BTC after 5 seconds
setTimeout(() => simulateDonation(0.2), 10000); // Adds 0.2 BTC after 10 seconds
setTimeout(() => simulateDonation(0.0), 0000); // Return to 0.0 BTC after 15 seconds

// Open BTCPay server link
function openBTCPay(network) {
    let url;
    if (network === 'mainnet') {
        url = "https://your-btcpay-url.com/apps/your-app-id-mainnet";
    } else if (network === 'lightning') {
        url = "https://your-btcpay-url.com/apps/your-app-id-lightning";
    }
    window.open(url, "_blank");
}

// Function to show the Bitcoin address
function showBitcoinAddress() {
    const addressContainer = document.getElementById("bitcoinAddressContainer");
    addressContainer.style.display = "block";
}

// Function to copy the Bitcoin address to the clipboard
function copyBitcoinAddress() {
    const bitcoinAddress = document.getElementById("bitcoinAddress").textContent;
    navigator.clipboard.writeText(bitcoinAddress).then(() => {
        alert("Bitcoin address copied to clipboard!");
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
}
