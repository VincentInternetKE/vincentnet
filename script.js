/* =========================================================
   VINCENT INTERNET SERVICES
   Main JavaScript
========================================================= */


/* =========================================================
   1. EASY-TO-EDIT BUSINESS DATA
========================================================= */

/*
    IMPORTANT:

    This is the main area you will edit in the future.

    You can change:
    - prices
    - package names
    - availability
    - descriptions
    - offers

    You do NOT need to search through the HTML.

    All prices are strings so that you can use:
    "KSh 2,999"
    "Contact for Current Price"
    etc.
*/

const siteData = {

    business: {
        name: "Vincent Internet Services",

        phoneDisplay: "0754337542",

        whatsappNumber: "254754337542"
    },


    products: {

        "router-5g": {
            name: "5G Wi-Fi Router",

            price: "Contact for Current Price",

            availability: "Available on request",

            image: "images/5g-router.jpg"
        },

        "router-4g": {
            name: "4G Wi-Fi Router",

            price: "KSh 2,999",

            availability: "Available on request",

            image: "images/4g-router.jpg"
        },

        "mifi": {
            name: "Mi-Fi / Pocket Wi-Fi",

            price: "Contact for Current Price",

            availability: "Contact for availability",

            image: "images/mifi.jpg"
        }

    },


    packages: {

        /* =========================================
           5G
        ========================================== */

        "5g": [

            {
                name: "5G 15 Mbps",

                speed: "15 Mbps",

                data: "Up to 450 GB",

                price: "KSh 2,999",

                validity: "30 Days unlimited",

                use: "Basic browsing, email, social media and standard streaming."
            },

            {
                name: "5G 50 Mbps",

                speed: "50 Mbps",

                data: "Up to 1.5 TB",

                price: "KSh 4,000",

                validity: "30 Days unlimited",

                use: "HD streaming on a few devices and multiplayer gaming."
            },

            {
                name: "5G 100 Mbps",

                speed: "100 Mbps",

                data: "Up to 2 TB",

                price: "KSh 5,000",

                validity: "30 Days unlimited",

                use: "UHD streaming on multiple screens and online gaming."
            },

            {
                name: "5G 250 Mbps",

                speed: "250 Mbps",

                data: "Up to 4 TB",

                price: "KSh 10,000",

                validity: "30 Days unlimited",

                use: "UHD streaming and gaming for multiple users."
            }

        ],


        /* =========================================
           4G
        ========================================== */

        "4g": [

            {
                name: "4G Bundle",

                speed: "4G",

                data: "7.5 GB",

                price: "KSh 499",

                validity: "7 Days limited",

                use: "Short-term internet use."
            },

            {
                name: "4G Bundle",

                speed: "4G",

                data: "25 GB",

                price: "KSh 999",

                validity: "30 Days limited",

                use: "Regular browsing and social media."
            },

            {
                name: "4G Bundle",

                speed: "4G",

                data: "60 GB",

                price: "KSh 1,999",

                validity: "30 Days limited",

                use: "Everyday internet use."
            },

            {
                name: "4G Bundle",

                speed: "4G",

                data: "140 GB",

                price: "KSh 2,999",

                validity: "30 Days unlimited",

                use: "Higher monthly internet usage."
            },

            {
                name: "4G Bundle",

                speed: "4G",

                data: "180 GB",

                price: "KSh 4,100",

                validity: "30 Days unlimited",

                use: "Heavy browsing and streaming."
            },

            {
                name: "4G Bundle",

                speed: "4G",

                data: "250 GB",

                price: "KSh 6,299",

                validity: "30 Days unlimited",

                use: "Heavy household internet usage."
            },

            {
                name: "4G Bundle",

                speed: "4G",

                data: "500 GB",

                price: "KSh 12,999",

                validity: "30 Days unlimited",

                use: "Very high data requirements."
            }

        ],


        /* =========================================
           HOME FIBRE
        ========================================== */

        "fibre": [

            {
                name: "Bronze",

                speed: "40 Mbps",

                data: "Unlimited home internet",

                price: "KSh 2,999",

                validity: "Monthly",

                use: "Browsing, social media, work and everyday use."
            },

            {
                name: "Silver",

                speed: "60 Mbps",

                data: "Unlimited home internet",

                price: "KSh 4,100",

                validity: "Monthly",

                use: "Streaming, work, study and multiple devices."
            },

            {
                name: "Gold",

                speed: "150 Mbps",

                data: "Unlimited home internet",

                price: "KSh 6,299",

                validity: "Monthly",

                use: "Higher-demand households and streaming."
            },

            {
                name: "Diamond",

                speed: "500 Mbps",

                data: "Unlimited home internet",

                price: "KSh 12,499",

                validity: "Monthly",

                use: "Heavy household usage and multiple users."
            },

            {
                name: "Platinum",

                speed: "1000 Mbps",

                data: "Unlimited home internet",

                price: "KSh 20,000",

                validity: "Monthly",

                use: "Very high-speed household requirements."
            }

        ],


        /* =========================================
           MI-FI
        ========================================== */

        "mifi": [

            {
                name: "Mi-Fi Bundles",

                speed: "Portable",

                data: "Contact for current options",

                price: "Contact for Current Price",

                validity: "Varies",

                use: "Portable internet while travelling or moving."
            }

        ]

    }

};


