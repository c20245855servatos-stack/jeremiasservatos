import {gsap} from "gsap" ;
import {ScrollTrigger} from "gsap/ScrollTrigger";


        gsap.registerPlugin(ScrollTrigger);

        // Main Animation Timeline
        const tl = gsap.timeline({
            defaults: {
                duration: 0.5,
                ease: "power2.out"
            }
        });

        tl.from("nav h1", {
            y: -40,
            opacity: 0,
            duration: 0.8
        });

        tl.from("nav a", {
            y: -30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2
        }, "-=0.4");

        tl.from("#projects", {
            x: -60,
            opacity: 0,
            duration: 0.8
        }, "-=0.2");

        // Services Animation
        // No pinning: the section stays in the normal page flow.
        gsap.from("#services", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#services",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

    
        gsap.from("#contact", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#contact",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo("#progressBar",
            {
                scaleX: 0
            },
            {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true
                }
            }
        );

      
        const cursor = document.querySelector("#cursor");

        const setX = gsap.quickSetter(cursor, "x", "px");
        const setY = gsap.quickSetter(cursor, "y", "px");

        window.addEventListener("mousemove", function (e) {
            setX(e.clientX);
            setY(e.clientY);
        });

     
        const toggleBtn = document.querySelector("#toggle");
        const resetBtn = document.querySelector("#reset");
        const html = document.documentElement;

        toggleBtn.addEventListener("click", function () {
            html.classList.toggle("dark");

            gsap.fromTo("#toggle",
                {
                    rotation: 0,
                    scale: 1
                },
                {
                    rotation: 360,
                    scale: 1.1,
                    duration: 0.5,
                    ease: "power2.out"
                }
            );
        });

    
        resetBtn.addEventListener("click", function () {
            html.classList.add("dark");

            gsap.killTweensOf("#toggle");
            gsap.set("#toggle", {
                rotation: 0,
                scale: 1
            });

            tl.restart();

            ScrollTrigger.refresh();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        const contactForm = document.querySelector("#contactForm");
        const formMessage = document.querySelector("#formMessage");

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            formMessage.textContent =
                "Thank you! Your message has been entered successfully. Connect a backend to send it.";

            contactForm.reset();
        });

        // Refresh ScrollTrigger after the page loads.
        window.addEventListener("load", function () {
            ScrollTrigger.refresh();
        });
    