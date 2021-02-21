const prUrlRegex = /pullrequest\/[0-9]/;

function moveBoltCard() {
  const boltCard = document.querySelector(".bolt-table-card");
  const reviewersPane = document.querySelector('.repos-overview-right-pane').firstChild;
  reviewersPane.before(boltCard);
}

// Handle URL changes
chrome.runtime.onMessage.addListener(function (req) {
  if (req.url && req.url.match(prUrlRegex)) moveBoltCard();
});

// Handle onLoad
if (window.location.href.match(prUrlRegex)) moveBoltCard();