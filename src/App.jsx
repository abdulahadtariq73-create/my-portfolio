

import {
  FaArrowRight,
  FaArrowUp,
  FaCheckCircle,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileAlt,
  
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaLaptopCode,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaPython,
  FaWhatsapp,
  FaBootstrap,
  
  
} from 'react-icons/fa';
import { RiReactjsLine,RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";


const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Certificates', href: '#certificates' },
];

const skills = [
  { name: 'HTML5', percent: '95%', desc: 'Semantic structure', icon: <FaHtml5 /> },
  { name: 'CSS3', percent: '90%', desc: 'Responsive styling', icon: <FaCss3Alt /> },
  { name: 'JavaScript', percent: '85%', desc: 'Interactive interfaces', icon: <FaJsSquare /> },
  { name: 'Git & GitHub', percent: '85%', desc: 'Version control', icon: <FaGithub />
 },
  { name: 'React js', percent: '80%', desc: 'Programming basics', icon:<RiReactjsLine />}, 
  { name: 'Tailwaind Css', percent: '80%', desc: 'Problem solving', icon: <RiTailwindCssFill/>},
  { name: 'Bootstrap', percent: '85%', desc: 'Query fundamentals', icon: <FaBootstrap />
 },
  { name: 'Python', percent: '80%', desc: 'Database management', icon: <FaPython /> },
  
];

const projects = [
  {
    title: 'Electronic Devices E-Commerce Website',
    category: '01 — E-Cmmmerce',
    description: 'A modern, responsive e-commerce website showcasing electronic devices with a clean design and user-friendly shopping experience.',
    tags: ['tailwind CSS', 'React', 'Responsive Design'],
    image: 'public/images/flexcart.png',
    link: 'https://flex-project-main.vercel.app/',
    github: 'https://github.com/abdulahadtariq73-create/flex-project-main',
    status: 'Completed',
  },
  {
    title: 'Personal Portfolio',
    category: '02 — PERSONAL',
    description: 'A personal space to share my journey, highlight projects, and make it easy to connect with me.',
    tags: ['Responsive UI', 'Animation', 'Design'],
    image: 'public/images/personalportfolio.png',
    link: 'https://zemraasif-55.github.io/zemrra-portfolio/',
    github: 'https://github.com',
    status: 'completed',
  },
  {
    title: 'Multi-Category Electronics Store',
    category: '03 — E-Commerce',
    description: 'A modern and responsive electronics e-commerce website featuring mobile phones, cameras, audio devices, TVs, and gaming products. Designed with a clean interface, organized product categories, and a seamless browsing experience across all devices.',
    tags: ['React.js  · Tailwind CSS · E-Commerce · Electronics · Responsive Design'],
    image: 'public/images/electronice1.png',
    link: 'https://my-project-ten-steel.vercel.app/',
    github: 'https://github.com/abdulahadtariq73-create/my-project',
    status: 'completed',
  },
  {
    title: '	Simple Responsive Website',
    category: '04 — Web Development',
    description: 'A clean and responsive website built using HTML and CSS, featuring a simple layout, user-friendly navigation, and a mobile-friendly design.',
    tags: ['	HTML5, CSS3, Responsive Design'],
    image: 'public/images/simple.png',
    link: 'https://mentor-zeta-khaki.vercel.app/',
    github: 'https://github.com/abdulahadtariq73-create/project-master',
    status: 'Completed',
  },
];

const milestones = [
  { title: 'Frontend Development', subtitle: 'Web design & development', number: '01', icon: <FaLaptopCode /> },
//   { title: 'MySQL', subtitle: 'Database fundamentals', number: '02', icon: <FaDatabase /> },
];

const stats = [
  { value: '12+', label: 'Projects explored' },
  { value: '8', label: 'Tools & technologies' },
  { value: '100%', label: 'Curiosity to learn' },
];

const contactCards = [
//   { icon: <FaWhatsapp />, title: 'WhatsApp', text: "Let's have a quick chat", href: 'https://wa.me/923065839036?text=Hi%20Zemra%2C%20I%20want%20to%20contact%20you' },
{
  icon: <FaEnvelope />,
  title: "Email",
  text: "abdulahadtariq73@gmail.com",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=abdulahadtariq73@gmail.com"
},
{ icon: <FaLinkedin />, title: 'LinkedIn', text: 'Connect professionally', href: 'https://www.linkedin.com/in/abdul-ahad-tariq-263261419/' },
];

