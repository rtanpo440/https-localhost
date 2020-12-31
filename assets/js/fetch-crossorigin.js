/*!
 * fetch-crossorigin.js
 * (C) 2020 rtanpo440
 */

{
    /**
     * @param {RequestInfo} input
     * @param {RequestInit} init
     * @returns {Response}
     */
    self.fetch.crossorigin = function (input, init) {
        const prefix = 'https://cors-anywhere.herokuapp.com/';
        let request;
        if (input instanceof Request) {
            request = new Request(prefix + input.url, {
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
                mode: input.mode,
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
            request = new Request(prefix + input, init);
        }
        return self.fetch(request);
    }
}
