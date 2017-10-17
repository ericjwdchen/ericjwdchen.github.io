/**
 * Get and send oauth tokens from query string.
 */

// The ID of the extension we want to talk to.
var editorExtensionId = "abcdefghijklmnoabcdefhijklmnoabc";


chrome.management.getAll(function(items) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    console.log(item.id + " : (" + item.type + ") " + item.name);
  }
});
