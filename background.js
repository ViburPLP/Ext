// chrome.action.onClicked.addListener((tab) => {
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//       const url = tabs[0].url;
//       chrome.tabs.executeScript({
//         code: 'document.documentElement.outerHTML;'
//       }, function(result) {
//         const html = result[0];
//         console.log('HTML content:', html);
//         // chrome.runtime.sendMessage(tabs[0].id, { html: html });
//       });
//     });
//   });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.html) {
      console.log('Received HTML content:', request.html);
    }
  });