// Function to remove parent element
function removeParent(element, levels) {
    let parent = element;
    for (let i = 0; i < levels; i++) {
        if (parent) {
            parent = parent.parentElement;
        }
    }
    if (parent) {
        parent.remove();
    }
}

// Function for processing nodes
function processNode(node) {

    const suggestCounter = node.getAttribute("data-suggest-counter");
    if (suggestCounter && suggestCounter.startsWith("//yandex.ru/clck/safeclick")) {
        node.remove();
        return;
    }

    if (node.classList.contains("MMSidebar-Card_bottomAdv")) {
        node.remove();
        return;
    }

    const id = node.getAttribute("id");
    if (id === "search-result-aside" || id === "click_area") {
        node.remove();
        return;
    }

    if (node.classList.contains("gcydtGWxoi")) {
        removeParent(node, 3);
        return;
    }

    const fullscreenElementName = node.getAttribute('data-fullscreen-element-name');
    if (fullscreenElementName === 'close-btn') {

        document.body.style.overflow = '';
        removeParent(node, 4);
        return;
    }

    if (node.tagName === 'IFRAME' && node.src && node.src.startsWith('https://yastatic.net/safeframe-bundles/')) {
        removeParent(node, 7);
    }
}

// Function to process all nodes matching the criteria
function processMatchingNodes() {
    // Finding all nodes that meet the criteria
    const nodesToProcess = [
        ...document.querySelectorAll('[data-suggest-counter^="//yandex.ru/clck/safeclick"], .MMSidebar-Card_bottomAdv, #search-result-aside, #click_area, .gcydtGWxoi, [data-fullscreen-element-name="close-btn"], iframe[src^="https://yastatic.net/safeframe-bundles/"]')
    ];

    // Processing the found nodes
    nodesToProcess.forEach(node => processNode(node));
}

// Waiting for the page to load completely
window.addEventListener('load', () => {
    console.log("Страница загружена");
    processMatchingNodes(); // We process existing nodes

    // We start checking new nodes every 500 milliseconds
    setInterval(processMatchingNodes, 500);
});
