// Service Worker functionality
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  // You can perform install tasks here (e.g., caching files)
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
});

self.addEventListener("fetch", (event) => {
  // Handle fetch events, such as caching strategies
  console.log("Fetching:", event.request.url);
});

// Background script functionality
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "blinkReminder") {
    showNotification(
      "Time to Blink!', 'Don't forget to blink your eyes to protect them!'"
    );
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startNotifications") {
    startNotifications(request.time);
    sendResponse({ status: "Notifications started" });
  } else if (request.action === "stopNotifications") {
    stopNotifications();
    sendResponse({ status: "Notifications stopped" });
  }
  return true; // Keeps the message channel open for async response
});

function startNotifications(time) {
  chrome.alarms.clear("blinkReminder");
  chrome.alarms.create("blinkReminder", { periodInMinutes: parseInt(time) });
  showNotification(
    "Blink Reminder Started",
    "You will be reminded to blink every " + time + " minutes."
  );
}

function stopNotifications() {
  chrome.alarms.clear("blinkReminder");
  stopNotification();
}

function showNotification(title, message) {
  chrome.notifications.create(
    {
      type: "basic",
      iconUrl: chrome.runtime.getURL("logo.png"),
      title: "Blink Reminder ",
      message: "Blink your eye 20 FEET AWAY!!",
      priority: 2,
    },
    (notificationId) => {
      if (chrome.runtime.lastError) {
        console.error(
          "Notification error: ', chrome.runtime.lastError.message"
        );
      } else {
        console.log("Notification created with ID: ", notificationId);
      }
    }
  );
}
function stopNotification(title, message) {
  chrome.notifications.create(
    {
      type: "basic",
      iconUrl: chrome.runtime.getURL("logo.png"),
      title: "Update",
      message: "Blink reminder is stopped",
      priority: 2,
    },
    (notificationId) => {
      if (chrome.runtime.lastError) {
        console.error(
          "Notification error: ', chrome.runtime.lastError.message"
        );
      } else {
        console.log("Notification created with ID: ", notificationId);
      }
    }
  );
}
