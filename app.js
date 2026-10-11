// --- HOMERENT AI APPLIANCES DATABASE ---
const DEFAULT_APPLIANCES = [
  {
    id: 1,
    title: "Smart Double-Door Refrigerator",
    category: "kitchen",
    price: 1499.00,
    rating: 4.9,
    reviews: 124,
    image: "assets/images/smart_refrigerator.jpg",
    desc: "350L double-door refrigerator with AI energy saving, convertible zones, and real-time freshness tracking via smart display.",
    badge: "Bestseller",
    sizeUpcharges: { standard: 0, deluxe: -100, premium: -200 }
  },
  {
    id: 2,
    title: "Front Load Inverter Washing Machine",
    category: "laundry",
    price: 1199.00,
    rating: 4.8,
    reviews: 95,
    image: "assets/images/washing_machine.jpg",
    desc: "8kg premium front load washing machine with AI wash cycle optimization, 5-star energy rating, and built-in water heater.",
    badge: "Eco-Friendly",
    sizeUpcharges: { standard: 0, deluxe: -100, premium: -200 }
  },
  {
    id: 3,
    title: "Convection Microwave Oven",
    category: "kitchen",
    price: 599.00,
    rating: 4.7,
    reviews: 82,
    image: "assets/images/microwave_oven.jpg",
    desc: "28L convection microwave with 360-degree uniform heating, auto-cook menus, and elegant touch controls.",
    badge: "Popular",
    sizeUpcharges: { standard: 0, deluxe: -50, premium: -100 }
  },
  {
    id: 4,
    title: "Smart Inverter Split AC",
    category: "climate",
    price: 1799.00,
    rating: 4.9,
    reviews: 154,
    image: "assets/images/air_conditioner.jpg",
    desc: "1.5 Ton 5-Star split air conditioner with smart Wi-Fi controls, PM2.5 filter, and ultra-quiet cooling mode.",
    badge: "Seasonal",
    sizeUpcharges: { standard: 0, deluxe: -150, premium: -300 }
  },
  {
    id: 5,
    title: "Built-In Automatic Dishwasher",
    category: "kitchen",
    price: 1299.00,
    rating: 4.6,
    reviews: 41,
    image: "assets/images/dishwasher.jpg",
    desc: "14 place settings dishwasher with intensive wash for Indian utensils, auto-dry technology, and low water consumption.",
    badge: "Luxury",
    sizeUpcharges: { standard: 0, deluxe: -100, premium: -200 }
  },
  {
    id: 6,
    title: "Minimalist HEPA Air Purifier",
    category: "climate",
    price: 799.00,
    rating: 4.5,
    reviews: 73,
    image: "assets/images/air_purifier.jpg",
    desc: "True HEPA H13 air purifier with real-time AQI display, smart filter life alerts, and CADR of 350 m³/h.",
    badge: "Smart Living",
    sizeUpcharges: { standard: 0, deluxe: -50, premium: -100 }
  },
  {
    id: 7,
    title: "Smart Air Fryer Pro",
    category: "kitchen",
    price: 699.00,
    rating: 4.7,
    reviews: 68,
    image: "assets/images/microwave_oven.jpg",
    desc: "5.5L connected air fryer with guided recipes, rapid crisp technology, and dishwasher-safe parts for effortless everyday cooking.",
    badge: "New",
    sizeUpcharges: { standard: 0, deluxe: -50, premium: -100 }
  },
  {
    id: 8,
    title: "Top Load Turbo Washer",
    category: "laundry",
    price: 899.00,
    rating: 4.6,
    reviews: 57,
    image: "assets/images/washing_machine.jpg",
    desc: "7kg top-load washer with turbo drum cleaning, quick wash programs, and smart load balancing for compact homes.",
    badge: "Value Pick",
    sizeUpcharges: { standard: 0, deluxe: -75, premium: -150 }
  },
  {
    id: 9,
    title: "Tower Air Cooler",
    category: "climate",
    price: 649.00,
    rating: 4.4,
    reviews: 39,
    image: "assets/images/air_conditioner.jpg",
    desc: "Energy-saving tower cooler with three fan modes, a wide-angle swing, and remote control for comfortable summer evenings.",
    badge: "Summer Ready",
    sizeUpcharges: { standard: 0, deluxe: -50, premium: -100 }
  },
  {
    id: 10,
    title: "Countertop Water Purifier",
    category: "living",
    price: 749.00,
    rating: 4.6,
    reviews: 46,
    image: "assets/images/air_purifier.jpg",
    desc: "Compact multi-stage water purifier with filter-life alerts, child lock, and instant access to fresh drinking water.",
    badge: "Healthy Home",
    sizeUpcharges: { standard: 0, deluxe: -50, premium: -100 }
  },
  {
    id: 11,
    title: "Compact Beverage Chiller",
    category: "living",
    price: 599.00,
    rating: 4.3,
    reviews: 31,
    image: "assets/images/smart_refrigerator.jpg",
    desc: "Quiet 45L beverage chiller with adjustable temperature zones and a space-saving glass door for entertaining at home.",
    badge: "Compact",
    sizeUpcharges: { standard: 0, deluxe: -40, premium: -80 }
  },
  {
    id: 12,
    title: "SteamCare Garment Steamer",
    category: "laundry",
    price: 499.00,
    rating: 4.5,
    reviews: 28,
    image: "assets/images/washing_machine.jpg",
    desc: "Fast-heating garment steamer with crease-release modes and a removable water tank for polished clothes in minutes.",
    badge: "Easy Care",
    sizeUpcharges: { standard: 0, deluxe: -40, premium: -80 }
  }
];

const DEFAULT_BOOKINGS = [
  {
    id: "LR-829471",
    customerName: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    address: "402, Green Glen Heights, HSR Layout, Bengaluru - 560102",
    applianceName: "Smart Double-Door Refrigerator",
    tenure: "12 Months",
    totalRent: 1299.00,
    status: "active",
    date: "12/07/2026"
  },
  {
    id: "LR-304859",
    customerName: "Priya Patel",
    email: "priya.patel@example.com",
    address: "A-504, Windsor Court, Indiranagar, Bengaluru - 560038",
    applianceName: "Front Load Inverter Washing Machine",
    tenure: "6 Months",
    totalRent: 1099.00,
    status: "pending",
    date: "24/07/2026"
  }
];

const DEFAULT_USERS = [
  {
    email: "customer@homerent.ai",
    password: "customer123",
    name: "Aarav Sharma",
    role: "customer"
  },
  {
    email: "vendor@homerent.ai",
    password: "vendor123",
    name: "SmartRent Vendor",
    role: "vendor"
  }
];

// --- HYDERABAD LOCALITIES COORDINATES & HAVERSINE DISTANCE ---
const HYDERABAD_LOCALITIES = {
  "Gachibowli":    { area: "Gachibowli", latitude: 17.4401, longitude: 78.3489 },
  "Madhapur":      { area: "Madhapur", latitude: 17.4483, longitude: 78.3915 },
  "Kondapur":      { area: "Kondapur", latitude: 17.4699, longitude: 78.3578 },
  "Hitech City":   { area: "Hitech City", latitude: 17.4435, longitude: 78.3772 },
  "Kukatpally":    { area: "Kukatpally", latitude: 17.4948, longitude: 78.3996 },
  "Miyapur":       { area: "Miyapur", latitude: 17.4968, longitude: 78.3614 },
  "Jubilee Hills": { area: "Jubilee Hills", latitude: 17.4319, longitude: 78.4073 },
  "Banjara Hills": { area: "Banjara Hills", latitude: 17.4156, longitude: 78.4350 },
  "Ameerpet":      { area: "Ameerpet", latitude: 17.4375, longitude: 78.4482 },
  "Begumpet":      { area: "Begumpet", latitude: 17.4448, longitude: 78.4664 },
  "Secunderabad":  { area: "Secunderabad", latitude: 17.4399, longitude: 78.4983 },
  "Uppal":         { area: "Uppal", latitude: 17.4018, longitude: 78.5602 },
  "LB Nagar":      { area: "LB Nagar", latitude: 17.3457, longitude: 78.5522 },
  "Mehdipatnam":   { area: "Mehdipatnam", latitude: 17.3916, longitude: 78.4398 },
  "Manikonda":     { area: "Manikonda", latitude: 17.4042, longitude: 78.3788 },
  "Narsingi":      { area: "Narsingi", latitude: 17.3828, longitude: 78.3582 },
  "Attapur":       { area: "Attapur", latitude: 17.3688, longitude: 78.4299 },
  "Dilsukhnagar":  { area: "Dilsukhnagar", latitude: 17.3685, longitude: 78.5247 },
  "Tarnaka":       { area: "Tarnaka", latitude: 17.4285, longitude: 78.5303 },
  "Nacharam":      { area: "Nacharam", latitude: 17.4262, longitude: 78.5684 }
};

function calculateHaversineDistanceKm(lat1, lon1, lat2, lon2) {
  if (lat1 == null || lon1 == null || lat2 == null || lon2 == null) return null;
  const numLat1 = parseFloat(lat1);
  const numLon1 = parseFloat(lon1);
  const numLat2 = parseFloat(lat2);
  const numLon2 = parseFloat(lon2);
  if (isNaN(numLat1) || isNaN(numLon1) || isNaN(numLat2) || isNaN(numLon2)) return null;

  const R = 6371.0;
  const dLat = (numLat2 - numLat1) * Math.PI / 180.0;
  const dLon = (numLon2 - numLon1) * Math.PI / 180.0;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(numLat1 * Math.PI / 180.0) * Math.cos(numLat2 * Math.PI / 180.0) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

// --- APP STATE ---
let state = {
  appliances: [],
  bookings: [],
  cart: [],
  promoApplied: false,
  promoDiscount: 0.15, // 15% off
  currentFilter: "all",
  currentDistanceFilter: "all",
  currentSort: "featured",
  searchQuery: "",
  userPincode: "560102",
  activeProduct: null,
  activeDetailOptions: {
    size: "standard", // standard: 3m, deluxe: 6m, premium: 12m
    qty: 1,
    message: "", // installation notes
    addons: []
  },
  checkoutStep: 1,
  currentPortal: "customer", // customer or vendor
  currentAdminTab: "inventory", // inventory or bookings
  editingApplianceId: null, // track if editing an appliance
  currentUser: null,
  registeredUsers: []
};

// --- DOM ELEMENTS SELECTORS ---
const elements = {
  themeToggle: document.getElementById("theme-toggle"),
  cartToggle: document.getElementById("cart-toggle"),
  cartOverlay: document.getElementById("cart-overlay"),
  cartClose: document.getElementById("cart-close"),
  cartEmpty: document.getElementById("cart-empty"),
  cartItemsList: document.getElementById("cart-items-list"),
  cartCount: document.getElementById("cart-count"),
  cartSubtotal: document.getElementById("cart-subtotal"),
  cartDelivery: document.getElementById("cart-delivery"),
  cartDiscount: document.getElementById("cart-discount"),
  discountRow: document.getElementById("discount-row"),
  cartTotal: document.getElementById("cart-total"),
  promoCode: document.getElementById("promo-code"),
  promoApply: document.getElementById("promo-apply"),
  productsGrid: document.getElementById("products-grid"),
  filterTabs: document.getElementById("filter-tabs"),
  sortSelect: document.getElementById("sort-select"),
  distanceFilterSelect: document.getElementById("distance-filter-select"),
  locationNoticeBanner: document.getElementById("location-notice-banner"),
  locationNoticeText: document.getElementById("location-notice-text"),
  enableLocationBtn: document.getElementById("enable-location-btn"),
  mainNavLinks: document.getElementById("main-nav-links"),
  
  // Amazon Universal Search & Pincode
  amazonSearchInput: document.getElementById("amazon-search-input"),
  headerCategorySelect: document.getElementById("header-category-select"),
  pincodeDisplay: document.getElementById("pincode-display"),
  changePincodeBtn: document.getElementById("change-pincode-btn"),
  
  // Product Detail Modal
  productModal: document.getElementById("product-modal"),
  modalClose: document.getElementById("modal-close"),
  modalImg: document.getElementById("modal-img"),
  modalCategory: document.getElementById("modal-category"),
  modalTitle: document.getElementById("modal-title"),
  modalPrice: document.getElementById("modal-price"),
  modalBuyPrice: document.getElementById("modal-buy-price"),
  modalDesc: document.getElementById("modal-desc"),
  specEnergy: document.getElementById("spec-energy"),
  specCapacity: document.getElementById("spec-capacity"),
  sizeOptions: document.querySelectorAll(".size-option"),
  tenureMinusBtn: document.getElementById("tenure-minus-btn"),
  tenurePlusBtn: document.getElementById("tenure-plus-btn"),
  tenureMonthsInput: document.getElementById("tenure-months-input"),
  tenureDisplayText: document.getElementById("tenure-display-text"),
  tenureQuickPills: document.getElementById("tenure-quick-pills"),
  tenureStartPreview: document.getElementById("tenure-start-preview"),
  tenureEndPreview: document.getElementById("tenure-end-preview"),
  giftMessage: document.getElementById("gift-message"),
  addonCheckboxes: document.querySelectorAll(".addon-checkbox"),
  modalQtyMinus: document.getElementById("modal-qty-minus"),
  modalQtyPlus: document.getElementById("modal-qty-plus"),
  modalQtyValue: document.getElementById("modal-qty-value"),
  modalAddToCart: document.getElementById("modal-add-to-cart"),

  // Modal Vendor & Reviews Elements
  modalVendorCard: document.getElementById("modal-vendor-card"),
  modalVendorAddress: document.getElementById("modal-vendor-address"),
  modalVendorPhone: document.getElementById("modal-vendor-phone"),
  modalVendorPhoneLink: document.getElementById("modal-vendor-phone-link"),
  modalVendorDistanceRow: document.getElementById("modal-vendor-distance-row"),
  modalVendorDistance: document.getElementById("modal-vendor-distance"),
  modalStarsContainer: document.getElementById("modal-stars-container"),
  modalAvgRatingText: document.getElementById("modal-avg-rating-text"),
  modalTotalReviewsBadge: document.getElementById("modal-total-reviews-badge"),
  modalReviewsList: document.getElementById("modal-reviews-list"),
  toggleReviewFormBtn: document.getElementById("toggle-review-form-btn"),
  closeReviewFormBtn: document.getElementById("close-review-form-btn"),
  modalWriteReviewContainer: document.getElementById("modal-write-review-container"),
  submitReviewForm: document.getElementById("submit-review-form"),
  reviewCommentInput: document.getElementById("review-comment-input"),
  selectedRatingVal: document.getElementById("selected-rating-val"),
  starPicker: document.getElementById("star-picker"),
  starPickerLabel: document.getElementById("star-picker-label"),
  reviewEligibilityAlert: document.getElementById("review-eligibility-alert"),
  cancelReviewBtn: document.getElementById("cancel-review-btn"),
  
  // Checkout Modal
  checkoutModal: document.getElementById("checkout-modal"),
  checkoutTrigger: document.getElementById("checkout-trigger"),
  checkoutClose: document.getElementById("checkout-close"),
  checkoutBack: document.getElementById("checkout-back"),
  checkoutNext: document.getElementById("checkout-next"),
  checkoutFooter: document.getElementById("checkout-footer"),
  stepIndicator1: document.getElementById("step-indicator-1"),
  stepIndicator2: document.getElementById("step-indicator-2"),
  stepIndicator3: document.getElementById("step-indicator-3"),
  step1Content: document.getElementById("checkout-step-1"),
  step2Content: document.getElementById("checkout-step-2"),
  step3Content: document.getElementById("checkout-step-3"),
  shippingForm: document.getElementById("shipping-form"),
  paymentForm: document.getElementById("payment-form"),
  confirmedEmail: document.getElementById("confirmed-email"),
  orderTrackingId: document.getElementById("order-tracking-id"),
  
  // Payment Credit Card Details
  interactiveCard: document.getElementById("interactive-card"),
  cardNumber: document.getElementById("card-number"),
  cardName: document.getElementById("card-name"),
  cardExpiry: document.getElementById("card-expiry"),
  cardCvv: document.getElementById("card-cvv"),
  cardNumDisp: document.getElementById("card-num-disp"),
  cardNameDisp: document.getElementById("card-name-disp"),
  cardExpDisp: document.getElementById("card-exp-disp"),
  cardCvvDisp: document.getElementById("card-cvv-disp"),
  
  // Notifications
  toastContainer: document.getElementById("toast-container"),

  // Booking Receipt Elements
  btnViewReceipt: document.getElementById("btn-view-receipt"),
  btnDownloadReceipt: document.getElementById("btn-download-receipt"),
  bookingReceiptModal: document.getElementById("booking-receipt-modal"),
  closeReceiptModalBtn: document.getElementById("close-receipt-modal-btn"),
  receiptDoneBtn: document.getElementById("receipt-done-btn"),
  receiptPrintBtn: document.getElementById("receipt-print-btn"),
  receiptDownloadFileBtn: document.getElementById("receipt-download-file-btn"),
  receiptCustomerName: document.getElementById("receipt-customer-name"),
  receiptBookingId: document.getElementById("receipt-booking-id"),
  receiptBookingDate: document.getElementById("receipt-booking-date"),
  receiptStatus: document.getElementById("receipt-status"),
  receiptApplianceName: document.getElementById("receipt-appliance-name"),
  receiptCategory: document.getElementById("receipt-category"),
  receiptTenure: document.getElementById("receipt-tenure"),
  receiptStartDate: document.getElementById("receipt-start-date"),
  receiptEndDate: document.getElementById("receipt-end-date"),
  receiptMonthlyPrice: document.getElementById("receipt-monthly-price"),
  receiptTotalAmount: document.getElementById("receipt-total-amount"),
  receiptVendorName: document.getElementById("receipt-vendor-name"),
  receiptVendorPhone: document.getElementById("receipt-vendor-phone"),
  receiptVendorAddress: document.getElementById("receipt-vendor-address"),

  // --- NEW PORTAL ELEMENTS ---
  portalToggle: document.getElementById("portal-toggle"),
  customerPortalView: document.getElementById("customer-portal-view"),
  vendorConsole: document.getElementById("vendor-console"),
  navAddApplianceBtn: document.getElementById("nav-add-appliance-btn"),
  vendorAddApplianceModal: document.getElementById("vendor-add-appliance-modal"),
  openVendorModalBtn: document.getElementById("open-vendor-modal-btn"),
  vendorModalClose: document.getElementById("vendor-modal-close"),
  vendorModalForm: document.getElementById("vendor-modal-form"),
  
  // Admin Dashboard
  adminRevenue: document.getElementById("admin-revenue"),
  adminRentalsCount: document.getElementById("admin-rentals-count"),
  adminInventoryCount: document.getElementById("admin-inventory-count"),
  adminTabs: document.getElementById("admin-tabs"),
  adminInventorySection: document.getElementById("admin-inventory-section"),
  adminBookingsSection: document.getElementById("admin-bookings-section"),
  adminInventoryGrid: document.getElementById("admin-inventory-grid"),
  adminBookingsList: document.getElementById("admin-bookings-list"),
  
  // Add Appliance Form
  addApplianceForm: document.getElementById("add-appliance-form"),
  applianceTitle: document.getElementById("appliance-title"),
  applianceCategory: document.getElementById("appliance-category"),
  appliancePrice: document.getElementById("appliance-price"),
  applianceImage: document.getElementById("appliance-image"),
  applianceDesc: document.getElementById("appliance-desc"),
  applianceLocality: document.getElementById("appliance-locality"),
  applianceAddress: document.getElementById("appliance-address"),
  appliancePhone: document.getElementById("appliance-phone"),
  applianceBadge: document.getElementById("appliance-badge"),
  
  // AI Chat widget
  aiChatWidget: document.getElementById("ai-chat-widget"),
  aiChatBtn: document.getElementById("ai-chat-btn"),
  aiChatPanel: document.getElementById("ai-chat-panel"),
  aiChatClose: document.getElementById("ai-chat-close"),
  aiChatBody: document.getElementById("ai-chat-body"),
  aiChatInput: document.getElementById("ai-chat-input"),
  aiChatSend: document.getElementById("ai-chat-send"),

  // Authentication Elements
  authModal: document.getElementById("auth-modal"),
  authModalClose: document.getElementById("auth-modal-close"),
  tabAuthCustomer: document.getElementById("tab-auth-customer"),
  tabAuthVendor: document.getElementById("tab-auth-vendor"),
  fillCustomerDemo: document.getElementById("fill-customer-demo"),
  fillVendorDemo: document.getElementById("fill-vendor-demo"),
  authForm: document.getElementById("auth-form"),
  authRole: document.getElementById("auth-role"),
  authMode: document.getElementById("auth-mode"),
  authName: document.getElementById("auth-name"),
  groupAuthName: document.getElementById("group-auth-name"),
  authEmail: document.getElementById("auth-email"),
  authPassword: document.getElementById("auth-password"),
  authErrorMsg: document.getElementById("auth-error-msg"),
  authSubmitBtn: document.getElementById("auth-submit-btn"),
  authSubtitle: document.getElementById("auth-subtitle"),
  authModeText: document.getElementById("auth-mode-text"),
  authToggleLink: document.getElementById("auth-toggle-link"),
  navLoginBtn: document.getElementById("nav-login-btn"),
  navUserProfile: document.getElementById("nav-user-profile"),
  userRoleBadge: document.getElementById("user-role-badge"),
  userNameDisplay: document.getElementById("user-name-display"),
  navLogoutBtn: document.getElementById("nav-logout-btn")
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  initAuth();
  if (elements.productsGrid) {
    await loadDatabase();
    await loadCartFromStorage();
    renderProducts();
    setupEventListeners();
    setupAmazonSearchListeners();
    setupNewPortalListeners();
    setupAiChatListeners();
    setupAuthListeners();
    setupVendorAddModalListeners();
    updateCartUI();

    // Enforce role-based navbar and view after data load
    if (state.currentUser) {
      updateNavForLoggedInUser(state.currentUser);
    } else {
      updateNavForLoggedInUser(null);
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("view") === "vendor" && state.currentUser && state.currentUser.role === "vendor") {
      state.currentPortal = "vendor";
      if (elements.customerPortalView) elements.customerPortalView.style.display = "none";
      if (elements.vendorConsole) elements.vendorConsole.style.display = "block";
      updateAdminDashboard();
    }
  } else if (elements.themeToggle) {
    elements.themeToggle.addEventListener("click", toggleTheme);
  }
});

