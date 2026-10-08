import { profile, publications, manuscripts, projects, education } from '../content/profile';
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const authorName = (authors) => authors.split('Akshansh Yadav').map((part, i) => <span key={i}>{i > 0 && <strong>Akshansh Yadav</strong>}{part}</span>);

function Section({ id, number, title, children }) {
  return <section id={id} className="section"><div className="section-heading"><span className="section-number">{number}</span><h2>{title}</h2></div><div>{children}</div></section>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="header-inner"><a className="wordmark" href="#about" aria-label="Akshansh Yadav, back to introduction">AY<span>.</span></a><nav aria-label="Main navigation"><a href="#publications">Publications</a><a href="#work">Work</a><a href="#background">Background</a><a href="#contact">Contact</a></nav></div></header>
    <main id="main" className="page-shell">
      <section id="about" className="intro">
        <div className="intro-copy"><p className="eyebrow">AI EFFICIENCY & COMPUTER ARCHITECTURE</p><h1>Akshansh Yadav<span className="name-dot">.</span></h1><p className="role">{profile.role}</p><p className="institution">{profile.institution}</p><p className="intro-text">{profile.bio}</p><div className="profile-links"><a className="primary-link" href={`${base}/Akshansh-Yadav-CV.pdf`} target="_blank" rel="noreferrer">View CV</a><a href={profile.scholar}>Google Scholar</a><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a></div></div>
        <figure className="portrait"><img src={`${base}/portrait.jpg`} alt="Akshansh Yadav" width="1178" height="1278" fetchPriority="high"/><figcaption>Jodhpur, India</figcaption></figure>
      </section>
      <div className="research-note"><span className="small-label">RESEARCH FOCUS</span><p>Efficient Vision Transformers <span> / </span> FPGA Accelerators <span> / </span> Hardware–Software Co-Design</p></div>
      <Section id="publications" number="01" title="Publications">
        <div className="section-intro"><p>Journal articles and conference papers.</p><a href={profile.scholar}>Google Scholar profile</a></div>
        <ol className="publication-list">{publications.map((p, i) => <li className="publication" key={p.title}><div className="publication-index">{String(i+1).padStart(2,'0')}<span>{p.year}</span></div><article><div className="publication-meta"><span>{p.category}</span><span className="status">{p.status}</span></div><h3>{p.title}</h3><p className="authors">{authorName(p.authors)}</p><p className="venue">{p.venue}, {p.year}.</p>{p.summary && <p className="paper-summary">{p.summary}</p>}{(p.doi || p.code) && <div className="paper-links">{p.doi && <a href={`https://doi.org/${p.doi}`}>Paper / DOI</a>}{p.code && <a href={p.code}>Code</a>}</div>}</article></li>)}</ol>
        <div className="manuscripts"><h3>Submitted Manuscripts</h3><p className="subsection-note">Work under review.</p><ul>{manuscripts.map(p => <li key={p.title}><h4>{p.title}</h4><p className="authors">{authorName(p.authors)}</p><p className="venue">{p.venue}.</p></li>)}</ul></div>
      </Section>
      <Section id="work" number="02" title="Research & Engineering">
        <p className="section-description">{profile.about}</p><div className="project-grid grid grid-cols-1 md:grid-cols-2">{projects.map(p => <article className="project" key={p.title}><p className="project-tags">{p.tags}</p><h3>{p.title}</h3><p>{p.description}</p>{p.link && <a className="project-link" href={p.link}>View repository</a>}</article>)}</div>
      </Section>
      <Section id="background" number="03" title="Background">
        <h3 className="subhead">Education</h3><div className="education-list">{education.map(e => <article className="education" key={e.title}><p className="date">{e.date}</p><div><h4>{e.title}</h4><p>{e.institution}</p>{e.detail && <p className="detail">{e.detail}</p>}</div></article>)}</div>
        <div className="background-grid grid grid-cols-1 md:grid-cols-2"><div><h3 className="subhead">Experience</h3><article className="experience"><h4>Teaching Assistant · IIT Jodhpur</h4><p className="detail">Fall 2023–Present</p><p>Laboratory teaching in computer architecture, data structures, algorithm design, and introductory computing.</p></article><article className="experience"><h4>Practical Training · BHEL</h4><p className="detail">April 2019–April 2020</p><p>Electronics assembly and testing, with exposure to solar-panel assemblies and lithium-ion battery production.</p></article><article className="experience"><h4>Pucchua.com</h4><p className="detail">Entrepreneurial project · 2019</p><p>Built an e-commerce platform and explored product development and digital marketing.</p></article></div><div><h3 className="subhead">Tools & Skills</h3><dl className="skills"><dt>Programming</dt><dd>C, C++, Python, Verilog, HLS C/C++</dd><dt>Hardware</dt><dd>Vitis HLS, Vivado, XRT, ZCU104, Alveo U250, PYNQ</dd><dt>Machine Learning</dt><dd>PyTorch, TensorFlow, Keras</dd><dt>Architecture & Research</dt><dd>ChampSim, Logisim, NumPy, Jupyter, LaTeX</dd></dl><h3 className="subhead honors-heading">Honors & Engagement</h3><ul className="honors"><li>ACM ARCS 2026 · Research presentation and sponsored participation, IIT Hyderabad</li><li>IEEE VLSID 2025 · Competitive travel grant</li><li>GATE 2023 · Computer Science, AIR 2337</li></ul></div></div>
      </Section>
      <Section id="contact" number="04" title="Get in Touch"><div className="contact-content"><p>For research discussions and collaborations in efficient AI, FPGA acceleration, and computer architecture.</p><a className="email" href={`mailto:${profile.email}`}>{profile.email}</a><p className="contact-location">Department of Computer Science & Engineering<br/>{profile.institution}<br/>Jodhpur, Rajasthan, India</p><div className="contact-links"><a href={profile.scholar}>Google Scholar</a><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a></div></div></Section>
    </main><footer className="footer"><span>© 2026 Akshansh Yadav</span><a href="#about">Back to top</a></footer>
  </>;
}
