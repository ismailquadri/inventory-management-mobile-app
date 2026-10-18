# Interoly — Inventory Management Mobile App

A modern, high-fidelity mobile application interface and interactive prototype designed for warehouse operations, real-time inventory tracking, barcode scanning, and multi-step order fulfillment.

---

## 🌟 Key Features

- **📊 Operations & Analytics Dashboard**: Real-time KPI metrics for shipped items, packed orders, and inventory volume across selectable periods (Week, Month, Year).
- **📦 Inventory & Stock Control**: Instant item search, categorization, low-stock threshold alerts, and one-tap stock adjustments.
- **📷 Barcode & SKU Scanner**: Fast barcode/QR scanning simulation for rapid inventory lookup and batch updates.
- **🚚 Order Fulfillment Workflow**: Step-by-step order progression from *Pending* to *Confirmed*, *Shipped*, and *Delivered*.
- **⚡ Interactive Prototype**: Bundled, zero-dependency interactive application with complete component state, navigation drawer, and notifications.
- **🎨 Design System & Assets**: Master `.fig` Figma file included alongside modular design tokens, icons, and theme components.

---

## 🚀 Live Demo & Deployment

- **Live URL**: [https://inventory-management-mobile-app.vercel.app](https://inventory-management-mobile-app.vercel.app) *(or your Vercel deployment link)*
- **GitHub Repository**: [https://github.com/ismailquadri/inventory-management-mobile-app](https://github.com/ismailquadri/inventory-management-mobile-app)

---

## 💻 Quick Start

To preview the application locally, serve the project with any static HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .
```

Then open `http://localhost:8000` in your web browser or mobile emulator.

---

## 📁 Project Structure

```
.
├── FIGMA/
│   └── Inventory Management Mobile App.fig   # Master Figma design file
├── HTML/
│   ├── assets/                                # Avatars and SVG icons
│   ├── components/                            # Tokens, styles, and screen components
│   ├── exports/                               # Prototype export artifacts
│   ├── index.html                             # Source prototype application
│   ├── inv-icon.js                            # Custom icon web component
│   ├── styles.css                             # Typography and token imports
│   └── support.js                             # Component runtime engine
├── index.html                                 # Root application entrypoint
├── vercel.json                                # Vercel deployment configuration
├── .gitignore                                 # Git ignore patterns
└── README.md                                  # Project documentation
```

---

## 📄 License

This project is licensed under the MIT License.
