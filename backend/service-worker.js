self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    // You can perform install tasks here (e.g., caching files)
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
});

self.addEventListener('fetch', (event) => {
    // Handle fetch events, such as caching strategies
    console.log('Fetching:', event.request.url);
});
