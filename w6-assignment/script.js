var tabs = Array.from(document.querySelectorAll('nav a'));
var p = document.querySelector('#editor p');
var filesSummary = document.querySelector('#files summary');
var stuffSummary = document.querySelector('#stuff summary');
var toggleButton = document.querySelector('#toggle');
var tray = document.querySelector('.tray');

toggleButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  tray.classList.toggle('closed');
}

tabs.forEach(function(tab) {
  tab.addEventListener('click', selectTab);
});

filesSummary.addEventListener('click', toggleFiles);
stuffSummary.addEventListener('click', toggleStuff);

function selectTab(e) {
  tabs.forEach(function(tab) {
    tab.classList.remove('active');
  });
  e.target.classList.add('active');

  p.innerHTML = '<a href="#">SE 137</a> > <a href="#">W6</a> > <a href="#">Homework</a> <a href="#">>' + e.target.textContent + '</a>';
}