// --- AMAZON LIVE SEARCH & PINCODE LISTENERS ---
function setupAmazonSearchListeners() {
  if (elements.amazonSearchInput) {
    elements.amazonSearchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  if (elements.headerCategorySelect) {
    elements.headerCategorySelect.addEventListener("change", (e) => {
      state.currentFilter = e.target.value;
      // Sync with filter tabs UI
      document.querySelectorAll("#filter-tabs .filter-tab").forEach(tab => {
        tab.classList.toggle("active", tab.getAttribute("data-category") === state.currentFilter);
      });
      renderProducts();
    });
  }

  if (elements.changePincodeBtn) {
    elements.changePincodeBtn.addEventListener("click", () => {
      const pin = prompt("Enter your delivery location pincode:", state.userPincode || "560102");
      if (pin && pin.trim().length >= 5) {
        state.userPincode = pin.trim();
        if (elements.pincodeDisplay) elements.pincodeDisplay.textContent = `Pincode ${state.userPincode}`;
        showToast(`Delivery area set to Pincode ${state.userPincode}`, "success");
      }
    });
  }
}

// Global payment switcher for step 2 checkout
window.switchPayMethod = function(method) {
  document.getElementById("pay-card-lbl").classList.toggle("active", method === "card");
  document.getElementById("pay-upi-lbl").classList.toggle("active", method === "upi");
  document.getElementById("pay-cod-lbl").classList.toggle("active", method === "cod");

  document.getElementById("card-payment-view").style.display = method === "card" ? "block" : "none";
  document.getElementById("upi-payment-view").style.display = method === "upi" ? "block" : "none";
  document.getElementById("cod-payment-view").style.display = method === "cod" ? "block" : "none";
};

// --- THEME MANAGEMENT ---
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
  showToast("Theme changed successfully", "info");
}

function updateThemeIcon(theme) {
  if (!elements.themeToggle) return;
  if (theme === "dark") {
    elements.themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun moon-icon">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    elements.themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun moon-icon">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

// --- DATABASE AND DATA PERSISTENCE ---
async function loadDatabase() {
  try {
    let appUrl = '/api/appliances';
    const custLoc = state.currentUser?.location;
    if (custLoc && custLoc.latitude != null && custLoc.longitude != null) {
      appUrl += `?lat=${custLoc.latitude}&lng=${custLoc.longitude}`;
    }
    const appRes = await fetch(appUrl);
    const bookRes = await fetch('/api/bookings');
    state.appliances = await appRes.json();
    state.bookings = await bookRes.json();
  } catch (e) {
    console.error("Failed to load DB", e);
    state.appliances = [...DEFAULT_APPLIANCES];
    state.bookings = [...DEFAULT_BOOKINGS];
  }
}

async function saveDatabase() {
  try {
    await fetch('/api/appliances/bulk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.appliances)
    });
    await fetch('/api/bookings/bulk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.bookings)
    });
  } catch (e) {
    console.error("Failed to save DB", e);
  }
}

// --- CUSTOMER PRODUCT CATALOG RENDERING ---
function renderProducts() {
  if (!elements.productsGrid) return;

  const custLoc = state.currentUser?.location;
  const hasCustLoc = Boolean(custLoc && custLoc.latitude != null && custLoc.longitude != null);

  // Compute or refresh distance for all appliances if customer location is available
  state.appliances.forEach(item => {
    let vloc = item.vendorLocation;
    if (!vloc || !vloc.latitude || !vloc.longitude) {
      // Auto-resolve from locality or default to Gachibowli
      let area = "Gachibowli";
      const vAddr = (item.vendorAddress || item.address || "").toLowerCase();
      for (const locKey of Object.keys(HYDERABAD_LOCALITIES)) {
        if (vAddr.includes(locKey.toLowerCase())) {
          area = locKey;
          break;
        }
      }
      const coords = HYDERABAD_LOCALITIES[area] || HYDERABAD_LOCALITIES["Gachibowli"];
      vloc = { area, latitude: coords.latitude, longitude: coords.longitude };
      item.vendorLocation = vloc;
    }

    if (hasCustLoc) {
      const d = calculateHaversineDistanceKm(custLoc.latitude, custLoc.longitude, vloc.latitude, vloc.longitude);
      item.distance_km = d;
      item.distance_text = d != null ? `${d} km away` : null;
    } else {
      item.distance_km = null;
      item.distance_text = null;
    }
  });

  // Update Location notice banner
  if (elements.locationNoticeBanner) {
    if (hasCustLoc) {
      elements.locationNoticeBanner.style.display = "flex";
      if (elements.locationNoticeText) {
        elements.locationNoticeText.innerHTML = `Showing appliances with real-time distance from your location (<strong>${custLoc.latitude.toFixed(4)}, ${custLoc.longitude.toFixed(4)}</strong>).`;
      }
      if (elements.enableLocationBtn) elements.enableLocationBtn.style.display = "none";
    } else if (state.currentUser && state.currentUser.role === "customer" && state.currentUser.locationDenied) {
      elements.locationNoticeBanner.style.display = "flex";
      if (elements.locationNoticeText) {
        elements.locationNoticeText.textContent = "Location access is required to calculate appliance distance.";
      }
      if (elements.enableLocationBtn) elements.enableLocationBtn.style.display = "inline-flex";
    } else {
      elements.locationNoticeBanner.style.display = "none";
    }
  }

  // Filter appliances by category, live search query, and distance filter
  let filtered = state.appliances.filter(item => {
    const itemCat = (item.category || "").toLowerCase();
    const itemTitle = (item.title || item.name || "").toLowerCase();
    const itemDesc = (item.desc || item.description || "").toLowerCase();

    const matchesCategory = state.currentFilter === "all" || itemCat === state.currentFilter.toLowerCase();
    const matchesSearch = !state.searchQuery ||
      itemTitle.includes(state.searchQuery) ||
      itemDesc.includes(state.searchQuery) ||
      itemCat.includes(state.searchQuery);

    let matchesDistance = true;
    if (state.currentDistanceFilter && state.currentDistanceFilter !== "all") {
      const maxDist = parseFloat(state.currentDistanceFilter);
      if (!isNaN(maxDist)) {
        matchesDistance = item.distance_km != null && item.distance_km <= maxDist;
      }
    }

    return matchesCategory && matchesSearch && matchesDistance;
  });

  // Sort appliances
  if (state.currentSort === "nearest") {
    filtered.sort((a, b) => {
      if (a.distance_km == null && b.distance_km == null) return 0;
      if (a.distance_km == null) return 1;
      if (b.distance_km == null) return -1;
      return a.distance_km - b.distance_km;
    });
  } else if (state.currentSort === "farthest") {
    filtered.sort((a, b) => {
      if (a.distance_km == null && b.distance_km == null) return 0;
      if (a.distance_km == null) return 1;
      if (b.distance_km == null) return -1;
      return b.distance_km - a.distance_km;
    });
  } else if (state.currentSort === "price-low") {
    filtered.sort((a, b) => (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0));
  } else if (state.currentSort === "price-high") {
    filtered.sort((a, b) => (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0));
  } else if (state.currentSort === "rating") {
    filtered.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
  }

  // Clear grid
  elements.productsGrid.innerHTML = "";

  if (filtered.length === 0) {
    const isDistFilterActive = state.currentDistanceFilter && state.currentDistanceFilter !== "all";
    const emptyMsg = isDistFilterActive && !hasCustLoc
      ? "Location access is required to filter by distance. Please enable location permission to discover appliances near you."
      : "No appliances match your search criteria. Try a different keyword, category, or distance range.";
    elements.productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 2.5rem 1rem;">${emptyMsg}</p>`;
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-id", product.id);

    const title = product.title || product.name || "Smart Appliance";
    const desc = product.desc || product.description || "Premium appliance available for flexible rental.";
    const price = Math.max(1, Math.round(parseFloat(product.price || 499)));
    const image = product.image || "assets/images/smart_refrigerator.jpg";
    const rating = parseFloat(product.rating || 4.7);
    const reviews = parseInt(product.reviews || 42);

    const buyPriceEst = Math.round(price * 28);
    const stockCount = Math.max(2, (product.id * 3) % 12 + 1);

    const ratingStars = Array(5).fill("").map((_, i) => {
      const isFilled = i < Math.floor(rating);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="${isFilled ? "var(--accent-gold)" : "none"}" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }).join("");

    const vendorLabel = product.brand || (product.vendor_email ? product.vendor_email.split('@')[0] : 'HomeRent Fleet');
    const vloc = product.vendorLocation || {};
    const area = vloc.area || (product.vendorAddress ? product.vendorAddress.split(',')[0].trim() : "Gachibowli");
    const distText = product.distance_text || (product.distance_km != null ? `${product.distance_km} km away` : (hasCustLoc ? "Calculating..." : "Location needed"));

    card.innerHTML = `
      <div class="product-img-container">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <img src="${image}" alt="${title}" onerror="this.src='assets/images/smart_refrigerator.jpg'">
        <div class="product-actions-overlay">
          <button class="product-card-btn view-details" title="Configure Rental Tenure">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          </button>
          <button class="product-card-btn quick-add" title="Rent standard (3 Months)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
      </div>
      <div class="product-content">
        <div class="product-header">
          <h3 class="product-title">${title}</h3>
          <span class="product-price">₹${price}/mo</span>
        </div>
        <div style="font-size: 0.74rem; color: var(--text-secondary); margin: -0.2rem 0 0.35rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.35rem;">
          <div><span style="opacity: 0.75;">Vendor:</span> <strong style="color: var(--accent-primary);">${vendorLabel}</strong></div>
          <div style="display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(30, 63, 32, 0.08); padding: 0.15rem 0.55rem; border-radius: 6px; font-weight: 600; color: var(--accent-primary); border: 1px solid var(--border-color);">
            <span>📍 ${area}</span>
            <span style="opacity: 0.5;">•</span>
            <span style="font-weight: 700;">📏 ${distText}</span>
          </div>
        </div>
        <div class="price-comparison-tag">
          <span>Buy @ ₹${buyPriceEst.toLocaleString('en-IN')}</span> | <strong style="color: var(--accent-primary);">Save 92% Renting</strong>
        </div>
        <p class="product-desc" style="margin-top: 0.4rem;">${desc}</p>
        <div class="stock-status-meter ${stockCount < 4 ? 'low-stock' : 'in-stock'}">
          <span>${stockCount < 4 ? `⚠️ Only ${stockCount} left in stock!` : `✔ In Stock (24h Delivery)`}</span>
        </div>
        <div class="product-footer" style="margin-top: 0.6rem;">
          <div class="product-rating">
            ${ratingStars}
            <span>(${reviews})</span>
          </div>
          <button class="quick-add-link view-details">
            Configure
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    `;

    // Quick add click event
    card.querySelector(".quick-add").addEventListener("click", (e) => {
      e.stopPropagation();
      if (!state.currentUser) {
        showToast("Please sign in to book an appliance.", "info");
        openAuthModal("customer", "Please sign in to book an appliance.");
        return;
      }
      if (state.currentUser.role === "vendor") {
        showToast("Vendor accounts cannot book appliances.", "warning");
        return;
      }
      addCartItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        vendor_email: product.vendor_email || product.vendorEmail || "",
        vendorName: product.vendorName || product.brand || "HomeRent Verified Vendor",
        vendorAddress: product.vendorAddress || product.address || "Indiranagar, Bengaluru, Karnataka",
        vendorPhone: product.vendorPhone || product.phone || "9876543210",
        size: "standard",
        addons: [],
        message: "",
        qty: 1
      });
      showToast(`Added 1x ${product.title} (3 Months tenure) to rental bag!`, "success");
      elements.cartOverlay.classList.add("open");
    });

    card.querySelectorAll(".view-details").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openProductModal(product.id);
      });
    });

    card.addEventListener("click", (e) => {
      if (!e.target.closest(".quick-add")) {
        openProductModal(product.id);
      }
    });

    elements.productsGrid.appendChild(card);
  });
}

