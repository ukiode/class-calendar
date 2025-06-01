import { initCalendar } from "./calendar.js";
import { initEventCreateButtons } from "./event-create-button.js";
import { initEventDeleteDialog } from "./event-delete-dialog.js";
import { initEventDetailsDialog } from "./event-details-dialog.js";
import { initEventFormDialog } from "./event-form-dialog.js";
import { initEventStore } from "./event-store.js";
import { initHamburger } from "./hamburger.js";
import { initMiniCalendars } from "./mini-calendar.js";
import { initMobileSidebar } from "./mobile-sidebar.js";
import { initNav } from "./nav.js";
import { initNotifications } from "./notifications.js";
import { initViewSelect } from "./view-select.js";
import { initResponsive } from "./responsive.js";
import { initUrl } from "./url.js";
import { initSync } from "./sync.js";
import { supabase } from './supabase.js';

const eventStore = initEventStore();
initCalendar(eventStore);
initEventCreateButtons();
initEventDeleteDialog();
initEventDetailsDialog();
initEventFormDialog();
initHamburger();
initMiniCalendars();
initMobileSidebar();
initNav();
initNotifications();
initViewSelect();
initUrl();
initResponsive();
initSync();

async function updateAuthUI() {
  const authContainer = document.getElementById('auth-container');
  const user = await supabase.auth.getUser();

  // Clear the authContainer before updating
  authContainer.innerHTML = '';

  if (user.data.user) {
    // User is logged in
    const userEmail = user.data.user.email;

    authContainer.innerHTML = `
      <div class="welcome-container">
        <span class="welcome-message">Welcome, ${userEmail}!</span>
        <button class="button button--secondary button--lg" id="logout-button">Logout</button>
      </div>
    `;

    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', async () => {
      await supabase.auth.signOut();
      window.location.reload(); // Reload the page to update the UI
    });
  } else {
    // User is not logged in
    authContainer.innerHTML = `
      <button class="button button--primary button--lg" onclick="window.location.href='./pages/login.html'">Log In</button>
      <button class="button button--primary button--lg" onclick="window.location.href='./pages/register.html'">Register</button>
    `;
  }
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  updateAuthUI();
});