/**
 * Input Validation Module
 * Ensures all user inputs are properly validated before submission
 */

// Myanmar phone number validation (09xxx-xxx-xxx format)
export function validateMyanmarPhone(phone) {
  // Myanmar phone numbers typically start with 09 and have 7-9 digits after
  const mmPhoneRegex = /^09\d{7,9}$/;
  return mmPhoneRegex.test(phone.replace(/[-\s]/g, ''));
}

// Name validation
export function validateName(name) {
  // Name should be 2-100 characters, allow letters, spaces, and Myanmar characters
  const trimmed = name.trim();
  return trimmed.length >= 2 && trimmed.length <= 100;
}

// Address validation
export function validateAddress(address) {
  // Address should be 10-500 characters
  const trimmed = address.trim();
  return trimmed.length >= 10 && trimmed.length <= 500;
}

// Email validation
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input - remove potentially dangerous characters
export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  // Remove HTML tags and dangerous characters
  return input
    .replace(/[<>\"']/g, '')
    .trim()
    .substring(0, 500); // Limit length
}

// Validate checkout form data
export function validateCheckoutForm(formData) {
  const errors = {};

  // Validate name
  if (!validateName(formData.name)) {
    errors.name = 'အမည်သည် ၂-၁၀၀ စာလုံးရှိရမည်';
  }

  // Validate phone
  if (!validateMyanmarPhone(formData.phone)) {
    errors.phone = 'ဖုန်းနံပါတ်မှားသည် (09xxxxxxxxx)';
  }

  // Validate address
  if (!validateAddress(formData.address)) {
    errors.address = 'လိပ်စာသည် ၁၀-၅၀၀ စာလုံးရှိရမည်';
  }

  // Validate payment method
  if (!['cod', 'kbz'].includes(formData.payment)) {
    errors.payment = 'အမျိုးမျိုးသော ပေးချေမှုနည်းလမ်း သေချာမရှိ';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors: errors
  };
}

// Show validation error message
export function showValidationError(fieldName, message) {
  const errorElement = document.createElement('div');
  errorElement.className = 'text-red-600 text-sm mt-1';
  errorElement.textContent = message;
  
  const field = document.querySelector(`[name="${fieldName}"]`);
  if (field) {
    field.parentElement.appendChild(errorElement);
    field.classList.add('border-red-500');
  }
}

// Clear validation errors
export function clearValidationErrors() {
  document.querySelectorAll('.text-red-600').forEach(el => el.remove());
  document.querySelectorAll('.border-red-500').forEach(el => {
    el.classList.remove('border-red-500');
  });
}