// --- CART STATE MANAGEMENT ---
async function loadCartFromStorage() {
  try {
    const user = state.currentUser;
    const url = (user && user.email) ? `/api/cart/${encodeURIComponent(user.email)}` : '/api/cart';
    const res = await fetch(url);
    state.cart = await res.json();
  } catch (e) {
    state.cart = [];
  }
}

async function saveCartToStorage() {
  try {
    const user = state.currentUser;
    const url = (user && user.email) ? `/api/cart/${encodeURIComponent(user.email)}` : '/api/cart';
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.cart)
    });
  } catch (e) {
    console.error("Failed to save cart to DB", e);
  }
}

// --- DATE RANGE & TENURE HELPER ---
function getRentalDateRange(tenureMonths) {
  const m = Math.max(1, parseInt(tenureMonths) || 1);
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + m);

  const formatDate = (d) => {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatDisplay = (d) => {
    return d.toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return {
    startDateStr: formatDate(startDate),
    endDateStr: formatDate(endDate),
    startDateDisplay: formatDisplay(startDate),
    endDateDisplay: formatDisplay(endDate)
  };
}

function addCartItem(newItem) {
  const newTenure = newItem.tenureMonths || 1;
  // Match exact appliance, tenureMonths, message, and addons
  const existingItemIndex = state.cart.findIndex(item => {
    const itemTenure = item.tenureMonths || (item.size === "deluxe" ? 6 : (item.size === "premium" ? 12 : 3));
    return item.id === newItem.id &&
           itemTenure === newTenure &&
           item.message === newItem.message &&
           JSON.stringify(item.addons || []) === JSON.stringify(newItem.addons || []);
  });

  if (existingItemIndex > -1) {
    state.cart[existingItemIndex].qty += newItem.qty;
  } else {
    state.cart.push(newItem);
  }
  
  saveCartToStorage();
  updateCartUI();
  animateCartBadge();
}

function updateCartItemQty(index, change) {
  state.cart[index].qty += change;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  saveCartToStorage();
  updateCartUI();
}

function removeCartItem(index) {
  const title = state.cart[index].title;
  state.cart.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
  showToast(`Removed ${title} from bag`, "info");
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  elements.cartCount.textContent = totalCount;

  if (state.cart.length === 0) {
    elements.cartEmpty.style.display = "flex";
    elements.cartItemsList.innerHTML = "";
    elements.cartSubtotal.textContent = "₹0.00";
    elements.cartDelivery.textContent = "₹0.00";
    elements.cartTotal.textContent = "₹0.00";
    elements.discountRow.style.display = "none";
    elements.checkoutTrigger.disabled = true;
    return;
  }

  elements.cartEmpty.style.display = "none";
  elements.checkoutTrigger.disabled = false;
  elements.cartItemsList.innerHTML = "";

  let subtotal = 0;

  state.cart.forEach((item, index) => {
    const addonsTotal = (item.addons || []).reduce((sum, ad) => sum + ad.price, 0);
    const monthlyRate = item.price + addonsTotal;
    const months = item.tenureMonths || (item.size === "deluxe" ? 6 : (item.size === "premium" ? 12 : 3));
    const itemTotal = monthlyRate * months * item.qty;
    subtotal += itemTotal;

    const tenureLabel = item.tenureLabel || `${months} ${months === 1 ? 'Month' : 'Months'}`;
    const addonsString = (item.addons || []).map(ad => ad.name).join(", ");
    const metaText = `${tenureLabel}${addonsString ? ` + ${addonsString}` : ""}`;

    const cartItemEl = document.createElement("div");
    cartItemEl.className = "cart-item";
    cartItemEl.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-meta">${metaText} • ₹${Math.round(monthlyRate)}/mo</div>
        ${item.message ? `<div class="cart-item-meta" style="font-style: italic; font-size: 0.75rem;">Notes: "${item.message.slice(0, 30)}${item.message.length > 30 ? '...' : ''}"</div>` : ''}
        <div class="cart-item-pricing">
          <div class="cart-item-qty">
            <button class="qty-btn minus" data-index="${index}">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn plus" data-index="${index}">+</button>
          </div>
          <span class="cart-item-price">₹${Math.round(itemTotal).toLocaleString('en-IN')} <small style="display:block; font-size:0.75rem; color:var(--text-secondary);">(Total for ${months} mo)</small></span>
        </div>
      </div>
      <button class="cart-item-remove" data-index="${index}">&times;</button>
    `;

    cartItemEl.querySelector(".minus").addEventListener("click", () => updateCartItemQty(index, -1));
    cartItemEl.querySelector(".plus").addEventListener("click", () => updateCartItemQty(index, 1));
    cartItemEl.querySelector(".cart-item-remove").addEventListener("click", () => removeCartItem(index));

    elements.cartItemsList.appendChild(cartItemEl);
  });

  // Installation (free for total rent over ₹1500)
  const delivery = subtotal >= 1500 ? 0 : 250;
  elements.cartDelivery.textContent = delivery === 0 ? "FREE" : `₹${delivery}`;

  // Promo Discount
  let discount = 0;
  if (state.promoApplied) {
    discount = subtotal * state.promoDiscount;
    elements.cartDiscount.textContent = `-₹${Math.round(discount)}`;
    elements.discountRow.style.display = "flex";
  } else {
    elements.discountRow.style.display = "none";
  }

  elements.cartSubtotal.textContent = `₹${Math.round(subtotal).toLocaleString('en-IN')}`;
  const total = subtotal - discount + delivery;
  elements.cartTotal.textContent = `₹${Math.round(total).toLocaleString('en-IN')}`;
}

function animateCartBadge() {
  elements.cartCount.classList.add("bounce");
  setTimeout(() => {
    elements.cartCount.classList.remove("bounce");
  }, 300);
}

// --- PRODUCT DETAIL MODAL CONFIGURATOR ---
async function openProductModal(productId) {
  const pId = parseInt(productId);
  const product = state.appliances.find(p => p.id === pId);
  if (!product) return;

  state.activeProduct = product;
  state.activeDetailOptions = {
    tenureMonths: 1,
    size: "standard",
    qty: 1,
    message: "",
    addons: []
  };

  // Reset modal elements
  elements.modalImg.src = product.image;
  elements.modalImg.alt = product.title;
  elements.modalCategory.textContent = (product.category || "APPLIANCE").toUpperCase();
  elements.modalTitle.textContent = product.title;
  elements.modalDesc.textContent = product.desc || product.description || "";
  elements.giftMessage.value = "";
  elements.modalQtyValue.textContent = "1";

  // Vendor Information (Mandatory Details & Distance)
  const vloc = product.vendorLocation || {};
  const area = vloc.area || (product.vendorAddress ? product.vendorAddress.split(',')[0].trim() : "Gachibowli");
  const vendorAddress = product.vendorAddress || product.address || `${area}, Hyderabad, Telangana`;
  const vendorPhone = product.vendorPhone || product.phone || "9876543210";
  const cleanPhone = String(vendorPhone).replace(/\D/g, '');
  const formattedPhone = cleanPhone.length === 10
    ? `+91 ${cleanPhone.slice(0, 5)} ${cleanPhone.slice(5)}`
    : `+91 ${vendorPhone}`;

  if (elements.modalVendorAddress) elements.modalVendorAddress.textContent = `${area} • ${vendorAddress}`;
  if (elements.modalVendorPhone) elements.modalVendorPhone.textContent = formattedPhone;
  if (elements.modalVendorPhoneLink) elements.modalVendorPhoneLink.href = `tel:${cleanPhone}`;

  if (elements.modalVendorDistance) {
    if (product.distance_text) {
      elements.modalVendorDistance.textContent = product.distance_text;
    } else if (product.distance_km != null) {
      elements.modalVendorDistance.textContent = `${product.distance_km} km away`;
    } else if (state.currentUser?.location) {
      const dist = calculateHaversineDistanceKm(state.currentUser.location.latitude, state.currentUser.location.longitude, vloc.latitude, vloc.longitude);
      elements.modalVendorDistance.textContent = dist != null ? `${dist} km away` : "Calculating...";
    } else {
      elements.modalVendorDistance.textContent = "Location access needed";
    }
  }

  const buyPriceEst = Math.round(product.price * 28);
  if (elements.modalBuyPrice) {
    elements.modalBuyPrice.textContent = `Buy @ ₹${buyPriceEst.toLocaleString('en-IN')}`;
  }
  if (elements.specEnergy) {
    elements.specEnergy.textContent = (product.rating || 4.5) >= 4.8 ? "5-Star Inverter Rating" : "4-Star Energy Efficient";
  }
  if (elements.specCapacity) {
    elements.specCapacity.textContent = product.category === "kitchen" ? "350 Liters" : (product.category === "laundry" ? "8 kg Front Load" : "1.5 Ton Split AC");
  }

  // Reset addons checkboxes
  elements.addonCheckboxes.forEach(cb => {
    cb.checked = false;
  });

  // Initialize month-wise continuous tenure to 1 month
  setModalTenure(1);

  // Reset Write Review form
  if (elements.modalWriteReviewContainer) {
    elements.modalWriteReviewContainer.style.display = "none";
  }
  if (elements.reviewCommentInput) {
    elements.reviewCommentInput.value = "";
  }
  setStarPickerRating(5);

  // Load reviews dynamically from MongoDB
  await loadAndRenderProductReviews(pId);

  elements.productModal.classList.add("open");
}

function closeProductModal() {
  elements.productModal.classList.remove("open");
  state.activeProduct = null;
}

// Helper to fetch and render reviews
async function loadAndRenderProductReviews(productId) {
  if (!elements.modalReviewsList) return;

  elements.modalReviewsList.innerHTML = `
    <div style="text-align: center; padding: 1.5rem; color: var(--text-secondary);">
      <span>⏳ Loading customer reviews...</span>
    </div>`;

  try {
    const res = await fetch(`/api/appliances/${productId}/reviews`);
    if (!res.ok) throw new Error("Failed to load reviews");
    const data = await res.json();
    const reviews = data.reviews || [];
    const avgRating = data.average_rating || 0;
    const totalCount = data.total_reviews || 0;

    // Update Average Rating display
    if (elements.modalAvgRatingText) {
      elements.modalAvgRatingText.textContent = totalCount > 0 ? `${avgRating.toFixed(1)} / 5.0` : "No Reviews Yet";
    }
    if (elements.modalTotalReviewsBadge) {
      elements.modalTotalReviewsBadge.textContent = totalCount > 0
        ? `Based on ${totalCount} verified ${totalCount === 1 ? 'review' : 'reviews'}`
        : "Be the first to review!";
    }

    // Stars display
    if (elements.modalStarsContainer) {
      if (totalCount === 0) {
        elements.modalStarsContainer.textContent = "☆☆☆☆☆";
      } else {
        const fullStars = Math.floor(avgRating);
        const hasHalf = (avgRating - fullStars) >= 0.3;
        let starStr = "★".repeat(fullStars);
        if (hasHalf && starStr.length < 5) starStr += "½";
        while (starStr.length < 5) starStr += "☆";
        elements.modalStarsContainer.textContent = starStr;
      }
    }

    // Render Review items list
    elements.modalReviewsList.innerHTML = "";
    if (reviews.length === 0) {
      elements.modalReviewsList.innerHTML = `
        <div style="text-align: center; padding: 2.2rem 1.5rem; background: var(--bg-secondary); border-radius: 16px; border: 1.5px dashed var(--border-color);">
          <span style="font-size: 2rem; display: block; margin-bottom: 0.5rem;">🌟</span>
          <h4 style="color: var(--accent-primary); font-size: 1.05rem; margin-bottom: 0.3rem;">No Customer Reviews Yet</h4>
          <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 420px; margin: 0 auto;">Have you rented this appliance? Share your honest experience with cooling, energy savings, and installation!</p>
        </div>`;
      return;
    }

    // Sort newest first
    reviews.slice().reverse().forEach(r => {
      const card = document.createElement("div");
      card.className = "review-item-card";

      const ratingVal = Math.max(1, Math.min(5, Math.round(Number(r.rating) || 5)));
      const stars = "★".repeat(ratingVal) + "☆".repeat(5 - ratingVal);
      const dateStr = r.createdAt || (r.created_at ? r.created_at.slice(0, 10) : "Verified Rental");
      const name = r.customerName || (r.customerId ? r.customerId.split("@")[0] : "Verified Customer");

      card.innerHTML = `
        <div class="review-item-header">
          <div class="review-author">
            <span>👤 ${name}</span>
            <span class="review-badge-verified">✔ Verified Renter</span>
          </div>
          <span class="review-date">${dateStr}</span>
        </div>
        <div class="review-stars">${stars} <strong style="font-size: 0.85rem; color: var(--text-primary); margin-left: 0.35rem;">${r.rating} / 5</strong></div>
        <p class="review-comment-text">${r.comment || ""}</p>
      `;
      elements.modalReviewsList.appendChild(card);
    });

  } catch (err) {
    console.error("Error loading reviews:", err);
    elements.modalReviewsList.innerHTML = `<p style="text-align: center; color: var(--text-secondary); padding: 1.5rem;">Unable to load reviews at this time.</p>`;
  }
}

// Star Rating Picker Helpers
function setStarPickerRating(val) {
  const ratingNum = parseInt(val) || 5;
  if (elements.selectedRatingVal) elements.selectedRatingVal.value = ratingNum;

  const starLabels = {
    1: "1 Star — Poor",
    2: "2 Stars — Fair",
    3: "3 Stars — Good",
    4: "4 Stars — Very Good",
    5: "5 Stars — Excellent"
  };

  if (elements.starPickerLabel) {
    elements.starPickerLabel.textContent = starLabels[ratingNum] || `${ratingNum} Stars`;
  }

  if (elements.starPicker) {
    const btns = elements.starPicker.querySelectorAll(".star-btn");
    btns.forEach(btn => {
      const btnVal = parseInt(btn.getAttribute("data-val"));
      if (btnVal <= ratingNum) {
        btn.classList.add("active");
        btn.style.color = "var(--accent-gold)";
      } else {
        btn.classList.remove("active");
        btn.style.color = "var(--border-color)";
      }
    });
  }
}

let isReviewListenersSetup = false;
function setupReviewSystemListeners() {
  if (isReviewListenersSetup) return;
  isReviewListenersSetup = true;

  // Star Rating Picker Click & Hover
  if (elements.starPicker) {
    const btns = elements.starPicker.querySelectorAll(".star-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-val");
        setStarPickerRating(val);
      });

      btn.addEventListener("mouseenter", () => {
        const hoverVal = parseInt(btn.getAttribute("data-val"));
        btns.forEach(b => {
          const bVal = parseInt(b.getAttribute("data-val"));
          b.style.color = bVal <= hoverVal ? "var(--accent-gold)" : "var(--border-color)";
        });
      });
    });

    elements.starPicker.addEventListener("mouseleave", () => {
      const currentVal = parseInt(elements.selectedRatingVal?.value || 5);
      setStarPickerRating(currentVal);
    });
  }

  // Toggle "Write a Review" form
  if (elements.toggleReviewFormBtn) {
    elements.toggleReviewFormBtn.addEventListener("click", async () => {
      if (!state.currentUser) {
        showToast("Please sign in as a customer to write a review.", "info");
        openAuthModal("customer");
        return;
      }

      if (state.currentUser.role === "vendor") {
        showToast("Vendor accounts cannot submit customer reviews.", "error");
        return;
      }

      if (!elements.modalWriteReviewContainer) return;

      const isHidden = elements.modalWriteReviewContainer.style.display === "none";
      if (!isHidden) {
        elements.modalWriteReviewContainer.style.display = "none";
        return;
      }

      elements.modalWriteReviewContainer.style.display = "block";

      // Check rental eligibility via server
      if (elements.reviewEligibilityAlert && state.activeProduct) {
        const alertEl = elements.reviewEligibilityAlert;
        const submitBtn = elements.submitReviewForm?.querySelector("button[type='submit']");
        alertEl.style.display = "block";
        alertEl.innerHTML = `<span>🔍 Verifying rental history for ${state.currentUser.email}...</span>`;
        alertEl.style.background = "var(--bg-tertiary)";
        alertEl.style.color = "var(--text-secondary)";
        alertEl.style.border = "1px solid var(--border-color)";

        try {
          const res = await fetch(`/api/appliances/${state.activeProduct.id}/review-eligibility?email=${encodeURIComponent(state.currentUser.email)}&role=${state.currentUser.role}`);
          const eligibility = await res.json();

          if (!eligibility.can_review) {
            if (submitBtn) submitBtn.disabled = true;

            if (eligibility.reason === "not_rented") {
              alertEl.innerHTML = `⚠️ <strong>Rental Verification Required:</strong> Only customers who have rented or booked this appliance can write a review. No active or completed rental was found under <strong>${state.currentUser.email}</strong>.`;
              alertEl.style.background = "rgba(231, 76, 60, 0.1)";
              alertEl.style.color = "#c0392b";
              alertEl.style.border = "1px solid #e74c3c";
            } else if (eligibility.reason === "already_reviewed") {
              alertEl.innerHTML = `ℹ️ <strong>Already Reviewed:</strong> You have already submitted a review for this appliance. Duplicate reviews are not permitted. Thank you!`;
              alertEl.style.background = "rgba(52, 152, 219, 0.1)";
              alertEl.style.color = "#2980b9";
              alertEl.style.border = "1px solid #3498db";
            } else {
              alertEl.innerHTML = `⚠️ ${eligibility.message || "Not eligible to submit a review."}`;
              alertEl.style.background = "rgba(231, 76, 60, 0.1)";
              alertEl.style.color = "#c0392b";
              alertEl.style.border = "1px solid #e74c3c";
            }
          } else {
            if (submitBtn) submitBtn.disabled = false;
            alertEl.innerHTML = `✅ <strong>Verified Customer Rental:</strong> You have rented this appliance and are verified to leave your community review!`;
            alertEl.style.background = "rgba(39, 174, 96, 0.12)";
            alertEl.style.color = "#27ae60";
            alertEl.style.border = "1px solid #27ae60";
          }
        } catch (err) {
          console.error("Eligibility check failed:", err);
          if (submitBtn) submitBtn.disabled = false;
          alertEl.style.display = "none";
        }
      }
    });
  }

  // Close & Cancel buttons
  if (elements.closeReviewFormBtn) {
    elements.closeReviewFormBtn.addEventListener("click", () => {
      if (elements.modalWriteReviewContainer) elements.modalWriteReviewContainer.style.display = "none";
    });
  }
  if (elements.cancelReviewBtn) {
    elements.cancelReviewBtn.addEventListener("click", () => {
      if (elements.modalWriteReviewContainer) elements.modalWriteReviewContainer.style.display = "none";
    });
  }

  // Submit Review Form
  if (elements.submitReviewForm) {
    elements.submitReviewForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!state.currentUser) {
        showToast("Please sign in as a customer to post a review.", "warning");
        openAuthModal("customer");
        return;
      }

      if (state.currentUser.role === "vendor") {
        showToast("Vendor accounts cannot submit customer reviews.", "error");
        return;
      }

      if (!state.activeProduct) return;

      const rating = parseInt(elements.selectedRatingVal?.value || 5);
      const comment = elements.reviewCommentInput ? elements.reviewCommentInput.value.trim() : "";

      if (!comment) {
        showToast("Please enter a review comment before submitting.", "warning");
        return;
      }

      const submitBtn = elements.submitReviewForm.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Posting Review...";
      }

      try {
        const res = await fetch(`/api/appliances/${state.activeProduct.id}/reviews`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-User-Email': state.currentUser.email,
            'X-User-Role': state.currentUser.role
          },
          body: JSON.stringify({
            rating,
            comment,
            customerId: state.currentUser.email,
            customerName: state.currentUser.name || state.currentUser.email.split("@")[0]
          })
        });

        const data = await res.json();
        if (!res.ok) {
          showToast(data.error || "Failed to submit review", "error");
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Post Verified Review";
          }
          return;
        }

        showToast("Review submitted successfully! Thank you for your feedback.", "success");

        // Reset form & hide
        if (elements.reviewCommentInput) elements.reviewCommentInput.value = "";
        if (elements.modalWriteReviewContainer) elements.modalWriteReviewContainer.style.display = "none";

        // Reload reviews & update modal
        await loadAndRenderProductReviews(state.activeProduct.id);

        // Update product in state and re-render catalog cards
        const appIdx = state.appliances.findIndex(a => a.id === state.activeProduct.id);
        if (appIdx > -1) {
          state.appliances[appIdx].rating = data.average_rating;
          state.appliances[appIdx].reviews = data.total_reviews;
          renderProducts();
        }

      } catch (err) {
        console.error("Failed to post review:", err);
        showToast("Error submitting review. Please try again.", "error");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Post Verified Review";
        }
      }
    });
  }
}

function setModalTenure(months) {
  let m = parseInt(months);
  if (isNaN(m) || m < 1) m = 1;
  if (m > 36) m = 36;

  state.activeDetailOptions.tenureMonths = m;
  state.activeDetailOptions.size = m === 3 ? "standard" : (m === 6 ? "deluxe" : (m === 12 ? "premium" : "custom"));

  const displayText = `${m} ${m === 1 ? 'Month' : 'Months'}`;
  
  if (elements.tenureMonthsInput) elements.tenureMonthsInput.value = m;
  if (elements.tenureDisplayText) elements.tenureDisplayText.textContent = displayText;
  const sizeLabelDetail = document.getElementById("size-label-detail");
  if (sizeLabelDetail) sizeLabelDetail.textContent = `${displayText} Duration`;

  // Update quick selection pills
  if (elements.tenureQuickPills) {
    const pills = elements.tenureQuickPills.querySelectorAll(".tenure-pill");
    pills.forEach(pill => {
      const pVal = parseInt(pill.getAttribute("data-months"));
      if (pVal === m) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });
  }

  // Update live start and end dates preview
  const dateRange = getRentalDateRange(m);
  if (elements.tenureStartPreview) elements.tenureStartPreview.textContent = dateRange.startDateDisplay;
  if (elements.tenureEndPreview) elements.tenureEndPreview.textContent = dateRange.endDateDisplay;

  calculateModalPrice();
}

function calculateModalPrice() {
  if (!state.activeProduct) return;
  const product = state.activeProduct;
  const tenureMonths = state.activeDetailOptions.tenureMonths || 1;
  const qty = state.activeDetailOptions.qty || 1;

  // Addons sum
  let addonsSum = 0;
  if (state.activeDetailOptions.addons) {
    state.activeDetailOptions.addons.forEach(add => {
      addonsSum += add.price;
    });
  }

  const unitMonthlyPrice = product.price + addonsSum;
  const totalAmount = unitMonthlyPrice * tenureMonths * qty;

  elements.modalPrice.innerHTML = `<span>₹${Math.round(unitMonthlyPrice).toLocaleString('en-IN')}<small style="font-size: 0.85rem; font-weight: 500; color: var(--text-secondary);">/mo</small></span> <span style="font-size: 0.85rem; color: var(--accent-gold); font-weight: 700; margin-left: 0.6rem; display: block; margin-top: 0.2rem;">Total: ₹${Math.round(totalAmount).toLocaleString('en-IN')} for ${tenureMonths} ${tenureMonths === 1 ? 'Month' : 'Months'}</span>`;
}

// --- CHECKOUT WIZARD PROCESS ---
function openCheckout() {
  if (state.cart.length === 0) return;
  if (!state.currentUser) {
    showToast("Please sign in to book an appliance.", "info");
    openAuthModal("customer", "Please sign in to book an appliance.");
    return;
  }
  if (state.currentUser.role === "vendor") {
    showToast("Vendor accounts cannot book appliances.", "warning");
    return;
  }
  elements.cartOverlay.classList.remove("open");

  // Reset wizard
  state.checkoutStep = 1;
  elements.shippingForm.reset();
  elements.paymentForm.reset();
  if (state.currentUser) {
    const nameInput = document.getElementById("shipping-name");
    const emailInput = document.getElementById("shipping-email");
    if (nameInput && state.currentUser.name) nameInput.value = state.currentUser.name;
    if (emailInput && state.currentUser.email) emailInput.value = state.currentUser.email;
  }
  resetInteractiveCard();
  updateCheckoutStepUI();

  elements.checkoutModal.classList.add("open");
}

function closeCheckout() {
  elements.checkoutModal.classList.remove("open");
}

function updateCheckoutStepUI() {
  elements.step1Content.classList.remove("active");
  elements.step2Content.classList.remove("active");
  elements.step3Content.classList.remove("active");

  elements.stepIndicator1.className = "progress-step";
  elements.stepIndicator2.className = "progress-step";
  elements.stepIndicator3.className = "progress-step";

  if (state.checkoutStep === 1) {
    elements.step1Content.classList.add("active");
    elements.stepIndicator1.classList.add("active");
    elements.checkoutBack.style.visibility = "hidden";
    elements.checkoutNext.textContent = "Continue to Payment Setup";
    elements.checkoutFooter.style.display = "flex";
  } else if (state.checkoutStep === 2) {
    elements.step2Content.classList.add("active");
    elements.stepIndicator1.classList.add("complete");
    elements.stepIndicator2.classList.add("active");
    elements.checkoutBack.style.visibility = "visible";
    elements.checkoutNext.textContent = "Confirm Rental Bookings";
    elements.checkoutFooter.style.display = "flex";
  } else if (state.checkoutStep === 3) {
    elements.step3Content.classList.add("active");
    elements.stepIndicator1.classList.add("complete");
    elements.stepIndicator2.classList.add("complete");
    elements.stepIndicator3.classList.add("complete");
    elements.checkoutFooter.style.display = "none";
  }
}

async function handleCheckoutNext() {
  if (!state.currentUser) {
    showToast("Please sign in to book an appliance.", "info");
    closeCheckout();
    openAuthModal("customer", "Please sign in to book an appliance.");
    return;
  }
  if (state.currentUser.role === "vendor") {
    showToast("Vendor accounts cannot book appliances.", "warning");
    closeCheckout();
    return;
  }

  if (state.checkoutStep === 1) {
    if (!elements.shippingForm.reportValidity()) return;
    
    // Sync email display
    elements.confirmedEmail.textContent = document.getElementById("shipping-email").value;
    state.checkoutStep = 2;
    updateCheckoutStepUI();
  } else if (state.checkoutStep === 2) {
    if (!elements.paymentForm.reportValidity()) return;

    // Determine payment method
    const activePayLabel = document.querySelector(".pay-method-label.active");
    const payMethod = activePayLabel ? activePayLabel.getAttribute("data-method") || "card" : "card";

    // Simulate successful rental booking creation
    state.checkoutStep = 3;
    const bookingId = "HR-" + Math.floor(100000 + Math.random() * 900000);
    elements.orderTrackingId.textContent = bookingId;

    const custName = document.getElementById("shipping-name").value;
    const custEmail = document.getElementById("shipping-email").value;
    const custAddr = document.getElementById("shipping-address").value + ", " + document.getElementById("shipping-city").value + " - " + document.getElementById("shipping-zip").value;

    const todayStr = new Date().toLocaleDateString("en-IN", { day: '2-digit', month: '2-digit', year: 'numeric' });

    let primaryBooking = null;

    // Persist each cart item as a booking to MongoDB
    for (const item of state.cart) {
      const baseAppliance = state.appliances.find(a => a.id === item.id) || {};
      const addonsTotal = (item.addons || []).reduce((sum, ad) => sum + ad.price, 0);
      const monthlyRate = item.price + addonsTotal;
      const months = item.tenureMonths || 1;
      const totalAmount = monthlyRate * months * item.qty;
      const dateRange = getRentalDateRange(months);

      const vendorName = item.vendorName || baseAppliance.brand || baseAppliance.vendorName || "HomeRent Verified Vendor";
      const vendorPhone = item.vendorPhone || baseAppliance.vendorPhone || baseAppliance.phone || "9876543210";
      const vendorAddress = item.vendorAddress || baseAppliance.vendorAddress || baseAppliance.address || "Indiranagar, Bengaluru, Karnataka";
      const category = item.category || baseAppliance.category || "Appliance";

      const newBooking = {
        id: bookingId,
        user_id: custEmail,
        customer_name: custName,
        customerName: custName,
        email: custEmail,
        address: custAddr,
        appliance_id: item.id,
        applianceName: item.title,
        appliance_name: item.title,
        category: category,
        tenure: `${months} ${months === 1 ? 'Month' : 'Months'}`,
        tenure_months: months,
        monthly_price: monthlyRate,
        monthlyRent: monthlyRate,
        total_amount: totalAmount,
        totalRent: totalAmount,
        paymentMethod: payMethod,
        status: "Confirmed",
        start_date: dateRange.startDateStr,
        end_date: dateRange.endDateStr,
        date: todayStr,
        vendor_name: vendorName,
        vendorName: vendorName,
        vendor_phone: vendorPhone,
        vendorPhone: vendorPhone,
        vendor_address: vendorAddress,
        vendorAddress: vendorAddress
      };

      if (!primaryBooking) primaryBooking = newBooking;

      // Persist to MongoDB (creates booking + payment + revenue + inventory update + notifications)
      try {
        const authHeaders = { 'Content-Type': 'application/json' };
        if (state.currentUser) {
          authHeaders['X-User-Email'] = state.currentUser.email;
          authHeaders['X-User-Role'] = state.currentUser.role;
        }
        await fetch('/api/bookings', {
          method: 'POST',
          headers: authHeaders,
          body: JSON.stringify(newBooking)
        });
      } catch (err) {
        console.error("Failed to save booking to DB:", err);
      }

      // Also update local state for immediate UI update
      state.bookings.push(newBooking);
    }

    state.lastBooking = primaryBooking;
    if (primaryBooking) {
      renderReceiptUI(primaryBooking);
    }

    updateCheckoutStepUI();

    // Clear Customer Cart (also clears from MongoDB)
    state.cart = [];
    state.promoApplied = false;
    elements.promoCode.value = "";
    await saveCartToStorage();
    updateCartUI();

    showToast("Rental request placed successfully! You can view and download your receipt.", "success");
  }
}

function handleCheckoutBack() {
  if (state.checkoutStep === 2) {
    state.checkoutStep = 1;
    updateCheckoutStepUI();
  }
}

// --- BOOKING RECEIPT & PRINTING ACTIONS ---
function renderReceiptUI(booking) {
  if (!booking) return;

  const getCleanVal = (val, fallback = "N/A") => (val !== undefined && val !== null && String(val).trim() !== "") ? val : fallback;

  if (elements.receiptCustomerName) elements.receiptCustomerName.textContent = getCleanVal(booking.customerName || booking.customer_name);
  if (elements.receiptApplianceName) elements.receiptApplianceName.textContent = getCleanVal(booking.applianceName || booking.appliance_name);
  if (elements.receiptCategory) elements.receiptCategory.textContent = getCleanVal((booking.category || "Appliance").toUpperCase());
  if (elements.receiptBookingId) elements.receiptBookingId.textContent = getCleanVal(booking.id);
  if (elements.receiptStartDate) elements.receiptStartDate.textContent = getCleanVal(booking.start_date || booking.startDate);
  if (elements.receiptEndDate) elements.receiptEndDate.textContent = getCleanVal(booking.end_date || booking.endDate);
  if (elements.receiptTenure) elements.receiptTenure.textContent = getCleanVal(booking.tenure || `${booking.tenure_months || 1} Month(s)`);
  
  const monthlyPrice = Number(booking.monthly_price || booking.monthlyRent || (booking.totalRent / (booking.tenure_months || 1)) || 0);
  const totalAmount = Number(booking.total_amount || booking.totalRent || (monthlyPrice * (booking.tenure_months || 1)) || 0);

  if (elements.receiptMonthlyPrice) elements.receiptMonthlyPrice.textContent = `₹${Math.round(monthlyPrice).toLocaleString('en-IN')} / month`;
  if (elements.receiptTotalAmount) elements.receiptTotalAmount.textContent = `₹${Math.round(totalAmount).toLocaleString('en-IN')}`;
  
  if (elements.receiptVendorName) elements.receiptVendorName.textContent = getCleanVal(booking.vendor_name || booking.vendorName, "HomeRent Verified Vendor");
  
  const phone = getCleanVal(booking.vendor_phone || booking.vendorPhone);
  if (elements.receiptVendorPhone) elements.receiptVendorPhone.textContent = phone;
  
  const address = getCleanVal(booking.vendor_address || booking.vendorAddress);
  if (elements.receiptVendorAddress) elements.receiptVendorAddress.textContent = address;
  
  if (elements.receiptBookingDate) elements.receiptBookingDate.textContent = getCleanVal(booking.date);
  if (elements.receiptStatus) elements.receiptStatus.textContent = getCleanVal(booking.status, "Confirmed");
}

function openReceiptModal() {
  if (elements.bookingReceiptModal) {
    elements.bookingReceiptModal.classList.add("open");
    elements.bookingReceiptModal.setAttribute("aria-hidden", "false");
  }
}

function closeReceiptModal() {
  if (elements.bookingReceiptModal) {
    elements.bookingReceiptModal.classList.remove("open");
    elements.bookingReceiptModal.setAttribute("aria-hidden", "true");
  }
}

function printReceipt() {
  window.print();
}

function downloadReceiptFile(booking) {
  const b = booking || state.lastBooking;
  if (!b) {
    showToast("No active booking receipt available to download.", "error");
    return;
  }

  const monthlyPrice = Math.round(Number(b.monthly_price || b.monthlyRent || (b.totalRent / (b.tenure_months || 1)) || 0));
  const totalAmount = Math.round(Number(b.total_amount || b.totalRent || (monthlyPrice * (b.tenure_months || 1)) || 0));

  const content = `============================================================
              HOMERENT AI - OFFICIAL BOOKING RECEIPT
         Smart Appliance Rental Management System
============================================================

BOOKING REFERENCE ID: ${b.id || 'N/A'}
BOOKING STATUS:       ${(b.status || 'Confirmed').toUpperCase()}
BOOKING DATE:         ${b.date || new Date().toLocaleDateString("en-IN")}

------------------------------------------------------------
CUSTOMER DETAILS
------------------------------------------------------------
Customer Name:        ${b.customerName || b.customer_name || 'Valued Customer'}
Email Address:        ${b.email || b.user_id || 'N/A'}
Delivery Address:     ${b.address || 'N/A'}

------------------------------------------------------------
APPLIANCE & RENTAL SPECIFICATIONS
------------------------------------------------------------
Appliance Name:       ${b.applianceName || b.appliance_name || 'N/A'}
Appliance Category:   ${(b.category || 'Appliance').toUpperCase()}
Selected Tenure:      ${b.tenure || `${b.tenure_months || 1} Month(s)`}
Rental Start Date:    ${b.start_date || b.startDate || 'N/A'}
Rental End Date:      ${b.end_date || b.endDate || 'N/A'}
Monthly Rental Price: ₹${monthlyPrice.toLocaleString('en-IN')} / month
Total Rental Amount:  ₹${totalAmount.toLocaleString('en-IN')}

------------------------------------------------------------
AUTHORIZED VENDOR DETAILS
------------------------------------------------------------
Vendor Name:          ${b.vendor_name || b.vendorName || 'HomeRent Verified Vendor'}
Vendor Phone Number:  ${b.vendor_phone || b.vendorPhone || 'N/A'}
Vendor Address:       ${b.vendor_address || b.vendorAddress || 'Indiranagar, Bengaluru, Karnataka'}

============================================================
Free complimentary maintenance, lifetime servicing, and 24/7
technician support are included for the duration of the rental.
Thank you for choosing HomeRent AI!
============================================================`;

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `HomeRent_Receipt_${b.id || 'Booking'}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Receipt downloaded successfully!", "success");
}

// --- INTERACTIVE CREDIT CARD VISUALS ---
function setupCreditCardListeners() {
  elements.cardCvv.addEventListener("focus", () => {
    elements.interactiveCard.classList.add("flipped");
  });
  elements.cardCvv.addEventListener("blur", () => {
    elements.interactiveCard.classList.remove("flipped");
  });

  elements.cardNumber.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    let matches = val.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || "";
    let parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      e.target.value = parts.join(" ");
      elements.cardNumDisp.textContent = parts.join(" ");
    } else {
      e.target.value = val;
      elements.cardNumDisp.textContent = val || "•••• •••• •••• ••••";
    }
  });

  elements.cardName.addEventListener("input", (e) => {
    elements.cardNameDisp.textContent = e.target.value.toUpperCase() || "FULL NAME";
  });

  elements.cardExpiry.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length >= 2) {
      val = val.substring(0, 2) + "/" + val.substring(2, 4);
    }
    e.target.value = val;
    elements.cardExpDisp.textContent = val || "MM/YY";
  });

  elements.cardCvv.addEventListener("input", (e) => {
    elements.cardCvvDisp.textContent = e.target.value || "•••";
  });
}

