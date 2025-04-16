// Example of interactive functionality (optional)

// You can add smooth scrolling or any other functionality for the portfolio
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('projects').offsetTop,
            behavior: 'smooth',
        });
    });
});
