

// Language Select

const btn = document.getElementById('language');
const box = document.getElementById('lang-select');

function toggleLang() {
  
    // Pegar as coordenadas do botão
    const rect = btn.getBoundingClientRect();
    
    // Posicionar a box logo abaixo do botão
    box.style.top = rect.bottom + 'px'; // posicionar abaixo
    box.style.left = rect.left + 'px';  // alinhar à esquerda do botão
  
    if (box.classList.contains('lang-hidden')) {
      box.classList.remove('lang-hidden');
      box.style.visibility = 'visbile';
      box.style.height = '80px';
    } else {
      box.classList.add('lang-hidden');
      box.style.visibility = 'hidden;';
      box.style.height = '0';
    }
  }
  
  // Função para detectar cliques fora da box
  document.addEventListener('click', function(event) {
    const box = document.getElementById('lang-select');
    const btn = document.getElementById('language');
    
    // Verifica se o clique foi fora da box e fora do botão
    if (!box.contains(event.target) && !btn.contains(event.target)) {
      box.classList.add('lang-hidden');
      box.style.visibility = 'hidden;';
      box.style.height = '0';
    }
  });

// Lang-select

const title = document.getElementById('content-title');
const subtitle = document.getElementsByClassName('content-subtitle');
var paragraph = document.getElementsByClassName('paragraph');

function langSelect(lang){
    if (lang == 'pt'){

      title.textContent = '🌱✈️ Entenda o que é turismo sustentável';
      paragraph[0].textContent = 'Neste documento você irá aprender sobre o que é turismo sustentável e como aplicá-lo em suas viagens.';
      subtitle[0].textContent = 'Introdução';
      paragraph[1].textContent = `Atualmente, um dos objetivos mais pertinentes da atualidade, como visto nas OD’s, é que o planeta Terra seja mais sustentável em conjunto com a sobrevivência dos seres humanos, e dentre das maneiras mais vistas que contribuem com ambas as partes, temos o turismo sustentável juntamente com o conhecimento de diversas culturas através dos passeios. Juntos, contribuem para um divertimento sem prejudicar os ecossistemas.`;
      subtitle[1].textContent = 'O que é turismo sustentável?';
      paragraph[2].textContent = 'O turismo sustentável é um modelo de turismo que busca minimizar os impactos negativos sobre o meio ambiente, a cultura local e a economia, promovendo a conservação dos recursos naturais e a valorização das comunidades locais. Ele incentiva práticas que respeitam o meio ambiente, como a preservação da biodiversidade e o uso responsável de recursos naturais. Já o turismo cultural se concentra na promoção e valorização da cultura, tradições, história e modos de vida das comunidades locais. Esse tipo de turismo permite que os visitantes conheçam e interajam com a cultura local, promovendo o intercâmbio cultural e a preservação de patrimônios imateriais.';

    } else if (lang == 'en'){

      title.textContent = `🌱✈️ Get what 'EcoTurism' is`;
      paragraph[0].textContent = `In this document, you'll learn about what EcoTurism is and how to apply it to your trips.`;
      subtitle[0].textContent = 'Introduction';
      paragraph[1].textContent = `Currently, one of the most pertinent objectives today, as seen in the OD's, is for planet Earth to be more sustainable together with the survival of human beings, and among the most seen ways that contribute to both parties, we have sustainable tourism together with knowledge of different cultures through tours. Together, they contribute to fun without harming ecosystems.`;
      subtitle[1].textContent = 'What is EcoTurism?';
      paragraph[2].textContent = 'Sustainable tourism is a tourism model that seeks to minimize negative impacts on the environment, local culture and the economy, promoting the conservation of natural resources and the appreciation of local communities. It encourages practices that respect the environment, such as preserving biodiversity and the responsible use of natural resources. Cultural tourism focuses on promoting and valuing the culture, traditions, history and ways of life of local communities. This type of tourism allows visitors to discover and interact with local culture, promoting cultural exchange and the preservation of intangible heritage.';

    } else {}
    box.classList.add('lang-hidden');
    box.style.visibility = 'hidden;';
    box.style.height = '0';
}

langSelect('pt');