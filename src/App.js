import React, { useState } from 'react';
import { Github, Linkedin, Mail, Briefcase, User, FileText, Sun, Moon, MapPin, ExternalLink, Youtube, Download, Code2, Database, Box, Brain, Eye, Network, Palette, Smartphone, Server, Zap, PackageOpen, Cpu } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');
  const [darkMode, setDarkMode] = useState(true);

  React.useEffect(() => {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    
    if (!cursor || !follower) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };
    
    const animateFollower = () => {
      const distX = mouseX - followerX;
      const distY = mouseY - followerY;
      
      followerX += distX * 0.1;
      followerY += distY * 0.1;
      
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      
      requestAnimationFrame(animateFollower);
    };
    
    const hoverEffect = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        follower.style.width = '50px';
        follower.style.height = '50px';
        follower.style.borderColor = 'rgba(168, 85, 247, 0.8)';
      } else {
        follower.style.width = '32px';
        follower.style.height = '32px';
        follower.style.borderColor = 'rgba(255,255,255,0.5)';
      }
    };
    
    const createRipple = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', hoverEffect);
    document.addEventListener('click', createRipple);
    animateFollower();
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', hoverEffect);
      document.removeEventListener('click', createRipple);
    };
  }, []);

  const profileData = {
    name: "Daniyal Ahmad",
    location: "Toronto, Ontario",
    profileImage: "/daniyal_pic.png",
    github: "https://github.com/daniyalahmad45",
    linkedin: "https://linkedin.com/in/daniyalahmad-cs/",
    email: "daniyal.ahhmad45@gmail.com",
    youtube: "https://youtube.com/@yourchannel",
    resumeUrl: "/Daniyal Ahmad Resume.pdf"
  };

  const projects = [
    {
      title: "Machine Learning & Computer Vision Project",
      subtitle: "Python",
      description: "End-to-end pipeline (ingestion → features → training → evaluation) automated via CLI/config. Tuned SVM and Random Forest with cross-validated grid search; ~94% macro-F1 on held-out test set. Reproducible plots/reports using NumPy, Pandas, Matplotlib.",
      techStack: ["Python", "NumPy", "Pandas", "Matplotlib"],
      github: "https://github.com/yourusername/ml-cv-project",
      demo: "#"
    },
    {
      title: "AI Resume Analyzer",
      subtitle: "Full Stack",
      description: "Designed and developed a full-stack web application that analyzes resumes and generates structured feedback across multiple scoring dimensions. Built a Node.js backend to process file uploads and perform text analysis using Llama 3 via Groq API, handling asynchronous requests and error states. Implemented a responsive React frontend providing real-time feedback, improving usability and clarity for end users.",
      techStack: ["Node.js", "React", "JavaScript"],
      github: "https://github.com/daniyalahmad45/ai-resume-analyzer",
      demo: "#"
    },
    {
      title: "Web & UX/UI Contributor — Azlyf Co.",
      subtitle: "UX/UI Design",
      description: "Contributed to UX/UI design and development of a Shopify e-commerce site, customizing themes with HTML/CSS/Liquid and organizing 10+ products using UX-driven navigation structures.",
      techStack: ["Shopify", "HTML", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Fitness GPT",
      subtitle: "AI-Powered Workout Planner",
      description: "Built an AI-powered workout planner using React and Node.js, processing 5+ user inputs to generate structured plans via an OpenAI-compatible API with responsive UI and PDF export.",
      techStack: ["React", "Node.js", "JavaScript"],
      github: "https://github.com/daniyalahmad45/fitnessgpt",
      demo: "#"
    }
  ];

  // Complete tech icons mapping with devicon AND lucide fallbacks
  const techIcons = {
    // Programming Languages
    'Python': { devicon: 'devicon-python-plain colored', lucide: null, color: null },
    'Java': { devicon: 'devicon-java-plain colored', lucide: null, color: null },
    'JavaScript': { devicon: 'devicon-javascript-plain colored', lucide: null, color: null },
    'C/C++': { devicon: 'devicon-cplusplus-plain colored', lucide: null, color: null },
    'C#': { devicon: 'devicon-csharp-plain colored', lucide: null, color: null },
    'HTML': { devicon: 'devicon-html5-plain colored', lucide: null, color: null },
    'CSS': { devicon: 'devicon-css3-plain colored', lucide: null, color: null },
    'Bash': { devicon: 'devicon-bash-plain', lucide: null, color: null },
    'Assembly': { devicon: null, lucide: 'Cpu', color: '#FF6B6B' },
    'Lisp': { devicon: null, lucide: 'Code2', color: '#9B59B6' },
    
    // Web & Systems
    'React': { devicon: 'devicon-react-original colored', lucide: null, color: null },
    'Node.js': { devicon: 'devicon-nodejs-plain colored', lucide: null, color: null },
    'REST APIs': { devicon: null, lucide: 'Network', color: '#3498DB' },
    'UX/UI Design Principles': { devicon: null, lucide: 'Palette', color: '#E91E63' },
    'Responsive Design': { devicon: null, lucide: 'Smartphone', color: '#00BCD4' },
    'Client-Server Architecture': { devicon: null, lucide: 'Server', color: '#8E44AD' },
    
    // ML & Data
    'Supervised Learning': { devicon: null, lucide: 'Brain', color: '#9C27B0' },
    'Computer Vision': { devicon: null, lucide: 'Eye', color: '#2196F3' },
    'Model Evaluation (F1, Precision, Recall)': { devicon: null, lucide: 'Zap', color: '#FFC107' },
    'NumPy': { devicon: 'devicon-numpy-plain colored', lucide: null, color: null },
    'Pandas': { devicon: 'devicon-pandas-plain colored', lucide: null, color: null },
    'Matplotlib': { devicon: 'devicon-matplotlib-plain colored', lucide: null, color: null },
    
    // Tools & Platforms
    'Git/GitHub': { devicon: 'devicon-github-original', lucide: null, color: null },
    'Linux': { devicon: 'devicon-linux-plain', lucide: null, color: null },
    'Shopify': { devicon: null, lucide: 'PackageOpen', color: '#96BF48' },
    'VS Code': { devicon: 'devicon-vscode-plain colored', lucide: null, color: null }
  };

  const skills = {
    technical: [
      "Python", "Java", "JavaScript", "C/C++", "C#", "HTML", "CSS", "Bash", "Assembly", "Lisp"
    ],
    webAndSystems: [
      "React", "Node.js", "REST APIs", "UX/UI Design Principles", "Responsive Design", "Client-Server Architecture"
    ],
    mlAndData: [
      "Supervised Learning", "Computer Vision", "Model Evaluation (F1, Precision, Recall)", "NumPy", "Pandas", "Matplotlib"
    ],
    toolsAndPlatforms: [
      "Git/GitHub", "Linux", "Shopify", "VS Code"
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
        'PackageOpen': PackageOpen
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
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl overflow-hidden relative z-10`}>
              <div className="bg-gray-700 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">daniyal.config.js</span>
              </div>
              
              <div className="bg-gray-800 p-8 font-mono text-sm">
                <div className="text-gray-500">{/* Learning, Building, Growing :) */}</div>
                <div className="mt-4">
                  <span className="text-purple-400">const</span>{' '}
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
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 hover:scale-105 transition-transform relative z-10 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex flex-col items-start gap-3">
                  <div className="text-blue-500 text-4xl">
                    <Code2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Web Development</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Frontend & Backend</p>
                  </div>
                </div>
              </div>
              
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 hover:scale-105 transition-transform relative z-10 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex flex-col items-start gap-3">
                  <div className="text-green-500 text-4xl">
                    <Box className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Software</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Engineering & Architecture</p>
                  </div>
                </div>
              </div>
              
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 hover:scale-105 transition-transform relative z-10 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex flex-col items-start gap-3">
                  <div className="text-yellow-500 text-4xl">
                    <Database className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Data Science</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Analytics & Insights</p>
                  </div>
                </div>
              </div>
              
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 hover:scale-105 transition-transform relative z-10 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex flex-col items-start gap-3">
                  <div className="text-pink-500 text-4xl">
                    <Brain className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">ML/AI</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Intelligence Systems</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 relative z-10`}>
              <h3 className="text-2xl font-bold mb-6">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Java', 'JavaScript', 'C/C++', 'C#', 'HTML', 'CSS', 'Bash',
                  'React', 'Node.js', 'REST APIs', 'NumPy', 'Pandas', 
                  'Computer Vision', 'Supervised Learning', 'Git/GitHub', 'Linux', 'Shopify', 'VS Code'].map((tech) => (
                  <span 
                    key={tech}
                    className={`${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'} px-4 py-2 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition-colors cursor-default flex items-center gap-2`}
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
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 shadow-xl border-t-4 border-purple-500 hover:scale-[1.02] transition-transform relative z-10`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-purple-400 text-lg mb-2">{project.subtitle}</p>
                    )}
                  </div>
                </div>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm mb-2`}>Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className={`${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}
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
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'resume':
        return (
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 shadow-xl relative z-10`}>
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} rounded-2xl p-6 border-l-4 border-purple-500`}>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Programming & Markup</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((tech) => (
                    <span key={tech} className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}>
                      <TechIcon tech={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} rounded-2xl p-6 border-l-4 border-purple-500`}>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Web, UI & Systems</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.webAndSystems.map((tech) => (
                    <span key={tech} className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}>
                      <TechIcon tech={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} rounded-2xl p-6 border-l-4 border-purple-500`}>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Machine Learning & Data</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.mlAndData.map((tech) => (
                    <span key={tech} className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}>
                      <TechIcon tech={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} rounded-2xl p-6 border-l-4 border-purple-500`}>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.toolsAndPlatforms.map((tech) => (
                    <span key={tech} className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'} px-3 py-1.5 rounded-lg text-sm flex items-center gap-2`}>
                      <TechIcon tech={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} rounded-2xl p-6`}>
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg">Operations Director | IEEE Computer Society (CSTMC)</h4>
                  <p className="text-purple-400 mb-2">January 2024 - November 2025</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Coordinated operations and logistics for multiple technical workshops, panels, and industry events, collaborating with the executive team to support programming, promotion, and on-site execution.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">First-Year Representative | Computer Science Course Union (CSCU)</h4>
                  <p className="text-purple-400 mb-2">October 2024 - September 2025</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Represented first-year CS students, supporting academic and career events and communicating program feedback to course union stakeholders.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Event Coordinator | IEEE TMU Computer Science Branch</h4>
                  <p className="text-purple-400 mb-2">December 2024 - October 2025</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Coordinated student-focused technical and networking events for the IEEE TMU CS Branch, supporting engagement and awareness of computer science resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 shadow-xl relative z-10`}>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg mb-8`}>
              Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4">
              <a
                href={`mailto:${profileData.email}`}
                className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                <Mail size={24} className="text-purple-400" />
                <span className="text-lg">{profileData.email}</span>
              </a>
              
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                <Github size={24} className="text-purple-400" />
                <span className="text-lg">GitHub Profile</span>
              </a>
              
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                <Linkedin size={24} className="text-purple-400" />
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
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 text-gray-900'} transition-colors duration-300`}>
      <div 
        id="cursor"
        className="fixed w-3 h-3 rounded-full pointer-events-none mix-blend-difference"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
          boxShadow: '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.4)',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999
        }}
      />
      <div 
        id="cursor-follower"
        className="fixed w-8 h-8 rounded-full pointer-events-none"
        style={{
          border: '2px solid rgba(255,255,255,0.5)',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.15s ease-out',
          zIndex: 9998
        }}
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
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute cloud"
                style={{
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `floatCloud ${15 + Math.random() * 10}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                <div className="relative">
                  <div className="w-32 h-16 bg-white rounded-full blur-md shadow-lg"></div>
                  <div className="absolute top-3 left-10 w-40 h-20 bg-white rounded-full blur-md shadow-lg"></div>
                  <div className="absolute top-6 left-28 w-28 h-14 bg-white rounded-full blur-md shadow-lg"></div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css');
        
        body {
          font-family: 'Poppins', sans-serif;
        }
        
        * {
          cursor: none !important;
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
        
        #cursor-follower {
          transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
        }
        
        .ripple {
          position: fixed;
          border-radius: 50%;
          border: 2px solid rgba(168, 85, 247, 0.6);
          width: 20px;
          height: 20px;
          pointer-events-none;
          transform: translate(-50%, -50%);
          animation: rippleEffect 1s ease-out;
          z-index: 9997;
        }
        
        @keyframes rippleEffect {
          0% {
            width: 20px;
            height: 20px;
            opacity: 1;
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
          }
          100% {
            width: 100px;
            height: 100px;
            opacity: 0;
            box-shadow: 0 0 50px rgba(168, 85, 247, 0);
          }
        }
      `}</style>

      <nav className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} sticky top-0 z-50 relative`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('about')}
                className={`flex items-center gap-2 transition-colors ${activeTab === 'about' ? 'text-purple-400 border-b-2 border-purple-400' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <User size={20} />
                About
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-2 transition-colors ${activeTab === 'projects' ? 'text-purple-400 border-b-2 border-purple-400' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <Briefcase size={20} />
                Projects
              </button>
              <button
                onClick={() => setActiveTab('resume')}
                className={`flex items-center gap-2 transition-colors ${activeTab === 'resume' ? 'text-purple-400 border-b-2 border-purple-400' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <FileText size={20} />
                Resume
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex items-center gap-2 transition-colors ${activeTab === 'contact' ? 'text-purple-400 border-b-2 border-purple-400' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <Mail size={20} />
                Contact
              </button>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className={`lg:col-span-1 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 h-fit shadow-xl border-l-4 border-purple-500 relative z-10`}>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 mb-6 bg-gray-700">
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
              <div className="flex items-center gap-2 text-gray-400 mb-8">
                <MapPin size={16} />
                <span>{profileData.location}</span>
              </div>

              <div className="w-full mb-8">
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Connect</h3>
                <div className="space-y-4">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${profileData.email}`}
                    className={`flex items-center gap-3 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    <Mail size={20} />
                    <span>Email</span>
                  </a>
                  <a
                    href={profileData.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    <Youtube size={20} />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              <div className="w-full">
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Resume</h3>
                <a
                  href={profileData.resumeUrl}
                  download
                  className="flex items-center justify-center gap-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors w-full"
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

      <footer className={`${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} backdrop-blur-md border-t py-6 relative z-10`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Made by <span className="text-purple-400 font-semibold">Daniyal Ahmad</span>
          </p>
        </div>
      </footer>
    </div>
  );
}