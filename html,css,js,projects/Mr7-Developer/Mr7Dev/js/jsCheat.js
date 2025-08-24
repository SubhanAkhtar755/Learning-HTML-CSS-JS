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

// Add copy functionality
document.querySelectorAll('.code-block').forEach(block => {
    const pre = block.querySelector('pre');
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.className = 'copy-btn';
    
    // copyButton.addEventListener('click', () => {
    //     navigator.clipboard.writeText(pre.textContent);
    //     copyButton.textContent = 'Copied!';
    //     setTimeout(() => {
    //         copyButton.textContent = 'Copy';
    //     }, 2000);
    // });

    // block.appendChild(copyButton);
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




// Add syntax highlighting (optional - requires Prism.js)
if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
} 