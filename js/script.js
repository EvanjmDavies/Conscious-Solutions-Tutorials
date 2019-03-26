// AJAX request ////////////////////////
function processRequest(url, target) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      document.getElementById(target).innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

function sendAJAX(url, target) {
  document.querySelector('.' + target + '-trigger').style.display = 'none'; //show more
  document.querySelector('.' + target + '-triggerTxt').style.display = 'none'; //show more
  processRequest(url, target)
}

// Add Nav Bar Animation ///////////////////
function openSearch() {
  document.querySelector('.searchBar').classList.add('animate');
  document.querySelector('#openSearch').classList.add('disappear');
  document.getElementById('input').focus();
  document.querySelector('#page-content').classList.add('display-content');
  document.querySelector('#results').classList.add('display-results');
}
// Remove Nav Bar Animation
function closeSearch() {
  document.querySelector('.searchBar').classList.remove('animate');
  document.querySelector('#openSearch').classList.remove('disappear');
  document.querySelector('#page-content').classList.remove('display-content');
  document.querySelector('#results').classList.remove('display-results');
}

// Toggle Transcript on video ///////////////////
function openTranscript() {
  document.querySelector('.transcript').classList.toggle('openTranscript');
  document.querySelector('.transcript-toggle').classList.toggle('arrowDown');
}

// Banner Animation Javascript ///////////////////
let bannerStatus = 3;
let bannerTimer = 4500;

window.onload = function() {
  bannerLoop();
}

// To interval
let startBannerLoop = setInterval(function() {
  bannerLoop();
}, bannerTimer);

// Animation stops on mouse hover
document.getElementById("banner").onmouseenter = function() {
  clearInterval(startBannerLoop);
}

// Animation starts on mouse off
document.getElementById("banner").onmouseleave = function() {
  startBannerLoop = setInterval(function() {
    bannerLoop();
  }, bannerTimer);
}

// Moves to previous slide
document.getElementById("imgBanBtn-prev").onclick = function() {
  if(bannerStatus === 1) {
    bannerStatus = 1;
  } else if (bannerStatus === 2) {
    bannerStatus = 2;
  } else if (bannerStatus === 3) {
    bannerStatus = 3;
  }
  bannerLoop2();
}

// Moves to next slide
document.getElementById("imgBanBtn-next").onclick = function() {
  bannerLoop();
}
// Move next Javascript
function bannerLoop() {
  if (bannerStatus === 1) { //purple
    document.getElementById("imgBan2").style.opacity = "0";
    setTimeout(function() {
      document.getElementById('imgBan1').style.right = "0%";
      document.getElementById('imgBan1').style.zIndex = "2";
      document.getElementById('imgBan2').style.right = "-100%"; // to right
      document.getElementById('imgBan2').style.zIndex = "3";
      document.getElementById('imgBan3').style.right = "100%"; // to left
      document.getElementById('imgBan3').style.zIndex = "1";
    }, 500);
    setTimeout(function() {
      document.getElementById('imgBan2').style.opacity = "1";
    }, 1000);
    bannerStatus = 2; //orange
  }

  else if (bannerStatus === 2) { //orange
    document.getElementById("imgBan3").style.opacity = "0";
    setTimeout(function() {
      document.getElementById('imgBan2').style.right = "0%";
      document.getElementById('imgBan2').style.zIndex = "2";
      document.getElementById('imgBan3').style.right = "-100%"; // to right
      document.getElementById('imgBan3').style.zIndex = "3";
      document.getElementById('imgBan1').style.right = "100%"; // to left
      document.getElementById('imgBan1').style.zIndex = "1";
    }, 500);
    setTimeout(function() {
      document.getElementById('imgBan3').style.opacity = "1";
    }, 1000);
    bannerStatus = 3; //pink
  }

  else if (bannerStatus === 3) { //pink
    document.getElementById("imgBan1").style.opacity = "0";
    setTimeout(function() {
      document.getElementById('imgBan3').style.right = "0%";
      document.getElementById('imgBan3').style.zIndex = "2";
      document.getElementById('imgBan1').style.right = "-100%"; // to right
      document.getElementById('imgBan1').style.zIndex = "3";
      document.getElementById('imgBan2').style.right = "100%"; // to left
      document.getElementById('imgBan2').style.zIndex = "1";
    }, 500);
    setTimeout(function() {
      document.getElementById('imgBan1').style.opacity = "1";
    }, 1000);
    bannerStatus = 1; // purple
  }
};

//Move Back Javascript
function bannerLoop2() {
  if (bannerStatus === 1) { //purple > pink
    document.getElementById("imgBan1").style.opacity = "0";
    setTimeout(function() {
      document.getElementById('imgBan2').style.right = "0%";
      document.getElementById('imgBan2').style.zIndex = "2";
      document.getElementById('imgBan3').style.right = "-100%"; // to right
      document.getElementById('imgBan3').style.zIndex = "3";
      document.getElementById('imgBan1').style.right = "100%"; // to left
      document.getElementById('imgBan1').style.zIndex = "1";
    }, 500);
    setTimeout(function() {
      document.getElementById('imgBan1').style.opacity = "1";
    }, 1000);
    bannerStatus = 3; //pink
  }

  else if (bannerStatus === 3) { //pink > Orange
    document.getElementById("imgBan3").style.opacity = "0";
    setTimeout(function() {
      document.getElementById('imgBan1').style.right = "0%";
      document.getElementById('imgBan1').style.zIndex = "2";
      document.getElementById('imgBan2').style.right = "-100%"; // to right
      document.getElementById('imgBan2').style.zIndex = "3";
      document.getElementById('imgBan3').style.right = "100%"; // to left
      document.getElementById('imgBan3').style.zIndex = "1";
    }, 500);
    setTimeout(function() {
      document.getElementById('imgBan3').style.opacity = "1";
    }, 1000);
    bannerStatus = 2; //orange
  }

  else if (bannerStatus === 2) { //Orange > Purple
    document.getElementById("imgBan2").style.opacity = "0";
    setTimeout(function() {
      document.getElementById('imgBan3').style.right = "0%";
      document.getElementById('imgBan3').style.zIndex = "2";
      document.getElementById('imgBan1').style.right = "-100%"; // to right
      document.getElementById('imgBan1').style.zIndex = "3";
      document.getElementById('imgBan2').style.right = "100%"; // to left
      document.getElementById('imgBan2').style.zIndex = "1";
    }, 500);
    setTimeout(function() {
      document.getElementById('imgBan2').style.opacity = "1";
    }, 1000);
    bannerStatus = 1; // purple
  }
};
