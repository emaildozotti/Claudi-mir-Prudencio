import React, { useState } from 'react';
import {
  ShieldAlert,
  Trophy,
  Users,
  PauseCircle,
  Ear,
  Anchor,
  Compass,
  CheckCircle2,
  Quote
} from 'lucide-react';
import { RevealOnScroll } from './components/RevealOnScroll';
import { Button } from './components/Button';
import { Accordion } from './components/Accordion';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id'?: string;
        aspect?: string;
      };
    }
  }
}

function App() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const phone = '555499081203';
    const message = encodeURIComponent('Olá Claudiômir, vim através do seu site e gostaria de agendar uma conversa de orientação.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-charcoal min-h-screen text-gray-100 font-sans selection:bg-gold selection:text-white overflow-x-hidden">

      {/* BLOCO 1: HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-charcoal">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-charcoal to-charcoal z-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20 pt-20 pb-12 text-center md:text-left md:flex md:items-center md:justify-between md:gap-12">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <RevealOnScroll>
              <h1 className="font-serif text-4xl md:text-6xl leading-tight text-white mb-6">
                Atravesse o sofrimento para encontrar o seu próprio caminho, <span className="text-gold italic">de dentro para fora.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-lg md:text-xl text-neutral-300 font-light mb-10 max-w-xl">
                Acompanhamento terapêutico para quem cansou de promessas de cura rápida e busca uma reconstrução sólida, ética e definitiva.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <Button onClick={() => scrollToSection('pain-points')}>
                AGENDAR CONVERSA DE ORIENTAÇÃO
              </Button>
            </RevealOnScroll>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <RevealOnScroll delay={300} width="fit-content">
              <div className="relative group">
                {/* Border Frame */}
                <div className="absolute inset-0 border border-gold/50 translate-x-3 translate-y-3 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                {/* Image */}
                <img
                  src="https://i.imgur.com/FEtDOj4.jpeg"
                  alt="Claudiômir Prudencio"
                  className="relative z-10 w-full max-w-md shadow-2xl transition-all duration-700 block"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* BLOCO 2: AGITAÇÃO DA DOR */}
      <section id="pain-points" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-20 text-white">
              O silêncio interno tem gritado <span className="text-gold">alto demais?</span>
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldAlert className="w-10 h-10 text-gold mb-4" />,
                title: "A Exaustão da Força",
                text: "Você aprendeu a \"se virar sozinho\" e carregar o mundo nas costas, mas sente que sua estrutura emocional está trincando."
              },
              {
                icon: <Trophy className="w-10 h-10 text-gold mb-4" />,
                title: "O Vazio do Sucesso",
                text: "Profissionalmente você resolve tudo, mas quando deita a cabeça no travesseiro, sente um vazio de sentido que nenhuma conquista preenche."
              },
              {
                icon: <Users className="w-10 h-10 text-gold mb-4" />,
                title: "A Solidão Acompanhada",
                text: "Mesmo cercado de família ou equipe, você se sente um estranho no ninho, sem ninguém capaz de ouvir sua verdade sem julgar."
              },
              {
                icon: <PauseCircle className="w-10 h-10 text-gold mb-4" />,
                title: "A Paralisia na Crise",
                text: "Seja por uma falha profissional ou luto pessoal, você sente que \"travou\" e não consegue ver o próximo passo."
              }
            ].map((item, index) => (
              <RevealOnScroll key={index} delay={index * 150}>
                <div className="bg-neutral-800/50 p-8 border border-neutral-800 hover:border-gold/30 transition-all duration-300 h-full">
                  {item.icon}
                  <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO: VIDEO SECTION (CRITICAL) */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-serif text-2xl md:text-4xl text-white mb-8">
              Assista a esta mensagem antes de <span className="text-gold">iniciarmos sua travessia</span>
            </h2>
            {/* Wistia Container: Constrained width for vertical video (0.75 aspect) */}
            <div className="mx-auto max-w-[340px] md:max-w-sm bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 shadow-2xl relative z-10">
              <wistia-player media-id="pkf1pyenb9" aspect="0.75">
                <div className="wistia_preload_transcript_outer_wrapper" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-133.33%' }}>
                  <div className="wistia_preload_transcript_inner_wrapper" style={{ overflow: 'auto' }}>
                    <p className="wistia_preload_transcript_text" aria-hidden="true" tabIndex={-1} style={{ textAlign: 'justify', fontSize: '5px' }}>
                      Olá, meu nome é Prudência. Se você chegou até esta página, é porque de alguma forma o silêncio interno gritou alto demais. Provavelmente você passou a vida sendo o pilar, a pessoa forte que resolve tudo para todos. Mas agora, que é você que precisa de suporte, percebeu que não dá mais para carregar esse mundo sozinho. Eu quero que você saiba de uma coisa antes de falarmos, eu não estou aqui para te vender uma pílula mágica ou prometer que o seu sofrimento vai desaparecer amanhã. O que eu ofereço é algo mais sólido. Em vinte anos de experiência, e tendo atravessado os meus próprios desertos, eu aprendi que a dor não é o fim. Ela é convite para você se reconstruir de dentro para fora. Eu não vou te carregar no colo, e nem vou ditar o teu destino, mas eu prometo ser a escuta firme, e o companheiro leal, que vai caminhar ao seu lado, enquanto você atravessa esse momento, e reencontra o seu próprio caminho. Sua aplicação já chegou pra minha equipe. E agora, o próximo passo é com você. Toque no botão aqui embaixo, vamos agendar nossa conversa e começar essa travessia com a seriedade que a sua história merece. Te espero.
                    </p>
                  </div>
                </div>
              </wistia-player>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* BLOCO 3: A METODOLOGIA */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                Não é sobre "consertar" você. <br />É sobre <span className="text-gold">despertar quem você é.</span>
              </h2>
              <p className="text-neutral-400 text-lg">
                Uma abordagem de travessia, não de alívio paliativo.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Ear className="w-12 h-12 text-gold opacity-80" />,
                title: "Escuta Profunda e Ética",
                text: "Um espaço de sigilo absoluto onde sua humanidade é respeitada, não analisada friamente. Aqui, você pode baixar a guarda."
              },
              {
                icon: <Anchor className="w-12 h-12 text-gold opacity-80" />,
                title: "Responsabilidade Radical",
                text: "Eu não te carrego no colo. Eu caminho ao seu lado. O processo devolve a você a autonomia e o poder sobre a sua própria história."
              },
              {
                icon: <Compass className="w-12 h-12 text-gold opacity-80" />,
                title: "Reconstrução de Sentido",
                text: "Investigamos a raiz da dor existencial para transformar o sofrimento em alicerce de maturidade e consciência."
              }
            ].map((item, index) => (
              <RevealOnScroll key={index} delay={index * 200}>
                <div className="flex flex-col items-center text-center p-6">
                  <div className="mb-6 p-4 bg-neutral-800/30 rounded-full border border-neutral-800">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-4">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 4: SOBRE O EXPERT */}
      <section className="py-24 bg-neutral-200 text-charcoal">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-5/12">
              <RevealOnScroll>
                <div className="relative">
                  <div className="absolute inset-0 bg-gold translate-x-3 translate-y-3 z-0"></div>
                  <img
                    src="https://i.imgur.com/FEtDOj4.jpeg"
                    alt="Claudiômir ouvindo"
                    className="relative z-10 w-full aspect-square object-cover shadow-xl grayscale contrast-125 hover:grayscale-0 transition-all duration-700 block"
                  />
                </div>
              </RevealOnScroll>
            </div>
            <div className="md:w-7/12">
              <RevealOnScroll delay={200}>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 text-charcoal">
                  Eu conheço o <span className="text-amber-700">caminho da volta.</span>
                </h2>
                <div className="prose prose-lg text-neutral-700 space-y-6">
                  <p>
                    "Muito prazer, sou Claudiômir Prudencio.
                  </p>
                  <p>
                    Com 20 anos de experiência, já vi muitas teorias falharem diante da dor real.
                  </p>
                  <p>
                    Mas minha maior credencial não está apenas nos livros. Eu conheço o silêncio do fracasso. Sei o que é ver um negócio quebrar, sentir-se incompetente e ter que se reconstruir do zero, lidando com a própria sombra.
                  </p>
                  <p>
                    Foi atravessando meus desertos que entendi meu chamado: não ser um 'salvador', mas um companheiro firme para quem decide enfrentar a própria travessia.
                  </p>
                  <p className="font-medium text-charcoal border-l-4 border-gold pl-4 italic">
                    Minha missão é garantir que você não precise caminhar sozinho enquanto reencontra o seu eixo."
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 5: COMO FUNCIONA */}
      <section className="py-24 bg-charcoal border-b border-neutral-800">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 text-white">
              Como iniciamos nossa jornada?
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Aplicação",
                desc: "Você preencheu o formulário e demonstrou maturidade para o processo."
              },
              {
                step: "02",
                title: "Sessão de Orientação",
                desc: "Realizamos uma primeira conversa (online) para entender seu momento e alinhar expectativas. Se houver conexão mútua, definimos o plano."
              },
              {
                step: "03",
                title: "A Travessia",
                desc: "Iniciamos as sessões semanais de acompanhamento, focadas na sua reconstrução e autonomia."
              }
            ].map((item, index) => (
              <RevealOnScroll key={index} delay={index * 200}>
                <div className="relative p-8 border-l border-neutral-700 h-full hover:bg-white/5 transition-colors duration-300">
                  <span className="absolute -left-[20px] top-8 flex items-center justify-center w-10 h-10 bg-charcoal border border-gold text-gold rounded-full font-serif font-bold z-10">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-xl text-white mb-4 pl-4">{item.title}</h3>
                  <p className="text-neutral-400 pl-4">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 6: DEPOIMENTOS */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 text-white">
              Histórias de quem decidiu <span className="text-gold">atravessar.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "\"Eu achava que terapia era para gente fraca. Com o Claudiômir, entendi que precisa ser muito forte para olhar para dentro. Recuperei meu casamento e minha paz mental.\"",
                author: "R.S.",
                role: "Empresário"
              },
              {
                text: "\"Cheguei no fundo do poço, sem ver sentido em nada. O Claudiômir não me deu respostas prontas, ele me ajudou a construir as minhas. Hoje sou protagonista da minha vida.\"",
                author: "M.L.",
                role: "Advogada"
              },
              {
                text: "\"A firmeza e o respeito dele foram fundamentais. Me senti ouvida de verdade pela primeira vez em anos.\"",
                author: "J.C.",
                role: ""
              }
            ].map((item, index) => (
              <RevealOnScroll key={index} delay={index * 150}>
                <div className="bg-charcoal p-10 border border-neutral-800 relative h-full">
                  <Quote className="w-10 h-10 text-gold/20 absolute top-6 left-6" />
                  <p className="text-neutral-300 italic mb-8 relative z-10 pt-4 leading-relaxed">
                    {item.text}
                  </p>
                  <div className="mt-auto border-t border-neutral-800 pt-4">
                    <p className="font-serif text-white text-lg">{item.author}</p>
                    {item.role && <p className="text-gold text-xs uppercase tracking-widest">{item.role}</p>}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 7: FAQ */}
      <section className="py-24 bg-charcoal border-t border-neutral-800">
        <div className="container mx-auto px-6 max-w-3xl">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 text-white">
              Perguntas Frequentes
            </h2>
          </RevealOnScroll>

          <div className="space-y-2">
            {[
              {
                q: "O atendimento é presencial ou online?",
                a: "100% Online, via videochamada. Você precisa apenas de um local com privacidade e boa internet."
              },
              {
                q: "Aceita convênio/plano de saúde?",
                a: "Não. O trabalho é particular e focado em alta personalização e profundidade, modelos que não se encaixam na estrutura de convênios."
              },
              {
                q: "Quanto tempo dura o tratamento?",
                a: "Não vendemos \"pacotes de cura\". É um processo contínuo. A duração depende do seu ritmo e da profundidade que deseja alcançar."
              },
              {
                q: "É ligado a alguma religião?",
                a: "Não. Trabalhamos a espiritualidade no sentido de \"busca por sentido\" e consciência interna, respeitando todas as crenças (ou a ausência delas)."
              }
            ].map((item, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <Accordion
                  title={item.q}
                  content={item.a}
                  isOpen={openAccordion === index}
                  onClick={() => toggleAccordion(index)}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 8: RODAPÉ E FINALIZAÇÃO */}
      <footer id="contact" className="py-20 bg-neutral-950 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <RevealOnScroll>
            <p className="font-serif text-2xl md:text-4xl text-white mb-10 leading-snug">
              "Se você está disposto a assumir a responsabilidade pelo seu próprio caminho, eu estou pronto para caminhar com você."
            </p>
            <Button className="mb-20 text-lg py-5 px-10" onClick={openWhatsApp}>
              AGENDAR MINHA CONVERSA AGORA
            </Button>

            <div className="border-t border-neutral-800 pt-10 text-neutral-500 text-sm">
              <p className="mb-2">Claudiômir Prudencio - Todos os direitos reservados.</p>
              <div className="space-x-4">
                <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
                <span>|</span>
                <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </footer>
    </div>
  );
}

export default App;