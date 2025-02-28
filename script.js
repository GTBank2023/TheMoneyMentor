document.addEventListener('DOMContentLoaded', () => {
    const startQuizBtn = document.getElementById('start-quiz');
    const exploreResourcesBtn = document.getElementById('explore-resources');
    
    startQuizBtn.addEventListener('click', () => {
        showSection('quiz-section');
    });
    
    exploreResourcesBtn.addEventListener('click', () => {
        showSection('resources-section');
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Placeholder functions for other tools
function initSavingsTracker() {
    // Initialize Savings Tracker functionality
}

function initFinancialTipGenerator() {
    // Initialize Financial Tip Generator functionality
}

// Call initialization functions as needed
