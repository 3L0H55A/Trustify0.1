# Content Security Policy (CSP) Configuration
# Add these headers to your web server configuration to prevent XSS and injection attacks

## For Apache (.htaccess)
```apache
# Prevent XSS attacks
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"

# Content Security Policy
Header set Content-Security-Policy "default-src 'self'; script-src 'self' https://cdn.tailwindcss.com https://www.gstatic.com https://cdn.jsdelivr.net; style-src 'self' https://cdn.tailwindcss.com https://cdn.jsdelivr.net 'unsafe-inline'; img-src 'self' https: data:; connect-src 'self' https://trustify-f324e.firebaseapp.com https://firestore.googleapis.com; font-src 'self' https://cdn.jsdelivr.net data:; frame-ancestors 'none';"

# Referrer Policy
Header set Referrer-Policy "strict-origin-when-cross-origin"

# Permissions Policy
Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
```

## For Nginx
```nginx
add_header X-Content-Type-Options "nosniff";
add_header X-Frame-Options "SAMEORIGIN";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()";

# Content Security Policy
add_header Content-Security-Policy "default-src 'self'; script-src 'self' https://cdn.tailwindcss.com https://www.gstatic.com https://cdn.jsdelivr.net; style-src 'self' https://cdn.tailwindcss.com https://cdn.jsdelivr.net 'unsafe-inline'; img-src 'self' https: data:; connect-src 'self' https://trustify-f324e.firebaseapp.com https://firestore.googleapis.com; font-src 'self' https://cdn.jsdelivr.net data:; frame-ancestors 'none';";
```

## For Node.js/Express
```javascript
const express = require('express');
const helmet = require('helmet');

const app = express();

// Use Helmet to set security headers
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "https://cdn.tailwindcss.com",
      "https://www.gstatic.com",
      "https://cdn.jsdelivr.net"
    ],
    styleSrc: [
      "'self'",
      "https://cdn.tailwindcss.com",
      "https://cdn.jsdelivr.net",
      "'unsafe-inline'" // Required for Tailwind
    ],
    imgSrc: ["'self'", "https:", "data:"],
    connectSrc: [
      "'self'",
      "https://trustify-f324e.firebaseapp.com",
      "https://firestore.googleapis.com"
    ],
    fontSrc: ["'self'", "https://cdn.jsdelivr.net", "data:"],
    frameAncestors: ["'none'"]
  }
}));

app.use(helmet.referrerPolicy({ policy: "strict-origin-when-cross-origin" }));
app.use(helmet.frameguard({ action: "sameorigin" }));
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
```

## For Vercel (vercel.json)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' https://cdn.tailwindcss.com https://www.gstatic.com https://cdn.jsdelivr.net; style-src 'self' https://cdn.tailwindcss.com https://cdn.jsdelivr.net 'unsafe-inline'; img-src 'self' https: data:; connect-src 'self' https://trustify-f324e.firebaseapp.com https://firestore.googleapis.com; font-src 'self' https://cdn.jsdelivr.net data:; frame-ancestors 'none';"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        }
      ]
    }
  ]
}
```

## What These Headers Do

- **X-Content-Type-Options: nosniff** - Prevents browsers from MIME-sniffing
- **X-Frame-Options: SAMEORIGIN** - Prevents clickjacking attacks
- **X-XSS-Protection** - Legacy XSS filter (modern browsers use CSP)
- **Content-Security-Policy** - Restricts resource loading to trusted sources only
- **Referrer-Policy** - Controls referrer information
- **Permissions-Policy** - Disables unnecessary browser features

## Important Notes

⚠️ **Update Firebase domain**: Replace `trustify-f324e.firebaseapp.com` with your actual Firebase project domain if different.

⚠️ **'unsafe-inline'**: Currently allowed for styles (required for Tailwind CSS). Consider migrating to Tailwind's built-in CSP support in future versions.

⚠️ **Testing**: Always test CSP in report-only mode first before enforcing:
```
Content-Security-Policy-Report-Only: ...
```

This allows you to see violations without blocking legitimate traffic.