function App() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const resumePdf = '/Abdul-Ahad-Resume.docx';
  const resumeDocx = '/Abdul-Ahad-Resume.docx';

  return (
    <div className="min-h-screen bg-[#07131d] text-white selection:bg-[#7dd3fc]/40 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-[#7dd3fc]/20 bg-[#07131d]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#7dd3fc]/60 bg-[#111111] text-sm font-black text-[#7dd3fc] shadow-[0_0_25px_rgba(125,211,252,0.25)]">
              A-T
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-[#f5f0e6]">Abdul-Ahad</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#7dd3fc]">Portfolio</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-[#f5f0e6] transition hover:text-[#7dd3fc]">
                {item.label}
              </a>
            ))}
          </div>

        <a
  href="https://wa.me/923258761586?text=Hi%20Abdul%20Ahad%2C%20I%20want%20to%20contact%20you"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-md border border-[#7dd3fc] bg-[#7dd3fc] px-4 py-2 text-sm font-semibold text-[#0b0f12] transition hover:brightness-110"
>
  Let's Talk
</a>
        </nav>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden border-b border-[#7dd3fc]/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(125,211,252,0.08),_transparent_55%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-20 lg:pt-24">
            <div>
              <div className="mb-8 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#7dd3fc]">
                <span className="h-px w-10 bg-[#7dd3fc]/80" />
                CRAFTING DIGITAL EXPERIENCES
              </div>

              <h1 className="max-w-[700px] text-5xl font-black leading-[0.9] tracking-[-0.05em] text-[#f2f2f2] sm:text-6xl lg:text-[7rem]">
                Building digital
                <span className="mt-2 block text-[#f2f2f2]">experiences with</span>
                <span className="mt-2 block text-[#7dd3fc]">purpose.</span>
              </h1>

              <p className="mt-8 max-w-[620px] text-lg leading-8 text-[#dfe1e3]">
                I&apos;m a Frontend Developer who turns ideas into clean, engaging and responsive web experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-3 rounded-md border border-[#7dd3fc] bg-[#7dd3fc] px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#101418] transition hover:brightness-110">
                  Explore my work
                  <FaArrowRight />
                </a>
                <a href="#resume" className="inline-flex items-center gap-3 rounded-md border border-white/15 bg-transparent px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-[#7dd3fc] hover:text-[#7dd3fc]">
                  View resume
                  <FaExternalLinkAlt />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[#dfe1e3]">
                <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#7dd3fc]" /> Pakistan</span>
                <span className="flex items-center gap-2"><FaCheckCircle className="text-[#7dd3fc]" /> Open to opportunities</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute right-4 top-4 text-[9px] font-semibold uppercase tracking-[0.38em] text-[#7dd3fc]">01 / 04</div>
              <div className="absolute -right-8 bottom-6 h-40 w-40 rounded-full border border-[#7dd3fc]/40" />
              <div className="relative overflow-hidden rounded-[1.4rem] border border-[#7dd3fc]/40 bg-[#0d1014] p-4 shadow-[0_0_40px_rgba(125,211,252,0.14)]">
                <div className="overflow-hidden rounded-[1.1rem] border border-[#7dd3fc]/30 bg-[#07090d] p-2">
                  <img src="public\images\ahad (1).jpeg" alt="Abdul ahad" className="h-[520px] w-full rounded-[0.9rem] object-cover object-center" />
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#7dd3fc]/20 pt-4 text-[#7dd3fc]">
                  <span className="text-[11px] uppercase tracking-[0.32em]">Creative developer</span>
                  <span className="text-[11px] uppercase tracking-[0.32em]">2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#7dd3fc]">01 / About me</p>
              <h2 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl">
                Curious mind.<br />
                <span className="text-[#7dd3fc]">Creative approach.</span>
              </h2>
            </div>

            <div className="space-y-8 pt-2">
              <p className="text-xl leading-9 text-[#e8ebee]">
                Hello! I&apos;m <span className="text-[#7dd3fc]">Abdul Ahad</span>, a passionate Frontend Developer and creative web designer who enjoys building modern, responsive and interactive websites.
              </p>

              <p className="text-xl leading-9 text-[#d8dfe6]">
                My journey started with HTML and CSS, and I&apos;m continuing to explore JavaScript, React and modern web technologies. I believe a great website should look beautiful, work smoothly and make every interaction feel natural.
              </p>

              <div className="mt-8 grid gap-4 border-t border-[#7dd3fc]/20 pt-8 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-4xl font-black text-[#7dd3fc]">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#dfe1e3]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl">
              Skills that bring ideas <span className="text-[#7dd3fc]">to life.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#c9ced4]">
              A growing set of technologies and creative tools I use to build digital experiences.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-[1.2rem] border border-[#7dd3fc]/20 bg-[#0b0e12] p-5 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.08)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-[#7dd3fc]/50 bg-[#11151a] text-2xl text-[#7dd3fc]">
                  {skill.icon}
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                  <span className="text-sm font-semibold text-[#7dd3fc]">{skill.percent}</span>
                </div>
                <p className="mt-2 text-sm text-[#c9ced4]">{skill.desc}</p>
                <div className="mt-5 h-[2px] w-full bg-[#7dd3fc]/20">
                  <div className="h-full bg-[#7dd3fc]" style={{ width: skill.percent }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#7dd3fc]">02 / Selected work</p>
              <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl">
                Projects with <span className="text-[#7dd3fc]">purpose.</span>
              </h2>
            </div>
            <p className="max-w-lg text-lg text-[#dfe1e3]">
              A selection of things I&apos;ve designed, built and explored. Each project is a chance to learn something new.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-[1.4rem] border border-[#7dd3fc]/20 bg-[#070b10] shadow-[0_0_30px_rgba(125,211,252,0.08)]">
                <div className="overflow-hidden border-b border-[#7dd3fc]/20 bg-[#0a0d12]">
                  <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7dd3fc]">
                    <span>{project.category}</span>
                    <span>{project.status}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#dfe1e3]">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-[#7dd3fc]/20 bg-[#11161b] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7dd3fc]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-[#7dd3fc] bg-[#7dd3fc] px-4 py-2 text-sm font-semibold text-[#0a0f14] transition hover:brightness-110">
                      {project.status === 'Back to top' ? 'Back to top' : 'View live project'}
                      <FaArrowRight />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#10161d] px-4 py-2 text-sm font-semibold text-white transition hover:border-[#7dd3fc] hover:text-[#7dd3fc]">
                      Source
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="rounded-[1.3rem] border border-[#7dd3fc]/30 bg-[#0a0d12] p-8 shadow-[0_0_30px_rgba(125,211,252,0.08)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-md border border-[#7dd3fc]/50 bg-[#11151a] text-[#7dd3fc]">
                  <FaFileAlt />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7dd3fc]">04 / Experience & education</p>
                  <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                    A little more about my journey.
                  </h2>
                </div>
              </div>

  <div className="flex flex-col gap-3 sm:flex-row">
  {/* View Resume */}
  <a
    href="/public/resume.pdf.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#7dd3fc] bg-[#7dd3fc] px-5 py-3 text-sm font-semibold text-[#0b0f12] transition hover:brightness-110"
  >
    <FaExternalLinkAlt />
    View Resume
  </a>

  {/* Download CV */}
  <a
    href="/resume.docx"
    download="Abdul-Ahad-Resume.docx"
    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-[#11161d] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#7dd3fc] hover:text-[#7dd3fc]"
  >
    <FaDownload />
    Download CV
  </a>
</div>
            </div>
          </div>
        </section>

        <section id="certificates" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#7dd3fc]">05 / Learning milestones</p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl">
              Learning never <span className="text-[#7dd3fc]">stops.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#c9ced4]">
              Certificates and learning milestones that reflect my commitment to growing my skills.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5">
            {milestones.map((item) => (
              <div key={item.title} className="flex items-center justify-between gap-6 rounded-[1rem] border border-[#7dd3fc]/20 bg-[#0b0e12] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#7dd3fc]/50 bg-[#11151a] text-[#7dd3fc]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-[#dfe1e3]">{item.subtitle}</p>
                  </div>
                </div>
                <span className="text-2xl font-semibold text-[#7dd3fc]">{item.number}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#7dd3fc]">06 / Get in touch</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl">
              Have an idea? Let&apos;s make it <span className="text-[#7dd3fc]">happen.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#dfe1e3]">
              I&apos;m always happy to connect, talk about ideas or explore new opportunities.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {contactCards.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-[1rem] border border-[#7dd3fc]/20 bg-[#0a0d12] p-5 text-left transition hover:-translate-y-1 hover:border-[#7dd3fc]">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#7dd3fc]/50 bg-[#11151a] text-xl text-[#7dd3fc]">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-[#dfe1e3]">{item.text}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#7dd3fc]/20 bg-[#07131d]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 text-center text-sm text-[#c9ced4] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <span className="text-2xl font-black text-[#7dd3fc]">A-T.</span>
          </div>
          <div>Designed &amp; built with care by Abdul Ahad</div>
          <div className="flex items-center justify-center gap-3 lg:justify-end">
            <span>© 2026 All rights reserved</span>
            <button onClick={scrollToTop} className="flex h-10 w-10 items-center justify-center rounded-md border border-[#7dd3fc]/40 bg-[#10161d] text-[#7dd3fc] transition hover:border-[#7dd3fc]" aria-label="Scroll to top">
              <FaArrowUp />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
