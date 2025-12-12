const odsList = [
  { img: './img/ods1.png', titulo: 'Erradicação da Pobreza', desc: 'Acabar com a pobreza em todas as suas formas.' },
  { img: './img/ods2.png', titulo: 'Fome Zero', desc: 'Garantir segurança alimentar e agricultura sustentável.' },
  { img: './img/ods3.png', titulo: 'Saúde e Bem-Estar', desc: 'Assegurar uma vida saudável e promover o bem-estar.' },
  { img: './img/ods4.png', titulo: 'Educação de Qualidade', desc: 'Garantir educação inclusiva e equitativa de qualidade.' },
  { img: './img/ods5.png', titulo: 'Igualdade de Gênero', desc: 'Alcançar a igualdade de gênero e empoderar todas as mulheres.' },
  { img: './img/ods6.png', titulo: 'Água Potável e Saneamento', desc: 'Garantir disponibilidade e manejo sustentável da água.' },
  { img: './img/ods7.png', titulo: 'Energia Acessível e Limpa', desc: 'Assegurar acesso à energia confiável, sustentável e moderna.' },
  { img: './img/ods8.png', titulo: 'Trabalho Decente e Crescimento Econômico', desc: 'Promover crescimento econômico sustentado e emprego pleno.' },
  { img: './img/ods9.png', titulo: 'Indústria, Inovação e Infraestrutura', desc: 'Construir infraestrutura resiliente e promover a industrialização.' },
  { img: './img/ods10.png', titulo: 'Redução das Desigualdades', desc: 'Reduzir a desigualdade dentro dos países e entre eles.' },
  { img: './img/ods11.png', titulo: 'Cidades e Comunidades Sustentáveis', desc: 'Tornar as cidades inclusivas, seguras e sustentáveis.' },
  { img: './img/ods12.png', titulo: 'Consumo e Produção Responsáveis', desc: 'Assegurar padrões de consumo e produção sustentáveis.' },
  { img: './img/ods13.png', titulo: 'Ação Contra a Mudança Global do Clima', desc: 'Tomar medidas urgentes para combater a mudança climática.' },
  { img: './img/ods14.png', titulo: 'Vida na Água', desc: 'Conservar e usar de forma sustentável os oceanos, mares e recursos marinhos.' },
  { img: './img/ods15.png', titulo: 'Vida Terrestre', desc: 'Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres.' },
  { img: './img/ods16.png', titulo: 'Paz, Justiça e Instituições Eficazes', desc: 'Promover inclusão e pacificidade social para o desenvolvimento sustentável.' },
  { img: './img/ods17.png', titulo: 'Parcerias Meios de Implementação', desc: 'revitalizar a parceria global para desenvolvimento sustentável.' },
  { img: './img/ods18.png', titulo:'   ', desc:'  '}
  
];

// Pega o container no HTML
const container = document.getElementById('ods-container');

// Cria dinamicamente os cards
odsList.forEach(ods => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-flip-container');
  //adciona o evento de clique para virar
  cardContainer.onclick = () => cardContainer.classList.toggle('flipped');

  cardContainer.innerHTML = `
    <div class="card">
      <div class="front">
        <img src="${ods.img}" alt="${ods.titulo}">
      </div>
      <div class="back">
        <h3>${ods.titulo}</h3>
        <p>${ods.desc}</p>
      </div>
    </div>
  `;

  container.appendChild(cardContainer);
});