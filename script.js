document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const loadingOverlay = document.getElementById('loading-overlay');
    const percentageElement = document.getElementById('loading-percentage');
    const sections = document.querySelectorAll('.section:not(#hero)');
    const navLinks = document.querySelectorAll('.bottom-nav a');
    const cursor = document.querySelector('.custom-cursor');
    const body = document.body;
    const skillsGrid = document.getElementById('skils-grid');
    const yearSpan = document.getElementById('year');
    const heroSection = document.getElementById('hero');

    // Contact Form Elements
    const contactForm = document.getElementById('contact-form');
    const contactButton = document.getElementById('contact-button');
    const formSteps = document.querySelectorAll('.form-step');
    const contactIntro = document.getElementById('contact-intro');
    const contactSuccess = document.getElementById('contact-success');
    const contactNameInput = document.getElementById('contact-name');
    const contactEmailInput = document.getElementById('contact-email');
    const contactMessageInput = document.getElementById('contact-message');


    // --- Configuration ---
    const skillNames = 'html,css,js,typescript,tailwind,bootstrap,nextdotjs,react,nodejs,supabase,postgresql,mongodb,openai,googlegemini,ollama,webassembly,github,git,googlecloud,jira,replit,v0,miro,canva,jquery,wix,linux,kalilinux'.split(',')
    const skillsFolderPath = 'assets/svgs/skills/';

    // --- Form State ---
    let currentStep = 1;
    const totalSteps = formSteps.length; // Should be 3
    let contactFormData = { name: '', email: '', message: '' };


    // --- Loading Screen ---
    let currentPercentage = 0;
    const loadingInterval = setInterval(() => {
        currentPercentage += Math.floor(Math.random() * 5) + 1;
        if (currentPercentage >= 100) {
            currentPercentage = 100;
            clearInterval(loadingInterval);
            setTimeout(() => {
                if (loadingOverlay) loadingOverlay.classList.add('hidden');
                setupPage();
            }, 300);
        }
        if (percentageElement) percentageElement.textContent = currentPercentage;
    }, 80);

    // --- Initial Setup ---
    function setupPage() {
        populateSkills();
        initializeCursorHoverEffects();
        initializeSpotlightEffect();
        initializeIntersectionObserver();
        checkInitialSectionVisibility();
        updateFooterYear();
        initializeContactForm(); // Initialize the multi-step form
        if (!isTouchDevice()) { body.style.cursor = 'none'; }
    }

    // --- Helper: Check for Touch Device ---
    function isTouchDevice() {
        return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    }

    // --- Dynamic Skill Loading ---
    function populateSkills() {
        // ... (populateSkills function remains the same)
        if (skillsGrid && skillNames.length > 0) {
            skillsGrid.innerHTML = ''; // Clear placeholder content

            skillNames.forEach(skillName => {
                let skillTitle = skillName.charAt(0).toUpperCase() + skillName.slice(1);
                skillTitle = skillTitle.replace('js', 'JS').replace('css', 'CSS').replace('html', 'HTML');

                const skillDiv = document.createElement('div');
                skillDiv.classList.add('p-2');
                skillDiv.title = skillTitle;

                const skillImg = document.createElement('img');
                skillImg.src = `${skillsFolderPath}${skillName}.svg`;
                skillImg.alt = `${skillTitle} Logo`;
                skillImg.classList.add('skill-logo', 'w-16', 'h-16');
                skillImg.loading = 'lazy';

                skillDiv.appendChild(skillImg);
                skillsGrid.appendChild(skillDiv);
            });

        } else if (skillsGrid) {
            console.warn("Skills grid found, but no skill names defined or path incorrect.");
            skillsGrid.innerHTML = '<p class="text-gray-400 text-sm">Could not load skills.</p>';
        }
    }

    // --- Custom Cursor Logic ---
    function handleMouseEnter(event) { /* ... remains the same ... */ if (cursor) { cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1.5)`; } }
    function handleMouseLeave(event) { /* ... remains the same ... */ if (cursor) { cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1)`; } }
    function initializeCursorHoverEffects() { /* ... remains the same ... */
        if (!cursor || isTouchDevice()) return;
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .skill-logo, .project-card');
        interactiveElements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });
        window.addEventListener('mousemove', e => {
            requestAnimationFrame(() => {
                if (cursor) {
                    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) ${cursor.style.transform.includes('scale(1.5)') ? 'scale(1.5)' : 'scale(1)'}`;
                }
            });
        });
     }

    // --- Spotlight Effect ---
    function initializeSpotlightEffect() { /* ... remains the same ... */
        if (isTouchDevice()) {
             body.style.cursor = 'auto';
             if(cursor) cursor.style.display = 'none';
            return;
        }
        window.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
                document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
            });
        });
        document.body.addEventListener('mouseleave', () => { /* ... */ document.documentElement.style.setProperty('--cursor-x', '-1000px'); document.documentElement.style.setProperty('--cursor-y', '-1000px'); });
        document.body.addEventListener('mouseenter', (e) => { /* ... */ document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`); document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`); });
    }

    // --- Intersection Observer ---
    let observer;
    function initializeIntersectionObserver() { /* ... remains the same ... */
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.4 };
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const targetId = entry.target.getAttribute('id');
                const correspondingNavLink = document.querySelector(`.bottom-nav a[href="#${targetId}"]`);
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (correspondingNavLink) {
                        navLinks.forEach(link => link.classList.remove('active'));
                        correspondingNavLink.classList.add('active');
                    }
                } else { /* Optional: entry.target.classList.remove('visible'); */ }
            });
        }, observerOptions);
        document.querySelectorAll('.section').forEach(section => { observer.observe(section); });
    }
    function checkInitialSectionVisibility() { /* ... remains the same ... */
        if (heroSection) heroSection.classList.add('visible');
        const heroNavLink = document.querySelector('.bottom-nav a[href="#hero"]');
        const heroRect = heroSection ? heroSection.getBoundingClientRect() : null;
        if (heroNavLink && heroRect && heroRect.top <= window.innerHeight * 0.5 && heroRect.bottom >= 0) {
             navLinks.forEach(link => link.classList.remove('active'));
            heroNavLink.classList.add('active');
        } else if (heroNavLink) { heroNavLink.classList.remove('active'); }
    }

    // --- Footer Year ---
    function updateFooterYear(){ /* ... remains the same ... */ if (yearSpan) yearSpan.textContent = new Date().getFullYear(); }

    // --- Contact Form Multi-Step Logic ---

    function initializeContactForm() {
        if (!contactForm || !contactButton) return; // Exit if elements not found

        updateFormUI(); // Set initial state (show step 1)

        contactButton.addEventListener('click', handleFormStep);
    }

    function handleFormStep(event) {
        event.preventDefault(); // Prevent default submission

        if (!validateCurrentStep()) {
            return; // Stop if validation fails
        }

        // Store data from the current step
        saveCurrentStepData();

        // Move to the next step or submit
        if (currentStep < totalSteps) {
            currentStep++;
            updateFormUI();
        } else {
            // Last step - "Send Message" was clicked
            submitForm();
        }
    }

    function updateFormUI() {
        formSteps.forEach((step, index) => {
            const stepNumber = index + 1;
            const errorElement = step.querySelector('.form-error');
            if (errorElement) errorElement.textContent = ''; // Clear previous errors

            if (stepNumber === currentStep) {
                step.classList.add('active');
                // Focus the input of the current step
                const input = step.querySelector('input, textarea');
                if (input) {
                    // Timeout helps ensure the element is visible before focusing
                    setTimeout(() => input.focus(), 50);
                 }
            } else {
                step.classList.remove('active');
            }
        });

        // Update button text
        if (currentStep < totalSteps) {
            contactButton.innerHTML = 'Next Step →';
        } else {
            contactButton.innerHTML = 'Send Message →';
        }
    }

    function validateCurrentStep() {
        let isValid = true;
        const currentStepElement = document.getElementById(`form-step-${currentStep}`);
        if (!currentStepElement) return false;

        const input = currentStepElement.querySelector('input, textarea');
        const errorElement = currentStepElement.querySelector('.form-error');
        errorElement.textContent = ''; // Clear previous error

        if (!input) return false; // Should not happen

        // Basic required validation
        if (!input.value.trim()) {
            errorElement.textContent = 'This field is required.';
            isValid = false;
        }
        // Email validation for step 2
        else if (currentStep === 2 && input.type === 'email') {
             // Simple regex for basic email format check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
                 errorElement.textContent = 'Please enter a valid email address.';
                 isValid = false;
            }
        }
         // Add more specific validation if needed

        return isValid;
    }

    function saveCurrentStepData() {
        if (currentStep === 1 && contactNameInput) contactFormData.name = contactNameInput.value.trim();
        else if (currentStep === 2 && contactEmailInput) contactFormData.email = contactEmailInput.value.trim();
        else if (currentStep === 3 && contactMessageInput) contactFormData.message = contactMessageInput.value.trim();
    }

    function submitForm() {
        // In a real application, you'd send `contactFormData` to your server here
        // using fetch() or XMLHttpRequest.

        console.log('Form Data Submitted (Simulated):', contactFormData);

        // Simulate success
        contactForm.style.display = 'none'; // Hide the form
        contactIntro.style.display = 'none'; // Hide intro text
        contactSuccess.classList.remove('hidden'); // Show success message

        setTimeout(() => {
            contactSuccess.classList.add('hidden');
            contactIntro.style.display = 'block';
            contactForm.style.display = 'block';
            currentStep = 1;
            contactFormData = { name: '', email: '', message: '' };
            contactNameInput.value = '';
            contactEmailInput.value = '';
            contactMessageInput.value = '';
            updateFormUI();
        }, 5000); // Reset after 5 seconds
    }


    // --- Trigger Initial Setup ---
    // setupPage() is called after loading screen finishes

}); // --- END OF DOMContentLoaded ---