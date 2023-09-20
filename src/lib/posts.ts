import {StaticImageData} from "next/image";

interface Image {
  url: StaticImageData,
  alt: string,
}

export interface PostItem {
  id: number,
  title: string,
  created: string,
  image: Image,
  summary: string,
  body: string,
  path: string,
}

interface PostsList extends Array<PostItem> {}

export const PostsArray: PostsList = [
  {
    id: 0,
    title: 'Team remoto x Team presencial: de que lado você está?',
    created: '25 de Agosto, 2023',
    image: {
      url: dogImage,
      alt: 'Sides',
    },
    summary: '',
    body: `
      <p>Se você é um frequentador assíduo do LinkedIn já deve ter percebido que existem inúmeras discussões sobre voltar ou não ao regime presencial nas empresas. Uma grande massa prega ferozmente a palavra do não-retorno aos escritórios, enquanto a outra parte briga para que acabe a festa dos remotinhos de uma vez por todas. Os que defendem o retorno aos escritórios defendem que não há como construir uma cultura na empresa com cada um no seu canto, ou que discussões se resolvem mais rapidamente no olho-no-olho. Do outro lado, os defensores do trabalho remoto ressaltam o uso do tempo de deslocamento ao escritório para melhorar a qualidade de vida em outras atividades, menor cansaço físico e mental por não ter de enfrentar o caos das cidades.</p>
      
      <p>Ao meu ver, devemos ter muito cuidado com esse assunto. Primeiro, não são todos os tipos de ocupação que permitem esse tipo de regime mais flexível. Por exemplo, um técnico de enfermagem não consegue realizar uma coleta de sangue remotamente. Um repositor de um supermercado (ainda) não consegue organizar as gôndolas do conforto de sua casa. Portanto, muito cuidado ao dizer que o retorno aos escritórios é “desumano”. Essa fala pode soar um tanto quanto insensível, e evidenciar a bolha que estamos.</p>
      
      <h2>Uma coisa é uma coisa, outra coisa é outra coisa</h2>
      
      <p>Cada empresa tem sua maneira de confiar trabalhos a seus funcionários, e de promover qualidade de vida aos envolvidos. Essa é uma das primeiras coisas que ouvimos antes de entrar em uma empresa – seus benefícios, e como seus funcionários recebem cuidados. Em hipótese alguma haverá uma regra global que funcionará bem para todas as empresas do mundo. O mundo ideal deve ser definido individualmente por cada empresa, e com MUITO diálogo com seus funcionários.</p>
      
      <h2>Minha opinião</h2>
      
      <p>Entrei no mercado de trabalho em 2012, e até meados de 2017 (5 anos) nunca havia tido uma experiência de trabalho remoto. Na sequência tive a oportunidade de experimentar o modelo híbrido até meados de 2020 – porém, o modelo em que o funcionário não pode optar por ficar em casa nos dias que deve ir ao escritório. De 2020 em diante, só tive trabalhos remotos. Ou seja, tenho uma experiência considerável com os três regimes: presencial, híbrido e remoto.</p>
      
      <p>Para mim, o modelo prefeito é o modelo híbrido no qual os funcionários escolhem se querem ir ao escritório ou não. Mas isso carrega um problema: manter um escritório ativo custa muito dinheiro. Se por acaso houvesse algum modo de escritórios por demanda, onde times podem se organizar para trabalhar alguns dias do mês presencialmente, já resolveria o problema – o problema agora é existir esse tipo de serviço :)</p>
      
      <p>Se o híbrido realmente não funcionar muito bem por questão de custos de manter o escritório ativo, meu voto vai para o remoto com uma pequena ajuda de custo para bancar custos como ergonomia e infraestrutura básica (energia elétrica e internet).</p>
      
      <p>Estamos vivenciando um novo tempo, onde pessoas as quais suas profissões permitem já foram picadas pelo bichinho do remoto, e as empresas precisam lidar com essa nova realidade. Isso envolve buscar novos meios de fortalecer a cultura da empresa, novas formas de medir produtividade (de forma não invasiva, obviamente), novas formas de gerar e transmitir confiança, e meios para que seus funcionários interajam também fora do trabalho – aka HAPPY HOUR! O melhor construtor de cultura de empresas ever!</p>
      
      <p>Assim como as coisas na vida tendem a ir de extremos à extremos até chegar em um ponto ótimo, tenho convicção que essa discussão levará a um range de consensos legais, e vamos até esquecer que essas discussões aconteceram um dia. :)</p>
          `,
    path: '/blog/presencial-hibrido-remoto',
  },
];
