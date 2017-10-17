/**
 * Get and send oauth tokens from query string.
 */

// The ID of the extension we want to talk to.
var editorExtensionId = "efmhmgncpkobpfffneaaehddmimndnpd";



chrome.runtime.sendMessage(editorExtensionId, {type: 'auth', session: window.location.search.substr(1)}, function(response) {
	window.open('', '_self', '');
	window.close();
});
