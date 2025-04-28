// Future JavaScript code for interactivity can go here.

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded. Setting up intro animation.");

    const beginButton = document.getElementById('begin-button');
    const introParagraph = document.getElementById('intro-paragraph');
    const contentWrapper = document.getElementById('main-content-wrapper');
    const revealButton = document.getElementById('reveal-button'); // Get reveal button
    
    // Log found elements
    console.log("Button:", beginButton);
    console.log("Paragraph:", introParagraph);
    console.log("Wrapper:", contentWrapper);
    console.log("Reveal Button:", revealButton); // Log reveal button

    // Check if any elements are missing
    if (!beginButton || !introParagraph || !contentWrapper || !revealButton) { // Added revealButton check
        console.error("Error: One or more required elements not found!");
        return; // Stop execution if elements are missing
    }

    const fullText = introParagraph.textContent; // Store the original text
    const typingSpeed = 25; // Milliseconds per character - Made faster

    // Clear paragraph initially for typing effect
    introParagraph.textContent = ''; 

    beginButton.addEventListener('click', () => {
        console.log("Begin button clicked!"); // Log click event

        // 1. Hide the button
        beginButton.classList.add('hidden');

        // 2. Unblur the content - COMMENTED OUT TO KEEP BLURRED
        // contentWrapper.classList.add('unblurred');
        // Optional: Remove blur class entirely after transition
        // setTimeout(() => { 
        //     contentWrapper.classList.remove('blur-content'); 
        // }, 500); // Match CSS transition duration

        // 3. Make paragraph visible and start typing
        introParagraph.classList.add('visible');
        introParagraph.classList.add('typing'); // Add class for cursor
        
        let i = 0;
        function typeWriter() {
            if (i < fullText.length) {
                introParagraph.textContent += fullText.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                introParagraph.classList.remove('typing'); // Remove cursor class when done
                // Make reveal button appear
                if(revealButton) {
                    revealButton.classList.remove('hidden');
                }
            }
        }
        
        // Slight delay before starting typing to allow opacity transition
        setTimeout(typeWriter, 100); 

    }, { once: true }); // Ensure the button click only runs once

    // --- Keep smooth scroll logic if still needed --- 
    // Select all links with hashes
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault(); // Prevent default anchor click behavior

    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);

    //         if (targetElement) {
    //             // Smoothly scroll to the target element
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });
    // --- End smooth scroll logic ---

    // Add listener for the reveal button
    if (revealButton && contentWrapper) {
        revealButton.addEventListener('click', () => {
            console.log("Reveal button clicked!");
            // Hide the reveal button
            revealButton.classList.add('hidden');
            // Unblur the content
            contentWrapper.classList.add('unblurred');
        }, { once: true });
    }
}); 