chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  const { url } = changeInfo;
  if (url) {
    chrome.tabs.sendMessage(tabId, { url });
  }
});
