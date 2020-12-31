/*!
 * Service Worker
 */

importScripts('./assets/js/fetch-localhost.js');

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);
    const hostnames = [
        'localhost',
        'https-localhost.ml',
    ];
    const response = (hostnames.includes(url.hostname)) ? fetch.localhost(request) : fetch(request);
    event.respondWith(response);
});