function resetInteractiveCard() {
  elements.interactiveCard.classList.remove("flipped");
  elements.cardNumDisp.textContent = "•••• •••• •••• ••••";
  elements.cardNameDisp.textContent = "FULL NAME";
  elements.cardExpDisp.textContent = "MM/YY";
  elements.cardCvvDisp.textContent = "•••";
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  let icon = ``;
  if (type === "success") {
    icon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === "info") {
    icon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  } else if (type === "error") {
    icon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
  }

  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("removing");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, 4000);
}

// --- NEW PORTAL & VENDOR PANEL LOGIC ---
function setupNewPortalListeners() {
  // Toggle portal view
  elements.portalToggle.addEventListener("click", () => {
    if (state.currentPortal === "customer") {
      if (!state.currentUser || state.currentUser.role !== "vendor") {
        showToast("Access Denied: Vendor Console is blocked for Customer accounts.", "error");
        return;
      }
      state.currentPortal = "vendor";
      elements.customerPortalView.style.display = "none";
      elements.vendorConsole.style.display = "block";
      elements.cartToggle.style.display = "none";
      elements.aiChatWidget.style.display = "none";
      elements.portalToggle.querySelector("span").textContent = "Customer View";
      
      // Update Admin Portal content
      updateAdminDashboard();
    } else {
      state.currentPortal = "customer";
      elements.customerPortalView.style.display = "block";
      elements.vendorConsole.style.display = "none";
      elements.cartToggle.style.display = "flex";
      elements.aiChatWidget.style.display = "block";
      elements.portalToggle.querySelector("span").textContent = "Vendor Console";
      
      // Refresh Customer catalog
      renderProducts();
    }
  });

  // Admin sub-tabs toggle (Manage Inventory & Active Bookings)
  if (elements.adminTabs) {
    elements.adminTabs.addEventListener("click", (e) => {
      const tabBtn = e.target.closest(".filter-tab");
      if (tabBtn) {
        document.querySelectorAll("#admin-tabs .filter-tab").forEach(tab => tab.classList.remove("active"));
        tabBtn.classList.add("active");

        const tabName = tabBtn.getAttribute("data-admin-tab");
        state.currentAdminTab = tabName;

        if (tabName === "inventory") {
          if (elements.adminInventorySection) elements.adminInventorySection.classList.add("active");
          if (elements.adminBookingsSection) elements.adminBookingsSection.classList.remove("active");
          renderAdminInventory();
        } else if (tabName === "bookings") {
          if (elements.adminInventorySection) elements.adminInventorySection.classList.remove("active");
          if (elements.adminBookingsSection) elements.adminBookingsSection.classList.add("active");
          renderAdminBookings();
        }
      }
    });
  }

  // Locality selection auto-fill address
  if (elements.applianceLocality) {
    elements.applianceLocality.addEventListener("change", (e) => {
      const loc = e.target.value;
      if (elements.applianceAddress && (!elements.applianceAddress.value || elements.applianceAddress.value.includes("Hyderabad") || elements.applianceAddress.value.includes("Bengaluru"))) {
        elements.applianceAddress.value = `${loc}, Hyderabad, Telangana`;
      }
    });
  }

  // Add / Edit Appliance Form submit handler
  elements.addApplianceForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = elements.applianceTitle.value.trim();
    const category = elements.applianceCategory.value;
    const price = parseFloat(elements.appliancePrice.value);
    const image = elements.applianceImage.value;
    const desc = elements.applianceDesc.value.trim();
    const badge = elements.applianceBadge.value.trim();
    const vendorEmail = (state.currentUser?.email || 'vendor@homerent.ai').trim().toLowerCase();

    // Locality and Coordinates
    const locality = elements.applianceLocality ? elements.applianceLocality.value : "Gachibowli";
    const locCoords = HYDERABAD_LOCALITIES[locality] || HYDERABAD_LOCALITIES["Gachibowli"];
    const vendorLocation = {
      area: locality,
      latitude: locCoords.latitude,
      longitude: locCoords.longitude
    };

    // Mandatory Vendor Address and Phone Number
    const vendorAddress = (elements.applianceAddress?.value || "").trim() || `${locality}, Hyderabad, Telangana`;
    const vendorPhone = (elements.appliancePhone?.value || "").trim();

    if (!vendorAddress) {
      showToast("Vendor address is mandatory.", "warning");
      if (elements.applianceAddress) elements.applianceAddress.focus();
      return;
    }

    if (!vendorPhone || vendorPhone.replace(/\D/g, '').length < 10) {
      showToast("Please enter a valid vendor phone number (at least 10 digits).", "warning");
      if (elements.appliancePhone) elements.appliancePhone.focus();
      return;
    }

    if (state.editingApplianceId) {
      // Edit mode — update locally and in MongoDB
      const index = state.appliances.findIndex(a => a.id === state.editingApplianceId);
      if (index > -1) {
        state.appliances[index] = {
          ...state.appliances[index],
          title,
          category,
          price,
          image,
          desc,
          badge,
          vendorLocation,
          vendorAddress,
          vendorPhone,
          vendor_email: vendorEmail
        };
        try {
          const res = await fetch(`/api/appliances/${state.editingApplianceId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'X-User-Email': vendorEmail,
              'X-User-Role': 'vendor'
            },
            body: JSON.stringify(state.appliances[index])
          });
          if (!res.ok) {
            const err = await res.json();
            showToast(err.error || "Failed to update appliance", "error");
            return;
          }
        } catch (err) { console.error("Failed to update appliance:", err); }
        showToast("Appliance inventory updated!", "success");
      }
      state.editingApplianceId = null;
      elements.addApplianceForm.querySelector("button[type='submit']").textContent = "Add Appliance";
      elements.addApplianceForm.previousElementSibling.textContent = "Add New Appliance";
    } else {
      // Add mode — POST to MongoDB with vendor ownership & location
      const newAppliance = {
        title,
        name: title,
        category,
        price,
        image,
        desc,
        description: desc,
        badge: badge || null,
        vendorLocation,
        vendorAddress,
        vendorPhone,
        rating: 5.0,
        reviews: 1,
        vendor_email: vendorEmail,
        brand: state.currentUser?.name || "Vendor Fleet",
        sizeUpcharges: { standard: 0, deluxe: -Math.round(price * 0.08), premium: -Math.round(price * 0.15) }
      };
      try {
        const res = await fetch('/api/appliances', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-User-Email': vendorEmail,
            'X-User-Role': 'vendor'
          },
          body: JSON.stringify(newAppliance)
        });
        if (!res.ok) {
          const err = await res.json();
          showToast(err.error || "Failed to save appliance", "error");
          return;
        }
        const saved = await res.json();
        state.appliances.unshift(saved);
      } catch (err) {
        const newId = state.appliances.length > 0 ? Math.max(...state.appliances.map(a => a.id)) + 1 : 1;
        newAppliance.id = newId;
        state.appliances.unshift(newAppliance);
        console.error("Failed to save appliance to DB:", err);
      }
      showToast("New appliance added to your fleet inventory!", "success");
    }

    elements.addApplianceForm.reset();
    updateAdminDashboard();
  });
}

// Scoping helper: returns only the appliances, appliance IDs, and bookings belonging to the currently logged-in vendor
function getVendorScopedData() {
  const currentVendorEmail = (state.currentUser?.email || 'vendor@homerent.ai').trim().toLowerCase();
  const myAppliances = state.appliances.filter(app => {
    const owner = (app.vendor_email || 'vendor@homerent.ai').trim().toLowerCase();
    return owner === currentVendorEmail;
  });
  const myApplianceIds = new Set(myAppliances.map(a => a.id));

  const myBookings = state.bookings.filter(b => {
    const bVendor = (b.vendor_email || '').trim().toLowerCase();
    if (bVendor && bVendor === currentVendorEmail) return true;
    if (b.appliance_id && myApplianceIds.has(Number(b.appliance_id))) return true;
    return false;
  });

  return { currentVendorEmail, myAppliances, myApplianceIds, myBookings };
}

function updateAdminDashboard() {
  updateAdminMetrics();
  if (state.currentAdminTab === "inventory") {
    renderAdminInventory();
  } else if (state.currentAdminTab === "bookings") {
    renderAdminBookings();
  }
}

function updateAdminMetrics() {
  const { myAppliances, myBookings } = getVendorScopedData();

  // Monthly Revenue sum for this vendor's rentals only
  const activeRentalsTotal = myBookings
    .filter(b => b.status === "active" || b.status === "pending")
    .reduce((sum, b) => sum + (Number(b.totalRent) || 0), 0);

  elements.adminRevenue.textContent = `₹${Math.round(activeRentalsTotal).toLocaleString("en-IN")}/mo`;
  
  // Active/Pending bookings count for this vendor
  const activeRentalsCount = myBookings.filter(b => b.status === "active").length;
  elements.adminRentalsCount.textContent = activeRentalsCount;
  
  // Total Inventory count for this vendor only
  elements.adminInventoryCount.textContent = myAppliances.length;
}

function renderAdminInventory() {
  elements.adminInventoryGrid.innerHTML = "";

  const { myAppliances, currentVendorEmail } = getVendorScopedData();

  if (myAppliances.length === 0) {
    elements.adminInventoryGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1.5rem; background: var(--bg-secondary); border-radius: 16px; border: 1px dashed var(--border-color);">
        <p style="font-size: 1.1rem; font-weight: 600; color: var(--accent-primary); margin-bottom: 0.5rem;">No Appliances in Your Inventory</p>
        <p style="color: var(--text-secondary); font-size: 0.88rem; max-width: 480px; margin: 0 auto;">You have not published any appliances under ${currentVendorEmail} yet. Use the form above to add your first appliance to the fleet!</p>
      </div>`;
    return;
  }

  myAppliances.forEach(app => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-id", app.id);

    card.innerHTML = `
      <div class="product-img-container">
        ${app.badge ? `<span class="product-badge">${app.badge}</span>` : ""}
        <img src="${app.image}" alt="${app.title}">
      </div>
      <div class="product-content">
        <div class="product-header">
          <h3 class="product-title">${app.title}</h3>
          <span class="product-price">₹${Math.round(app.price)}/mo</span>
        </div>
        <p class="product-desc">${app.desc || app.description || ""}</p>
        <div class="product-footer" style="margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 0.8rem; gap: 0.5rem; justify-content: flex-end;">
          <button class="btn-secondary edit-app-btn" data-id="${app.id}" style="padding: 0.4rem 0.8rem; font-size: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color);">
            Edit
          </button>
          <button class="btn-primary delete-app-btn" data-id="${app.id}" style="padding: 0.4rem 0.8rem; font-size: 0.75rem; border-radius: 8px; background: #e74c3c; color: white;">
            Delete
          </button>
        </div>
      </div>
    `;

    // Edit logic
    card.querySelector(".edit-app-btn").addEventListener("click", () => {
      state.editingApplianceId = app.id;
      elements.applianceTitle.value = app.title;
      elements.applianceCategory.value = app.category;
      elements.appliancePrice.value = app.price;
      elements.applianceImage.value = app.image;
      elements.applianceDesc.value = app.desc || app.description || "";
      if (elements.applianceAddress) elements.applianceAddress.value = app.vendorAddress || "";
      if (elements.appliancePhone) elements.appliancePhone.value = app.vendorPhone || "";
      elements.applianceBadge.value = app.badge || "";
      
      elements.addApplianceForm.querySelector("button[type='submit']").textContent = "Save Changes";
      elements.addApplianceForm.previousElementSibling.textContent = "Edit Appliance Details";
      
      // Scroll to form
      elements.addApplianceForm.scrollIntoView({ behavior: "smooth" });
    });

    // Delete logic
    card.querySelector(".delete-app-btn").addEventListener("click", async () => {
      if (confirm(`Are you sure you want to delete ${app.title} from inventory?`)) {
        const vendorEmail = (state.currentUser?.email || 'vendor@homerent.ai').trim().toLowerCase();
        try {
          const res = await fetch(`/api/appliances/${app.id}`, {
            method: 'DELETE',
            headers: {
              'X-User-Email': vendorEmail,
              'X-User-Role': 'vendor'
            }
          });
          if (!res.ok) {
            const err = await res.json();
            showToast(err.error || "Failed to delete appliance", "error");
            return;
          }
          state.appliances = state.appliances.filter(a => a.id !== app.id);
          showToast("Appliance deleted from inventory", "info");
          updateAdminDashboard();
        } catch (err) {
          console.error("Failed to delete appliance:", err);
        }
      }
    });

    elements.adminInventoryGrid.appendChild(card);
  });
}

function renderAdminBookings() {
  elements.adminBookingsList.innerHTML = "";

  const { myBookings, currentVendorEmail } = getVendorScopedData();

  if (myBookings.length === 0) {
    elements.adminBookingsList.innerHTML = `<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No customer rental bookings for your appliances yet.</p>`;
    return;
  }

  // Reverse list so newest displays first
  const bookingsToShow = [...myBookings].reverse();

  bookingsToShow.forEach((booking) => {
    const trueIndex = state.bookings.findIndex(b => b.id === booking.id);
    
    const card = document.createElement("div");
    card.className = "booking-card";

    card.innerHTML = `
      <div class="booking-header">
        <h4>${booking.customerName}</h4>
        <p>${booking.email}</p>
        <div style="font-size: 0.75rem; margin-top: 0.3rem; color: var(--text-secondary);">Date: ${booking.date}</div>
      </div>
      <div class="booking-details">
        <strong>${booking.applianceName}</strong>
        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">Tenure: ${booking.tenure}</div>
        <div style="font-size: 0.7rem; color: var(--text-secondary); max-width: 200px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" title="${booking.address}">${booking.address}</div>
      </div>
      <div class="booking-price">
        ₹${Math.round(booking.totalRent)}/mo
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.4rem; align-items: stretch;">
        <select class="booking-status ${booking.status}" style="font-family: inherit; font-size: 0.8rem; font-weight: 600; padding: 0.4rem 0.8rem; border-radius: 20px; border: 1px solid var(--border-color); width: 100%;">
          <option value="pending" ${booking.status === "pending" ? "selected" : ""}>Pending Setup</option>
          <option value="active" ${booking.status === "active" ? "selected" : ""}>Delivered / Active</option>
          <option value="completed" ${booking.status === "completed" ? "selected" : ""}>Completed / Returned</option>
        </select>
        <button type="button" class="btn-secondary view-booking-receipt-btn" style="padding: 0.35rem 0.6rem; font-size: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; cursor: pointer;">
          <span>📄</span> View Receipt
        </button>
      </div>
    `;

    // View Receipt Handler
    card.querySelector(".view-booking-receipt-btn").addEventListener("click", () => {
      renderReceiptUI(booking);
      openReceiptModal();
    });

    // Dropdown status handler
    card.querySelector("select").addEventListener("change", async (e) => {
      const newStatus = e.target.value;
      if (trueIndex > -1) {
        state.bookings[trueIndex].status = newStatus;
      }

      // Persist status change to MongoDB
      try {
        const vendorEmail = (state.currentUser?.email || 'vendor@homerent.ai').trim().toLowerCase();
        await fetch(`/api/bookings/${booking.id}/status`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-User-Email': vendorEmail,
            'X-User-Role': 'vendor'
          },
          body: JSON.stringify({ status: newStatus, vendor_email: vendorEmail })
        });
      } catch (err) {
        console.error("Failed to update booking status:", err);
      }

      showToast(`Booking ${booking.id} status updated to ${newStatus}!`, "success");
      updateAdminMetrics();
      
      // Update styling class on select dropdown
      e.target.className = `booking-status ${newStatus}`;
    });

    elements.adminBookingsList.appendChild(card);
  });
}

