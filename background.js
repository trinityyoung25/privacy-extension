const blockList = [
  "doubleclick.net",
  "google-analytics.com",
  "facebook.net",
  "adnxs.com",
  "scorecardresearch.com" 
];

const newRules = [];
blockList.forEach((filter, i) => {
  newRules.push({
    id: i + 1,
    priority: 1,
    action: { type: "block" },
    condition: {
      urlFilter: filter,
      resourceTypes: ["script", "image", "sub_frame"]
    }
  });
});

const oldRules = newRules.map(rule => rule.id);

chrome.declarativeNetRequest.updateDynamicRules({
  addRules: newRules,
  removeRuleIds: oldRules
});

chrome.declarativeNetRequest.setExtensionActionOptions({
  displayActionCountAsBadgeText: true
});
