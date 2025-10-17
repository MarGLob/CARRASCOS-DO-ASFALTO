document.addEventListener('DOMContentLoaded', function() { // Executa o código somente após o HTML da página ser completamente carregado
    
    // --- Saudação Dinâmica ---
    const greetingElement = document.getElementById('greeting'); // Seleciona o elemento HTML com o id 'greeting' e armazena na constante 'greetingElement'
    
    if (greetingElement) { // Verifica se o elemento da saudação foi encontrado na página
        const currentHour = new Date().getHours(); // Pega a hora atual do sistema (de 0 a 23)
        let greetingText = ''; // Declara uma variável para armazenar o texto da saudação

        if (currentHour >= 5 && currentHour < 12) { // Se a hora for entre 5h e 11h
            greetingText = 'Bom dia, visitante 🌞'; // Define a saudação como "Bom dia"
        } else if (currentHour >= 12 && currentHour < 18) { // Se a hora for entre 12h e 17h
            greetingText = 'Boa tarde, visitante 🌄'; // Define a saudação como "Boa tarde"
        } else { // Para qualquer outro horário (18h às 4h)
            greetingText = 'Boa noite, visitante 🌒'; // Define a saudação como "Boa noite"
        }
        greetingElement.textContent = greetingText; // Atualiza o texto do elemento HTML com a saudação correta
    }

    // --- Menu Mobile ---
    const mobileMenuButton = document.getElementById('mobile-menu-button'); // Seleciona o botão do menu mobile
    const mobileMenu = document.getElementById('mobile-menu'); // Seleciona a div do menu mobile
    const mobileMenuLinks = mobileMenu.querySelectorAll('a'); // Seleciona todos os links dentro do menu mobile

    mobileMenuButton.addEventListener('click', () => { // Adiciona um "ouvinte" que espera por um clique no botão
        mobileMenu.classList.toggle('hidden'); // Alterna a classe 'hidden' na div do menu, mostrando ou escondendo-a
    });

    // Fecha o menu mobile quando um link é clicado
    mobileMenuLinks.forEach(link => { // Para cada link dentro do menu mobile
        link.addEventListener('click', () => { // Adiciona um "ouvinte" de clique
            mobileMenu.classList.add('hidden'); // Adiciona a classe 'hidden' para esconder o menu
        });
    });

    // --- Header com fundo ao rolar ---
    const header = document.getElementById('header'); // Seleciona o cabeçalho
    window.addEventListener('scroll', () => { // Adiciona um "ouvinte" que monitora a rolagem da página
        if (window.scrollY > 50) { // Se o usuário rolou mais de 50 pixels para baixo
            header.classList.add('py-2'); // Adiciona a classe para diminuir o preenchimento vertical do cabeçalho
            header.classList.remove('py-3'); // Remove a classe de preenchimento original
        } else { // Se o usuário voltou para o topo da página
            header.classList.remove('py-2'); // Remove a classe de preenchimento menor
            header.classList.add('py-3'); // Adiciona a classe de preenchimento original de volta
        }
    });
    
    // --- Configuração do Tailwind CSS (Opcional, mas útil para organização) ---
    // Este script é necessário caso você queira definir configurações personalizadas do Tailwind diretamente no HTML.
    // Como estamos em arquivos separados, essa configuração pode ser movida para um arquivo de configuração do Tailwind (tailwind.config.js) em um projeto mais complexo.
    // No entanto, para este exemplo com CDN, ele pode ser colocado em um <script> no <head> do HTML.
    // Por clareza, deixei a lógica aqui, mas a chamada do script deve estar no HTML.
    
    /*
    tailwind.config = {
        theme: {
            extend: {
                fontFamily: {
                    'anton': ['Anton', 'sans-serif'],
                    'roboto': ['Roboto', 'sans-serif'],
                },
                colors: {
                    'brand-red': '#b91c1c', // red-700
                    'brand-dark': '#111827', // gray-900
                }
            }
        }
    }
    */
    // O código acima está comentado pois a configuração do Tailwind deve ser feita no HTML ao usar a CDN.
});
// --- Funcionalidade da Notificação do YouTube ---

// Espera o documento HTML ser completamente carregado antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    // Encontra o link do YouTube e a 'aba' de notificação no HTML
    const youtubeLink = document.getElementById('youtube-link');
    const toast = document.getElementById('toast-notification');

    // Se ambos os elementos existirem na página...
    if (youtubeLink && toast) {
        let toastTimeout; // Variável para controlar o tempo que a notificação fica na tela

        // Adiciona um "escutador" que espera por um clique no ícone do YouTube
        youtubeLink.addEventListener('click', (event) => {
            // Previne a ação padrão do link (que seria rolar a página para o topo)
            event.preventDefault();

            // Limpa qualquer timer anterior para evitar que a notificação pisque
            clearTimeout(toastTimeout);
            
            // Adiciona a classe 'show' para fazer a notificação aparecer com a animação de fade-in
            toast.classList.add('show');
            // Remove a classe 'hidden' se ela ainda existir (garantia extra)
            toast.classList.remove('hidden');

            // Define um timer para esconder a notificação após 3 segundos (3000 milissegundos)
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show'); // Remove a classe 'show' para o fade-out
            }, 3000);
        });
    }
});