// --- AI CHATBOT / RECOMMENDATION LOGIC ---
function setupAiChatListeners() {
  elements.aiChatBtn.addEventListener("click", () => {
    elements.aiChatPanel.classList.toggle("open");
  });

  elements.aiChatClose.addEventListener("click", () => {
    elements.aiChatPanel.classList.remove("open");
  });

  elements.aiChatSend.addEventListener("click", handleAiSend);
  elements.aiChatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleAiSend();
  });

  // Intent button options
  elements.aiChatPanel.addEventListener("click", (e) => {
    if (e.target.classList.contains("ai-opt-btn")) {
      const intent = e.target.getAttribute("data-intent");
      handleAiIntent(intent);
    }
    
    // Add to cart from AI recommendation card
    if (e.target.classList.contains("ai-rec-btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      const product = state.appliances.find(a => a.id === id);
      if (product) {
        addCartItem({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          size: "standard",
          addons: [],
          message: "Recommended by AI",
          qty: 1
        });
        showAiMessage("bot", `Added ${product.title} (3 Months standard) to your rental bag!`);
        showToast(`Added 1x ${product.title} to bag!`, "success");
        elements.cartOverlay.classList.add("open");
      }
    }
  });
}

function showAiMessage(sender, text, recProduct = null) {
  const msgEl = document.createElement("div");
  msgEl.className = `ai-msg ${sender}`;
  msgEl.innerHTML = `<p>${text}</p>`;

  if (recProduct) {
    const cardEl = document.createElement("div");
    cardEl.className = "ai-rec-card";
    cardEl.innerHTML = `
      <img src="${recProduct.image}" alt="${recProduct.title}">
      <div class="ai-rec-info">
        <div class="ai-rec-title">${recProduct.title}</div>
        <div class="ai-rec-price">₹${Math.round(recProduct.price)}/mo</div>
      </div>
      <button class="ai-rec-btn" data-id="${recProduct.id}">Rent Now</button>
    `;
    msgEl.appendChild(cardEl);
  }

  elements.aiChatBody.appendChild(msgEl);
  elements.aiChatBody.scrollTop = elements.aiChatBody.scrollHeight;
}

