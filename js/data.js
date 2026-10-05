/**
 * PORTFOLIO DATA CONFIGURATION
 * All content for the portfolio is managed here
 * Update this file to modify portfolio information
 */

const portfolioData = {
  personal: {
    firstName: "Ankush",
    fullName: "Ankush Diwakar Chamatkar",
    title: "Senior Test Engineer",
    subtitle: "QA Automation | Test Strategy | Quality Engineering",
    location: "Pune, Maharashtra, India",
    email: "ankushchamatkar0041@gmail.com",
    phone: "+91-9325183920",
    linkedin: "https://www.linkedin.com/in/ankushdiwakar-c-a10452248",
    github: "#",
    resumeFile: "./assets/resume/resume.pdf"
  },

  summary: "Senior Test Engineer with 3+ years of professional experience in Black Box Testing, Automation Testing, and API/Web Service Testing. I specialize in designing and executing comprehensive test strategies, building scalable automation frameworks, and ensuring high-quality software releases through meticulous testing and quality engineering practices.",

  heroStatement: "Building reliable software through intelligent test automation, engineering discipline, and a continuous focus on quality.",

  about: {
    title: "About Me",
    description: "I am a Senior Test Engineer with a passion for quality engineering and automation. With over 3 years of hands-on experience, I've worked across functional testing, regression testing, automation frameworks, and API testing. My approach combines strategic thinking with technical depth—understanding business requirements, designing comprehensive test scenarios, and building scalable automation solutions that reduce manual effort and improve release quality.",
    highlights: [
      "3+ years in Black Box & Automation Testing",
      "Expertise in Selenium WebDriver with Java",
      "Functional, Non-Functional, and Globalization Testing",
      "Test Automation Framework Design & Maintenance",
      "API Testing with Postman",
      "Agile/Scrum & CI/CD Integration",
      "AR/VR & Cross-Platform Testing Experience",
      "Quality-Driven Mindset with Detail-Oriented Approach"
    ]
  },

  experience: [
    {
      id: 1,
      company: "Wescover",
      role: "Senior Test Engineer",
      duration: "December 2024 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading QA efforts for platform features, automation, and quality assurance processes.",
      responsibilities: [
        "Execute functional, globalization, and regression testing for new and enhanced platform features",
        "Automate key regression scenarios, reducing manual testing time by 30%",
        "Create and review test cases for high-priority features, ensuring 100% coverage of business requirements",
        "Participate in sprint planning, backlog grooming, and defect triage meetings"
      ],
      achievements: [
        "Achieved 30% reduction in manual testing time through strategic automation",
        "Maintained 100% business requirement coverage in test cases",
        "Improved test case quality through peer reviews"
      ],
      technologies: ["Selenium", "Java", "TestNG", "Maven", "JIRA", "Git"]
    },
    {
      id: 2,
      company: "Book An Artist",
      role: "Senior Test Engineer",
      duration: "June 2025 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Managing QA strategy and execution for platform releases and feature development.",
      responsibilities: [
        "Execute functional, globalization, and regression testing for new and enhanced platform features",
        "Automate key regression scenarios, reducing manual testing time by 30%",
        "Create and review test cases for high-priority features, ensuring 100% coverage of business requirements",
        "Participate in sprint planning, backlog grooming, and defect triage meetings"
      ],
      achievements: [
        "30% reduction in manual testing time through automation",
        "100% business requirement coverage",
        "Enhanced test case quality standards"
      ],
      technologies: ["Selenium", "Java", "TestNG", "Maven", "JIRA", "Git"]
    },
    {
      id: 3,
      company: "Book An Artist",
      role: "Software Test Engineer",
      duration: "June 2024 - July 2025",
      location: "Bengaluru, Karnataka",
      type: "Full-time",
      description: "QA automation and functional testing for platform features.",
      responsibilities: [
        "Design and execute functional test cases for new features",
        "Develop and maintain automation scripts using Selenium & Java",
        "Perform regression testing and retesting on bug fixes",
        "Collaborate with development team for quality assurance"
      ],
      achievements: [
        "Built automation framework for regression testing",
        "Improved defect detection rate",
        "Successfully transitioned to Senior Test Engineer role"
      ],
      technologies: ["Selenium", "Java", "TestNG", "Maven", "Postman", "JIRA"]
    },
    {
      id: 4,
      company: "Digital Jalebi",
      role: "QA Tester",
      duration: "March 2023 - May 2024",
      location: "Noida, Uttar Pradesh",
      type: "Full-time",
      description: "Functional and automation testing for multiple digital products.",
      responsibilities: [
        "Design and execute comprehensive test cases based on requirement specifications",
        "Develop automation scripts using Selenium WebDriver with Java",
        "Perform functional, regression, and smoke testing",
        "Identify, classify, and report defects with detailed documentation"
      ],
      achievements: [
        "Successfully automated critical test scenarios",
        "Participated in VR/AR game testing initiatives",
        "Contributed to improving test case documentation standards",
        "Transitioned to Senior Test Engineer role"
      ],
      technologies: ["Selenium", "Java", "Appium", "TestNG", "Maven", "JIRA", "Postman"]
    },
    {
      id: 5,
      company: "Smart Software Services",
      role: "QA Trainee",
      duration: "March 2022 - September 2022",
      location: "Pune, Maharashtra",
      type: "Internship",
      description: "Foundation in Software Testing Life Cycle and QA processes.",
      responsibilities: [
        "Learned and applied STLC best practices",
        "Assisted in test case creation and execution",
        "Performed smoke and regression testing",
        "Participated in peer reviews and defect reporting"
      ],
      achievements: [
        "Mastered STLC fundamentals",
        "Gained hands-on experience in multiple testing types",
        "Improved documentation quality through peer reviews"
      ],
      technologies: ["Manual Testing", "JIRA", "STLC", "SQL"]
    }
  ],

  achievements: [
    {
      id: 1,
      title: "30% Reduction in Manual Testing Time",
      description: "Automated key regression scenarios, significantly reducing manual testing effort and accelerating release cycles.",
      category: "Automation",
      impact: "Time Savings"
    },
    {
      id: 2,
      title: "100% Business Requirement Coverage",
      description: "Ensured comprehensive test case coverage for high-priority features, maintaining zero-defect releases.",
      category: "Quality",
      impact: "Coverage"
    },
    {
      id: 3,
      title: "Test Framework Development",
      description: "Designed and implemented scalable test automation frameworks using Selenium, TestNG, and Maven.",
      category: "Architecture",
      impact: "Framework"
    },
    {
      id: 4,
      title: "Quality Assurance Process Improvement",
      description: "Contributed to process improvements in test case design, peer reviews, and defect management.",
      category: "Process",
      impact: "Improvement"
    },
    {
      id: 5,
      title: "VR/AR Testing Expertise",
      description: "Successfully tested complex VR/AR applications, bringing specialized testing knowledge to the team.",
      category: "Specialization",
      impact: "Expertise"
    }
  ],

  skills: {
    automation: {
      title: "Test Automation",
      level: "Advanced",
      items: ["Selenium WebDriver", "Java", "TestNG", "Maven", "Appium", "POM Framework", "Data-Driven Testing"]
    },
    programming: {
      title: "Programming & Languages",
      level: "Intermediate",
      items: ["Core Java", "JavaScript", "HTML", "CSS", "OOPS Concepts", "Collection Framework"]
    },
    apiTesting: {
      title: "API & Web Service Testing",
      level: "Experienced",
      items: ["Postman", "REST APIs", "API Validation", "Request/Response Testing"]
    },
    functionalTesting: {
      title: "Functional Testing",
      level: "Advanced",
      items: ["Functional Testing", "Regression Testing", "Smoke Testing", "Retesting", "End-to-End Testing"]
    },
    specializedTesting: {
      title: "Specialized Testing",
      level: "Experienced",
      items: ["Non-Functional Testing", "Globalization Testing", "VR/AR Testing", "Cross-Platform Testing", "Compatibility Testing"]
    },
    cicd: {
      title: "CI/CD & Tools",
      level: "Experienced",
      items: ["Jenkins", "Git/GitHub", "JIRA", "Maven", "Build Automation"]
    },
    database: {
      title: "Database & Backend",
      level: "Working Knowledge",
      items: ["SQL Server", "MySQL", "Database Testing"]
    },
    methodologies: {
      title: "Methodologies & Practices",
      level: "Advanced",
      items: ["Agile/Scrum", "STLC", "SDLC", "Black Box Testing", "Defect Management"]
    }
  },

  projects: [
    {
      id: 1,
      name: "Docflix - OTT Platform for Doctors",
      domain: "Digital Media & Healthcare",
      client: "Mankind Pharma Ltd.",
      description: "A specialized Over-The-Top (OTT) platform designed for medical professionals, providing scientific content, streaming services, podcasts, assessments, and live events.",
      testingApproach: [
        "Functional Testing",
        "Non-Functional Testing",
        "Automation Testing",
        "Cross-Platform Testing"
      ],
      automationApproach: [
        "Selenium WebDriver framework",
        "Page Object Model implementation",
        "Automated regression scenarios",
        "Data-driven testing"
      ],
      responsibilities: [
        "Requirement analysis and test scenario identification",
        "Test case design and execution",
        "Test automation framework development",
        "Regression and retesting cycles",
        "Cross-device and cross-platform testing",
        "Defect management and tracking"
      ],
      technologies: ["Selenium", "Java", "TestNG", "Maven", "JIRA"],
      results: "Successfully delivered comprehensive test coverage with automated regression framework, reducing manual testing by 30%"
    },
    {
      id: 2,
      name: "Equity Capital Markets",
      domain: "Investment Banking",
      client: "Evercore's Investment, USA",
      description: "Comprehensive investment banking platform providing M&A services, financing solutions, equity research, and strategic transaction support.",
      testingApproach: [
        "Black Box Testing",
        "Functional Testing",
        "Regression Testing",
        "Smoke Testing"
      ],
      automationApproach: [
        "Use case-based test design",
        "Functional automation",
        "Regression test automation"
      ],
      responsibilities: [
        "End-to-end test scenario identification",
        "Test case development from requirements",
        "Functional and regression testing execution",
        "Defect identification and classification",
        "Smoke testing coordination",
        "Test case peer reviews"
      ],
      technologies: ["Manual Testing", "JIRA", "SQL", "Test Management"],
      results: "Ensured 100% requirement coverage with systematic testing approach"
    }
  ],

  learning: [
    {
      id: 1,
      name: "Playwright",
      status: "Currently Learning",
      experience: null,
      technologies: ["TypeScript", "JavaScript"],
      description: "Expanding modern browser automation capabilities with Playwright, TypeScript, and JavaScript.",
      keyPoints: [],
      startDate: "2024",
      icon: "automation"
    },
    {
      id: 2,
      name: "TypeScript",
      status: "Currently Learning",
      experience: null,
      technologies: ["JavaScript"],
      description: "Building strong foundations in TypeScript for type-safe automation scripting.",
      keyPoints: [],
      startDate: "2024",
      icon: "code"
    },
    {
      id: 3,
      name: "Advanced JavaScript",
      status: "Currently Learning",
      experience: null,
      technologies: ["ES6+", "Async/Await"],
      description: "Deepening JavaScript skills for modern automation frameworks and scripting.",
      keyPoints: [],
      startDate: "2024",
      icon: "code"
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science",
      field: "Mathematics",
      institution: "Sant Gadge Baba Amravati University",
      location: "Amravati, Maharashtra",
      year: "2022",
      duration: "July 2019 - August 2022"
    }
  ],

  statistics: {
    yearsExperience: "3+",
    projectsDelivered: "10+",
    companiesWorked: "4",
    automationFrameworks: "3",
    testCasesCreated: "500+"
  }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
