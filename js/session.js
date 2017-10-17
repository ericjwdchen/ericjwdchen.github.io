/**
 * Get and send oauth tokens from query string.
 */

 chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
   console.log(response.farewell);
 });