/* =========================================================
   2. WHATSAPP SYSTEM
========================================================= */

function createWhatsAppLink(message) {

    const number = siteData.business.whatsappNumber;

    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${number}?text=${encodedMessage}`;
}


function setupWhatsAppLinks() {

    const whatsappButtons =
        document.querySelectorAll(".js-whatsapp");

    whatsappButtons.forEach((button) => {

        const message =
            button.dataset.message ||
            "Hello Vincent Internet Services, I would like to know more about your internet services.";

        button.href =
            createWhatsAppLink(message);

        button.target = "_blank";

        button.rel = "noopener noreferrer";
    });
}


/* =========================================================
   3. MOBILE NAVIGATION
========================================================= */

function setupMobileMenu() {

    const menuToggle =
        document.getElementById("menuToggle");

    const navigation =
        document.getElementById("mainNavigation");

    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("open");

        menuToggle.classList.toggle(
            "active",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });


    const navigationLinks =
        navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================================
   4. SMOOTH SCROLL
========================================================= */

function setupSmoothScrolling() {

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}


/* =========================================================
   5. UPDATE PRODUCT PRICES
========================================================= */

function updateProductPrices() {

    const productPriceElements =
        document.querySelectorAll(
            "[data-product-price]"
        );

    productPriceElements.forEach((element) => {

        const productId =
            element.dataset.productPrice;

        const product =
            siteData.products[productId];

        if (!product) {
            return;
        }

        element.textContent =
            product.price;
    });

}


/* =========================================================
   6. CREATE 5G / 4G MINI PLANS
========================================================= */

function renderMiniPlans(
    containerId,
    packageType
) {

    const container =
        document.getElementById(containerId);

    if (!container) {
        return;
    }

    const packages =
        siteData.packages[packageType];

    if (!packages) {
        return;
    }

    container.innerHTML = "";

    packages
        .slice(0, 6)
        .forEach((plan) => {

            const item =
                document.createElement("div");

            item.className = "mini-plan";

            item.innerHTML = `
                <strong>${escapeHTML(plan.speed)}</strong>
                <span>${escapeHTML(plan.price)} / ${escapeHTML(plan.validity)}</span>
            `;

            container.appendChild(item);

        });

}


/* =========================================================
   7. HOME FIBRE PLANS
========================================================= */

function renderFibrePlans() {

    const container =
        document.getElementById("fibrePlans");

    if (!container) {
        return;
    }

    const plans =
        siteData.packages.fibre;

    container.innerHTML = "";

    plans.forEach((plan) => {

        const item =
            document.createElement("div");

        item.className = "fibre-plan";

        item.innerHTML = `
            <div class="fibre-plan-left">
                <strong>${escapeHTML(plan.name)}</strong>
                <span>${escapeHTML(plan.speed)}</span>
            </div>

            <div class="fibre-plan-price">
                ${escapeHTML(plan.price)}
            </div>
        `;

        container.appendChild(item);

    });

}


/* =========================================================
   8. PACKAGE SECTION
========================================================= */

function renderPackages(packageType) {

    const container =
        document.getElementById("packageContent");

    if (!container) {
        return;
    }

    const packages =
        siteData.packages[packageType];

    if (!packages) {
        container.innerHTML =
            "<p>Package information unavailable.</p>";

        return;
    }

    container.innerHTML = "";

    packages.forEach((plan, index) => {

        const card =
            document.createElement("article");

        card.className =
            "package-card";

        if (
            packageType === "5g" &&
            index === 1
        ) {
            card.classList.add("featured");

            const popular =
                document.createElement("span");

            popular.className = "popular";

            popular.textContent =
                "Popular";

            card.appendChild(popular);
        }

        const whatsappMessage =
            createPackageMessage(
                packageType,
                plan
            );

        card.innerHTML += `
            <span class="package-name">
                ${escapeHTML(plan.name)}
            </span>

            <div class="package-speed">
                ${escapeHTML(plan.speed)}
            </div>

            <div class="package-data">
                ${escapeHTML(plan.data)}
            </div>

            <div class="package-price">
                ${escapeHTML(plan.price)}
            </div>

            <div class="package-validity">
                ${escapeHTML(plan.validity)}
            </div>

            <div class="package-use">
                ${escapeHTML(plan.use)}
            </div>

            <a
                href="${createWhatsAppLink(whatsappMessage)}"
                class="btn btn-primary package-action"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ask About Package
            </a>
        `;

        container.appendChild(card);

    });

}


function createPackageMessage(
    packageType,
    plan
) {

    let serviceName = "internet package";

    if (packageType === "5g") {
        serviceName = "5G Wi-Fi package";
    }

    if (packageType === "4g") {
        serviceName = "4G Wi-Fi package";
    }

    if (packageType === "fibre") {
        serviceName = "Home Fibre package";
    }

    if (packageType === "mifi") {
        serviceName = "Mi-Fi bundle";
    }

    return (
        `Hello Vincent Internet Services, ` +
        `I am interested in the ${plan.name} ${serviceName}. ` +
        `Please confirm the current price, availability ` +
        `and how I can get connected.`
    );
}


/* =========================================================
   9. PACKAGE TABS
========================================================= */

function setupPackageTabs() {

    const tabs =
        document.querySelectorAll(
            "[data-package-tab]"
        );

    if (!tabs.length) {
        return;
    }

    tabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            tabs.forEach((item) => {

                item.classList.remove("active");

            });

            tab.classList.add("active");

            const packageType =
                tab.dataset.packageTab;

            renderPackages(packageType);

        });

    });

    renderPackages("5g");
}


/* =========================================================
   10. FAQ ACCORDION
========================================================= */

function setupFAQ() {

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const button =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");

        if (!button || !answer) {
            return;
        }

        button.addEventListener("click", () => {

            const currentlyOpen =
                button.getAttribute(
                    "aria-expanded"
                ) === "true";


            /* Close all other FAQs */

            faqItems.forEach((otherItem) => {

                const otherButton =
                    otherItem.querySelector(
                        ".faq-question"
                    );

                const otherAnswer =
                    otherItem.querySelector(
                        ".faq-answer"
                    );

                if (
                    otherButton &&
                    otherAnswer &&
                    otherButton !== button
                ) {

                    otherButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    otherAnswer.style.maxHeight =
                        null;
                }

            });


            /* Toggle current FAQ */

            button.setAttribute(
                "aria-expanded",
                String(!currentlyOpen)
            );

            if (!currentlyOpen) {

                answer.style.maxHeight =
                    `${answer.scrollHeight}px`;

            } else {

                answer.style.maxHeight =
                    null;
            }

        });

    });

}


/* =========================================================
   11. SCROLL REVEAL
========================================================= */

function setupScrollReveal() {

    const revealElements =
        document.querySelectorAll(".reveal");

    if (!revealElements.length) {
        return;
    }


    /* Respect users who prefer reduced motion */

    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (reduceMotion) {

        revealElements.forEach((element) => {

            element.classList.add("visible");

        });

        return;
    }


    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "visible"
                    );

                    observerInstance.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.08
            }
        );


    revealElements.forEach((element) => {

        observer.observe(element);

    });

}


/* =========================================================
   12. IMAGE FALLBACK
========================================================= */

function setupImageFallbacks() {

    const images =
        document.querySelectorAll(
            ".product-image"
        );

    images.forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.style.display =
                    "none";

            },
            {
                once: true
            }
        );

    });

}


/* =========================================================
   13. CURRENT YEAR
========================================================= */

function setupCurrentYear() {

    const yearElement =
        document.getElementById(
            "currentYear"
        );

    if (!yearElement) {
        return;
    }

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   14. BASIC HTML ESCAPING
========================================================= */

/*
    This prevents editable data from accidentally
    being interpreted as HTML.
*/

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   15. START WEBSITE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupMobileMenu();

        setupSmoothScrolling();

        setupWhatsAppLinks();

        updateProductPrices();

        renderMiniPlans(
            "router5gPlans",
            "5g"
        );

        renderMiniPlans(
            "router4gPlans",
            "4g"
        );

        renderFibrePlans();

        setupPackageTabs();

        setupFAQ();

        setupScrollReveal();

        setupImageFallbacks();

        setupCurrentYear();

    }
);
