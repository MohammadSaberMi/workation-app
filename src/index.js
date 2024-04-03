document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleBtn');
  const contentBlock = document.getElementById('contentBlock');
  const toggleBtn1 = document.getElementById('toggleBtn1');
  const contentBlock1 = document.getElementById('contentBlock1');
  toggleBtn.addEventListener('click', function () {
    contentBlock.classList.toggle('hidden');
  });
  toggleBtn1.addEventListener('click', function () {
    contentBlock1.classList.toggle('hidden');
  });
});
