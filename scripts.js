function showTab(tabName) {
  // Hide all tabs
  document.getElementById('skills-tab').style.display = 'none';
  document.getElementById('experience-tab').style.display = 'none';
  document.getElementById('education-tab').style.display = 'none';

  // Remove active-link class from all tab-links
  document.querySelectorAll('.tab-links').forEach(function (tab) {
    tab.classList.remove('active-link');
  });

  // Show the selected tab
  document.getElementById(tabName + '-tab').style.display = 'block';

  // Add active-link class to the clicked tab-link
  document.querySelector('.tab-links.' + tabName).classList.add('active-link');
}
