        document.addEventListener('DOMContentLoaded', () => {
            // Function to display the correct page content
            const showPage = (pageId) => {
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });
                const activeSection = document.getElementById(pageId);
                if (activeSection) {
                    activeSection.classList.add('active');
                    window.scrollTo(0, 0); // Scroll to top on page change
                }
            };

            // Event listeners for navigation links
            document.querySelectorAll('[data-page]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageId = e.currentTarget.getAttribute('data-page');
                    // Update URL hash without reloading
                    window.location.hash = pageId; 
                    showPage(pageId);
                    
                    // Scroll to form if applying for a specific job
                    if (pageId === 'career' && e.currentTarget.href.includes('#career-form-container')) {
                        setTimeout(() => {
                            const formContainer = document.getElementById('career-form-container');
                            if (formContainer) {
                                formContainer.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 100);
                    }
                });
            });

            // Handle initial load based on URL hash (or default to 'home')
            const initialPage = window.location.hash.substring(1) || 'home';
            showPage(initialPage);
            
            // Update copyright year
            document.getElementById('current-year').textContent = new Date().getFullYear();
        });