function handleAiSend() {
  const query = elements.aiChatInput.value.trim();
  if (!query) return;

  showAiMessage("user", query);
  elements.aiChatInput.value = "";

  setTimeout(() => {
    processBotQuery(query.toLowerCase());
  }, 600);
}

function handleAiIntent(intent) {
  if (intent === "family") {
    showAiMessage("bot", "Please select your family or household size below:", null);
    const optionsEl = document.createElement("div");
    optionsEl.className = "ai-msg bot";
    optionsEl.innerHTML = `
      <div class="ai-options">
        <button class="ai-opt-btn" data-intent="fam-1-2">1-2 People (Small)</button>
        <button class="ai-opt-btn" data-intent="fam-3-4">3-4 People (Medium)</button>
        <button class="ai-opt-btn" data-intent="fam-5">5+ People (Large)</button>
      </div>
    `;
    elements.aiChatBody.appendChild(optionsEl);
    elements.aiChatBody.scrollTop = elements.aiChatBody.scrollHeight;
  } else if (intent === "eco") {
    const ecoProduct = state.appliances.find(a => a.badge === "Eco-Friendly") || state.appliances[0];
    showAiMessage("bot", "I highly recommend our 5-star energy efficient Washer with advanced water recycle tech!", ecoProduct);
  } else if (intent === "budget") {
    const budgetProducts = state.appliances.filter(a => a.price < 1000);
    showAiMessage("bot", "Here is our top affordable appliance selection under ₹1000/mo:");
    budgetProducts.forEach(p => {
      showAiMessage("bot", `${p.title} is available for just ₹${Math.round(p.price)}/mo!`, p);
    });
  } else if (intent === "fam-1-2") {
    showAiMessage("user", "1-2 People");
    const p = state.appliances.find(a => a.id === 3) || state.appliances[0]; // microwave
    const purifier = state.appliances.find(a => a.id === 6);
    showAiMessage("bot", "For a small household, a convection microwave oven is a great choice for fast cooking:", p);
    if (purifier) showAiMessage("bot", "Additionally, our HEPA Air Purifier keeps cozy spaces clean and allergy-free:", purifier);
  } else if (intent === "fam-3-4") {
    showAiMessage("user", "3-4 People");
    const fridge = state.appliances.find(a => a.id === 1) || state.appliances[0];
    const ac = state.appliances.find(a => a.id === 4);
    showAiMessage("bot", "For medium-sized families, a double-door refrigerator is ideal:", fridge);
    if (ac) showAiMessage("bot", "You might also want to look at our Inverter split AC for comfortable air conditioning:", ac);
  } else if (intent === "fam-5") {
    showAiMessage("user", "5+ People");
    const dishwasher = state.appliances.find(a => a.id === 5) || state.appliances[0];
    const washer = state.appliances.find(a => a.id === 2);
    showAiMessage("bot", "Large families generate a lot of laundry and dishes! Here is our heavy-duty smart dishwasher:", dishwasher);
    if (washer) showAiMessage("bot", "And our 8kg Front Load washing machine to handle big daily washloads:", washer);
  }
}

function processBotQuery(query) {
  if (query.includes("fridge") || query.includes("refrigerator") || query.includes("double-door")) {
    const p = state.appliances.find(a => a.id === 1) || state.appliances[0];
    showAiMessage("bot", "Check out our double-door refrigerator. It features convertible zones and smart diagnostics!", p);
  } else if (query.includes("wash") || query.includes("washer") || query.includes("washing")) {
    const p = state.appliances.find(a => a.id === 2) || state.appliances[0];
    showAiMessage("bot", "Our front load washing machine features AI wash sensing, which selects cycles based on weight and fabric!", p);
  } else if (query.includes("ac") || query.includes("cooling") || query.includes("conditioner")) {
    const p = state.appliances.find(a => a.id === 4) || state.appliances[0];
    showAiMessage("bot", "Enjoy quiet and smart cooling with our Wi-Fi enabled inverter split AC:", p);
  } else if (query.includes("cook") || query.includes("oven") || query.includes("microwave")) {
    const p = state.appliances.find(a => a.id === 3) || state.appliances[0];
    showAiMessage("bot", "We suggest our convection microwave for baking, grilling, and reheating options:", p);
  } else if (query.includes("dish") || query.includes("dishwasher")) {
    const p = state.appliances.find(a => a.id === 5) || state.appliances[0];
    showAiMessage("bot", "Our luxury automatic dishwasher cuts down on water usage and sanitizes baby bottles and steel pots perfectly:", p);
  } else if (query.includes("purifier") || query.includes("air")) {
    const p = state.appliances.find(a => a.id === 6) || state.appliances[0];
    showAiMessage("bot", "To keep indoor dust and pollen out, here is our HEPA filtration air purifier:", p);
  } else if (query.includes("cheap") || query.includes("budget") || query.includes("low") || query.includes("rupee") || query.includes("price")) {
    const budgetProducts = state.appliances.filter(a => a.price < 1000);
    showAiMessage("bot", "Our entry level appliances start at just ₹599/month. Here are models under ₹1000/mo:");
    budgetProducts.forEach(p => {
      showAiMessage("bot", `${p.title} - ₹${Math.round(p.price)}/mo`, p);
    });
  } else if (query.includes("kitchen")) {
    const kitchenItems = state.appliances.filter(a => a.category === "kitchen");
    showAiMessage("bot", "Here are appliances listed in our Kitchen section:");
    kitchenItems.forEach(p => {
      showAiMessage("bot", p.title, p);
    });
  } else {
    showAiMessage("bot", "I recommend starting with our most popular eco-friendly Washer or smart Refrigerator! Do you want me to suggest items based on your household size?");
    const optionsEl = document.createElement("div");
    optionsEl.className = "ai-msg bot";
    optionsEl.innerHTML = `
      <div class="ai-options">
        <button class="ai-opt-btn" data-intent="family">Yes, by family size</button>
        <button class="ai-opt-btn" data-intent="budget">Show budget options</button>
      </div>
    `;
    elements.aiChatBody.appendChild(optionsEl);
    elements.aiChatBody.scrollTop = elements.aiChatBody.scrollHeight;
  }
}

