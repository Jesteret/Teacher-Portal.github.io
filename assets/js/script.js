console.warn(
  "%cNote!",
  "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "If you want to add 3kh0s games to your site, please reach out at his email: echo-the-coder@tuta.io\nPlease do not just add them without asking him first! Thank you!"
);

function script(text) {
  console.log(
    "%cScript Injection",
    "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px",
    text
  );
}

// ====================================
// SCRIPT INJECTION
// ====================================

var gaenabled = window.localStorage.getItem("ga");
if (gaenabled == "false") {
  script("Skipped GA injection because it is disabled by the user.");
} else {
  const gascript = document.createElement("script");
  gascript.setAttribute("async", "");
  gascript.setAttribute(
    "src",
    "https://www.googletagmanager.com/gtag/js?id=G-N0LG27M8L8"
  );
  const inlinegascript = document.createElement("script");
  inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-N0LG27M8L8');`;
  document.head.append(gascript, inlinegascript);
  script("Injected script 1/1");
}
// Collect Tab Cloak data from local storage
var tab = localStorage.getItem("tab");
if (tab) {
  try {
    // Parse the data, it is in JSON
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

// Set the Tab title if the Tab cloak data is there
if (tabData.title) {
  document.title = tabData.title;
}

// Set the Tab icon if the Tab cloak data is there
if (tabData.icon) {
  document.querySelector('link[rel="icon"]').href = tabData.icon;
}