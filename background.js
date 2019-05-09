chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.hulu.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
    });
