// Script by Pedro Kineipe

// Side-bar

var barbg = document.getElementById('menu-background');
var sidebar = document.getElementById('side-bar');
function openSidebar(){
    barbg.classList.add('barbg-visible');
    sidebar.classList.add('sidebar-visible');
    /* barbg.style.visibility = 'visible';
    barbg.style.opacity = '1';
    sidebar.style.width = '280px'; */
}
function closeSidebar(){
    barbg.classList.remove('barbg-visible');
    sidebar.classList.remove('sidebar-visible');
}

// References

var referencesbg = document.getElementById('references-bg');
function references(action){
  if(action == 'open'){
    referencesbg.style.visibility = 'visible';
    referencesbg.style.opacity = '1';
  } else {
    referencesbg.style.visibility = 'hidden';
    referencesbg.style.opacity = '0';
  }
}

// Modal

var modal = document.getElementById('about-background');
function openModal(){
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
}
function closeModal(){
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
}

// Theme-toggle

var theme = 'light';

function changeTheme(){
    if(theme == 'dark'){
      // Light theme settings
        document.documentElement.style.setProperty('--background1', '#efefef');
        document.documentElement.style.setProperty('--text', '#152f33');
        document.documentElement.style.setProperty('--text-rgb', '21, 47, 51,');
        document.documentElement.style.setProperty('--background2', '#c9cdd9');
        document.documentElement.style.setProperty('--quaternary', '#cccce1');
        theme = 'light';
        changeIcons(theme);
    } else {
      // Dark theme settings
        document.documentElement.style.setProperty('--background1', '#26282e');
        document.documentElement.style.setProperty('--text', '#efefef');
        document.documentElement.style.setProperty('--text-rgb', '239, 239, 239,');
        document.documentElement.style.setProperty('--background2', '#17191f');
        document.documentElement.style.setProperty('--quaternary', '#424652');
        theme = 'dark';
        changeIcons(theme);
    }
    iconToggle();
}


var icon = document.getElementById('theme-icon');

function iconToggle(){
    if (icon.classList.contains('bi-brightness-high-fill')) {
      icon.classList.remove('bi-brightness-high-fill');
      icon.classList.add('bi-moon-stars-fill');
    } else {
      icon.classList.remove('bi-moon-stars-fill');
      icon.classList.add('bi-brightness-high-fill');
    }
}

function changeIcons(setTheme){
    document.getElementById('main-logo').setAttribute('src', `./img/${setTheme}icons/etec.png`);
    document.getElementById('etec-logo').setAttribute('src', `./img/${setTheme}icons/etec.png`);
    document.getElementById('cps-logo').setAttribute('src', `./img/${setTheme}icons/cps.png`);
    document.getElementById('sp-logo').setAttribute('src', `./img/${setTheme}icons/sp.png`);
}

// Members list

var member = new Object();    
member['pfp'] = [
    'carolina.png',
    'gabriela.png',
    'guilherme.png',
    'isabelli.png',
    'kawany.png',
    'khiuane.png',
    'pedro.png'
];
member['name'] = [
    'Carolina Rodrigues Lins',
    'Gabriela Rodrigues da Costa Alves',
    'Guilherme Santos Coelho',
    'Isabelli de Miranda Soares',
    'Kawany Silva Santos',
    'Khiuane Carla Santos da Silva',
    'Pedro Kineipe'
];
member['age'] = [
  '16 anos',
  '17 anos',
  '16 anos',
  '16 anos',
  '16 anos',
  '17 anos',
  '17 anos'
]
member['city'] = [
  'Arujá/SP',
  'Arujá/SP',
  'Arujá/SP',
  'Santa Isabel/SP',
  'Arujá/SP',
  'Snata Isabel/SP',
  'Arujá/SP'
]

const container = document.getElementById('members');
for(let i = 0; i < member['name'].length; i++){
    container.insertAdjacentHTML('beforeend', `
        <li class="member" onclick="profile('${i}')">
            <img src="./img/pfps/${member.pfp[i]}" class="pfp"/>
            <p class="names"> ${member.name[i]} </p>
        </li>
    `);
}

// Profile modal

function profile(memberId){
  document.getElementById('profile').style.visibility = 'visible';
  document.getElementById('profile').style.opacity = '1';
  document.getElementById('member-name').innerHTML = member.name[memberId];
  document.getElementById('member-age').innerHTML = member.age[memberId];
  document.getElementById('member-city').innerHTML = member.city[memberId];
  document.getElementById('profile-banner').innerHTML = '<img src="./img/pfps/'+ member.pfp[memberId] +'" class="member-pfp">';
}
document.getElementById('profile').addEventListener('click', function(){
  document.getElementById('profile').style.visibility = 'hidden';
  document.getElementById('profile').style.opacity = '0';
});

// Footer

var footer = document.getElementById('info');

var information = new Object();
information['id'] = [
  1,
  2,
  3
];
information['header'] = [
  'Saiba mais',
  'Comunicado',
  'Agradecimentos'
];
information['text'] = [
  'Trabalho realizado para obtenção de menção da matéria \'Laboratório de Mediação e Intervenção Sociocultural\'.',
  'NÃO somos representantes do Centro Paula Souza e do Estado de São Paulo, somos estudantes da Etec de Santa Isabel.',
  'Agradecemos à professora Rubia Barbosa e a todos os envolvidos pela possibilidade de realização deste projeto'
];

for( let i = 0; i < information['id'].length; i++ ){
  footer.insertAdjacentHTML('beforeend', `
    <li class="info-item">
        <header class="info-header"> ${information.header[i]} </header>
        <p class="info-text"> ${information.text[i]} </p>
    </li>
  `);
}

// Top-bar effect

/* const mainArea = document.querySelector('#main-area'); // A seção onde ocorre a rolagem
mainArea.addEventListener('scroll', function () {

    const navbar = document.querySelector('#top-bar');
    const landingHeight = document.querySelector('#landing-page').offsetHeight;

    // Captura o valor de rolagem da main-area
    const scrollPosition = mainArea.scrollTop;

    console.log('scrollPosition:', scrollPosition); // Verifique o valor do scroll

    if (scrollPosition < landingHeight) {
        navbar.classList.add('transparent');
        navbar.classList.remove('solid');
        changeIcons('light')
    } else {
        navbar.classList.add('solid');
        navbar.classList.remove('transparent');
        changeIcons(theme)
    }
}); */

// Check

const mainArea = document.querySelector('#main-content');

mainArea.addEventListener('scroll', function(){

  var halfbg = document.querySelector('.checked .nav-item');

  const scrollTop = mainArea.scrollTop;
  const scrollHeight = mainArea.scrollHeight;
  const clientHeight = mainArea.clientHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  // const scrollLeft = 100 - scrollPercentage.toFixed(0);
  const scrollLeft = Number(scrollPercentage.toFixed(0)) + 1;

  console.log(`Scroll está em: ${scrollPercentage.toFixed(0)}%`);
  halfbg.style.background =  `linear-gradient(to right, var(--main-color) ${scrollPercentage.toFixed(0)}%, var(--main-color) ${scrollPercentage.toFixed(0)}%, var(--variant-color) ${scrollLeft}%`;
})

// Automatic functions

changeTheme();