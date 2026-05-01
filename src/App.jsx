import React, { useEffect } from "react";

const appMarkup = `
  <div class="app-shell">
    <header class="topbar">
      <button class="brand-button" id="showMenu" type="button" aria-label="Show menu">
        <span class="brand-mark" id="brandMark">DM</span>
        <span>
          <strong id="restaurantNameTop">Digital Menu</strong>
          <small id="restaurantAreaTop">QR and NFC menu</small>
        </span>
      </button>
      <button class="language-toggle" id="languageToggle" type="button" aria-label="Change language">DE</button>
    </header>

    <main>
      <section class="auth-view hidden" id="authView">
        <div class="auth-card">
          <div class="auth-brand">
            <img src="assets/synkard-horizontal-dark.svg" alt="Synkard" />
          </div>
          <label class="quick-account-select">
            <span data-i18n="accountSelect">Account</span>
            <select id="authAccountSelect">
              <option value="">Select account</option>
            </select>
          </label>
          <form class="auth-form" id="authLoginForm">
            <label class="icon-field">
              <span class="field-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6.5h16v11H4z"></path><path d="m4.8 7.2 7.2 5.6 7.2-5.6"></path></svg></span>
              <input id="authEmailInput" type="email" placeholder="Email *" data-i18n-placeholder="emailRequired" autocomplete="username" required />
            </label>
            <label class="icon-field">
              <span class="field-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2"></rect><path d="M8 10V7.8a4 4 0 0 1 8 0V10"></path><path d="M12 14v2"></path></svg></span>
              <input id="authPasswordInput" type="password" placeholder="Password *" data-i18n-placeholder="passwordRequired" autocomplete="current-password" required />
            </label>
            <div class="auth-options">
              <label><input id="rememberInput" type="checkbox" /> <span data-i18n="rememberMe">Remember me</span></label>
              <button type="button" data-i18n="forgotPassword">Forgot password</button>
            </div>
            <button class="primary-button auth-submit" type="submit" data-i18n="login">Log in</button>
            <button class="secondary-button auth-submit" id="showSignupButton" type="button" data-i18n="createAccount">Create account</button>
            <p class="form-message" id="authMessage"></p>
          </form>

          <form class="auth-form signup-form hidden" id="authSignupForm">
            <label class="icon-field">
              <span class="field-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 20V9.5L12 4l8 5.5V20"></path><path d="M9 20v-6h6v6"></path></svg></span>
              <input id="signupRestaurantInput" placeholder="Restaurant name *" data-i18n-placeholder="restaurantNameRequired" required />
            </label>
            <label class="icon-field">
              <span class="field-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6.5h16v11H4z"></path><path d="m4.8 7.2 7.2 5.6 7.2-5.6"></path></svg></span>
              <input id="signupEmailInput" type="email" placeholder="Email *" data-i18n-placeholder="emailRequired" autocomplete="username" required />
            </label>
            <label class="icon-field">
              <span class="field-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2"></rect><path d="M8 10V7.8a4 4 0 0 1 8 0V10"></path><path d="M12 14v2"></path></svg></span>
              <input id="signupPasswordInput" type="password" placeholder="Password *" data-i18n-placeholder="passwordRequired" autocomplete="new-password" required />
            </label>
            <button class="primary-button auth-submit" type="submit" data-i18n="startTrial">Start 1-month free trial</button>
            <button class="secondary-button auth-submit" id="showLoginButton" type="button" data-i18n="backToLogin">Back to login</button>
          </form>

          <div class="auth-divider"><span data-i18n="or">or</span></div>
          <div class="social-login-list">
            <button type="button"><span class="social-icon google-icon">G</span><strong data-i18n="continueGoogle">Continue with Google</strong></button>
            <button type="button"><span class="social-icon microsoft-icon"><i></i><i></i><i></i><i></i></span><strong data-i18n="continueMicrosoft">Continue with Microsoft</strong></button>
            <button type="button"><span class="social-icon apple-icon"><svg viewBox="0 0 24 24"><path d="M16.5 13.1c0-2 1.7-3 1.8-3.1-1-.1-2.1-.7-3.3-.7-1.4 0-2.4.8-3.1.8-.7 0-1.7-.8-2.8-.8-1.5 0-3 .9-3.8 2.3-1.6 2.9-.4 7.2 1.2 9.5.8 1.1 1.7 2.4 2.9 2.3 1.1 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.2 2.8-2.3.9-1.3 1.2-2.6 1.3-2.7-.1-.1-2.9-1.1-3-4.3ZM14.3 7.8c.6-.8 1-1.8.9-2.8-.9 0-1.9.6-2.5 1.3-.6.7-1 1.7-.9 2.7.9.1 1.9-.4 2.5-1.2Z"></path></svg></span><strong data-i18n="continueApple">Sign in with Apple</strong></button>
          </div>
        </div>
      </section>

      <section class="menu-view" id="menuView">
        <div class="restaurant-hero">
          <img id="coverImage" alt="" />
          <div class="hero-overlay">
            <div>
              <p id="restaurantCuisine">Mediterranean cuisine</p>
              <h1 id="restaurantName">Restaurant Menu</h1>
            </div>
          </div>
        </div>

        <section class="quick-actions" id="quickActions" aria-label="Restaurant actions"></section>
        <section class="license-notice hidden" id="licenseNotice" role="status"></section>

        <div class="menu-layout hidden" id="menuLayout">
          <aside class="category-rail" aria-label="Menu categories">
            <div class="search-box">
              <input id="searchInput" type="search" placeholder="Search menu" />
            </div>
            <div class="category-tabs" id="categoryTabs"></div>
          </aside>

          <section class="menu-content" id="menuContent" aria-live="polite"></section>
        </div>

        <section class="restaurant-footer-section" id="restaurantFooter">
          <div class="location-card" id="locationCard">
            <iframe id="mapFrame" title="Google Maps" data-i18n-title="mapTitle" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="location-row">
              <span class="location-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 21s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z"></path><circle cx="12" cy="9" r="2.4"></circle></svg>
              </span>
              <div>
                <strong id="footerAddressLine1"></strong>
                <span id="footerAddressLine2"></span>
              </div>
              <button class="copy-address-button" id="copyAddressButton" type="button" aria-label="Copy address" title="Copy address" data-i18n-aria-label="copyAddress" data-i18n-title="copyAddress">⧉</button>
            </div>
            <details class="opening-hours">
              <summary><span aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.2 2"></path></svg></span><strong data-i18n="openingHours">Öffnungszeiten</strong></summary>
              <div class="opening-hours-list" id="footerOpeningHours"></div>
            </details>
          </div>

          <footer class="synkard-footer">
            <div class="synkard-footer-brand">
              <img src="assets/synkard-footer-logo.svg" alt="Synkard" />
              <span data-i18n="digitalMenu">Digitales Menü</span>
            </div>
            <nav aria-label="Legal links">
              <button type="button" data-legal="terms">AGB</button>
              <button type="button" data-legal="privacy">Datenschutzerklärung</button>
              <button type="button" data-legal="imprint">Impressum</button>
            </nav>
            <p>© 2026 Synkard</p>
          </footer>
        </section>
      </section>

      <section class="admin-view hidden" id="adminView">
        <div class="admin-login" id="loginPanel">
          <div class="login-copy">
            <p data-i18n="adminPanel">Restaurant panel</p>
            <h1 data-i18n="updateMenu">Update your menu</h1>
            <span><span data-i18n="demoLogin">Demo login</span>: <strong>demo@restoran.com</strong> / <strong>123456</strong></span>
          </div>
          <form class="login-form" id="loginForm">
            <label>
              <span data-i18n="email">Email</span>
              <input id="emailInput" type="email" value="demo@restoran.com" autocomplete="username" required />
            </label>
            <label>
              <span data-i18n="password">Password</span>
              <input id="passwordInput" type="password" value="123456" autocomplete="current-password" required />
            </label>
            <button class="primary-button" type="submit" data-i18n="login">Log in</button>
            <p class="form-message" id="loginMessage"></p>
          </form>
        </div>

        <div class="dashboard hidden" id="dashboardPanel">
          <div class="dashboard-header">
            <div>
              <p data-i18n="dashboard">Dashboard</p>
              <h1 id="dashboardTitle">Restoran</h1>
            </div>
            <div class="dashboard-actions">
              <button class="ghost-button" id="openMenuPageButton" type="button" data-i18n="menuPage">Menu page</button>
              <button class="ghost-button" id="logoutButton" type="button" data-i18n="logout">Log out</button>
            </div>
          </div>

          <nav class="admin-menu" id="adminMenu" aria-label="Restaurant panel menu">
            <button type="button" class="active" data-admin-tab="dashboard" data-i18n="dashboard">Dashboard</button>
            <button type="button" data-admin-tab="restaurant" data-i18n="restaurantInfo">Restaurant information</button>
            <button type="button" data-admin-tab="categories" data-i18n="addCategory">Add category</button>
            <button type="button" data-admin-tab="items" data-i18n="addMenuItem">Add menu item</button>
          </nav>

          <section class="admin-panel-section admin-dashboard-frames" data-admin-section="dashboard">
            <div class="panel admin-dashboard-frame">
              <h2 data-i18n="visitorStats">Visitor statistics</h2>
              <div class="stats-grid admin-stats-grid" id="adminStatsGrid"></div>
            </div>
            <div class="panel admin-dashboard-frame">
              <h2 data-i18n="categoryStats">Items per category</h2>
              <div class="dashboard-summary-grid" id="dashboardSummaryGrid"></div>
              <div class="category-stats-list" id="categoryStatsList"></div>
            </div>
            <div class="panel admin-dashboard-frame">
              <h2 data-i18n="licenseInfo">License information</h2>
              <div class="license-info-list" id="licenseInfoList"></div>
            </div>
          </section>

          <div class="dashboard-grid">
            <section class="panel admin-panel-section hidden" data-admin-section="restaurant">
              <h2 data-i18n="restaurantInfo">Restaurant information</h2>
              <form id="restaurantForm" class="stacked-form">
                <div class="language-fields">
                  <label>
                    <span>Restaurant name (DE)</span>
                    <input id="restaurantNameDeInput" required />
                  </label>
                  <label>
                    <span>Restaurant name (EN)</span>
                    <input id="restaurantNameEnInput" required />
                  </label>
                </div>
                <label>
                  <span data-i18n="restaurantUrlName">Restaurant URL name</span>
                  <input id="restaurantSlugInput" placeholder="restaurant-name" required />
                  <small class="upload-hint" data-i18n="publicFormat">Public format: digimenu/restaurant-name</small>
                </label>
                <div class="language-fields">
                  <label>
                    <span>Cuisine (DE)</span>
                    <input id="restaurantCuisineDeInput" />
                  </label>
                  <label>
                    <span>Cuisine (EN)</span>
                    <input id="restaurantCuisineEnInput" />
                  </label>
                </div>
                <div class="language-fields">
                  <label>
                    <span>Area / branch (DE)</span>
                    <input id="restaurantAreaDeInput" />
                  </label>
                  <label>
                    <span>Area / branch (EN)</span>
                    <input id="restaurantAreaEnInput" />
                  </label>
                </div>
                <label>
                  <span data-i18n="coverPhoto">Cover photo</span>
                  <small class="upload-hint" data-i18n="coverHint">Recommended: 1600 x 900 px, JPG/PNG, landscape image for the top hero area.</small>
                  <input id="coverInput" type="file" accept="image/*" />
                </label>
                <div class="logo-editor">
                  <div class="brand-mark logo-preview" id="logoPreview">L</div>
                  <div class="stacked-form">
                    <label>
                      <span data-i18n="logoPhoto">Restaurant logo</span>
                      <small class="upload-hint" data-i18n="logoHint">Recommended: 512 x 512 px, PNG/JPG, square logo. Transparent PNG works best.</small>
                      <input id="logoInput" type="file" accept="image/*" />
                    </label>
                    <label>
                      <span data-i18n="logoColor">Logo background color</span>
                      <input id="logoColorInput" type="color" value="#176b85" />
                    </label>
                  </div>
                </div>
                <div class="theme-editor">
                  <h3 data-i18n="brandColors">Brand colors</h3>
                  <div class="color-controls">
                    <label>
                      <span data-i18n="buttonColor">Button color</span>
                      <input id="buttonColorInput" type="color" value="#176b85" />
                    </label>
                    <label>
                      <span data-i18n="backgroundColor">Background color</span>
                      <input id="backgroundColorInput" type="color" value="#eeeeee" />
                    </label>
                    <label>
                      <span data-i18n="textColor">Text color</span>
                      <input id="textColorInput" type="color" value="#053b50" />
                    </label>
                  </div>
                </div>
                <div class="theme-editor">
                  <h3 data-i18n="restaurantLinks">Restaurant links</h3>
                  <div class="language-fields">
                    <label>
                      <span data-i18n="googleReviewUrl">Google review URL</span>
                      <input id="googleReviewInput" type="url" placeholder="https://g.page/r/..." />
                    </label>
                    <label>
                      <span data-i18n="instagramUrl">Instagram URL</span>
                      <input id="instagramInput" type="url" placeholder="https://instagram.com/..." />
                    </label>
                  </div>
                  <div class="language-fields">
                    <label>
                      <span data-i18n="facebookUrl">Facebook URL</span>
                      <input id="facebookInput" type="url" placeholder="https://facebook.com/..." />
                    </label>
                    <label>
                      <span data-i18n="tiktokUrl">TikTok URL</span>
                      <input id="tiktokInput" type="url" placeholder="https://tiktok.com/@..." />
                    </label>
                  </div>
                  <label>
                    <span data-i18n="wifiConnectionUrl">WiFi connection URL</span>
                    <input id="wifiInput" placeholder="https://... or wifi link" />
                  </label>
                </div>
                <div class="theme-editor">
                  <h3 data-i18n="locationFooter">Location and footer</h3>
                  <div class="language-fields">
                    <label>
                      <span data-i18n="addressLine1">Address line 1</span>
                      <input id="addressLine1Input" placeholder="Zülpicher Straße 29" />
                    </label>
                    <label>
                      <span data-i18n="addressLine2">Address line 2</span>
                      <input id="addressLine2Input" placeholder="50674 Köln" />
                    </label>
                  </div>
                  <label>
                    <span data-i18n="googleMapsSearch">Google Maps search/address</span>
                    <input id="mapQueryInput" placeholder="Restaurant name, street, city" />
                  </label>
                  <div>
                    <span class="field-title" data-i18n="openingHoursEditor">Opening hours</span>
                    <div class="opening-hours-editor" id="openingHoursEditor"></div>
                  </div>
                </div>
                <div class="theme-editor">
                  <h3 data-i18n="legalSection">Terms, privacy, imprint</h3>
                  <div class="language-fields">
                    <label>
                      <span data-i18n="termsDe">AGB (DE)</span>
                      <textarea id="termsDeInput" rows="5"></textarea>
                    </label>
                    <label>
                      <span data-i18n="termsEn">Terms (EN)</span>
                      <textarea id="termsEnInput" rows="5"></textarea>
                    </label>
                  </div>
                  <div class="language-fields">
                    <label>
                      <span data-i18n="privacyDe">Datenschutzerklärung (DE)</span>
                      <textarea id="privacyDeInput" rows="5"></textarea>
                    </label>
                    <label>
                      <span data-i18n="privacyEn">Privacy policy (EN)</span>
                      <textarea id="privacyEnInput" rows="5"></textarea>
                    </label>
                  </div>
                  <div class="language-fields">
                    <label>
                      <span data-i18n="imprintDe">Impressum (DE)</span>
                      <textarea id="imprintDeInput" rows="5"></textarea>
                    </label>
                    <label>
                      <span data-i18n="imprintEn">Imprint (EN)</span>
                      <textarea id="imprintEnInput" rows="5"></textarea>
                    </label>
                  </div>
                </div>
                <button class="primary-button" type="submit" data-i18n="saveInfo">Save information</button>
              </form>
            </section>

            <section class="panel admin-panel-section hidden" data-admin-section="categories">
              <h2 data-i18n="addCategory">Add category</h2>
              <form id="categoryForm" class="stacked-form">
                <div class="language-fields">
                  <input id="categoryNameDeInput" placeholder="Kategorie (DE)" data-i18n-placeholder="categoryNameDe" required />
                  <input id="categoryNameEnInput" placeholder="Category (EN)" data-i18n-placeholder="categoryNameEn" required />
                </div>
                <button class="primary-button" type="submit" data-i18n="add">Add</button>
              </form>
              <div class="admin-list" id="categoryAdminList"></div>
            </section>

            <section class="panel admin-panel-section hidden" data-admin-section="items">
              <h2 data-i18n="addMenuItem">Add menu item</h2>
              <form id="itemForm" class="stacked-form">
                <label>
                  <span data-i18n="category">Category</span>
                  <select id="itemCategoryInput" required></select>
                </label>
                <div class="language-fields">
                  <label>
                    <span data-i18n="itemNameDe">Item name (DE)</span>
                    <input id="itemNameDeInput" required />
                  </label>
                  <label>
                    <span data-i18n="itemNameEn">Item name (EN)</span>
                    <input id="itemNameEnInput" required />
                  </label>
                </div>
                <div class="language-fields">
                  <label>
                    <span data-i18n="descriptionDe">Description (DE)</span>
                    <textarea id="itemDescriptionDeInput" rows="3"></textarea>
                  </label>
                  <label>
                    <span data-i18n="descriptionEn">Description (EN)</span>
                    <textarea id="itemDescriptionEnInput" rows="3"></textarea>
                  </label>
                </div>
                <label>
                  <span data-i18n="priceEuro">Price (€)</span>
                  <input id="itemPriceInput" inputmode="decimal" placeholder="12,90" required />
                </label>
                <label>
                  <span data-i18n="itemPhoto">Item photo</span>
                  <small class="upload-hint" data-i18n="itemPhotoHint">Recommended: 1200 x 900 px, JPG/PNG, horizontal food photo. It will be shown large in the popup.</small>
                  <input id="itemImageInput" type="file" accept="image/*" />
                </label>
                <div class="form-actions">
                  <button class="primary-button" id="itemSubmitButton" type="submit" data-i18n="addItem">Add item</button>
                  <button class="secondary-button hidden" id="cancelItemEditButton" type="button" data-i18n="cancel">Cancel</button>
                </div>
              </form>
            </section>

            <section class="panel wide admin-panel-section hidden" data-admin-section="items">
              <h2 data-i18n="currentItems">Current items</h2>
              <div class="admin-list product-list" id="itemAdminList"></div>
            </section>
          </div>
        </div>
      </section>

      <section class="platform-view hidden" id="platformView">
        <div class="dashboard-header">
          <div>
            <p data-i18n="platform">Platform</p>
            <h1 data-i18n="controlPanel">Control panel</h1>
          </div>
          <button class="ghost-button" id="platformLogoutButton" type="button" data-i18n="logout">Log out</button>
        </div>

        <nav class="admin-menu platform-menu" id="platformMenu" aria-label="Platform menu">
          <button type="button" class="active" data-platform-tab="dashboard" data-i18n="dashboard">Dashboard</button>
          <button type="button" data-platform-tab="users" data-i18n="userManagement">User management</button>
        </nav>

        <section class="platform-section" data-platform-section="dashboard">
          <div class="panel platform-dashboard-panel">
            <h2 data-i18n="visitorStats">Visitor statistics</h2>
            <div class="stats-grid platform-stats-grid" id="platformVisitorStats"></div>
          </div>

          <div class="panel platform-dashboard-panel">
            <h2 data-i18n="dashboard">Dashboard</h2>
            <div class="stats-grid platform-stats-grid" id="platformDashboardStats"></div>
            <div class="expiring-license-list hidden" id="expiringLicenseList"></div>
          </div>

          <div class="panel platform-dashboard-panel">
            <h2 data-i18n="restaurantVisitStats">Restaurant visit statistics</h2>
            <div class="platform-ranking-list" id="platformRankingList"></div>
          </div>
        </section>

        <section class="platform-section hidden" data-platform-section="users">
          <button class="primary-button add-user-button" id="showCreateRestaurantButton" type="button" data-i18n="addUser">Add user</button>

          <section class="panel hidden" id="createRestaurantPanel">
            <h2 data-i18n="createRestaurantAccount">Create restaurant account</h2>
            <form id="platformRestaurantForm" class="stacked-form">
              <label>
                <span data-i18n="restaurantNameLabel">Restaurant name</span>
                <input id="platformRestaurantNameInput" placeholder="Luna Bistro" required />
              </label>
              <label>
                <span data-i18n="urlName">URL name</span>
                <input id="platformSlugInput" placeholder="luna-bistro" required />
              </label>
              <div class="language-fields">
                <label>
                  <span data-i18n="username">Username</span>
                  <input id="platformUsernameInput" autocomplete="off" required />
                </label>
                <label>
                  <span data-i18n="password">Password</span>
                  <input id="platformPasswordInput" autocomplete="new-password" required />
                </label>
              </div>
              <div class="language-fields">
                <label>
                  <span data-i18n="licenseStart">License start</span>
                  <input id="platformLicenseStartInput" type="date" required />
                </label>
                <label>
                  <span data-i18n="licenseEnd">License end</span>
                  <input id="platformLicenseEndInput" type="date" required />
                </label>
              </div>
              <button class="primary-button" type="submit" data-i18n="createAccount">Create account</button>
              <p class="hint"><span data-i18n="liveDomainFormat">Live domain format</span>: <strong>domain.com/restaurant-name</strong></p>
            </form>
          </section>

          <section class="panel wide">
            <h2 data-i18n="restaurants">Restaurants</h2>
            <div class="platform-list" id="platformRestaurantList"></div>
          </section>
        </section>
      </section>
    </main>
  </div>
  <div class="status-message hidden" id="statusMessage" role="status" aria-live="polite"></div>

  <div class="modal-backdrop hidden" id="confirmModal" role="dialog" aria-modal="true" aria-labelledby="confirmTitle">
    <div class="confirm-dialog">
      <h2 id="confirmTitle" data-i18n="confirmDeleteTitle">Delete item?</h2>
      <p id="confirmMessage">This action needs confirmation.</p>
      <div class="confirm-actions">
        <button class="ghost-button" id="cancelDeleteButton" type="button" data-i18n="cancel">Cancel</button>
        <button class="danger-button" id="confirmDeleteButton" type="button" data-i18n="deleteConfirm">Delete</button>
      </div>
    </div>
  </div>

  <div class="menu-item-backdrop hidden" id="menuItemModal" role="dialog" aria-modal="true" aria-labelledby="menuItemModalTitle">
    <article class="menu-item-dialog" id="menuItemDialog"></article>
  </div>
`;

export default function App() {
  useEffect(() => {
    import("../app.js").catch((error) => {
      document.documentElement.dataset.appError = String(error);
    });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: appMarkup }} />;
}
