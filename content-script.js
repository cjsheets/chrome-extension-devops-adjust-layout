function moveBoltCard() {
  // Bolt cards are pinned to the top. Sometimes there are more than one.
  const boltCards = document.querySelectorAll(".bolt-table-card");

  boltCards.forEach(card => {
    // Look for status indicators
    const isTargetCard = card.querySelectorAll('.bolt-status').length
    if (isTargetCard) {
        const reviewersPane = document.querySelector('.repos-overview-right-pane').firstChild;
        reviewersPane.before(card);
    }
  })
}

const pullRequestUrlRegex = /pullrequest\/[0-9]/;

// Handle URL changes
chrome.runtime.onMessage.addListener(function (req) {
  if (req.url && req.url.match(pullRequestUrlRegex)) moveBoltCard();
});

// Handle onLoad
if (window.location.href.match(pullRequestUrlRegex)) moveBoltCard();