// --- MAIN CUSTOMER EVENT LISTENERS ---
function setupEventListeners() {
  elements.themeToggle.addEventListener("click", toggleTheme);

  // Cart overlay open/close
  elements.cartToggle.addEventListener("click", () => {
    elements.cartOverlay.classList.add("open");
  });
  elements.cartClose.addEventListener("click", () => {
    elements.cartOverlay.classList.remove("open");
  });
  elements.cartOverlay.addEventListener("click", (e) => {
    if (e.target === elements.cartOverlay) {
      elements.cartOverlay.classList.remove("open");
    }
  });

  // Category Filtering
  elements.filterTabs.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-tab")) {
      document.querySelectorAll("#filter-tabs .filter-tab").forEach(tab => tab.classList.remove("active"));
      e.target.classList.add("active");
      
      state.currentFilter = e.target.getAttribute("data-category");
      renderProducts();
    }
  });

  // Distance Filtering
  if (elements.distanceFilterSelect) {
    elements.distanceFilterSelect.addEventListener("change", (e) => {
      state.currentDistanceFilter = e.target.value;
      renderProducts();
    });
  }

  // Sorting
  if (elements.sortSelect) {
    elements.sortSelect.addEventListener("change", (e) => {
      state.currentSort = e.target.value;
      renderProducts();
    });
  }

  // Enable Location button in notice banner
  if (elements.enableLocationBtn) {
    elements.enableLocationBtn.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const lat = Number(pos.coords.latitude.toFixed(6));
            const lng = Number(pos.coords.longitude.toFixed(6));
            if (state.currentUser) {
              state.currentUser.location = { latitude: lat, longitude: lng };
              state.currentUser.locationDenied = false;
              localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
              fetch('/api/users/location', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: state.currentUser.email, latitude: lat, longitude: lng })
              }).catch(console.error);
            }
            showToast("Location access enabled! Distances updated.", "success");
            loadDatabase().then(renderProducts);
          },
          (err) => {
            showToast("Location access is required to calculate appliance distance.", "info");
          },
          { timeout: 5000, enableHighAccuracy: true }
        );
      }
    });
  }

  // Promo Code
  elements.promoApply.addEventListener("click", () => {
    const code = elements.promoCode.value.trim().toUpperCase();
    if (code === "HOMELUXE") {
      if (state.promoApplied) {
        showToast("Coupon already applied!", "info");
      } else {
        state.promoApplied = true;
        updateCartUI();
        showToast("Promo Applied! 15% discount matches successfully.", "success");
      }
    } else if (code === "") {
      showToast("Please enter a promo code first.", "error");
    } else {
      showToast("Invalid Promo Code.", "error");
    }
  });

  // Qty selection in details modal
  elements.modalQtyMinus.addEventListener("click", () => {
    if (state.activeDetailOptions.qty > 1) {
      state.activeDetailOptions.qty--;
      elements.modalQtyValue.textContent = state.activeDetailOptions.qty;
      calculateModalPrice();
    }
  });

  elements.modalQtyPlus.addEventListener("click", () => {
    state.activeDetailOptions.qty++;
    elements.modalQtyValue.textContent = state.activeDetailOptions.qty;
    calculateModalPrice();
  });

  // Month-wise Tenure Stepper [-] and [+]
  if (elements.tenureMinusBtn) {
    elements.tenureMinusBtn.addEventListener("click", () => {
      const current = state.activeDetailOptions.tenureMonths || 1;
      if (current > 1) {
        setModalTenure(current - 1);
      }
    });
  }

  if (elements.tenurePlusBtn) {
    elements.tenurePlusBtn.addEventListener("click", () => {
      const current = state.activeDetailOptions.tenureMonths || 1;
      setModalTenure(current + 1);
    });
  }

  if (elements.tenureMonthsInput) {
    elements.tenureMonthsInput.addEventListener("change", (e) => {
      setModalTenure(e.target.value);
    });
  }

  if (elements.tenureQuickPills) {
    elements.tenureQuickPills.querySelectorAll(".tenure-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        const m = pill.getAttribute("data-months");
        setModalTenure(m);
      });
    });
  }

  // Fallback for legacy size options if clicked
  if (elements.sizeOptions) {
    elements.sizeOptions.forEach(opt => {
      opt.addEventListener("click", () => {
        const size = opt.getAttribute("data-size");
        const months = size === "deluxe" ? 6 : (size === "premium" ? 12 : 3);
        setModalTenure(months);
      });
    });
  }

  // Addons in modal
  elements.addonCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      state.activeDetailOptions.addons = [];
      elements.addonCheckboxes.forEach(box => {
        if (box.checked) {
          let name = "";
          if (box.id === "addon-vase") name = "HomeCare Protection";
          else if (box.id === "addon-chocolates") name = "Voltage Stabilizer";
          else if (box.id === "addon-teddy") name = "Smart Home Integration";

          state.activeDetailOptions.addons.push({
            id: box.id,
            name: name,
            price: parseFloat(box.value)
          });
        }
      });
      calculateModalPrice();
    });
  });

  // Modal Add To Cart
  elements.modalAddToCart.addEventListener("click", () => {
    if (!state.activeProduct) return;
    if (!state.currentUser) {
      showToast("Please sign in to book an appliance.", "info");
      openAuthModal("customer", "Please sign in to book an appliance.");
      return;
    }
    if (state.currentUser.role === "vendor") {
      showToast("Vendor accounts cannot book appliances.", "warning");
      return;
    }
    const product = state.activeProduct;
    const tenureMonths = state.activeDetailOptions.tenureMonths || 1;
    const dateRange = getRentalDateRange(tenureMonths);

    addCartItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      vendor_email: product.vendor_email || product.vendorEmail || "",
      vendorName: product.vendorName || product.brand || "HomeRent Verified Vendor",
      vendorAddress: product.vendorAddress || product.address || "Indiranagar, Bengaluru, Karnataka",
      vendorPhone: product.vendorPhone || product.phone || "9876543210",
      tenureMonths: tenureMonths,
      tenureLabel: `${tenureMonths} ${tenureMonths === 1 ? 'Month' : 'Months'}`,
      startDate: dateRange.startDateStr,
      endDate: dateRange.endDateStr,
      size: state.activeDetailOptions.size,
      addons: [...state.activeDetailOptions.addons],
      message: elements.giftMessage.value.trim(),
      qty: state.activeDetailOptions.qty
    });

    showToast(`Added ${state.activeDetailOptions.qty}x ${product.title} (${tenureMonths} mo) to rental bag!`, "success");
    closeProductModal();
    
    // Auto-open cart to show added item
    elements.cartOverlay.classList.add("open");
  });

  // Product modal close
  elements.modalClose.addEventListener("click", closeProductModal);
  elements.productModal.addEventListener("click", (e) => {
    if (e.target === elements.productModal) {
      closeProductModal();
    }
  });

  // Checkout Triggers
  elements.checkoutTrigger.addEventListener("click", openCheckout);
  elements.checkoutClose.addEventListener("click", closeCheckout);
  elements.checkoutModal.addEventListener("click", (e) => {
    if (e.target === elements.checkoutModal) {
      closeCheckout();
    }
  });

  elements.checkoutNext.addEventListener("click", handleCheckoutNext);
  elements.checkoutBack.addEventListener("click", handleCheckoutBack);

  setupCreditCardListeners();
  setupReviewSystemListeners();

  // Close checkout success handler
  elements.checkoutClose.addEventListener("click", () => {
    if (state.checkoutStep === 3) {
      closeCheckout();
    }
  });

  // Checkout Step 3 Receipt Buttons
  if (elements.btnViewReceipt) {
    elements.btnViewReceipt.addEventListener("click", () => {
      if (state.lastBooking) {
        renderReceiptUI(state.lastBooking);
        openReceiptModal();
      } else {
        showToast("No active booking to view.", "info");
      }
    });
  }

  if (elements.btnDownloadReceipt) {
    elements.btnDownloadReceipt.addEventListener("click", () => {
      downloadReceiptFile(state.lastBooking);
    });
  }

  // Receipt Modal Controls
  if (elements.closeReceiptModalBtn) {
    elements.closeReceiptModalBtn.addEventListener("click", closeReceiptModal);
  }
  if (elements.receiptDoneBtn) {
    elements.receiptDoneBtn.addEventListener("click", closeReceiptModal);
  }
  if (elements.receiptPrintBtn) {
    elements.receiptPrintBtn.addEventListener("click", printReceipt);
  }
  if (elements.receiptDownloadFileBtn) {
    elements.receiptDownloadFileBtn.addEventListener("click", () => {
      downloadReceiptFile(state.lastBooking);
    });
  }
  if (elements.bookingReceiptModal) {
    elements.bookingReceiptModal.addEventListener("click", (e) => {
      if (e.target === elements.bookingReceiptModal) {
        closeReceiptModal();
      }
    });
  }
}

// NOTE: LSTM Demand Forecasting functionality temporarily removed; to be implemented later.

// ============================================================
// --- AUTHENTICATION SYSTEM ---
// ============================================================

function initAuth() {
  // Session still stored in localStorage for cross-page persistence
  const sessionUser = localStorage.getItem("currentUser");
  if (sessionUser) {
    state.currentUser = JSON.parse(sessionUser);
    updateNavForLoggedInUser(state.currentUser);
  }
}

async function saveRegisteredUsers() {
  // No-op: users are now persisted server-side via /api/users
}

function openAuthModal(preferredRole) {
  elements.authModal.classList.add("open");
  // Switch to preferred role tab
  if (preferredRole === "vendor") {
    selectAuthTab("vendor");
  } else {
    selectAuthTab("customer");
  }
  elements.authEmail.value = "";
  elements.authPassword.value = "";
  elements.authName.value = "";
  elements.authErrorMsg.style.display = "none";
  setAuthMode("login");
}

function closeAuthModal() {
  elements.authModal.classList.remove("open");
}

function selectAuthTab(role) {
  elements.authRole.value = role;

  // Update tab appearance
  const tabs = [elements.tabAuthCustomer, elements.tabAuthVendor];
  tabs.forEach(tab => {
    const isActive = tab.getAttribute("data-role") === role;
    tab.style.background = isActive ? "var(--bg-secondary)" : "transparent";
    tab.style.color = isActive ? "var(--text-primary)" : "var(--text-secondary)";
    tab.style.boxShadow = isActive ? "var(--shadow-sm)" : "none";
    if (isActive) tab.classList.add("active");
    else tab.classList.remove("active");
  });

  // Update submit button text and subtitle
  const roleLabel = role === "vendor" ? "Vendor" : "Customer";
  const modeLabel = elements.authMode.value === "login" ? "Sign In" : "Create Account";
  elements.authSubmitBtn.textContent = `${modeLabel} as ${roleLabel}`;
  elements.authSubtitle.textContent = role === "vendor"
    ? "Sign in to access the Vendor Console & Analytics"
    : "Sign in to browse and rent premium appliances";

  // Update demo fill placeholder
  elements.authEmail.placeholder = role === "vendor" ? "vendor@homerent.ai" : "customer@homerent.ai";
}

function setAuthMode(mode) {
  elements.authMode.value = mode;
  const role = elements.authRole.value;
  const roleLabel = role === "vendor" ? "Vendor" : "Customer";

  if (mode === "login") {
    elements.groupAuthName.style.display = "none";
    elements.authName.required = false;
    elements.authSubmitBtn.textContent = `Sign In as ${roleLabel}`;
    elements.authModeText.textContent = "Don't have an account?";
    elements.authToggleLink.textContent = "Create Account";
  } else {
    elements.groupAuthName.style.display = "flex";
    elements.authName.required = true;
    elements.authSubmitBtn.textContent = `Create ${roleLabel} Account`;
    elements.authModeText.textContent = "Already have an account?";
    elements.authToggleLink.textContent = "Sign In";
  }
}

async function handleAuthSubmit(e) {
  e.preventDefault();
  elements.authErrorMsg.style.display = "none";

  const email = elements.authEmail.value.trim().toLowerCase();
  const password = elements.authPassword.value;
  const role = elements.authRole.value;
  const mode = elements.authMode.value;

  if (mode === "login") {
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', email, password, role })
      });
      if (!res.ok) {
        elements.authErrorMsg.textContent = "Invalid email, password, or role. Please try again.";
        elements.authErrorMsg.style.display = "block";
        return;
      }
      const user = await res.json();
      loginUser(user);
    } catch (err) {
      // Fallback to DEFAULT_USERS if server unreachable
      const user = DEFAULT_USERS.find(u => u.email.toLowerCase() === email && u.password === password && u.role === role);
      if (!user) {
        elements.authErrorMsg.textContent = "Invalid email, password, or role. Please try again.";
        elements.authErrorMsg.style.display = "block";
        return;
      }
      loginUser(user);
    }

  } else {
    const name = elements.authName.value.trim();
    if (!name) {
      elements.authErrorMsg.textContent = "Please enter your full name.";
      elements.authErrorMsg.style.display = "block";
      return;
    }
    if (password.length < 6) {
      elements.authErrorMsg.textContent = "Password must be at least 6 characters.";
      elements.authErrorMsg.style.display = "block";
      return;
    }
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'register', name, email, password, role })
      });
      if (res.status === 409) {
        elements.authErrorMsg.textContent = "An account with this email already exists. Please sign in.";
        elements.authErrorMsg.style.display = "block";
        return;
      }
      const newUser = await res.json();
      loginUser(newUser);
    } catch (err) {
      elements.authErrorMsg.textContent = "Could not connect to server. Please try again.";
      elements.authErrorMsg.style.display = "block";
    }
  }
}

function loginUser(user) {
  state.currentUser = user;
  localStorage.setItem("currentUser", JSON.stringify(user));
  updateNavForLoggedInUser(user);
  closeAuthModal();
  showToast(`Welcome back, ${user.name.split(" ")[0]}! 👋`, "success");
  loadCartFromStorage().then(updateCartUI);

  // Customer Login: Request browser location permission once for distance calculation
  if (user.role === "customer") {
    const nameInput = document.getElementById("shipping-name");
    const emailInput = document.getElementById("shipping-email");
    if (nameInput) nameInput.value = user.name;
    if (emailInput) emailInput.value = user.email;

    if (navigator.geolocation && !user.location) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = Number(pos.coords.latitude.toFixed(6));
          const lng = Number(pos.coords.longitude.toFixed(6));
          user.location = { latitude: lat, longitude: lng };
          user.locationDenied = false;
          localStorage.setItem("currentUser", JSON.stringify(user));

          fetch('/api/users/location', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email, latitude: lat, longitude: lng })
          }).catch(console.error);

          loadDatabase().then(renderProducts);
        },
        (err) => {
          console.warn("Location permission denied or unavailable:", err.message);
          user.location = null;
          user.locationDenied = true;
          localStorage.setItem("currentUser", JSON.stringify(user));
          showToast("Location access is required to calculate appliance distance.", "info");
          renderProducts();
        },
        { timeout: 5000, enableHighAccuracy: true, maximumAge: 600000 }
      );
    }
  }

  // If vendor logged in and currently on customer view → switch to vendor console (no location requested)
  if (user.role === "vendor" && state.currentPortal === "customer") {
    setTimeout(() => {
      state.currentPortal = "vendor";
      elements.customerPortalView.style.display = "none";
      elements.vendorConsole.style.display = "block";
      elements.cartToggle.style.display = "none";
      elements.aiChatWidget.style.display = "none";
      elements.portalToggle.querySelector("span").textContent = "Customer View";
      updateAdminDashboard();
    }, 400);
  }
}

function logoutUser() {
  state.currentUser = null;
  localStorage.removeItem("currentUser");
  // Redirect to login page
  window.location.replace("login.html");
}

