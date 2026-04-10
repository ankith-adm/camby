
function buildGrid(containerId, data, bgColor) {
  const grid = document.getElementById(containerId);
  data.forEach(([name, url]) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.style.cssText = `width:100%;padding:11px;background:${bgColor};color:white;border:none;border-radius:7px;cursor:pointer;font-size:13px;`;
    a.appendChild(btn);
    grid.appendChild(a);
  });
}

buildGrid('vendor-grid',  vendorData, '#007BFF');
buildGrid('jobs-grid',    jobsData,   '#28A745');
buildGrid('li-grid',      liData,     '#0A66C2');

function showPage(which) {
  ['page1','page-vendor','page-jobs','page-linkedin'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById('page-' + which).style.display = 'block';
}

function goBack() {
  ['page-vendor','page-jobs','page-linkedin'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById('page1').style.display = 'flex';
}
