import imagem1 from '../public/imagem/estatuaDireito.jpg';
import imagemWhts from '../public/imagem/whatsapp.png';

import imagemfacebook from '../public/imagem/facebook.png';
import imagemInsta from '../public/imagem/instagram.png';
import imagemLinkedin from '../public/imagem/linkedin.png';
import imagemYoutube from '../public/imagem/youtube.png';

import imagemTributario from '../public/imagem/tributario.png'
import imagemtrabalhista from '../public/imagem/trabalhista.png'
import imagemcivil from '../public/imagem/civil.png'
import imagemempresarial from '../public/imagem/empresarial.png'
import imagemequipe from '../public/imagem/equipe.png'
import imagemfamilia from '../public/imagem/familia.png'


import fotoadv from '../public/imagem/fotoAdvogada.jpg'
 
export const data = {
    topoMenu: {
        imagemFundo: imagem1,
        whatsappimg: imagemWhts,
        imagemInsta: imagemInsta ,
        imagemfacebook: imagemfacebook ,
        imagemLinkedin: imagemLinkedin ,
        imagemYoutube : imagemYoutube ,
         whatsapp: '615156156',
        telefone:  '993093681',
        email: 'RodolfoReis@gmail.com',
        nome: 'Rodolfo Reis Advogados',
        texto: "Prestamos nossos serviços de forma totalmente transparente",
        botao: "Conheça nossos serviços",
        corFundoOpcoesTopo:"rgba(255, 255, 255, 0.4)",
        corTexto: "#fff", // Cor do texto
        corBotaoFundo: "rgba(255, 255, 255, 0.4)", // Cor de fundo do botão
        corBotaoHover: "#666" // Cor de fundo do botão ao passar o mouse
        
    },

    sobreNos:{
        fotoAdv: fotoadv,
        sobrenos :'- SOBRE NÓS',
        titulo :'Seja bem vindo à Rodolfo Reis Advogados Prestamos nossos serviços de forma totalmente transparente Conheça nossos serviços ',
        paragrafo1:'Nosso escritório permite a união de dois importantes requisitos para o sucesso das causas patrocinadas: ampla atividade acadêmica e larga experiência dos profissionais. A Advocacia se perfaz em labor que exige ininterruptos estudos em virtude do dinamismo do ordenamento jurídico e de mudanças sociais que, aliados à prática, fazem com que as estratégias idealizadas pela equipe de advogados gerem reais probabilidades de sucesso.',
        paragrafo2:'Além disso, optamos por uma estrutura enxuta de profissionais especializados que, pessoalmente, realizam todas as etapas do trabalho, tornando o atendimento de excelência.',
        paragrafo3:'Assim, com arrimo nestes elementos, podemos afirmar que nosso escritório encerra a melhor escolha para a defesa de seus interesses.',

        corFundo: " #deb887",
    },

    

    servicos:{
        servico:'SERVIÇOS',
        titulo:'PRINCIPAIS ÁREAS DE ATUAÇÃO',
        texto:'Conheça mais sobre as principais áreas de atuação do nosso escritório',


        tributaria:{
            imagemTributaria:imagemTributario,
            tributaria:'Tributária',
            texto:'Consultoria, planejamento para economia fiscal e recuperação de créditos. Contencioso administrativo e judicial. Elaboração de pareceres. Defesa de natureza penal.',

        },
        empresarial:{
            imagemempresarial:imagemempresarial,
            empresarial:'Empresarial',
            texto:'Consultoria, compliance, constituição e alterações societárias comerciais e industriais, bem como de associações ou entidades sem fins lucrativos. Contratos. Negociações junto a credores e fornecedores. Falência e Recuperação Judicial. Contencioso administrativo e judicial.',
            
        },
        administrativo:{
            imagemadministrativo:imagemequipe,
            administrativo:'Administrativo',
            texto:'Improbidade. Ação Popular. Servidores. Políticas Públicas. Defesas administrativas e judiciais que envolvam Órgãos Públicos. Licitações e contratos administrativos. Desapropriações.',
            
        },
 


        civil:{
            imagemTributaria:imagemcivil,
            civil:'Civil',
            texto:'Consultoria, planejamento para economia fiscal e recuperação de créditos. Contencioso administrativo e judicial. Elaboração de pareceres. Defesa de natureza penal.',

        },
        famíliaESucessões:{
            imagemTributaria:imagemfamilia,
            famíliaESucessões:'Família e Sucessões',
            texto:'Inventário. Planejamento sucessório. Testamentos. Divórcio. Guarda de Filhos. Alimentos.',
            
        },
        trabalhista:{
            imagemtrabalhista:imagemtrabalhista,
            trabalhista:'Trabalhista',
            texto:'Consultoria, planejamento de condutas. Contencioso judicial em reclamações e defesas administrativas. Penal – Financeiro. Eleitoral.',
            
        },
      
    },
};
