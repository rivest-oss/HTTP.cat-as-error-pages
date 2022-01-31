//var allErrors = [100, 101, 102, 200, 201, 202, 203, 204, 206, 207, 300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 429, 431, 444, 450, 451, 497, 498, 499, 500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 521, 523, 525, 599];
var allErrors = [
	400, 401, 402, 403, 404, 405,
	406, 407, 408, 409, 410, 411,
	412, 413, 414, 415, 416, 417,
	418, 420, 421, 422, 423, 424,
	425, 426, 429, 431, 444, 450,
	451, 497, 498, 499, 500, 501,
	502, 503, 504, 506, 507, 508,
	509, 510, 511, 521, 523, 525,
	599
];

chrome.webRequest.onCompleted.addListener((details) => {
	if(allErrors.includes(details.statusCode)) {
		chrome.tabs.update(details.tabId, {
			url: `${chrome.runtime.getURL(`index.html`)}?url=${encodeURIComponent(details.url)}&status=${encodeURIComponent(details.statusLine)}&statusCode=${encodeURIComponent(details.statusCode)}`,
		});
	}
}, {
	urls: [
		`<all_urls>`,
	],
	types: [
		`main_frame`,
	],
});