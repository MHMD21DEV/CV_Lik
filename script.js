// Custom GSAP Scroll Implementation
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Hide the text-container when scrolling past hero - bidirectional
    ScrollTrigger.create({
        trigger: "#main-wrapper",
        start: "50px top",
        end: "400px top",
        scrub: true,
        onUpdate: (self) => {
            const progress = self.progress;
            gsap.set('.text-container', {
                autoAlpha: 1 - progress,
                y: -100 * progress,
                scale: 1 - (0.05 * progress),
                pointerEvents: progress > 0.5 ? 'none' : 'auto'
            });
            gsap.set('.scroll-indicator', {
                autoAlpha: 0.7 * (1 - progress)
            });
        }
    });

    // Gradient backgrounds for each template
    const gradients = [
        "radial-gradient(at center center, #31D677 30%, #259B57 72%)", // Green - Modern
        "radial-gradient(at center center, #FF4F78 40%, #D92A54 72%)", // Red/Pink - Creative
        "radial-gradient(at center center, #FFA94D 40%, #FF7E3D 72%)", // Orange - Executive
        "radial-gradient(at center center, #A259FF 0%, #6A0DAD 72%)",   // Purple - Tech
        "radial-gradient(at center center, #2196F3 30%, #1565C0 72%)"  // Blue - Corporate
    ];

    const templates = document.querySelectorAll('.cv-template');
    const mainWrapper = document.getElementById('main-wrapper');

    let currentIndex = 0;
    let isAnimating = false;

    // Show first template
    gsap.set(templates[0], { opacity: 1, scale: 1, pointerEvents: 'auto' });
    templates.forEach((t, i) => { if (i !== 0) gsap.set(t, { pointerEvents: 'none' }); });

    // Force ScrollTrigger refresh to clear potential DOM caching from previous sessions
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });

    // Initial state based on scroll position
    const initHeroElements = () => {
        if (window.scrollY > 100) {
            // Already scrolled down - hide elements immediately
            gsap.set('.text-container', { autoAlpha: 0, y: -100, scale: 0.95, pointerEvents: 'none' });
            gsap.set('.scroll-indicator', { autoAlpha: 0 });
        } else {
            // At top - show elements with animation
            gsap.to('.text-container', {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: 0.2,
                ease: "power2.out"
            });
            gsap.to('.scroll-indicator', {
                autoAlpha: 0.7,
                duration: 0.8,
                delay: 0.4
            });
        }
    };

    initHeroElements();

    // Function to switch templates
    function switchTemplate(newIndex) {
        if (isAnimating || newIndex === currentIndex || newIndex < 0 || newIndex >= templates.length) {
            return;
        }

        isAnimating = true;

        const oldTemplate = templates[currentIndex];
        const newTemplate = templates[newIndex];

        // Change background gradient
        gsap.to(mainWrapper, {
            backgroundImage: gradients[newIndex],
            duration: 0.6,
            ease: "power2.inOut"
        });

        // Animate out old template
        gsap.to(oldTemplate, {
            scale: 0.5,
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.4, // Reduced from 0.6
            ease: "power2.out"
        });

        // Animate in new template
        gsap.fromTo(newTemplate,
            { scale: 0.5, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                pointerEvents: 'auto',
                duration: 0.4, // Reduced from 0.6
                ease: "power2.out",
                onComplete: () => {
                    isAnimating = false;
                }
            }
        );

        currentIndex = newIndex;

        // Hide scroll indicator after first scroll
        if (currentIndex > 0) {
            gsap.to('.scroll-indicator', {
                opacity: 0,
                duration: 0.5
            });
        }
    }

    // Wheel event handler
    let wheelTimeout;
    mainWrapper.addEventListener('wheel', (e) => {
        // Only prevent default if we are within the hero and scrolling between templates
        if (window.scrollY < 10) {
            if ((e.deltaY > 0 && currentIndex < templates.length - 1) || (e.deltaY < 0 && currentIndex > 0)) {
                e.preventDefault();
                clearTimeout(wheelTimeout);
                wheelTimeout = setTimeout(() => {
                    if (e.deltaY > 0) {
                        switchTemplate(currentIndex + 1);
                    } else {
                        switchTemplate(currentIndex - 1);
                    }
                }, 50);
            }
        }
    }, { passive: false });

    // Touch events for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    mainWrapper.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    mainWrapper.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (window.scrollY < 10) {
            if (touchStartY - touchEndY > swipeThreshold && currentIndex < templates.length - 1) {
                switchTemplate(currentIndex + 1);
            } else if (touchEndY - touchStartY > swipeThreshold && currentIndex > 0) {
                switchTemplate(currentIndex - 1);
            }
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (window.scrollY < 10) {
            if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentIndex < templates.length - 1) {
                e.preventDefault();
                switchTemplate(currentIndex + 1);
            } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentIndex > 0) {
                e.preventDefault();
                switchTemplate(currentIndex - 1);
            }
        }
    });

    // Problem Cards Animation with Blur-to-Focus (Balanced)
    gsap.to('.problem-card', {
        scrollTrigger: {
            trigger: '.problem-section',
            start: 'top 80%', // Slightly later for more deliberate reveal
        },
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8, // Balanced duration
        ease: "power2.out",
        stagger: 0.12
    });

    // Parallax background for Problem Section
    gsap.to('.problem-section', {
        scrollTrigger: {
            trigger: '.problem-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1 // Adding scrub smoothing for a steadier feel
        },
        backgroundPosition: "50% 60%",
        ease: "none"
    });

    // Stats Animation (Balanced)
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
                    duration: 1.5, // Slightly shorter for better pace
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

    // 3D Tilt Effect for Templates
    document.querySelectorAll('.cv-template').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 12; // Slightly more subtle tilt
            const rotateY = (centerX - x) / 12;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                scale: 1.03, // More subtle zoom
                duration: 0.6,
                ease: "power2.out",
                transformPerspective: 1000
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.out"
            });
        });
    });

    // Package Cards Animation (Balanced)
    gsap.to('.package-card', {
        scrollTrigger: {
            trigger: '.packages-section',
            start: 'top 80%'
        },
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12
    });

    // Process Steps Animation (Balanced)
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

    // Download Section Animation (Balanced)
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

    // FAQ Animation (Balanced)
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
                // Close all other answers
                document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
                document.querySelectorAll('.faq-question span').forEach(i => i.textContent = '+');

                answer.style.display = 'block';
                icon.textContent = '−';
            }
        });
    });

    // Currency Toggle Logic (Shared State)
    const currencyToggles = document.querySelectorAll('.currency-toggle-input');
    const priceElements = document.querySelectorAll('.package-price');

    function updatePrices(isUSD, sourceToggle = null) {
        // Sync all toggles
        currencyToggles.forEach(toggle => {
            if (toggle !== sourceToggle) {
                toggle.checked = isUSD;
            }
        });

        // Animation for the price change
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

                gsap.to(priceElements, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: 0.05
                });
            }
        });

        localStorage.setItem('preferredCurrency', isUSD ? 'USD' : 'MAD');
    }

    // Load preference
    const savedCurrency = localStorage.getItem('preferredCurrency');
    const isUSDInitial = savedCurrency === 'USD';

    currencyToggles.forEach(toggle => {
        toggle.checked = isUSDInitial;
        toggle.addEventListener('change', (e) => {
            updatePrices(e.target.checked, e.target);
        });
    });

    if (isUSDInitial) {
        updatePrices(true);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Download functionality
function downloadGuide() {
    const guideContent = `
        CV LIK - REMOTE JOB GUIDE
        ==========================
        1. ATS Optimization Tips: Use keywords from job descriptions.
        2. Remote Positioning: Highlight your autonomy and communication skills.
        3. Interview Prep: Test your tech, lighting, and background.
        4. Moroccan Talent: Moroccan professionals are highly valued in European and US markets.
        
        Landing your dream remote job starts with a professional CV. 
        Visit us at CV Lik to get started!
    `;
    const blob = new Blob([guideContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_Lik_Remote_Job_Guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Notification or visual feedback
    alert('Your Remote Job Guide is downloading!');
}
