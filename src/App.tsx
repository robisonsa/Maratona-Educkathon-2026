import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Trophy, 
  Code2, 
  Lightbulb, 
  Users, 
  GraduationCap, 
  Laptop, 
  Globe, 
  ChevronRight,
  AlertCircle,
  FileText,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0" />
              <span className="font-bold text-lg sm:text-xl tracking-tight truncate">2º EDUCKATHON</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-baseline space-x-8">
              <a href="#sobre" className="hover:text-primary transition-colors text-sm font-medium">Sobre</a>
              <a href="#categorias" className="hover:text-primary transition-colors text-sm font-medium">Categorias</a>
              <a href="#requisitos" className="hover:text-primary transition-colors text-sm font-medium">Requisitos</a>
              <a href="#cronograma" className="hover:text-primary transition-colors text-sm font-medium">Cronograma</a>
              <a href="#premiacao" className="hover:text-primary transition-colors text-sm font-medium">Premiação</a>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://inscricoes.seduc.se.gov.br/" 
                target="_blank" 
                rel="noreferrer"
                className="hidden sm:flex bg-primary text-black px-4 py-2 rounded-md font-bold text-sm hover:bg-primary/90 transition-all glow-primary"
              >
                INSCREVA-SE
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white hover:text-primary transition-colors p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-surface border-b border-white/10 px-4 pt-2 pb-6 space-y-4 shadow-2xl absolute w-full"
          >
            <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-primary transition-colors text-base font-medium">Sobre</a>
            <a href="#categorias" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-primary transition-colors text-base font-medium">Categorias</a>
            <a href="#requisitos" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-primary transition-colors text-base font-medium">Requisitos</a>
            <a href="#cronograma" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-primary transition-colors text-base font-medium">Cronograma</a>
            <a href="#premiacao" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-primary transition-colors text-base font-medium">Premiação</a>
            <a 
              href="https://inscricoes.seduc.se.gov.br/" 
              target="_blank" 
              rel="noreferrer"
              className="block text-center bg-primary text-black px-4 py-3 rounded-md font-bold text-base hover:bg-primary/90 transition-all glow-primary mt-4"
            >
              INSCREVA-SE AGORA
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-primary font-mono text-sm mb-6">
              Edital SEED N° 14/2026/GS/SEED
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              MARATONA DE PROGRAMAÇÃO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent glow-text">
                2º EDUCKATHON
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 px-4 sm:px-0">
              24 horas ininterruptas de inovação, tecnologia e resolução de problemas reais. 
              Exclusivo para estudantes do Ensino Médio da Rede Pública Estadual de Sergipe.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
              <a 
                href="https://inscricoes.seduc.se.gov.br/" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto bg-primary text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all glow-primary flex items-center justify-center gap-2"
              >
                Garantir Vaga <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="https://siae.seduc.se.gov.br/siae.servicefile/api/File/Downloads/92b930c3-da8a-48ba-8a08-3adf88637b6b"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-surface border border-white/10 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-surface-hover transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" /> Ler Edital
              </a>
              <a 
                href="#cronograma" 
                className="w-full sm:w-auto bg-surface border border-white/10 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-surface-hover transition-all flex items-center justify-center"
              >
                Ver Cronograma
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section id="sobre" className="py-12 border-y border-white/10 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">24 Horas Ininterruptas</h3>
                <p className="text-gray-400 text-sm">Com revezamento para descanso</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">20 e 21 de Maio de 2026</h3>
                <p className="text-gray-400 text-sm">Evento totalmente presencial</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Aracaju, SE</h3>
                <p className="text-gray-400 text-sm">Local a ser divulgado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorias" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Categorias da Competição</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Escolha a categoria que melhor se adapta ao perfil da sua equipe. 
              O desafio será revelado no início da maratona.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-surface border border-white/10 rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <Lightbulb className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ideação</h3>
              <p className="text-gray-400 mb-6">
                Para estudantes que não programam, mas compreendem como soluções tecnológicas podem resolver problemas reais. Foco em diagnóstico e estratégia.
              </p>
              <div className="space-y-3">
                <h4 className="font-mono text-sm text-secondary uppercase tracking-wider">Entregas Exigidas:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Mapa do Problema</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Canvas do Projeto</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Fluxo da Solução</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Slides com conceito</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-surface border border-white/10 rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <Code2 className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Programação</h3>
              <p className="text-gray-400 mb-6">
                Para estudantes que conheçam lógica e ferramentas de programação. Construção de ferramenta funcional (app, jogo, sistema). Low-code é aceito.
              </p>
              <div className="space-y-3">
                <h4 className="font-mono text-sm text-primary uppercase tracking-wider">Entregas Exigidas:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Protótipos Funcionais (MVP)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Código Fonte</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Demonstração ao vivo</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Documentação técnica</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requisitos" className="py-24 bg-surface/30 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Formação das Equipes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cada equipe deve ser composta obrigatoriamente por 4 estudantes e 1 professor coordenador, todos da mesma unidade de ensino.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">Requisitos: Estudantes</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-surface p-4 rounded-lg border border-white/5">
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0"></div>
                  <p className="text-gray-300">Matriculados no Ensino Médio ou profissionalizante concomitante na mesma escola do professor.</p>
                </li>
                <li className="flex items-start gap-3 bg-surface p-4 rounded-lg border border-white/5">
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0"></div>
                  <p className="text-gray-300">Frequência escolar igual ou superior a 80% referente aos anos letivos de 2025 e 2026.</p>
                </li>
                <li className="flex items-start gap-3 bg-surface p-4 rounded-lg border border-white/5">
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0"></div>
                  <p className="text-gray-300">Média geral igual ou superior a 6,0 (seis) no ano letivo de 2025.</p>
                </li>
                <li className="flex items-start gap-3 bg-surface p-4 rounded-lg border border-white/5">
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0"></div>
                  <p className="text-gray-300">Para o prêmio de intercâmbio: ter entre 14 e 17 anos e autorização dos responsáveis.</p>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Requisitos: Professor</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-surface p-4 rounded-lg border border-white/5">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                  <p className="text-gray-300">Vínculo empregatício formal na Rede Pública Estadual de Ensino de Sergipe (efetivo ou contratado vigente).</p>
                </li>
                <li className="flex items-start gap-3 bg-surface p-4 rounded-lg border border-white/5">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                  <p className="text-gray-300">Conhecimento na área de informática básica e gestão de projetos.</p>
                </li>
                <li className="flex items-start gap-3 bg-surface p-4 rounded-lg border border-white/5">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                  <p className="text-gray-300">Submissão de um Mini Projeto na inscrição: "Identifique um problema real na escola e proponha solução tecnológica".</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-500 shrink-0" />
            <div>
              <h4 className="font-bold text-yellow-500 mb-1">Atenção à Inscrição</h4>
              <p className="text-sm text-gray-300">
                A inscrição deve ser feita exclusivamente pelo professor coordenador. É proibida a participação de um estudante em mais de uma equipe. Respostas idênticas de mini projetos entre equipes causarão desclassificação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section id="premiacao" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Premiação Histórica</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Reconhecimento em dinheiro, bolsas de pesquisa, incubação de startups e até intercâmbio internacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Prize 1 */}
            <div className="bg-gradient-to-b from-surface to-background border border-white/10 rounded-2xl p-6 relative">
              <div className="absolute top-0 right-0 p-4 opacity-20"><Globe className="w-16 h-16" /></div>
              <h3 className="text-xl font-bold mb-2 text-primary">Sergipe no Mundo Tech</h3>
              <p className="text-3xl font-mono font-bold mb-4">1º Lugar</p>
              <p className="text-sm text-gray-400">
                A equipe vencedora de cada categoria participará de intercâmbio internacional com foco em tecnologias digitais (Edição 2026).
              </p>
            </div>

            {/* Prize 2 */}
            <div className="bg-gradient-to-b from-surface to-background border border-white/10 rounded-2xl p-6 relative">
              <div className="absolute top-0 right-0 p-4 opacity-20"><Trophy className="w-16 h-16" /></div>
              <h3 className="text-xl font-bold mb-2 text-accent">Prêmios em Dinheiro</h3>
              <ul className="space-y-2 font-mono text-sm mt-4">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>1º Lugar</span> <span className="text-accent font-bold">R$ 5.000</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>2º Lugar</span> <span className="text-accent font-bold">R$ 3.000</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>3º Lugar</span> <span className="text-accent font-bold">R$ 2.000</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>4º ao 10º</span> <span className="text-accent font-bold">R$ 1.500</span></li>
                <li className="flex justify-between"><span>11º ao 15º</span> <span className="text-accent font-bold">R$ 1.000</span></li>
              </ul>
            </div>

            {/* Prize 3 */}
            <div className="bg-gradient-to-b from-surface to-background border border-white/10 rounded-2xl p-6 relative">
              <div className="absolute top-0 right-0 p-4 opacity-20"><GraduationCap className="w-16 h-16" /></div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Bolsas FAPITEC/SE</h3>
              <p className="text-3xl font-mono font-bold mb-4">Top 3</p>
              <p className="text-sm text-gray-400">
                Bolsas de pesquisa para professor e alunos das 3 melhores equipes. Fase I (6 meses para PMV) + Fase II (6 meses para evolução).
              </p>
            </div>

            {/* Prize 4 */}
            <div className="bg-gradient-to-b from-surface to-background border border-white/10 rounded-2xl p-6 relative">
              <div className="absolute top-0 right-0 p-4 opacity-20"><Laptop className="w-16 h-16" /></div>
              <h3 className="text-xl font-bold mb-2 text-white">Incubação & Escolas</h3>
              <p className="text-3xl font-mono font-bold mb-4">Top 5</p>
              <p className="text-sm text-gray-400 mb-3">
                Incubação gratuita no SERGIPETC por 1 ano para as 5 melhores equipes.
              </p>
              <p className="text-sm text-gray-400 border-t border-white/10 pt-3">
                Escolas das equipes selecionadas recebem R$ 10.000 (PROFIN) para notebook gamer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="cronograma" className="py-24 bg-surface/50 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Cronograma Oficial</h2>
            <p className="text-gray-400">Fique atento aos prazos. Não haverá prorrogação.</p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(0,255,204,0.5)] z-10">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border border-primary/30 p-4 rounded-xl shadow-[0_0_15px_rgba(0,255,204,0.1)]">
                <div className="font-mono text-primary font-bold mb-1">13 a 27/03/2026</div>
                <div className="font-bold text-lg">Inscrições Abertas</div>
                <div className="text-sm text-gray-400">Envio de propostas via portal Seduc.</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface border-white/20 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border border-white/10 p-4 rounded-xl">
                <div className="font-mono text-gray-400 mb-1">23/03/2026</div>
                <div className="font-bold text-lg">Homologação</div>
                <div className="text-sm text-gray-400">Divulgação da lista de inscrições homologadas.</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface border-white/20 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border border-white/10 p-4 rounded-xl">
                <div className="font-mono text-gray-400 mb-1">08/04/2026</div>
                <div className="font-bold text-lg">Resultado Preliminar</div>
                <div className="text-sm text-gray-400">Divulgação das equipes selecionadas.</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface border-white/20 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border border-white/10 p-4 rounded-xl">
                <div className="font-mono text-gray-400 mb-1">11/04/2026</div>
                <div className="font-bold text-lg">Lista Final</div>
                <div className="text-sm text-gray-400">Resultado final após recursos.</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface border-white/20 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border border-white/10 p-4 rounded-xl">
                <div className="font-mono text-gray-400 mb-1">A definir</div>
                <div className="font-bold text-lg">Curso de Imersão</div>
                <div className="text-sm text-gray-400">20 horas de capacitação obrigatória.</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(0,102,255,0.5)] z-10">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border border-accent/30 p-4 rounded-xl shadow-[0_0_15px_rgba(0,102,255,0.1)]">
                <div className="font-mono text-accent font-bold mb-1">20 e 21/05/2026</div>
                <div className="font-bold text-lg">Maratona Final</div>
                <div className="text-sm text-gray-400">24 horas de desenvolvimento presencial.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-16 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para o desafio?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Reúna sua equipe, identifique um problema na sua escola e prepare-se para 24 horas que podem mudar o seu futuro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
            <a 
              href="https://inscricoes.seduc.se.gov.br/" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-block bg-primary text-black px-10 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all glow-primary flex items-center justify-center"
            >
              FAZER INSCRIÇÃO AGORA
            </a>
            <a 
              href="https://siae.seduc.se.gov.br/siae.servicefile/api/File/Downloads/92b930c3-da8a-48ba-8a08-3adf88637b6b"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-block bg-surface border border-white/10 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-surface-hover transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" /> LER EDITAL COMPLETO
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              <span>2º Educkathon - Secretaria de Estado da Educação (SEED/SE)</span>
            </div>
            <div className="text-center md:text-right space-y-1">
              <p>Edital N° 14/2026/GS/SEED</p>
              <p>&copy; 2026 • Criado por Robison Sá</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
