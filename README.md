# Trustify0.1 - Secure E-Commerce Platform

ShopMM is a Myanmar-language e-commerce platform built with vanilla JavaScript and Firebase. This is a refactored and security-hardened version.

## 🔒 Security Fixes Applied

This version includes critical security fixes:

### ✅ Resolved Issues
1. **Hardcoded API Keys** - Firebase credentials now use environment variables
2. **Duplicate Initialization** - Removed conflicting Firebase configuration files
3. **Input Validation** - Added Myanmar phone number, name, and address validation
4. **XSS Prevention** - Implemented input sanitization and safe DOM methods
5. **CSP Headers** - Content Security Policy configuration for multiple platforms
6. **CSRF Protection** - Framework for CSRF tokens in forms

---

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ (optional, for local development)
- Modern web browser
- Firebase account

### 1. Clone the Repository
```bash
git clone https://github.com/3L0H55A/Trustify0.1.git
cd Trustify0.1
```

### 2. Set Up Environment Variables

**Copy the example file:**
```bash
cp .env.example .env.local
```

**Edit `.env.local` and add your Firebase credentials:**
```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**⚠️ IMPORTANT:** Never commit `.env.local` - it's already in `.gitignore`

### 3. Get Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Click **Settings** ⚙️ → **Project Settings**
4. Scroll to **Your apps** section
5. Select your web app and copy the config values
6. Paste into `.env.local`

### 4. Run Locally

**Option A: Using Python (for quick testing)**
```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

**Option B: Using Node.js with live reload**
```bash
npm install -g http-server
http-server -p 8000 -c-1
# Open http://localhost:8000
```

**Option C: Deploy to Vercel (recommended)**
```bash
npm install -g vercel
vercel
```

---

## 📁 Project Structure

```
Trustify0.1/
├── index.html           # Main shopping UI (Burmese language)
├── js/
│   ├── firebase.js      # Firebase initialization (env-based)
│   ├── auth.js          # Authentication functions
│   ├── validation.js    # Input validation & XSS prevention
│   ├── login.html       # Login page
│   └── register.html    # Registration page
├── .env.example         # Environment variables template
├── .gitignore          # Prevents committing sensitive files
├── firebase.js         # DEPRECATED - Use js/firebase.js instead
├── SECURITY-HEADERS.md # CSP configuration for servers
├── SECURITY.md         # Security policy
└── README.md           # This file
```

---

## 🔐 Security Best Practices

### 1. Firebase Configuration
- ✅ Credentials stored in `.env.local` (never in version control)
- ✅ Environment variables loaded at runtime
- ✅ `.env.local` is ignored by git

### 2. Input Validation
All user inputs are validated before submission:
```javascript
// Phone: Myanmar format (09xxxxxxxxx)
// Name: 2-100 characters
// Address: 10-500 characters
// Payment: 'cod' or 'kbz' only
```

### 3. XSS Prevention
- ✅ Use `textContent` instead of `innerHTML` for user input
- ✅ Sanitize inputs with `sanitizeInput()` function
- ✅ Content Security Policy headers configured

### 4. CSRF Protection
- ✅ See `SECURITY-HEADERS.md` for server-side implementation
- ✅ Add CSRF tokens to forms when using a backend

### 5. Security Headers
Deploy with Content Security Policy headers:
- **Apache**: See `SECURITY-HEADERS.md`
- **Nginx**: See `SECURITY-HEADERS.md`
- **Vercel**: Add `vercel.json` from `SECURITY-HEADERS.md`
- **Node/Express**: Use Helmet middleware (code provided)

---

## 🛠️ Development

### Using Validation Module
```javascript
import { 
  validateMyanmarPhone, 
  validateCheckoutForm, 
  sanitizeInput 
} from './js/validation.js';

// Validate form data
const validation = validateCheckoutForm({
  name: formData.name,
  phone: formData.phone,
  address: formData.address,
  payment: formData.payment
});

if (!validation.isValid) {
  console.error('Validation errors:', validation.errors);
}

// Sanitize user input
const safeName = sanitizeInput(userInput);
```

### Firebase Usage
```javascript
import { auth, db, storage } from './js/firebase.js';

// All Firebase services are now exported
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('User logged in:', user.email);
  }
});
```

---

## 🚨 Common Issues & Fixes

### Issue: "Firebase credentials not found"
**Solution:** 
1. Check if `.env.local` exists in project root
2. Verify all `VITE_FIREBASE_*` variables are set
3. Reload the page after creating `.env.local`

### Issue: "Duplicate Firebase initialization error"
**Solution:** 
- Only import from `js/firebase.js`
- Don't use the deprecated root `firebase.js`

### Issue: "Phone validation failing"
**Solution:**
- Use Myanmar format: `09xxxxxxxxx` (09 + 7-9 digits)
- Remove dashes/spaces before validation

### Issue: "CSP violation in console"
**Solution:**
1. Check `SECURITY-HEADERS.md` for your hosting platform
2. Add your Firebase domain to CSP `connect-src`
3. Add image CDN domains to `img-src`

---

## 📝 Security Checklist

Before deploying to production:

- [ ] Set up `.env.local` with real Firebase credentials
- [ ] Rotate Firebase API keys (regenerate in Firebase Console)
- [ ] Configure CSP headers on your hosting (see `SECURITY-HEADERS.md`)
- [ ] Enable Firebase Security Rules (don't use default "allow all")
- [ ] Set up HTTPS/SSL certificate
- [ ] Review Firebase Database rules
- [ ] Enable Firebase Authentication methods (Email/Password, Google, etc.)
- [ ] Test checkout form with various invalid inputs
- [ ] Monitor Firebase usage/quota
- [ ] Set up error logging (Sentry, LogRocket, etc.)

---

## 🔗 Useful Links

- [Firebase Console](https://console.firebase.google.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [OWASP Security Guidelines](https://owasp.org/)
- [Content Security Policy Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Myanmar Unicode Font](https://www.google.com/get/noto/#sans-myanmar)

---

## 📞 Support

For security issues, see `SECURITY.md`

For bug reports, open an [issue](https://github.com/3L0H55A/Trustify0.1/issues)

---

## 📄 License

MIT License - See `LICENSE` file for details

---

## ⚠️ Important Security Reminders

1. **Never commit `.env.local`** - It contains sensitive credentials
2. **Rotate Firebase keys regularly** if you suspect compromise
3. **Use HTTPS only** in production
4. **Monitor Firebase usage** to detect suspicious activity
5. **Keep dependencies updated** (Tailwind CSS, Firebase SDK)
6. **Test security headers** with [securityheaders.com](https://securityheaders.com/)

---

**Last Updated:** July 2026  
**Version:** 1.0.0 (Security Hardened)
