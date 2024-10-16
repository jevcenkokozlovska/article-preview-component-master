const btnmob = document.getElementById('share-btn-mobile');
const btndesk = document.getElementById('share-btn-desktop');
const authorimgmob = document.getElementById('author-img-mobile');
const authorimgdesk = document.getElementById('author-img-desktop');
const authordatamob = document.getElementById('author-data-mobile');
const authordatadesk = document.getElementById('author-data-desktop');
const socialsmob = document.getElementById('socials-mobile');
const socialsdesk = document.getElementById('socials-desktop');
const authblock_mob = document.getElementById('article__author_mob');
const authblock_desk = document.getElementById('article__author_desk');
// Mobile Share Button
btnmob.addEventListener('click', function() {
  if ( socialsmob.style.display === 'none' || socialsdesk.style.display === 'none') {
    authorimgmob.style.display = 'none';
    authordatamob.style.display = 'none';
    socialsmob.style.display = 'flex';
    socialsdesk.style.display = 'flex';
    authblock_mob.style.backgroundColor = 'hsl(217, 19%, 35%)';
    authblock_mob.style.gridTemplateColumns = '60% 20%';

  }
  else {
    authorimgmob.style.display = 'block';
    authordatamob.style.display = 'block';
    socialsmob.style.display = 'none';
    socialsdesk.style.display = 'none';
    authblock_mob.style.backgroundColor = 'white';
    authblock_mob.style.gridTemplateColumns = ' 15% 65% 20%';
  }
});
// Desktop Share Button
btndesk.addEventListener('click', function() {
  if ( socialsmob.style.display === 'none' || socialsdesk.style.display === 'none') {
    authorimgmob.style.display = 'none';
    authordatamob.style.display = 'none';
    socialsmob.style.display = 'flex';
    socialsdesk.style.display = 'flex';
    authblock_mob.style.backgroundColor = 'hsl(217, 19%, 35%)';
    authblock_mob.style.gridTemplateColumns = '60% 20%';

  }
  else {
    authorimgmob.style.display = 'block';
    authordatamob.style.display = 'block';
    socialsmob.style.display = 'none';
    socialsdesk.style.display = 'none';
    authblock_mob.style.backgroundColor = 'white';
    authblock_mob.style.gridTemplateColumns = ' 15% 65% 20%';
  }
});