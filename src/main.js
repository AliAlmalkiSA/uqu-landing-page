import './style.css'
import Alpine from 'alpinejs'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.Alpine = Alpine
Alpine.start()

// Ensure DOM is fully loaded before animating
window.addEventListener("load", () => {

    // Professional Animation Configuration
    const animDefaults = {
        duration: 1.2,
        ease: "power3.out",
        y: 30,
        stagger: 0.15
    };

    // 1. Hero Text Reveal
    if (document.querySelector(".hero-content")) {
        gsap.from(".hero-content > *", {
            ...animDefaults,
            y: 40,
            delay: 0.2,
            stagger: 0.1,
        });
    }

    // 2. Hero Image Reveal
    if (document.querySelector(".hero-image")) {
        gsap.from(".hero-image", {
            duration: 1.5,
            scale: 0.95,
            autoAlpha: 0,
            ease: "power2.out",
            delay: 0.4
        });
    }

    // 3. Stats Bar
    if (document.querySelector(".stats-bar")) {
        gsap.from(".stats-bar", {
            scrollTrigger: {
                trigger: ".stats-bar",
                start: "top 95%", // Trigger almost immediately when in view
            },
            ...animDefaults,
            y: 40
        });
    }

    // 4. Counts Animation
    const counters = gsap.utils.toArray(".counter-up");
    if (counters.length > 0) {
        counters.forEach(counter => {
            const rawValue = counter.innerText.replace(/\D/g, '');
            const endValue = parseInt(rawValue, 10);

            if (!isNaN(endValue)) {
                ScrollTrigger.create({
                    trigger: counter,
                    start: "top 95%",
                    once: true,
                    onEnter: () => {
                        gsap.from(counter, {
                            innerText: 0,
                            duration: 2,
                            snap: { innerText: 1 },
                            ease: "power1.inOut",
                            onUpdate: function () {
                                counter.innerText = Math.ceil(this.targets()[0].innerText) + "+";
                            }
                        })
                    }
                });
            }
        });
    }

    // 5. Services Tabs Container
    if (document.querySelector(".services-container")) {
        gsap.from(".services-container", {
            scrollTrigger: {
                trigger: ".services-container",
                start: "top 90%",
            },
            ...animDefaults
        });
    }

    // 6. Service Cards - Target ONLY the visible ones initially
    const visibleServices = document.querySelectorAll(".services-container div[x-show*='students'] .service-card");
    if (visibleServices.length > 0) {
        gsap.from(visibleServices, {
            scrollTrigger: {
                trigger: ".services-section",
                start: "top 75%",
            },
            ...animDefaults,
            y: 50,
            stagger: 0.1,
            clearProps: "all"
        });
    }

    // 7. News Cards
    const newsCards = document.querySelectorAll(".news-grid article");
    if (newsCards.length > 0) {
        gsap.from(newsCards, {
            scrollTrigger: {
                trigger: ".news-grid",
                start: "top 80%",
            },
            ...animDefaults,
            y: 50,
            stagger: 0.2,
            clearProps: "all"
        });
    }

    // 8. Admission Program Cards
    ScrollTrigger.batch(".program-card", {
        onEnter: batch => gsap.from(batch, {
            ...animDefaults,
            y: 30,
            stagger: 0.05,
            overwrite: true,
            clearProps: "all"
        }),
        start: "top 90%"
    });

    // 9. Auth Pages Form Animation
    if (document.querySelector("main > div.max-w-5xl")) {
        gsap.from("main > div.max-w-5xl", {
            duration: 1,
            y: 20,
            autoAlpha: 0,
            ease: "back.out(1.2)",
            delay: 0.1
        });
    }
});
