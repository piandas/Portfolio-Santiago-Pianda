// Click events for buttons
// =============================================================

const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
    skills.style.display = "none";
    portfolio.style.display = "flex";
    skillsBtn.classList.remove("active-btn");
    portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
    portfolio.style.display = "none";
    skills.style.display = "flex";
    portfolioBtn.classList.remove("active-btn");
    skillsBtn.classList.add("active-btn");
});

// Light & Dark Mode
// =============================================================
document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleTheme");
    const themeIcon = document.querySelector('img[alt="theme icon"]');
    const githubLogo = document.querySelector('img[alt="github logo"]');
    const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
    const emailLogo = document.querySelector('img[alt="email logo"]');
    const profileImage = document.querySelector('.hero-pic img');

    // Mostrar "skills" al cargar la página
    portfolio.style.display = "none"; // Ocultar portfolio
    skills.style.display = "flex"; // Mostrar skills
    portfolioBtn.classList.remove("active-btn"); // Remover clase activa del botón portfolio
    skillsBtn.classList.add("active-btn"); // Agregar clase activa al botón skills

    const lightLogos = {
        github: "assets/github_light.png",
        linkedin: "assets/linkedin_light.png",
        email: "assets/email_light.png",
        theme: "assets/theme_light.png"
    };

    const darkLogos = {
        github: "assets/github_dark.png",
        linkedin: "assets/linkedin_dark.png",
        email: "assets/email_dark.png",
        theme: "assets/theme_dark.png"
    };

    function setTheme(isDark) {
        githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
        linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
        emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
        themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
        profileImage.style.backgroundColor = isDark ? "#ffffff" : "#222222";
    }


    toggleThemeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark);
        setTheme(isDark);
    });

    const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") === "true";
        document.body.classList.toggle("dark-theme", isDark);
        setTheme(isDark);
    }

    loadTheme();
});

// Translations
// =============================================================
const translations = {
    en: {
        career: "Industrial Engineering, Analytics & Web Development",
        semesterNumber: "1 year",
        semester: "Profesional",
        semesterCareer: "Industrial Engineering",
        year: "Year",
        years: "Years",
        dataAnalyst: "Data Analysis",
        webDeveloper: "Web Development",
        cv: "Download CV",
        contactMe: "Contact Me",
        portfolio: "Portfolio",
        skills: "Skills",
        analytics: "Analytics",
        simulation: "Simulation",
        ia: "Artificial Intelligence",
        automation: "Process Automation",
        industrial: "Industrial Engineering",
        optimization: "Optimization",
        financialIndicators: "Financial Indicators",
        english: "B2 English",
        processAnalysis: "Process Analysis",
        projectGestion: "Project Management",
        dataVisualization: "Data Visualization",
        leadership: "Leadership",
        comunication: "Effective Communication and Emotional Intelligence",
        innovation: "Innovation and Creativity",
        webDevelopment: "Web Development",
        project1: "Movie Recommendation System with Python and SQL",
        project2: "Employee Withdrawal Analysis, Retention Strategies",
        project3: "Pokedex & APIs",
        age: "25 y/o",
        university: "National University UNAL - Medellín, Colombia",
    },
    es: {
        career: "Ingeniería Industrial, Analítica de Datos y Automatización",
        semesterNumber: "1 año",
        semester: "Profesional",
        semesterCareer: "Ingeniería Industrial",
        year: "Año",
        years: "Años",
        dataAnalyst: "Análisis de Datos",
        webDeveloper: "Desarrollo Web",
        cv: "Descargar CV",
        contactMe: "Contáctame",
        portfolio: "Portafolio",
        skills: "Competencias",
        analytics: "Analítica",
        ia: "Inteligencia Artificial",
        simulation: "Simulación",
        automation: "Automatización de Procesos",
        industrial: "Ingeniería Industrial",
        optimization: "Optimización",
        financialIndicators: "Indicadores Financieros",
        english: "Inglés B2",
        processAnalysis: "Análisis de Procesos",
        projectGestion: "Gestión de Proyectos",
        dataVisualization: "Visualización de Datos",
        leadership: "Liderazgo",
        comunication: "Comunicación efectiva e inteligencia emocional",
        innovation: "Innovación y Creatividad",
        webDevelopment: "Desarrollo Web",
        project1: "Sistema de Recomendacion de Peliculas con Python y SQL",
        project2: "Análisis de Retiros de Empleados, Estrategias de Retención",
        project3: "Pokedex & APIs",
        age: "25 años",
        university: "Universidad Nacional UNAL - Medellín, Colombia",
    }
};


// Function to change the language
document.addEventListener("DOMContentLoaded", () => {

    const changeLanguage = (lang) => {
        document.querySelectorAll("[data-translate]").forEach(elem => {
            const key = elem.getAttribute("data-translate");
            elem.textContent = translations[lang][key];
        });
        // Cambia el archivo de descarga del CV según el idioma
        const cvDownloadLink = document.getElementById("cvDownloadLink");
        if (lang === "es") {
            cvDownloadLink.setAttribute("href", "assets/CV_Santiago_Pianda.pdf");
        } else if (lang === "en") {
            cvDownloadLink.setAttribute("href", "assets/CV_Santiago_Pianda_English.pdf");
        }
    };

    const loadLang = () => {
        const savedLang = localStorage.getItem("selectedLang") || "es";
        changeLanguage(savedLang);
        document.getElementById("languageButton").setAttribute("data-lang", savedLang);
        document.getElementById("languageButton").textContent = (savedLang === "es" ? "English" : "Español");
    };

    document.getElementById("languageButton").addEventListener("click", function() {
        const currentLang = this.getAttribute("data-lang");
        const newLang = (currentLang === "en" ? "es" : "en");
        
        changeLanguage(newLang);
        this.setAttribute("data-lang", newLang);
        this.textContent = (newLang === "es" ? "English" : "Español");
        
        localStorage.setItem("selectedLang", newLang);
    });

    loadLang();
});
