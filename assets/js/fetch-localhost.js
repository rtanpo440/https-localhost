/*!
 * fetch-localhost.js
 * (C) 2020 rtanpo440
 */

{
    /**
     * @param {RequestInfo} input
     * @param {RequestInit} init
     * @returns {Response}
     */
    self.fetch.localhost = function (input, init) {
        let url;
        if (input instanceof Request) {
            url = new URL(input.url);
        } else {
            url = new URL(input);
        }
        url.hostname = 'localhost';
        url.protocol = 'http:';
        let request;
        if (input instanceof Request) {
            request = new Request(url, {
                body: input.body,
                cache: input.cache,
                credentials: input.credentials,
                headers: {
                    ...input.headers,
                    'X-Requested-With': 'XMLHttpRequest',
                },
                integrity: input.integrity,
                keepalive: input.keepalive,
                method: input.method,
                redirect: input.redirect,
                referrer: input.referrer,
                referrerPolicy: input.referrerPolicy,
                signal: input.signal,
            });
        } else {
            const clonedInit = Object.assign({}, init);
            if (!clonedInit.headers) {
                clonedInit.headers = {};
            }
            clonedInit.headers['X-Requested-With'] = 'XMLHttpRequest';
            request = new Request(url, init);
        }
        return self.fetch(request);
    }
}
