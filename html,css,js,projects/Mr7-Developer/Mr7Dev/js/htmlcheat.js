// Search functionality
const searchBox = document.querySelector('.search-box');
const categories = document.querySelectorAll('.category');

searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    categories.forEach(category => {
        const title = category.querySelector('h2').textContent.toLowerCase();
        const content = category.querySelector('pre').textContent.toLowerCase();

        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            category.classList.remove('hidden');
        } else {
            category.classList.add('hidden');
        }
    });
});

// Copy functionality
document.querySelectorAll('.code-block').forEach(block => {
    const pre = block.querySelector('pre');
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.className = 'copy-btn';
    
    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(pre.textContent);
            copyButton.textContent = 'Copied!';
            copyButton.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                copyButton.textContent = 'Copy';
                copyButton.style.backgroundColor = '#1a73e8';
            }, 2000);
        } catch (err) {
            copyButton.textContent = 'Failed!';
            copyButton.style.backgroundColor = '#f44336';
        }
    });

    block.appendChild(copyButton);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

categories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(20px)';
    category.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(category);
}); 