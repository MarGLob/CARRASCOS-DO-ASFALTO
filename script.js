// CORREÇÃO: Todo o código agora está dentro de um único 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', function() { 
    
    // --- Saudação Dinâmica ---
    const greetingElement = document.getElementById('greeting'); 
    if (greetingElement) { // Verifica se o elemento existe na página atual
        const currentHour = new Date().getHours(); 
        let greetingText = ''; 
        if (currentHour >= 5 && currentHour < 12) { 
            greetingText = 'Bom dia, visitante 🌞'; 
        } else if (currentHour >= 12 && currentHour < 18) { 
            greetingText = 'Boa tarde, visitante 🌄'; 
        } else { 
            greetingText = 'Boa noite, visitante 🌒'; 
        }
        greetingElement.textContent = greetingText; 
    }

    // --- Menu Mobile ---
    const mobileMenuButton = document.getElementById('mobile-menu-button'); 
    const mobileMenu = document.getElementById('mobile-menu'); 
    
    if (mobileMenuButton && mobileMenu) { // Verifica se os elementos existem
        const mobileMenuLinks = mobileMenu.querySelectorAll('a'); 
        mobileMenuButton.addEventListener('click', () => { 
            mobileMenu.classList.toggle('hidden'); 
        });
        mobileMenuLinks.forEach(link => { 
            link.addEventListener('click', () => { 
                mobileMenu.classList.add('hidden'); 
            });
        });
    }

    // --- Header com fundo ao rolar ---
    const header = document.getElementById('header'); 
    if (header) { // Verifica se o elemento existe
        window.addEventListener('scroll', () => { 
            if (window.scrollY > 50) { 
                header.classList.add('py-2'); 
                header.classList.remove('py-3'); 
            } else { 
                header.classList.remove('py-2'); 
                header.classList.add('py-3'); 
            }
        });
    }

    // --- Funcionalidade da Notificação do YouTube ---
    const youtubeLink = document.getElementById('youtube-link');
    const toast = document.getElementById('toast-notification');
    
    if (youtubeLink && toast) { // Verifica se os elementos existem
        let toastTimeout; 
        youtubeLink.addEventListener('click', (event) => {
            event.preventDefault();
            clearTimeout(toastTimeout);
            toast.classList.add('show');
            toast.classList.remove('hidden');
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show'); 
            }, 3000);
        });
    }

    // --- Lógica do Formulário de Contato com Google Sheets ---
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    const successMessage = document.getElementById('success-message');

    if (form) { // Verifica se o formulário existe na página atual
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            submitButton.disabled = true;
            submitButton.textContent = 'ENVIANDO...';
            const formData = new FormData(form);
            
            // CORREÇÃO CRÍTICA: A URL agora está dentro de aspas como uma string
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzRBbnsRBlwbVtTP1V4qp8kLnDaNWlRQpjrDFuoj7_R1OHhqwT4D7FPBLlWVX4I07u9/exec';

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => response.json())
                .then(data => {
                    if (data.result === 'success') {
                        form.reset(); 
                        form.classList.add('hidden'); 
                        successMessage.classList.remove('hidden'); 
                    } else {
                        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
                        submitButton.disabled = false;
                        submitButton.textContent = 'ENVIAR MENSAGEM';
                    }
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert('Não foi possível conectar ao servidor. Verifique sua internet e tente novamente.');
                    submitButton.disabled = false;
                    submitButton.textContent = 'ENVIAR MENSAGEM';
                });
        });
    }

}); // Fim do 'DOMContentLoaded' ÚNICO