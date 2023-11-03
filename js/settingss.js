var tab = localStorage.getItem("tab");

if (tab) {
  try {
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

if (tabData.title) {
  document.getElementById("title").value = tabData.title;
}
if (tabData.icon) {
  document.getElementById("icon").value = tabData.icon;
}

var settingsDefaultTab = {
  title: "PLEXILE ARCADE | Settings",
  icon: "https://cdn.glitch.global/5c2cb934-0c5a-4e22-9abd-1591c7cf6a9c/6e5e1dcc-f1f3-492d-a396-f3d7077ee68f.image-fotor-bg-remover-20230806125936%20(1).png?v=1691387992370",
};

function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (icon) {
    tabData.icon = icon;
  } else {
    delete tabData.icon;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}


function resetTab() {
  document.title = settingsDefaultTab.title;
  document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
}

document.addEventListener('DOMContentLoaded', function () {
  const urlButtons = document.querySelectorAll('.url-button');

  urlButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      urlButtons.forEach(function (btn) {
        btn.classList.remove('selected-url');
      });

      this.classList.add('selected-url');

      const selectedUrl = this.getAttribute('data-url');
      localStorage.setItem('selectedUrl', selectedUrl);
    });
  });
});

