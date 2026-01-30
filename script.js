// Custom GSAP Scroll Implementation
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Hide the text-container when scrolling past hero
    gsap.to(".text-container", {
        scrollTrigger: {
            trigger: "#main-wrapper",
            start: "bottom 95%",
            end: "bottom 70%",
            scrub: true,
        },
        opacity: 0,
        y: "-=50",
        scale: 0.9,
        pointerEvents: 'none'
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
    gsap.set(templates[0], { opacity: 1, scale: 1 });

    // Initial text container animation
    gsap.from('.text-container', {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

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
            duration: 0.6,
            ease: "power2.out"
        });

        // Animate in new template
        gsap.fromTo(newTemplate,
            { scale: 0.5, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
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

    // Rest of the landing page animations
    // Problem Cards Animation
    gsap.to('.problem-card', {
        scrollTrigger: {
            trigger: '.problem-section',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // Stats Animation
    gsap.to('.stat-item', {
        scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%'
        },
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15
    });

    // Animate stat numbers
    document.querySelectorAll('.stat-number').forEach(stat => {
        ScrollTrigger.create({
            trigger: stat,
            start: 'top 85%',
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
                    duration: 2,
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

    // Package Cards Animation
    gsap.to('.package-card', {
        scrollTrigger: {
            trigger: '.packages-section',
            start: 'top 80%'
        },
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2
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
        stagger: 0.2
    });

    // Download Section Animation
    gsap.to('.download-content', {
        scrollTrigger: {
            trigger: '.download-section',
            start: 'top 80%'
        },
        opacity: 1,
        scale: 1,
        duration: 1
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
        stagger: 0.15
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
