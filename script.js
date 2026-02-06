// Custom GSAP Scroll Implementation for CV Lik
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const mainWrapper = document.getElementById('main-wrapper');
    const templatesContainer = document.querySelector('#templates-container');
    const templates = document.querySelectorAll('.cv-template');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    // Hide Scroll Indicator when reaching Packages (Both Desktop & Mobile)
    if (scrollIndicator) {
        ScrollTrigger.create({
            trigger: "#packages",
            start: "top 80%",
            onEnter: () => gsap.to(scrollIndicator, { autoAlpha: 0, duration: 0.5 }),
            onLeaveBack: () => gsap.to(scrollIndicator, { autoAlpha: 1, duration: 0.5 })
        });
    }

    // Initial Reveal for Hero Text
    gsap.to('.text-container', {
        autoAlpha: 1,
        y: 0,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.to('.scroll-indicator', {
        autoAlpha: 0.8,
        duration: 1,
        delay: 0.8
    });

    // Gradient backgrounds: Hero + 5 Templates (Dark, Green, Pink, Orange, Purple, Blue)
    const gradients = [
        "#1A1A1A", // Hero - Dark background
        "radial-gradient(at center center, #31D677 30%, #259B57 72%)", // Template 1 - Green
        "radial-gradient(at center center, #FF4F78 40%, #D92A54 72%)", // Template 2 - Pink
        "radial-gradient(at center center, #FFA94D 40%, #FF7E3D 72%)", // Template 3 - Orange
        "radial-gradient(at center center, #A259FF 0%, #6A0DAD 72%)",   // Template 4 - Purple
        "radial-gradient(at center center, #2196F3 30%, #1565C0 72%)"  // Template 5 - Blue
    ];

    // GSAP ScrollTrigger Background Switching
    const textContainer = document.querySelector('.text-container');

    // Hero Section: Dark background when text-container is in view
    if (textContainer) {
        ScrollTrigger.create({
            trigger: textContainer,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => {
                gsap.to(mainWrapper, {
                    background: gradients[0],
                    duration: 1.2,
                    ease: "power2.inOut",
                    overwrite: "auto"
                });
            },
            onEnterBack: () => {
                gsap.to(mainWrapper, {
                    background: gradients[0],
                    duration: 1.2,
                    ease: "power2.inOut",
                    overwrite: "auto"
                });
            }
        });
    }

    // Template Background Switching
    if (templates.length > 0) {
        templates.forEach((template, index) => {
            ScrollTrigger.create({
                trigger: template,
                start: "top 60%",
                end: "bottom 40%",
                onEnter: () => {
                    if (gradients[index + 1]) { // +1 because gradients[0] is hero
                        gsap.to(mainWrapper, {
                            background: gradients[index + 1],
                            duration: 1.2,
                            ease: "power2.inOut",
                            overwrite: "auto"
                        });
                    }
                },
                onEnterBack: () => {
                    if (gradients[index + 1]) {
                        gsap.to(mainWrapper, {
                            background: gradients[index + 1],
                            duration: 1.2,
                            ease: "power2.inOut",
                            overwrite: "auto"
                        });
                    }
                }
            });
        });

        // Touch/Hover Interaction Listeners (Mobile & Desktop)
        templates.forEach((card, index) => {
            const updateTheme = () => {
                if (gradients[index + 1]) {
                    gsap.to(mainWrapper, {
                        background: gradients[index + 1],
                        duration: 1.2,
                        ease: "power2.inOut",
                        overwrite: "auto"
                    });
                }
            };

            // Desktop hover
            if (window.innerWidth >= 1024) {
                card.addEventListener('mouseenter', updateTheme);
            }

            // Mobile touch (doesn't fight with ScrollTrigger due to overwrite: "auto")
            card.addEventListener('touchstart', (e) => {
                updateTheme();
            }, { passive: true });
        });
    }

    // VERTICAL Scroll Implementation for Hero (Desktop & Mobile)
    if (templates.length > 0) {

        // Hero Text Fade Out on Scroll
        gsap.to(".text-container", {
            scrollTrigger: {
                trigger: ".templates-view",
                start: "top top",
                end: "20% top",
                scrub: true,
            },
            autoAlpha: 0,
            y: -50,
            duration: 0.5
        });

        // Interactive Polish for Desktop
        templates.forEach((card, index) => {
            if (window.innerWidth >= 1024) {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    // Enhanced tilt intensity
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;

                    // Dynamic glare effect based on position
                    const glareX = (x / rect.width) * 100;
                    const glareY = (y / rect.height) * 100;

                    gsap.to(card, {
                        rotateX: rotateX,
                        rotateY: rotateY,
                        scale: 1.05,
                        duration: 0.4,
                        ease: "power2.out",
                        transformPerspective: 1000,
                        transformOrigin: "center center",
                        boxShadow: `0 ${30 + Math.abs(rotateX) * 2}px ${60 + Math.abs(rotateY) * 2}px rgba(0,0,0,0.4)`
                    });

                    // Subtle image shift for glare effect
                    const img = card.querySelector('.template-preview');
                    if (img) {
                        gsap.to(img, {
                            x: (x - centerX) / 15,
                            y: (y - centerY) / 15,
                            scale: 1.1,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    }
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "elastic.out(1, 0.5)",
                        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)"
                    });

                    const img = card.querySelector('.template-preview');
                    if (img) {
                        gsap.to(img, {
                            x: 0,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            ease: "power2.out"
                        });
                    }
                });
            }
        });
    }

    gsap.set('.text-container', { autoAlpha: 1, y: 0 });
    gsap.set('.scroll-indicator', { autoAlpha: 0.8 });

    // Refresh ScrollTrigger on window resize to fix desktop layout shifts
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });

    // Before/After Slider Logic
    const slider = document.getElementById('cv-slider');
    if (slider) {
        const afterImage = slider.querySelector('.after');
        const handle = slider.querySelector('.slider-handle');
        let isResizing = false;

        const setSliderPosition = (x) => {
            const rect = slider.getBoundingClientRect();
            let position = ((x - rect.left) / rect.width) * 100;
            position = Math.max(0, Math.min(100, position));

            if (afterImage) afterImage.style.clipPath = `inset(0 0 0 ${position}%)`;
            if (handle) handle.style.left = `${position}%`;
        };

        const handleStart = (e) => { isResizing = true; handleMove(e); };
        const handleEnd = () => { isResizing = false; };
        const handleMove = (e) => {
            if (!isResizing) return;
            const x = (e.type === 'touchmove' || e.type === 'touchstart') ? e.touches[0].clientX : e.clientX;
            setSliderPosition(x);
        };

        slider.addEventListener('mousedown', handleStart);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('mousemove', handleMove);

        slider.addEventListener('touchstart', handleStart, { passive: true });
        window.addEventListener('touchend', handleEnd);
        window.addEventListener('touchmove', handleMove, { passive: false });

        // Initial Position (Center)
        const initSlider = () => {
            const rect = slider.getBoundingClientRect();
            setSliderPosition(rect.left + rect.width / 2);
        };

        window.addEventListener('load', initSlider);
        window.addEventListener('resize', initSlider);
        // Backup timeout
        setTimeout(initSlider, 1000);
    }

    // Force ScrollTrigger refresh on load
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });

    // Animate stat numbers
    document.querySelectorAll('.stat-number').forEach(stat => {
        ScrollTrigger.create({
            trigger: stat,
            start: 'top 90%',
            onEnter: () => {
                const finalString = stat.textContent;
                let numericValue = parseFloat(finalString.replace(/[^\d.]/g, ''));
                const isPercentage = finalString.includes('%');
                const isRating = finalString.includes('★');
                const isTime = finalString.includes('h');
                const isPlus = finalString.includes('+');

                const obj = { n: 0 };
                gsap.to(obj, {
                    n: numericValue,
                    duration: 1.5,
                    ease: "power2.out",
                    onUpdate: () => {
                        if (isPercentage) {
                            stat.textContent = Math.round(obj.n) + '%';
                        } else if (isRating) {
                            stat.textContent = obj.n.toFixed(1) + '★';
                        } else if (isTime) {
                            stat.textContent = Math.round(obj.n) + 'h';
                        } else if (isPlus) {
                            stat.textContent = Math.round(obj.n) + '+';
                        } else {
                            stat.textContent = Math.round(obj.n);
                        }
                    }
                });
            }
        });
    });

    // Problem Cards Animation
    gsap.to('.problem-card', {
        scrollTrigger: {
            trigger: '.problem-section',
            start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12
    });

    // Stats Grid Animation
    gsap.to('.stat-item', {
        scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
        },
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1
    });

    // Package Cards Animation
    gsap.to('.package-card', {
        scrollTrigger: {
            trigger: '.packages-section',
            start: 'top 80%'
        },
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12
    });

    // Process Steps Animation
    gsap.to('.process-step', {
        scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12
    });

    // Download Section Animation
    gsap.to('.download-content', {
        scrollTrigger: {
            trigger: '.download-section',
            start: 'top 80%'
        },
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out"
    });

    // FAQ Animation
    gsap.to('.faq-item', {
        scrollTrigger: {
            trigger: '.faq-section',
            start: 'top 80%'
        },
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('span');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.textContent = '+';
            } else {
                document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
                document.querySelectorAll('.faq-question span').forEach(i => i.textContent = '+');
                answer.style.display = 'block';
                icon.textContent = '−';
            }
        });
    });

    // Currency Toggle Logic
    const currencyToggles = document.querySelectorAll('.currency-toggle-input');
    const priceElements = document.querySelectorAll('.package-price');

    function updatePrices(isUSD, sourceToggle = null) {
        currencyToggles.forEach(toggle => {
            if (toggle !== sourceToggle) toggle.checked = isUSD;
        });

        gsap.to(priceElements, {
            opacity: 0,
            y: 5,
            duration: 0.2,
            onComplete: () => {
                priceElements.forEach(el => {
                    const mad = el.getAttribute('data-mad');
                    const usd = el.getAttribute('data-usd');
                    const span = el.querySelector('span');
                    if (isUSD) {
                        el.childNodes[0].textContent = usd + ' ';
                        span.textContent = 'USD';
                    } else {
                        el.childNodes[0].textContent = mad + ' ';
                        span.textContent = 'MAD';
                    }
                });
                gsap.to(priceElements, { opacity: 1, y: 0, duration: 0.3, stagger: 0.05 });
            }
        });
        localStorage.setItem('preferredCurrency', isUSD ? 'USD' : 'MAD');
    }

    const savedCurrency = localStorage.getItem('preferredCurrency');
    const isUSDInitial = savedCurrency === 'USD';
    currencyToggles.forEach(toggle => {
        toggle.checked = isUSDInitial;
        toggle.addEventListener('change', (e) => updatePrices(e.target.checked, e.target));
    });
    if (isUSDInitial) updatePrices(true);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile Touch-to-Reveal for PDF Preview Buttons
    if (window.innerWidth <= 768) {
        const templates = document.querySelectorAll('.cv-template');

        // Deactivate all templates
        const deactivateAll = () => {
            templates.forEach(template => {
                template.classList.remove('touch-active');
            });
        };

        // Touch handler for each template
        templates.forEach(template => {
            template.addEventListener('touchstart', (e) => {
                // Prevent if touching the preview button itself
                if (e.target.classList.contains('pdf-preview-btn') ||
                    e.target.closest('.pdf-preview-btn')) {
                    return;
                }

                e.stopPropagation();

                // If this template is already active, keep it active
                const isActive = template.classList.contains('touch-active');

                // Deactivate all others first
                deactivateAll();

                // Toggle current template
                if (!isActive) {
                    template.classList.add('touch-active');
                }
            }, { passive: false });
        });

        // Tap anywhere else to hide all buttons
        document.addEventListener('touchstart', (e) => {
            // Check if tap is outside all templates
            const tappedTemplate = e.target.closest('.cv-template');
            if (!tappedTemplate) {
                deactivateAll();
            }
        }, { passive: true });
    }

    // Back to Top Button with Scroll Progress
    const backToTopBtn = document.getElementById('back-to-top');
    const progressCircle = document.querySelector('.progress-ring-circle');

    if (backToTopBtn && progressCircle) {
        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        // Visibility control: Show after scrolling past text-container
        ScrollTrigger.create({
            trigger: '.text-container',
            start: 'bottom top',
            onEnter: () => backToTopBtn.classList.add('visible'),
            onLeaveBack: () => backToTopBtn.classList.remove('visible')
        });

        // Progress ring animation synced with scroll
        gsap.to(progressCircle, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3 // Smooth scrubbing
            }
        });

        // Click handler: Smooth scroll to top
        backToTopBtn.addEventListener('click', () => {
            gsap.to(window, {
                scrollTo: { y: 0, autoKill: false },
                duration: 1.5,
                ease: 'power2.inOut'
            });
        });
    }
});

// Download Guide functionality
function downloadGuide() {
    const guideContent = `CV LIK - REMOTE JOB GUIDE\n==========================\n1. ATS Optimization Tips\n2. Remote Positioning\n3. Interview Prep\n4. Moroccan Talent\n\nVisit us at CV Lik to get started!`;
    const blob = new Blob([guideContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_Lik_Remote_Job_Guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('Your Remote Job Guide is downloading!');
}