function updateNavForLoggedInUser(user) {
  const currentPath = window.location.pathname.toLowerCase();

  if (!user) {
    // GUEST STATE
    if (elements.navLoginBtn) elements.navLoginBtn.style.display = "flex";
    if (elements.navUserProfile) elements.navUserProfile.style.display = "none";
    if (elements.authNavContainer) elements.authNavContainer.style.display = "flex";
    if (elements.portalToggle) elements.portalToggle.style.display = "none";
    if (elements.navAddApplianceBtn) elements.navAddApplianceBtn.style.display = "none";
    if (elements.cartToggle) elements.cartToggle.style.display = "flex";

    if (elements.mainNavLinks) {
      elements.mainNavLinks.style.display = "flex";
      const isHome = currentPath.endsWith("home.html") || currentPath.endsWith("/");
      const isShop = currentPath.endsWith("appliances.html");
      const isDash = currentPath.endsWith("dashboard.html");
      elements.mainNavLinks.innerHTML = `
        <li><a href="home.html" ${isHome ? 'class="active"' : ''}>Home</a></li>
        <li><a href="appliances.html" ${isShop ? 'class="active"' : ''}>Browse Appliances</a></li>
        <li><a href="dashboard.html" ${isDash ? 'class="active"' : ''}>Dashboard</a></li>
      `;
    }
    return;
  }

  if (user.role === "vendor") {
    // ==========================================
    // 1. STRICT VENDOR ROLE NAVBAR RENDER
    // ==========================================
    // VENDOR sees: Home | + Add Appliance | Vendor Console | Logout
    if (elements.mainNavLinks) {
      const isHome = currentPath.endsWith("home.html");
      const isVendorConsole = currentPath.endsWith("appliances.html");
      elements.mainNavLinks.style.display = "flex";
      elements.mainNavLinks.innerHTML = `
        <li><a href="home.html" ${isHome ? 'class="active"' : ''}>Home</a></li>
        <li><a href="#" id="vendor-nav-add-btn">+ Add Appliance</a></li>
        <li><a href="appliances.html" ${isVendorConsole ? 'class="active"' : ''}>Vendor Console</a></li>
        <li><a href="#" id="vendor-nav-logout-btn">Logout</a></li>
      `;

      const addBtn = document.getElementById("vendor-nav-add-btn");
      if (addBtn) {
        addBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (window.location.pathname.endsWith("appliances.html")) {
            const vModal = document.getElementById("vendor-add-appliance-modal");
            if (vModal) vModal.classList.add("open");
          } else {
            window.location.href = "appliances.html?openVendorModal=true";
          }
        });
      }

      const logoutBtn = document.getElementById("vendor-nav-logout-btn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
          e.preventDefault();
          logoutUser();
        });
      }
    }

    if (elements.authNavContainer) elements.authNavContainer.style.display = "flex";
    if (elements.navLoginBtn) elements.navLoginBtn.style.display = "none";
    if (elements.navUserProfile) elements.navUserProfile.style.display = "flex";
    if (elements.userNameDisplay) elements.userNameDisplay.textContent = (user.name || "Vendor").split(" ")[0];
    if (elements.userRoleBadge) {
      elements.userRoleBadge.textContent = "Vendor";
      elements.userRoleBadge.style.background = "var(--accent-gold)";
      elements.userRoleBadge.style.color = "#1c221e";
    }
    if (elements.navLogoutBtn) elements.navLogoutBtn.style.display = "flex";
    if (elements.cartToggle) elements.cartToggle.style.display = "none";
    if (elements.portalToggle) elements.portalToggle.style.display = "none";
    if (elements.navAddApplianceBtn) elements.navAddApplianceBtn.style.display = "none";
    if (elements.openVendorModalBtn) elements.openVendorModalBtn.style.display = "inline-flex";

    // Route Protection: VENDOR on dashboard.html -> redirect to appliances.html (Vendor Console)
    if (currentPath.endsWith("dashboard.html")) {
      window.location.replace("appliances.html");
      return;
    }

    // On appliances.html: force view to Vendor Console
    state.currentPortal = "vendor";
    if (elements.customerPortalView) elements.customerPortalView.style.display = "none";
    if (elements.vendorConsole) elements.vendorConsole.style.display = "block";
    if (elements.aiChatWidget) elements.aiChatWidget.style.display = "none";

    updateAdminDashboard();

  } else {
    // ==========================================
    // 2. STRICT CUSTOMER ROLE NAVBAR RENDER
    // ==========================================
    // CUSTOMER sees: Home | Browse Appliances | Dashboard | Logout
    if (elements.mainNavLinks) {
      const isHome = currentPath.endsWith("home.html");
      const isShop = currentPath.endsWith("appliances.html");
      const isDash = currentPath.endsWith("dashboard.html");
      elements.mainNavLinks.style.display = "flex";
      elements.mainNavLinks.innerHTML = `
        <li><a href="home.html" ${isHome ? 'class="active"' : ''}>Home</a></li>
        <li><a href="appliances.html" ${isShop ? 'class="active"' : ''}>Browse Appliances</a></li>
        <li><a href="dashboard.html" ${isDash ? 'class="active"' : ''}>Dashboard</a></li>
      `;
    }

    if (elements.authNavContainer) elements.authNavContainer.style.display = "flex";
    if (elements.navLoginBtn) elements.navLoginBtn.style.display = "none";
    if (elements.navUserProfile) elements.navUserProfile.style.display = "flex";
    if (elements.userNameDisplay) elements.userNameDisplay.textContent = (user.name || "Customer").split(" ")[0];

    if (elements.userRoleBadge) {
      elements.userRoleBadge.textContent = "Customer";
      elements.userRoleBadge.style.background = "var(--accent-primary)";
      elements.userRoleBadge.style.color = "white";
    }
    if (elements.navLogoutBtn) elements.navLogoutBtn.style.display = "flex";

    if (elements.cartToggle) elements.cartToggle.style.display = "flex";
    if (elements.portalToggle) elements.portalToggle.style.display = "none";
    if (elements.navAddApplianceBtn) elements.navAddApplianceBtn.style.display = "none";
    if (elements.openVendorModalBtn) elements.openVendorModalBtn.style.display = "none";

    const vModal = document.getElementById("vendor-add-appliance-modal");
    if (vModal) vModal.classList.remove("open");

    state.currentPortal = "customer";
    if (elements.customerPortalView) elements.customerPortalView.style.display = "block";
    if (elements.vendorConsole) elements.vendorConsole.style.display = "none";
    if (elements.aiChatWidget) elements.aiChatWidget.style.display = "block";
  }
}

function setupAuthListeners() {
  // Direct to login page from Sign In button
  if (elements.navLoginBtn) {
    elements.navLoginBtn.addEventListener("click", (e) => {
      window.location.href = "login.html";
    });
  }

  // Close modal
  if (elements.authModalClose) elements.authModalClose.addEventListener("click", closeAuthModal);
  if (elements.authModal) {
    elements.authModal.addEventListener("click", (e) => {
      if (e.target === elements.authModal) closeAuthModal();
    });
  }

  // Role tab switching
  if (elements.tabAuthCustomer) elements.tabAuthCustomer.addEventListener("click", () => selectAuthTab("customer"));
  if (elements.tabAuthVendor) elements.tabAuthVendor.addEventListener("click", () => selectAuthTab("vendor"));

  // Quick Demo Fill buttons
  if (elements.fillCustomerDemo) {
    elements.fillCustomerDemo.addEventListener("click", () => {
      selectAuthTab("customer");
      setAuthMode("login");
      elements.authEmail.value = "customer@homerent.ai";
      elements.authPassword.value = "customer123";
    });
  }

  if (elements.fillVendorDemo) {
    elements.fillVendorDemo.addEventListener("click", () => {
      selectAuthTab("vendor");
      setAuthMode("login");
      elements.authEmail.value = "vendor@homerent.ai";
      elements.authPassword.value = "vendor123";
    });
  }

  // Toggle login / register mode
  if (elements.authToggleLink) {
    elements.authToggleLink.addEventListener("click", (e) => {
      e.preventDefault();
      const currentMode = elements.authMode.value;
      setAuthMode(currentMode === "login" ? "register" : "login");
    });
  }

  // Form submit
  if (elements.authForm) elements.authForm.addEventListener("submit", handleAuthSubmit);

  // Logout
  if (elements.navLogoutBtn) elements.navLogoutBtn.addEventListener("click", logoutUser);

  // Intercept Vendor Console toggle — require vendor auth
  const originalPortalToggle = elements.portalToggle;
  if (originalPortalToggle) {
    originalPortalToggle.addEventListener("click", (e) => {
      if (state.currentPortal === "customer") {
        if (!state.currentUser) {
          e.stopImmediatePropagation();
          showToast("Please sign in as Vendor to access the Vendor Console.", "info");
          setTimeout(() => { window.location.href = "login.html?role=vendor"; }, 600);
          return;
        }
        if (state.currentUser.role !== "vendor") {
          e.stopImmediatePropagation();
          showToast("Access Denied: Vendor Console is blocked for Customer accounts.", "error");
          return;
        }
      }
    }, true);
  }
}

// ============================================================
// --- VENDOR ADD APPLIANCE MODAL SYSTEM ---
// ============================================================

function setupVendorAddModalListeners() {
  const modal = document.getElementById("vendor-add-appliance-modal");
  const closeBtn = document.getElementById("vendor-modal-close");
  const form = document.getElementById("vendor-modal-form");
  const openModalBtn = document.getElementById("open-vendor-modal-btn");
  const navAddBtn = document.getElementById("nav-add-appliance-btn");

  function openVendorModal() {
    if (!state.currentUser) {
      showToast("Please sign in as a Vendor to add appliances to fleet inventory.", "info");
      openAuthModal("vendor");
      return;
    }
    if (state.currentUser.role !== "vendor") {
      showToast("Access Denied: Adding appliances to inventory is restricted to Vendor accounts.", "error");
      return;
    }
    if (modal) modal.classList.add("open");
  }

  function closeVendorModal() {
    if (modal) modal.classList.remove("open");
  }

  if (openModalBtn) openModalBtn.addEventListener("click", openVendorModal);
  if (navAddBtn) navAddBtn.addEventListener("click", openVendorModal);
  if (closeBtn) closeBtn.addEventListener("click", closeVendorModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeVendorModal();
    });
  }

  // Predefined appliance select listener -> auto-fill image and details
  const preSelect = document.getElementById("vmodal-predefined-select");
  const imgInput = document.getElementById("vmodal-image");
  const fileInput = document.getElementById("vmodal-file-upload");
  const previewImg = document.getElementById("vmodal-preview-img");
  const previewLabel = document.getElementById("vmodal-preview-label");

  function updateImagePreview(src) {
    if (previewImg && src) previewImg.src = src;
    if (previewLabel && src) previewLabel.textContent = src;
    if (imgInput) imgInput.value = src;
  }

  if (preSelect) {
    preSelect.addEventListener("change", () => {
      const opt = preSelect.selectedOptions[0];
      if (!opt || !opt.value) return;
      const name = opt.value;
      const cat = opt.getAttribute("data-cat") || "kitchen";
      const img = opt.getAttribute("data-img") || `assets/images/${name.toLowerCase().replace(/[^a-z0-9]+/g, '_')}.jpg`;
      const rent = opt.getAttribute("data-rent") || "699";

      const titleInput = document.getElementById("vmodal-title");
      const catInput = document.getElementById("vmodal-category");
      const rentInput = document.getElementById("vmodal-rent");
      const depositInput = document.getElementById("vmodal-deposit");
      const descInput = document.getElementById("vmodal-desc");

      if (titleInput) titleInput.value = name;
      if (catInput) catInput.value = cat;
      if (rentInput) rentInput.value = rent;
      if (depositInput) depositInput.value = Math.round(parseFloat(rent) * 1.5);
      if (descInput) descInput.value = `Premium certified ${name} with smart efficiency, verified fleet inspection, and 24h installation.`;

      updateImagePreview(img);
      showToast(`Auto-selected: "${name}" with verified image asset!`, "info");
    });
  }

  // Custom file upload listener
  if (fileInput) {
    fileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (re) => {
        const base64Data = re.target.result;
        updateImagePreview(base64Data);

        // Upload to server
        try {
          const res = await fetch('/api/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-User-Role': state.currentUser ? state.currentUser.role : 'vendor'
            },
            body: JSON.stringify({ image_data: base64Data })
          });
          const result = await res.json();
          if (result.success && result.url) {
            updateImagePreview(result.url);
            showToast("Custom appliance image uploaded successfully!", "success");
          }
        } catch (err) {
          console.error("Upload error:", err);
        }
      };
      reader.readAsDataURL(file);
    });
  }

  if (imgInput) {
    imgInput.addEventListener("input", (e) => {
      updateImagePreview(e.target.value.trim());
    });
  }

  // Locality selector auto-fill address
  const vLocalitySelect = document.getElementById("vmodal-locality");
  const vAddrInput = document.getElementById("vmodal-address");
  if (vLocalitySelect) {
    vLocalitySelect.addEventListener("change", (e) => {
      const loc = e.target.value;
      if (vAddrInput && (!vAddrInput.value || vAddrInput.value.includes("Hyderabad") || vAddrInput.value.includes("Bengaluru"))) {
        vAddrInput.value = `${loc}, Hyderabad, Telangana`;
      }
    });
  }

  const submitBtn = document.getElementById("vmodal-submit-btn");

  async function handleAppliancePublish(e) {
    if (e) e.preventDefault();

    // Ensure session is active
    if (!state.currentUser) {
      const stored = localStorage.getItem("currentUser");
      if (stored) {
        try { state.currentUser = JSON.parse(stored); } catch (err) {}
      }
    }

    if (!state.currentUser || state.currentUser.role !== "vendor") {
      showToast("Access Denied: Adding appliances is restricted to Vendor accounts.", "error");
      closeVendorModal();
      return;
    }

    const titleEl = document.getElementById("vmodal-title");
    const catEl = document.getElementById("vmodal-category");
    const rentEl = document.getElementById("vmodal-rent");
    const descEl = document.getElementById("vmodal-desc");
    const localityEl = document.getElementById("vmodal-locality");

    const title = titleEl ? titleEl.value.trim() : "";
    const category = catEl ? catEl.value : "kitchen";
    const brand = (document.getElementById("vmodal-brand")?.value || "").trim();
    const rent = parseFloat(rentEl ? rentEl.value : 0);
    const deposit = parseFloat(document.getElementById("vmodal-deposit")?.value || 0);
    const stock = parseInt(document.getElementById("vmodal-stock")?.value || 10);
    const image = (document.getElementById("vmodal-image")?.value || "").trim() || "assets/images/smart_refrigerator.jpg";
    const desc = descEl ? descEl.value.trim() : "";

    // Locality and Coordinates
    const locality = localityEl ? localityEl.value : "Gachibowli";
    const locCoords = HYDERABAD_LOCALITIES[locality] || HYDERABAD_LOCALITIES["Gachibowli"];
    const vendorLocation = {
      area: locality,
      latitude: locCoords.latitude,
      longitude: locCoords.longitude
    };

    // Vendor Address and Phone Number validation
    const addressEl = document.getElementById("vmodal-address");
    const phoneEl = document.getElementById("vmodal-phone");
    const vendorAddress = (addressEl ? addressEl.value.trim() : "") || `${locality}, Hyderabad, Telangana`;
    const vendorPhone = phoneEl ? phoneEl.value.trim() : "";

    if (!title) {
      showToast("Please enter an appliance name / model", "warning");
      return;
    }
    if (!rent || rent <= 0) {
      showToast("Please enter a valid monthly rent", "warning");
      return;
    }
    if (!vendorAddress) {
      showToast("Vendor address is mandatory. Please enter your location.", "warning");
      if (addressEl) addressEl.focus();
      return;
    }
    if (!vendorPhone || vendorPhone.replace(/\D/g, '').length < 10) {
      showToast("Please enter a valid vendor phone number (at least 10 digits).", "warning");
      if (phoneEl) phoneEl.focus();
      return;
    }

    const fullTitle = brand ? `${title} (${brand})` : title;
    const vendorEmail = (state.currentUser?.email || 'vendor@homerent.ai').trim().toLowerCase();

    const newAppliance = {
      name: fullTitle,
      title: fullTitle,
      category,
      brand: brand || state.currentUser?.name || "Vendor Fleet",
      vendor_email: vendorEmail,
      vendorLocation,
      vendorAddress,
      vendorPhone,
      price: rent,
      rental_price: rent,
      deposit: deposit,
      stock: stock,
      quantity: stock,
      available_quantity: stock,
      availability: true,
      availability_status: "Available",
      rating: 5.0,
      reviews: 1,
      image,
      description: desc,
      desc: desc,
      badge: "Fleet New",
      sizeUpcharges: { standard: 0, deluxe: -Math.round(rent * 0.08), premium: -Math.round(rent * 0.15) }
    };

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Publishing to Fleet Inventory...";
    }

    try {
      const res = await fetch('/api/appliances', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Role': state.currentUser ? state.currentUser.role : 'vendor',
          'X-User-Email': vendorEmail
        },
        body: JSON.stringify(newAppliance)
      });
      if (!res.ok) {
        const errData = await res.json();
        showToast(errData.error || "Failed to add appliance", "error");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "🚀 PUBLISH APPLIANCE TO CATALOG • LIVE IN FLEET";
        }
        return;
      }
      const saved = await res.json();
      // Add immediately to the beginning of the local appliances array so customer sees it right away!
      state.appliances.unshift(saved);
    } catch (err) {
      const newId = state.appliances.length > 0 ? Math.max(...state.appliances.map(a => a.id || 0)) + 1 : 1;
      newAppliance.id = newId;
      state.appliances.unshift(newAppliance);
      console.error("Failed to save vendor appliance to DB:", err);
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "🚀 PUBLISH APPLIANCE TO CATALOG • LIVE IN FLEET";
    }

    const activeForm = form || document.getElementById("vendor-modal-form");
    if (activeForm) activeForm.reset();
    closeVendorModal();

    showToast(`"${fullTitle}" published to catalog & live in fleet inventory!`, "success");

    // Refresh customer catalog & vendor inventory views immediately
    renderProducts();
    updateAdminDashboard();
    if (state.currentAdminTab === "inventory") {
      renderAdminInventory();
    }
  }

  const activeForm = form || document.getElementById("vendor-modal-form");
  if (activeForm) {
    activeForm.addEventListener("submit", handleAppliancePublish);
  }
  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      const targetForm = activeForm || document.getElementById("vendor-modal-form");
      if (targetForm && targetForm.checkValidity && !targetForm.checkValidity()) {
        targetForm.reportValidity();
        return;
      }
      handleAppliancePublish(e);
    });
  }

  // Check URL params for auto-opening modal (e.g. redirected from Dashboard)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("openVendorModal") === "true") {
    if (state.currentUser && state.currentUser.role === "vendor") {
      openVendorModal();
    } else {
      showToast("Access Denied: This option is only enabled for Vendor accounts.", "error");
    }
  }
}
