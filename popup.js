document.getElementById('clickMe').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const url = tabs[0].url;
    chrome.tabs.executeScript({
      code: 'document.documentElement.outerHTML;'
    }, function(result) {
      const html = result[0];
      console.log('HTML content:', html);
      chrome.runtime.sendMessage({ html: html });
    });
  });
});