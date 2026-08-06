import React, { useState } from 'react';
import { Github, Linkedin, Mail, Briefcase, User, FileText, Sun, Moon, MapPin, ExternalLink, Youtube, Download, Code2, Database, Box, Brain, Eye, Network, Palette, Smartphone, Server, Zap, PackageOpen, Cpu, Sparkles, Triangle, Award, GraduationCap, Phone } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');
  const [darkMode, setDarkMode] = useState(true);

  React.useEffect(() => {
    const spotlight = document.getElementById('spotlight');
    if (!spotlight) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const moveSpotlight = (e) => {
      x = e.clientX;
      y = e.clientY;
      spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(91,95,239,0.10), transparent 70%)`;
    };

    document.addEventListener('mousemove', moveSpotlight);
    return () => document.removeEventListener('mousemove', moveSpotlight);
  }, []);

  const profileData = {
    name: "Daniyal Ahmad",
    location: "Toronto, Ontario",
    phone: "(416) 799-5201",
    profileImage: "/daniyal_pic.png",
    github: "https://github.com/daniyalahmad45",
    linkedin: "https://linkedin.com/in/daniyalahmad-cs/",
    email: "daniyal.ahhmad45@gmail.com",
    youtube: "https://www.youtube.com/@DaniyalAhmad-j5e",
    resumeUrl: "/Daniyal Ahmad Resume.pdf"
  };

  const projects = [
    {
      title: "Codebase Q&A Assistant (RAG)",
      subtitle: "Python, ChromaDB, Sentence Transformers, Gemini API, Streamlit",
      description: "Built a Retrieval-Augmented Generation system that lets developers ask natural-language questions about an unfamiliar Python repository and get answers grounded in the actual source code. Used Python's ast module to parse repositories into structure-aware chunks (functions, classes, modules) with file/line metadata, embedded with Sentence Transformers and indexed in a persistent ChromaDB vector store. Implemented semantic retrieval and a grounded generation pipeline with Google Gemini that cites exact file and line sources and refuses to answer outside retrieved context, with retry/backoff for API errors. Built a Streamlit chat interface with source inspection and history; evaluated on 15 hand-written questions, reaching 14 correct, 1 partial, and zero hallucinations, then closed a retrieval gap found during evaluation.",
      techStack: ["Python", "Vector Databases (ChromaDB)", "Sentence Transformers", "LLM APIs (Google Gemini)", "Streamlit"],
      github: "https://github.com/daniyalahmad45/code-rag-assistant",
      demo: "https://www.youtube.com/watch?v=yogSAyDYefs"
    },
    {
      title: "AI-Based Face Recognition Attendance System",
      subtitle: "Python, OpenCV, face_recognition, Arduino",
      description: "Built a real-time facial recognition attendance system using Python, OpenCV, and the face_recognition library to detect and identify individuals from a live camera feed. Integrated an Arduino Uno R3 for physical feedback: green LED and a servo-controlled gate on a recognized face, red LED and buzzer alert on an unrecognized face.",
      techStack: ["Python", "OpenCV", "Computer Vision", "Arduino Uno R3", "Sensor/Actuator Integration"],
      github: "https://github.com/daniyalahmad45/face-recognition-attendance",
      demo: "https://www.youtube.com/watch?v=90mUXaag0rU"
    },
    {
      title: "Personal Portfolio Website",
      subtitle: "React, JavaScript, Tailwind CSS",
      description: "Designed and built a personal portfolio site with React and Tailwind CSS, deployed live on Vercel, with responsive, component-based layouts.",
      techStack: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/daniyalahmad45/my-portfolio",
      demo: "#"
    }
  ];

  // Complete tech icons mapping with devicon AND lucide fallbacks
  const techIcons = {
    // Programming & Markup
    'Python': { devicon: 'devicon-python-plain colored', lucide: null, color: null },
    'Java': { devicon: 'devicon-java-plain colored', lucide: null, color: null },
    'JavaScript': { devicon: 'devicon-javascript-plain colored', lucide: null, color: null },
    'C': { devicon: 'devicon-c-plain colored', lucide: null, color: null },
    'C++': { devicon: 'devicon-cplusplus-plain colored', lucide: null, color: null },
    'Bash': { devicon: 'devicon-bash-plain', lucide: null, color: null },
    'HTML': { devicon: 'devicon-html5-plain colored', lucide: null, color: null },
    'CSS': { devicon: 'devicon-css3-plain colored', lucide: null, color: null },

    // Academic Language Exposure
    'Lisp': { devicon: null, lucide: 'Code2', color: '#9B59B6' },
    'Rust': { devicon: 'devicon-rust-original', lucide: null, color: null },
    'Haskell': { devicon: 'devicon-haskell-plain colored', lucide: null, color: null },
    'Smalltalk': { devicon: null, lucide: 'Code2', color: '#F39C12' },
    'Elixir': { devicon: 'devicon-elixir-plain colored', lucide: null, color: null },

    // Web, UI & Systems
    'React': { devicon: 'devicon-react-original colored', lucide: null, color: null },
    'Node.js': { devicon: 'devicon-nodejs-plain colored', lucide: null, color: null },
    'REST APIs': { devicon: null, lucide: 'Network', color: '#3498DB' },
    'Tailwind CSS': { devicon: 'devicon-tailwindcss-plain colored', lucide: null, color: null },
    'UX/UI Design Principles': { devicon: null, lucide: 'Palette', color: '#E91E63' },

    // AI, ML & Data
    'Retrieval-Augmented Generation (RAG)': { devicon: null, lucide: 'Sparkles', color: '#A855F7' },
    'LLM APIs (Google Gemini)': { devicon: null, lucide: 'Sparkles', color: '#4285F4' },
    'Vector Databases (ChromaDB)': { devicon: null, lucide: 'Database', color: '#FF6B35' },
    'Sentence Transformers': { devicon: null, lucide: 'Network', color: '#9C27B0' },
    'Computer Vision': { devicon: null, lucide: 'Eye', color: '#2196F3' },
    'OpenCV': { devicon: 'devicon-opencv-plain colored', lucide: null, color: null },
    'NumPy': { devicon: 'devicon-numpy-plain colored', lucide: null, color: null },
    'Pandas': { devicon: 'devicon-pandas-plain colored', lucide: null, color: null },
    'Matplotlib': { devicon: 'devicon-matplotlib-plain colored', lucide: null, color: null },

    // Hardware & Embedded
    'Arduino Uno R3': { devicon: 'devicon-arduino-plain colored', lucide: null, color: null },
    'Sensor/Actuator Integration': { devicon: null, lucide: 'Cpu', color: '#FF6B6B' },
    'Serial Communication': { devicon: null, lucide: 'Network', color: '#00BCD4' },

    // Tools & Platforms
    'Git/GitHub': { devicon: 'devicon-github-original', lucide: null, color: null },
    'Linux': { devicon: 'devicon-linux-plain', lucide: null, color: null },
    'VS Code': { devicon: 'devicon-vscode-plain colored', lucide: null, color: null },
    'Vercel': { devicon: null, lucide: 'Triangle', color: '#A855F7' },
    'Streamlit': { devicon: null, lucide: 'Server', color: '#FF4B4B' }
  };

  const skills = {
    technical: [
      "Python", "Java", "JavaScript", "C", "C++", "Bash", "HTML", "CSS"
    ],
    academicLanguages: [
      "Lisp", "Rust", "Haskell", "Smalltalk", "Elixir"
    ],
    webAndSystems: [
      "React", "Node.js", "REST APIs", "Tailwind CSS", "UX/UI Design Principles"
    ],
    aiMlAndData: [
      "Retrieval-Augmented Generation (RAG)", "LLM APIs (Google Gemini)", "Vector Databases (ChromaDB)", "Sentence Transformers", "Computer Vision", "OpenCV", "NumPy", "Pandas", "Matplotlib"
    ],
    hardwareAndEmbedded: [
      "Arduino Uno R3", "Sensor/Actuator Integration", "Serial Communication"
    ],
    toolsAndPlatforms: [
      "Git/GitHub", "Linux", "VS Code", "Vercel", "Streamlit"
    ]
  };

  // Function to render tech icon
  const TechIcon = ({ tech, size = 20 }) => {
    const iconData = techIcons[tech];
    if (!iconData) return null;

    if (iconData.devicon) {
      return <i className={`${iconData.devicon} text-xl`} style={{ fontSize: size }}></i>;
    } else if (iconData.lucide) {
      const LucideIcon = {
        'Code2': Code2,
        'Cpu': Cpu,
        'Network': Network,
        'Palette': Palette,
        'Smartphone': Smartphone,
        'Server': Server,
        'Brain': Brain,
        'Eye': Eye,
        'Zap': Zap,
        'PackageOpen': PackageOpen,
        'Sparkles': Sparkles,
        'Triangle': Triangle,
        'Database': Database
      }[iconData.lucide];
      
      return LucideIcon ? <LucideIcon size={size} style={{ color: iconData.color }} /> : null;
    }
    return null;
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <div className="space-y-6 relative z-10">
            <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden relative z-10`}>
              <div className="bg-slate-700 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-slate-400 text-sm ml-4">daniyal.config.js</span>
              </div>
              
              <div className="bg-slate-800 p-8 font-mono text-sm">
                <div className="text-slate-500">{/* Learning, Building, Growing :) */}</div>
                <div className="mt-4">
                  <span className="text-accent-400">const</span>{' '}
                  <span className="text-blue-300">daniyal</span>{' '}
                  <span className="text-white">= {'{'}</span>
                </div>
                <div className="ml-6 mt-2">
                  <span className="text-blue-300">role</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Computer Science"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-6 mt-2">
                  <span className="text-blue-300">focus</span>
                  <span className="text-white">: [</span>
                </div>
                <div className="ml-12 mt-2">
                  <span className="text-green-400">"Building Ideas"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">"Challenging Myself"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-green-400">"Acquiring Knowledge"</span>
                </div>
                <div className="ml-6 mt-2">
                  <span className="text-white">]</span>
                </div>
                <div className="mt-2">
                  <span className="text-white">{'};'}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 relative z-10 border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                <div className="flex flex-col items-start gap-3">
                  <div className="text-blue-500 text-4xl">
                    <Code2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Web Development</h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Frontend & Backend</p>
                  </div>
                </div>
              </div>
              
              <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 relative z-10 border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                <div className="flex flex-col items-start gap-3">
                  <div className="text-green-500 text-4xl">
                    <Box className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Software</h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Engineering & Architecture</p>
                  </div>
                </div>
              </div>
              
              <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 relative z-10 border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                <div className="flex flex-col items-start gap-3">
                  <div className="text-yellow-500 text-4xl">
                    <Database className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Data Science</h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Analytics & Insights</p>
                  </div>
                </div>
              </div>
              
              <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 relative z-10 border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                <div className="flex flex-col items-start gap-3">
                  <div className="text-pink-500 text-4xl">
                    <Brain className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">ML/AI</h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Intelligence Systems</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 relative z-10`}>
              <h3 className="text-2xl font-bold mb-6">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Java', 'JavaScript', 'C', 'C++', 'HTML', 'CSS', 'Bash',
                  'React', 'Node.js', 'REST APIs', 'Tailwind CSS', 'NumPy', 'Pandas',
                  'Computer Vision', 'OpenCV', 'Retrieval-Augmented Generation (RAG)', 'Arduino Uno R3',
                  'Git/GitHub', 'Linux', 'VS Code', 'Vercel'].map((tech) => (
                  <span 
                    key={tech}
                    className={`${darkMode ? 'bg-slate-700 text-slate-200' : 'bg-slate-200 text-slate-800'} px-4 py-2 rounded-lg font-medium hover:bg-accent-500 hover:text-white transition-colors cursor-default flex items-center gap-2`}
                  >
                    <TechIcon tech={tech} size={20} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-6 relative z-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-2xl p-8 shadow-lg border border-t-4 border-t-accent-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative z-10`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-accent-400 text-lg mb-2">{project.subtitle}</p>
                    )}
                  </div>
                </div>

                <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-4`}>
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} text-sm mb-2`}>Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className={`${darkMode ? 'bg-slate-700 text-slate-200' : 'bg-slate-200 text-slate-800'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}
                      >
                        <TechIcon tech={tech} size={16} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  {project.demo && project.demo !== "#" && (
                    project.demo.includes("youtube.com") ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
                      >
                        <Youtube size={20} />
                        Demo Video
                      </a>
                    ) : (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
                      >
                        <ExternalLink size={20} />
                        Live Site
                      </a>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'resume':
        return (
          <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 shadow-lg relative z-10`}>
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'} rounded-2xl p-6 border-l-4 border-accent-500`}>
                <h3 className="text-xl font-bold mb-4 text-accent-400">Programming & Markup</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((tech) => (
                    <span key={tech} className={`${darkMode ? 'bg-slate-600' : 'bg-slate-200'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}>
                      <TechIcon tech={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'} rounded-2xl p-6 border-l-4 border-accent-500`}>
                <h3 className="text-xl font-bold mb-4 text-accent-400">Academic Language Exposure</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.academicLanguages.map((tech) => (
                    <span key={tech} className={`${darkMode ? 'bg-slate-600' : 'bg-slate-200'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}>
                      <TechIcon tech={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'} rounded-2xl p-6 border-l-4 border-accent-500`}>
                <h3 className="text-xl font-bold mb-4 text-accent-400">Web, UI & Systems</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.webAndSystems.map((tech) => (
                    <span key={tech} className={`${darkMode ? 'bg-slate-600' : 'bg-slate-200'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}>
                      <TechIcon tech={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'} rounded-2xl p-6 border-l-4 border-accent-500`}>
                <h3 className="text-xl font-bold mb-4 text-accent-400">AI, ML & Data</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.aiMlAndData.map((tech) => (
                    <span key={tech} className={`${darkMode ? 'bg-slate-600' : 'bg-slate-200'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}>
                      <TechIcon tech={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'} rounded-2xl p-6 border-l-4 border-accent-500`}>
                <h3 className="text-xl font-bold mb-4 text-accent-400">Hardware & Embedded</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.hardwareAndEmbedded.map((tech) => (
                    <span key={tech} className={`${darkMode ? 'bg-slate-600' : 'bg-slate-200'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}>
                      <TechIcon tech={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'} rounded-2xl p-6 border-l-4 border-accent-500`}>
                <h3 className="text-xl font-bold mb-4 text-accent-400">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.toolsAndPlatforms.map((tech) => (
                    <span key={tech} className={`${darkMode ? 'bg-slate-600' : 'bg-slate-200'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}>
                      <TechIcon tech={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'} rounded-2xl p-6 mb-8`}>
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg">Sales & Business Development | Tahpin Inc. (Venture for Canada Intrapreneurship Program)</h4>
                  <p className="text-accent-400 mb-2">July 2026 - Present</p>
                  <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Supporting Tahpin Inc.'s go-to-market initiative on search optimization for the tourism and retail space through outreach to local businesses. Building and maintaining a sales pipeline, including prospect research, outreach tracking, and documentation templates. Participating in a student team for Venture for Canada's Responsible AI Adoption Challenge, identifying a workplace process suited to a responsible AI solution.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Software Scope Development | Fraser Delivery, Riipen Level UP Project</h4>
                  <p className="text-accent-400 mb-2">May 2026</p>
                  <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Conducted a needs assessment of Fraser Delivery, a Canada–India courier company, analyzing its shipment booking, tracking, and manifest processes. Authored a software functionality outline and workflow diagram, then delivered a final scope of work document with requirements, a data model, user stories, and acceptance criteria. Certificate of completion awarded.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'} rounded-2xl p-6`}>
                <div className="flex items-center gap-2 mb-4">
                  <Award size={22} className="text-accent-400" />
                  <h3 className="text-xl font-bold">Certifications</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">CAE Immersion Program 2026</h4>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Certificate — May 2026</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Riipen Level UP Project Certificate</h4>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Fraser Delivery Software Scope Development — May 2026</p>
                  </div>
                </div>
              </div>

              <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'} rounded-2xl p-6`}>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={22} className="text-accent-400" />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div>
                  <h4 className="font-semibold">BSc — Computer Science</h4>
                  <p className="text-accent-400 text-sm mb-2">Toronto Metropolitan University</p>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'} mb-2`}>September 2024 – Expected 2028</p>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Dean's List (2024–2025), Dean's List (2025–2026), GPA: 3.5
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 shadow-lg relative z-10`}>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} text-lg mb-8`}>
              Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4">
              <a
                href={`mailto:${profileData.email}`}
                className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}
              >
                <Mail size={24} className="text-accent-400" />
                <span className="text-lg">{profileData.email}</span>
              </a>

              <a
                href={`tel:${profileData.phone.replace(/[^\d+]/g, '')}`}
                className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}
              >
                <Phone size={24} className="text-accent-400" />
                <span className="text-lg">{profileData.phone}</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}
              >
                <Github size={24} className="text-accent-400" />
                <span className="text-lg">GitHub Profile</span>
              </a>
              
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}
              >
                <Linkedin size={24} className="text-accent-400" />
                <span className="text-lg">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-white' : 'bg-gradient-to-br from-slate-50 via-white to-accent-50/40 text-slate-900'} transition-colors duration-300`}>
      <div
        id="spotlight"
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1, transition: 'background 0.2s ease-out' }}
      />

      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {darkMode ? (
          [...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full star"
              style={{
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite, drift ${20 + Math.random() * 20}s infinite ease-in-out`
              }}
            />
          ))
        ) : (
          <>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute cloud opacity-70"
                style={{
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `floatCloud ${25 + Math.random() * 15}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                <div className="relative">
                  <div className="w-40 h-20 bg-sky-200/80 rounded-full blur-xl shadow-lg shadow-sky-300/40"></div>
                  <div className="absolute top-3 left-12 w-48 h-24 bg-sky-200/80 rounded-full blur-xl shadow-lg shadow-sky-300/40"></div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css');

        body {
          font-family: 'Inter', sans-serif;
        }

        h1, h2, h3, h4 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: -0.01em;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(50px, -30px);
          }
          50% {
            transform: translate(-30px, 50px);
          }
          75% {
            transform: translate(30px, 30px);
          }
        }
        
        @keyframes floatCloud {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(50px);
          }
          66% {
            transform: translateY(20px) translateX(-30px);
          }
        }
      `}</style>

      <nav className={`${darkMode ? 'bg-slate-900/70' : 'bg-white/70'} backdrop-blur-md border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'} sticky top-0 z-50 relative`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {[
                { id: 'about', label: 'About', Icon: User },
                { id: 'projects', label: 'Projects', Icon: Briefcase },
                { id: 'resume', label: 'Resume', Icon: FileText },
                { id: 'contact', label: 'Contact', Icon: Mail },
              ].map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === id
                      ? 'bg-accent-500/10 text-accent-400'
                      : darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'} transition-colors`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className={`lg:col-span-1 ${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 h-fit shadow-lg border-l-4 border-accent-500 relative z-10`}>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-accent-500/70 shadow-lg shadow-accent-500/20 mb-6 bg-slate-700">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center">{profileData.name}</h2>
              <div className="flex items-center gap-2 text-slate-400 mb-8">
                <MapPin size={16} />
                <span>{profileData.location}</span>
              </div>

              <div className="w-full mb-8">
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Connect</h3>
                <div className="space-y-4">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${profileData.email}`}
                    className={`flex items-center gap-3 ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}
                  >
                    <Mail size={20} />
                    <span>Email</span>
                  </a>
                  <a
                    href={profileData.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}
                  >
                    <Youtube size={20} />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              <div className="w-full">
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Resume</h3>
                <a
                  href={profileData.resumeUrl}
                  download
                  className="flex items-center justify-center gap-3 bg-accent-500 hover:bg-accent-600 hover:-translate-y-0.5 shadow-lg shadow-accent-500/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 w-full"
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 relative z-10">
            {renderContent()}
          </div>
        </div>
      </div>

      <footer className={`${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/50 border-slate-200'} backdrop-blur-md border-t py-6 relative z-10`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Made by <span className="text-accent-400 font-semibold">Daniyal Ahmad</span>
          </p>
        </div>
      </footer>
    </div>
  );
}