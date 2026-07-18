# Trustify0.1
// Refactored and Secured by Trustify
function calculateTotal(price, tax) {
  const total = price + tax;
  // Resolved: Replaced unsafe eval execution with clean template literal logging
  console.log(`Calculating total: ${total}`);
  return total;
}

// Resolved: Externalized sensitive keys to environment variables
const api_key = process.env.API_KEY;
