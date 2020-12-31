/*!
 * Loads html
 */

(async () => {
    await navigator.serviceWorker.register('./service-worker.js', {
        scope: '/',
    });

    const request = new Request(location.href);
    const response = await fetch(request);
    const source = await response.text();
    const parser = new DOMParser();
    const localDocument = parser.parseFromString(source, 'text/html');
    const currentDocument = document;
    currentDocument.documentElement.innerHTML = localDocument.documentElement.innerHTML;
})();
