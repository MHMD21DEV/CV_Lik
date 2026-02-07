// Custom GSAP Scroll Implementation for CV Lik
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // --- ADVANCED MULTILINGUAL SYSTEM (Architect Refactor) ---
    const translations = {
        en: {
            "site-title": "CV Lik - Professional Resume Writing for Remote Jobs",
            "nav": {
                "explore": "/ SCROLL TO EXPLORE",
                "packages": "View Packages",
                "scroll": "Scroll"
            },
            "hero": {
                "title": "Land Your Dream Remote Job",
                "desc": "Professional CV writing optimized for ATS systems and remote positions. Stand out from generic candidates."
            },
            "problem": {
                "title": "Why Your CV Isn't Getting Interviews",
                "subtitle": "Most CVs fail before a human even sees them. Here's why.",
                "cards": {
                    "ats": { "t": "❌ Not ATS-Optimized", "p": "70% of applications are rejected by automated systems before reaching recruiters." },
                    "generic": { "t": "❌ Generic Content", "p": "Using the same CV for every job shows no effort. Recruiters spot generic templates immediately." },
                    "remote": { "t": "❌ Poor Remote Positioning", "p": "Remote jobs require specific skills presentation. Your CV isn't highlighting what remote employers want." }
                }
            },
            "stats": {
                "clients": "Clients Hired",
                "rate": "Interview Rate",
                "delivery": "Average Delivery",
                "rating": "Client Rating"
            },
            "packages": {
                "title": "Choose Your Success Path",
                "subtitle": "Invest in your career with our professional writing services.",
                "essential": {
                    "name": "Essential",
                    "features": ["Professional CV rewrite", "ATS optimization", "1 revision included", "48-hour delivery", "PDF + Word formats"]
                },
                "professional": {
                    "name": "Professional",
                    "features": ["Everything in Essential", "LinkedIn profile optimization", "Custom cover letter template", "3 revisions included", "24-hour delivery", "Interview preparation guide", "Remote job positioning"]
                },
                "premium": {
                    "name": "Premium",
                    "features": ["Everything in Professional", "Personal brand strategy", "Portfolio/website review", "5 custom cover letters", "Unlimited revisions (30 days)", "12-hour delivery", "Video interview coaching (1hr)", "Job search strategy session"]
                },
                "btn": "Get Started",
                "btn_popular": "Most Popular"
            },
            "process": {
                "title": "How It Works",
                "step1": { "t": "Upload Your CV", "p": "Share your current CV and tell us about your target roles and career goals." },
                "step2": { "t": "Professional Review", "p": "Our expert writers analyze your experience and optimize for ATS and remote positions." },
                "step3": { "t": "Receive Your CV", "p": "Get your professionally written, ATS-optimized CV ready to land interviews." },
                "step4": { "t": "Land Interviews", "p": "Apply with confidence and start getting interview callbacks from top remote companies." }
            },
            "transform": {
                "title": "See the Transformation",
                "subtitle": "From generic to interview-winning in 48 hours",
                "before": "BEFORE",
                "after": "AFTER",
                "badge": "✓ Result",
                "result": "Mrs Blue landed 5 interviews in 2 weeks at a remote US startup."
            },
            "download": {
                "title": "Get Our Free Remote Job Guide",
                "desc": "Download our comprehensive guide to landing remote positions, including ATS tips and interview strategies.",
                "btn": "Download Free Guide"
            },
            "faq": {
                "title": "Frequently Asked Questions",
                "subtitle": "Everything you need to know about our CV service.",
                "q1": { "q": "How long does it take to get my CV?", "a": "Depending on your package, it takes between 12 to 48 hours. We prioritize quality and strategic positioning." },
                "q2": { "q": "What makes your CV writing service different?", "a": "We specialize in ATS optimization and remote job positioning. Our writers have placed 500+ candidates in remote roles." },
                "q3": { "q": "What if I'm not satisfied?", "a": "All packages include revisions. We'll work with you until you're completely satisfied." }
            },
            "footer": {
                "text": "© 2026 CV Lik. Professional CV Writing for Remote Jobs.",
                "subtext": "Helping job seekers land remote positions worldwide."
            }
        },
        fr: {
            "site-title": "CV Lik - Rédaction de CV Professionnel",
            "nav": {
                "explore": "/ DÉFILER POUR EXPLORER",
                "packages": "Voir les Forfaits",
                "scroll": "Défiler"
            },
            "hero": {
                "title": "Décrochez l'Emploi de Vos Rêves",
                "desc": "Rédaction de CV professionnel optimisée pour les systèmes ATS et les postes à distance."
            },
            "problem": {
                "title": "Pourquoi Votre CV n'Obtient pas d'Entretiens",
                "subtitle": "La plupart des CV échouent avant même qu'un humain ne les voie.",
                "cards": {
                    "ats": { "t": "❌ Non Optimisé pour l'ATS", "p": "70% des candidatures sont rejetées par des systèmes automatisés." },
                    "generic": { "t": "❌ Contenu Générique", "p": "Utiliser le même CV pour chaque emploi montre un manque d'effort." },
                    "remote": { "t": "❌ Mauvais Positionnement", "p": "Les emplois à distance nécessitent une présentation spécifique des compétences." }
                }
            },
            "stats": {
                "clients": "Clients Embauchés",
                "rate": "Taux d'Entretien",
                "delivery": "Livraison Moyenne",
                "rating": "Note Client"
            },
            "packages": {
                "title": "Choisissez Votre Voie de Succès",
                "subtitle": "Investissez dans votre carrière avec nos services de rédaction.",
                "essential": {
                    "name": "Essentiel",
                    "features": ["Réécriture de CV", "Optimisation ATS", "1 révision incluse", "Livraison 48h", "Formats PDF + Word"]
                },
                "professional": {
                    "name": "Professionnel",
                    "features": ["Tout dans l'Essentiel", "Optimisation LinkedIn", "Lettre de motivation", "3 révisions incluses", "Livraison 24h", "Guide de préparation", "Positionnement à distance"]
                },
                "premium": {
                    "name": "Premium",
                    "features": ["Tout dans le Professionnel", "Stratégie de marque", "Révision de portfolio", "5 lettres personnalisées", "Révisions illimitées", "Livraison 12h", "Coaching vidéo (1h)", "Session stratégie"]
                },
                "btn": "Commencer",
                "btn_popular": "Le Plus Populaire"
            },
            "process": {
                "title": "Comment Ça Marche",
                "step1": { "t": "Téléchargez Votre CV", "p": "Partagez votre CV actuel et vos objectifs de carrière." },
                "step2": { "t": "Révision Professionnelle", "p": "Nos experts analysent et optimisent pour l'ATS et le travail à distance." },
                "step3": { "t": "Recevez Votre CV", "p": "Obtenez votre CV optimisé prêt pour les entretiens." },
                "step4": { "t": "Décrochez des Entretiens", "p": "Postulez avec confiance et obtenez des rappels des meilleures entreprises." }
            },
            "transform": {
                "title": "Voyez la Transformation",
                "subtitle": "De générique à gagnant en 48 heures",
                "before": "AVANT",
                "after": "APRÈS",
                "badge": "✓ Résultat",
                "result": "Mme Blue a décroché 5 entretiens en 2 semaines."
            },
            "download": {
                "title": "Guide Gratuit du Travail à Distance",
                "desc": "Téléchargez notre guide complet pour trouver des postes à distance.",
                "btn": "Télécharger le Guide"
            },
            "faq": {
                "title": "Questions Fréquentes",
                "subtitle": "Tout ce que vous devez savoir sur notre service.",
                "q1": { "q": "Combien de temps faut-il ?", "a": "Cela prend entre 12 et 48 heures selon votre forfait." },
                "q2": { "q": "Qu'est-ce qui rend votre service différent ?", "a": "Nous nous spécialisons dans l'optimisation ATS et le positionnement à distance." },
                "q3": { "q": "Et si je ne suis pas satisfait ?", "a": "Toutes les formules incluent des révisions jusqu'à satisfaction." }
            },
            "footer": {
                "text": "© 2026 CV Lik. Rédaction de CV Professionnel.",
                "subtext": "Aider les chercheurs d'emploi à trouver des postes à distance."
            }
        },
        es: {
            "site-title": "CV Lik - Redacción de CV Profesional",
            "nav": {
                "explore": "/ DESPLAZAR PARA EXPLORAR",
                "packages": "Ver Paquetes",
                "scroll": "Desplazar"
            },
            "hero": {
                "title": "Consigue el Trabajo Remoto de tus Sueños",
                "desc": "Redacción de CV profesional optimizada para sistemas ATS y puestos remotos."
            },
            "problem": {
                "title": "Por qué tu CV no Consigue Entrevistas",
                "subtitle": "La mayoría de los CV fallan antes de que un humano los vea.",
                "cards": {
                    "ats": { "t": "❌ No Optimizado para ATS", "p": "El 70% de las solicitudes son rechazadas por sistemas automáticos." },
                    "generic": { "t": "❌ Contenido Genérico", "p": "Usar el mismo CV para cada trabajo muestra falta de esfuerzo." },
                    "remote": { "t": "❌ Mal Posicionamiento", "p": "Los trabajos remotos requieren una presentación específica." }
                }
            },
            "stats": {
                "clients": "Clientes Contratados",
                "rate": "Tasa de Entrevistas",
                "delivery": "Entrega Promedio",
                "rating": "Calificación"
            },
            "packages": {
                "title": "Elige tu Camino al Éxito",
                "subtitle": "Invierte en tu carrera con nuestros servicios profesionales.",
                "essential": {
                    "name": "Esencial",
                    "features": ["Reescritura profesional", "Optimización ATS", "1 revisión incluida", "Entrega 48h", "Formatos PDF + Word"]
                },
                "professional": {
                    "name": "Profesional",
                    "features": ["Todo en Esencial", "Optimización LinkedIn", "Carta de presentación", "3 revisiones", "Entrega 24h", "Guía de entrevista", "Posicionamiento remoto"]
                },
                "premium": {
                    "name": "Premium",
                    "features": ["Todo en Profesional", "Estrategia de marca", "Revisión de portafolio", "5 cartas personalizadas", "Revisiones ilimitadas", "Entrega 12h", "Coaching video (1h)", "Sesión estratégica"]
                },
                "btn": "Empezar",
                "btn_popular": "Más Popular"
            },
            "process": {
                "title": "Cómo Funciona",
                "step1": { "t": "Sube Tu CV", "p": "Comparte tu CV actual y tus metas de carrera." },
                "step2": { "t": "Revisión Profesional", "p": "Expertos analizan y optimizan para ATS y trabajo remoto." },
                "step3": { "t": "Recibe Tu CV", "p": "Obtén tu CV optimizado listo para entrevistas." },
                "step4": { "t": "Consigue Entrevistas", "p": "Postula con confianza y recibe llamadas de empresas top." }
            },
            "transform": {
                "title": "Mira la Transformación",
                "subtitle": "De genérico a ganador en 48 horas",
                "before": "ANTES",
                "after": "DESPUÉS",
                "badge": "✓ Resultado",
                "result": "La Sra. Blue consiguió 5 entrevistas en 2 semanas."
            },
            "download": {
                "title": "Guía Gratuita de Trabajo Remoto",
                "desc": "Descarga nuestra guía completa para conseguir puestos remotos.",
                "btn": "Descargar Guía"
            },
            "faq": {
                "title": "Preguntas Frecuentes",
                "subtitle": "Todo lo que necesitas saber sobre nuestro servicio.",
                "q1": { "q": "¿Cuánto tiempo se tarda?", "a": "Tarda entre 12 y 48 horas dependiendo del paquete." },
                "q2": { "q": "¿Qué hace que su servicio sea diferente?", "a": "Especialistas en ATS y mercado remoto internacional." },
                "q3": { "q": "¿Qué pasa si no estoy satisfecho?", "a": "Incluimos revisiones ilimitadas hasta que estés conforme." }
            },
            "footer": {
                "text": "© 2026 CV Lik. Redacción de CV Profesional.",
                "subtext": "Ayudando a candidatos a conseguir puestos remotos."
            }
        },
        ara: {
            "site-title": "سي في ليك - كتابة سيرة ذاتية احترافية",
            "nav": {
                "explore": "/ تمرير للاستكشاف",
                "packages": "عرض الباقات",
                "scroll": "تمرير"
            },
            "hero": {
                "title": "احصل على وظيفة أحلامك عن بعد",
                "desc": "كتابة سيرة ذاتية احترافية محسنة لأنظمة ATS والوظائف عن بعد."
            },
            "problem": {
                "title": "لماذا لا تحصل سيرتك الذاتية على مقابلات؟",
                "subtitle": "تغشل معظم السير الذاتية حتى قبل أن يراها البشر.",
                "cards": {
                    "ats": { "t": "❌ غير محسنة لأنظمة ATS", "p": "يتم رفض 70% من الطلبات بواسطة الأنظمة الآلية." },
                    "generic": { "t": "❌ محتوى تقليدي", "p": "استخدام نفس السيرة لكل وظيفة يظهر عدم اهتمام." },
                    "remote": { "t": "❌ وضعية ضعيفة", "p": "تتطلب وظائف العمل عن بعد مهارات محددة." }
                }
            },
            "stats": {
                "clients": "عملاء تم توظيفهم",
                "rate": "تعدل المقابلات",
                "delivery": "متوسط التسليم",
                "rating": "تقييم العملاء"
            },
            "packages": {
                "title": "اختر مسارك للنجاح",
                "subtitle": "استثمر في مستقبلك مع خدماتنا الاحترافية.",
                "essential": {
                    "name": "الأساسية",
                    "features": ["إعادة كتابة احترافية", "تحسين أنظمة ATS", "تعديل واحد مشمول", "تسليم خلال 48 ساعة", "صيغ PDF + Word"]
                },
                "professional": {
                    "name": "الاحترافية",
                    "features": ["كل ما في الأساسية", "تحسين ملف LinkedIn", "رسالة تغطية مخصصة", "3 تعديلات مشمولة", "تسليم خلال 24 ساعة", "دليل التحضير للمقابلة", "تحديد المواقع عن بعد"]
                },
                "premium": {
                    "name": "البريميوم",
                    "features": ["كل ما في الاحترافية", "استراتيجية العلامة التجارية", "مراجعة الموقع الشخصي", "5 رسائل تغطية", "تعديلات غير محدودة", "تسليم خلال 12 ساعة", "تدريب فيديو (ساعة)", "جلسة استراتيجية"]
                },
                "btn": "ابدأ الآن",
                "btn_popular": "الأكثر طلباً"
            },
            "process": {
                "title": "كيف نعمل",
                "step1": { "t": "ارفع سيرتك الذاتية", "p": "شارك سيرتك الذاتية الحالية وأهدافك المهنية." },
                "step2": { "t": "مراجعة احترافية", "p": "خبراؤنا يحللون ويحسنون للـ ATS والعمل عن بعد." },
                "step3": { "t": "استلم سيرتك", "p": "احصل على سيرتك الذاتية المحسنة والجاهزة." },
                "step4": { "t": "احصل على مقابلات", "p": "تقدم للوظائف بثقة واحصل على ردود من كبرى الشركات." }
            },
            "transform": {
                "title": "شاهد التحول",
                "subtitle": "من سيرة عادية إلى سيرة فائزة خلال 48 ساعة",
                "before": "قبل",
                "after": "بعد",
                "badge": "✓ النتيجة",
                "result": "حصلت السيدة بلو على 5 مقابلات في أسبوعين."
            },
            "download": {
                "title": "دليل العمل عن بعد المجاني",
                "desc": "حمل دليلنا الشامل للحصول على وظائف عن بعد.",
                "btn": "تحميل الدليل"
            },
            "faq": {
                "title": "الأسئلة الشائعة",
                "subtitle": "كل ما تحتاج لمعرفته حول خدماتنا.",
                "q1": { "q": "كم يستغرق استلام سيرتي الذاتية؟", "a": "تستغرق العملية ما بين 12 إلى 48 ساعة." },
                "q2": { "q": "ما الذي يميز خدمتنا؟", "a": "نحن متخصصون في أنظمة ATS والوظائف الدولية." },
                "q3": { "q": "ماذا لو لم أكن راضياً؟", "a": "جميع الباقات تشمل مراجعات حتى الرضا التام." }
            },
            "footer": {
                "text": "© 2026 سي في ليك. كتابة سيرة ذاتية احترافية.",
                "subtext": "مساعدة الباحثين عن عمل في الحصول على وظائف عن بعد."
            }
        }
    };

    const langSwitcher = document.querySelector('.lang-switcher');
    const langCurrent = document.querySelector('.lang-current');
    const langOptions = document.querySelector('.lang-options');
    const langCurrentText = document.getElementById('current-lang-text');
    const langOpts = document.querySelectorAll('.lang-opt');

    // Helper: Resolve nested path (e.g., "packages.premium.name")
    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj || {});
    }

    // Update Page Content (Senior Architect Core)
    function updateContent(lang) {
        const dict = translations[lang];
        if (!dict) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const path = el.getAttribute('data-i18n');
            const value = getNestedValue(dict, path);

            if (value !== undefined) {
                if (el.tagName === 'TITLE') {
                    document.title = value;
                } else if (Array.isArray(value)) {
                    // Logic to update list items (mapped to index or existing structure)
                    const items = el.querySelectorAll('li');
                    value.forEach((text, index) => {
                        if (items[index]) items[index].textContent = text;
                    });
                } else {
                    // Standard text targeting
                    // Check if targeting a child span for FAQ icons
                    const iconSpan = el.querySelector('span');
                    if (iconSpan && el.classList.contains('faq-question')) {
                        const icon = iconSpan.textContent; // Preserving the [+] icon
                        el.textContent = value;
                        el.appendChild(iconSpan); // Put the icon back
                    } else {
                        el.textContent = value;
                    }
                }
            }
        });

        // Direction (RTL support)
        const isRTL = lang === 'ara';
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.body.classList.toggle('lang-ara', isRTL);

        // Update active class in options
        langOpts.forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        langCurrentText.textContent = lang.toUpperCase();
    }

    // GSAP Dropdown Animation
    function toggleDropdown(show) {
        if (show) {
            langSwitcher.classList.add('active');
            gsap.fromTo(langOptions,
                { opacity: 0, y: -10, scale: 0.95, visibility: 'hidden' },
                {
                    opacity: 1, y: 0, scale: 1, visibility: 'visible',
                    duration: 0.6, ease: "elastic.out(1, 0.75)",
                    pointerEvents: 'all'
                }
            );
        } else {
            gsap.to(langOptions, {
                opacity: 0, y: -10, scale: 0.95,
                duration: 0.3, ease: "power2.in",
                onComplete: () => {
                    langSwitcher.classList.remove('active');
                    gsap.set(langOptions, { visibility: 'hidden', pointerEvents: 'none' });
                }
            });
        }
    }

    // Initialize Language
    const savedLang = localStorage.getItem('site-lang') || 'en';
    updateContent(savedLang);

    // Event Listeners
    if (langCurrent) {
        langCurrent.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = langSwitcher.classList.contains('active');
            toggleDropdown(!isActive);
        });
    }

    langOpts.forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.getAttribute('data-lang');
            localStorage.setItem('site-lang', lang);
            updateContent(lang);
            toggleDropdown(false);
        });
    });

    // Close on click outside
    document.addEventListener('click', () => {
        if (langSwitcher && langSwitcher.classList.contains('active')) {
            toggleDropdown(false);
        }
    });

    // Antigravity for Language Options & Switcher
    if (langSwitcher) {
        // Individual option effects
        langOpts.forEach(opt => {
            const floatUpSubtle = () => {
                gsap.to(opt, {
                    x: document.documentElement.dir === 'rtl' ? -5 : 5,
                    backgroundColor: "rgba(49, 214, 119, 0.2)",
                    duration: 0.3,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            };
            const landDownSubtle = () => {
                gsap.to(opt, {
                    x: 0,
                    backgroundColor: "transparent",
                    duration: 0.2,
                    ease: "power2.inOut",
                    overwrite: "auto"
                });
            };
            opt.addEventListener('mouseenter', floatUpSubtle);
            opt.addEventListener('mouseleave', landDownSubtle);
        });

        // Main switcher float
        const floatUp = () => {
            gsap.to(langSwitcher, {
                y: -5, scale: 1.02,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
                duration: 0.4, ease: "expo.out",
                overwrite: "auto"
            });
        };
        const landDown = () => {
            gsap.to(langSwitcher, {
                y: 0, scale: 1,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                duration: 0.3, ease: "power2.out",
                overwrite: "auto"
            });
        };
        langSwitcher.addEventListener('mouseenter', floatUp);
        langSwitcher.addEventListener('mouseleave', landDown);
        langSwitcher.addEventListener('touchstart', floatUp, { passive: true });
        langSwitcher.addEventListener('touchend', landDown);
    }

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

    // Initial Reveal for Hero Text & Scroll Indicator
    gsap.to('.text-container', {
        autoAlpha: 1,
        y: 0,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

    // Fix: Only reveal indicator if we are at the top of the page (fixes refresh bug)
    if (window.scrollY < 100 && scrollIndicator) {
        gsap.to(scrollIndicator, {
            autoAlpha: 0.8,
            duration: 1,
            delay: 0.8
        });
    } else if (scrollIndicator) {
        // Kill/hide immediately if already scrolled down
        gsap.set(scrollIndicator, { autoAlpha: 0 });
    }

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

        // --- ANTIGRAVITY MOTION SYSTEM ---

        // 1. Jelly Scroll (Elastic Physics)
        let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(".cv-template", "skewY", "deg"),
            clamp = gsap.utils.clamp(-15, 15); // Maximum skew angle

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -400);
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, {
                        skew: 0,
                        duration: 0.8,
                        ease: "power3",
                        overwrite: true,
                        onUpdate: () => skewSetter(proxy.skew)
                    });
                }
            }
        });

        // 2. Weightless Hover/Touch Interactions
        templates.forEach((card) => {
            const floatUp = () => {
                gsap.to(card, {
                    y: -25, // "Float" upwards
                    scale: 1.05,
                    boxShadow: "0 40px 80px rgba(0, 0, 0, 0.45)", // Simulate distance
                    duration: 0.6,
                    ease: "expo.out",
                    overwrite: "auto"
                });
            };

            const landDown = () => {
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    duration: 0.4,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            };

            // Desktop Hover
            if (window.innerWidth >= 1024) {
                card.addEventListener('mouseenter', floatUp);
                card.addEventListener('mouseleave', landDown);
            }

            // Mobile Touch (Instant Reset for Stability)
            card.addEventListener('touchstart', floatUp, { passive: true });
            card.addEventListener('touchend', landDown);
            card.addEventListener('touchcancel', landDown);
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

    // Currency Toggle Logic (Updated for Advanced Switch)
    const currencyToggle = document.getElementById('currency-toggle');
    const currencyLabels = document.querySelectorAll('.currency-label');
    const priceElements = document.querySelectorAll('.package-price');

    function updatePrices(isUSD) {
        // Update labels
        currencyLabels.forEach(label => {
            label.classList.toggle('active', label.getAttribute('data-currency') === (isUSD ? 'USD' : 'MAD'));
        });

        // Update handle position
        if (currencyToggle) {
            currencyToggle.classList.toggle('usd-active', isUSD);
        }

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

    if (currencyToggle) {
        currencyToggle.addEventListener('click', () => {
            const isUSD = !currencyToggle.classList.contains('usd-active');
            updatePrices(isUSD);
        });
    }

    const savedCurrency = localStorage.getItem('preferredCurrency') || 'MAD';
    updatePrices(savedCurrency === 'USD');

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


    // --- ANTIGRAVITY MOTION SYSTEM (Velocity Skew) ---
    // Every .card and .template gets a dynamic skew effect based on scroll speed
    const motionElements = document.querySelectorAll('.package-card, .cv-template, .problem-card');

    let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(motionElements, "skewY", "deg"),
        clamp = gsap.utils.clamp(-10, 10); // Standard: -10 to 10 clamp

    ScrollTrigger.create({
        onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / -300);
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                gsap.to(proxy, {
                    skew: 0,
                    duration: 0.8,
                    ease: "power3",
                    overwrite: true,
                    onUpdate: () => skewSetter(proxy.skew)
                });
            }
        }
    });

    // Reset skew on stop
    gsap.set(motionElements, { transformOrigin: "right center", force3D: true });

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
