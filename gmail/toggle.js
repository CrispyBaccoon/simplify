const toggleOnTitle = 'Enable Simplify';
const toggleOffTitle = 'Temporarily disable Simplify';

const toggledOnIcon = {
    16: "img/icon16.png",
    24: "img/icon24.png",
    32: "img/icon32.png",
    48: "img/icon48.png",
    128: "img/icon128.png",
    256: "img/icon256.png"
}

const toggledOffIcon = {
    16: "img/icon16_off.png",
    24: "img/icon24_off.png",
    32: "img/icon32_off.png",
    48: "img/icon48_off.png",
    128: "img/icon128_off.png",
    256: "img/icon256_off.png"
}

function updatePageAction(tabId, toggled) {
    chrome.pageAction.setTitle({
        tabId: tabId,
        title: toggled ? toggleOffTitle : toggleOnTitle
    });

    chrome.pageAction.setIcon({
        tabId: tabId,
        path: toggled ? toggledOnIcon : toggledOffIcon
    });
}

chrome.runtime.onMessage.addListener(({ type }, sender, _) => {
    if (type == 'activate_page_action') {
        updatePageAction(sender.tab.id, true);
        chrome.pageAction.show(sender.tab.id);
    }
});

chrome.pageAction.onClicked.addListener(async (tab) => {
    chrome.tabs.sendMessage(tab.id, { action: 'toggle_simpl' }, (res) => {
        updatePageAction(tab.id, res.toggled);
    });
});
