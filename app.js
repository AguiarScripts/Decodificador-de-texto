function inicial() {
    const imagem = document.getElementById('img-retangulo');
    const mensagemPrincipal = document.getElementById('m-principal');
    const mensagemSecundaria = document.getElementById('m-secundaria');
    imagem.style.display = 'block'; 
    mensagemPrincipal.style.display = 'block'; 
    mensagemSecundaria.style.display = 'block';
    const h1 = document.getElementById('texto-criptografado');
    const botao = document.getElementById('botao-copiar')
    if(h1) h1.style.display = 'none';
    if(botao) botao.style.display = 'none'
}
function criptografar() {
    const textarea = document.querySelector('.textarea-transparente');
    let texto = textarea.value;
    const imagem = document.getElementById('img-retangulo');
    const mensagemPrincipal = document.getElementById('m-principal');
    const mensagemSecundaria = document.getElementById('m-secundaria');
    const h1 = document.getElementById('texto-criptografado');
    if (texto.trim() === '') {
        inicial();
    }
    else {
        const substituicoes = [
            { busca: /a/g, substituto: 'ai' },
            { busca: /e/g, substituto: 'enter' },
            { busca: /i/g, substituto: 'imes' },
            { busca: /o/g, substituto: 'ober' },
            { busca: /u/g, substituto: 'ufat' }
        ];
        
        
        function substituirTexto(texto, substituicoes) {
            let resultado = '';
            for (let i = 0; i < texto.length; i++) {
                let substituido = false;
                for (const { busca, substituto } of substituicoes) {
                    if (busca.test(texto[i])) {
                        resultado += substituto;
                        substituido = true;
                        break; 
                    }
                }
                if (!substituido) {
                    resultado += texto[i]; 
                }
            }
            return resultado;
        }

        
        texto = substituirTexto(texto, substituicoes);
        
        const retangulo = document.querySelector('.retangulo-direito');
        
        
        
        
        
        if (imagem) imagem.style.display = 'none'; 
        if (mensagemPrincipal) mensagemPrincipal.style.display = 'none'; 
        if (mensagemSecundaria) mensagemSecundaria.style.display = 'none'; 
        
        
        if (h1) {
            h1.textContent = texto;
            h1.style.display = 'block'; 
        }
        const botao = document.getElementById('botao-copiar')
        if (botao) {
            botao.textContent = 'Copiar';
            botao.style.display = 'block'; 
        }
    }
}

function descriptografar() {
    const textarea = document.querySelector('.textarea-transparente');
    let texto = textarea.value;
    if (texto.trim() === '') {
        inicial();
    }
    else {
        
        const substituicoesInversas = [
            { substituto: 'ai', busca: 'a' },
            { substituto: 'enter', busca: 'e' },
            { substituto: 'imes', busca: 'i' },
            { substituto: 'ober', busca: 'o' },
            { substituto: 'ufat', busca: 'u' }
        ];

        
        function reverterTexto(texto, substituicoes) {
            let resultado = texto;
            for (const { substituto, busca } of substituicoes) {
                
                const regex = new RegExp(substituto, 'g');
                resultado = resultado.replace(regex, busca);
            }
            return resultado;
        }

        
        texto = reverterTexto(texto, substituicoesInversas);

        const retangulo = document.querySelector('.retangulo-direito');
        
        
        const imagem = document.getElementById('img-retangulo');
        const mensagemPrincipal = document.getElementById('m-principal');
        const mensagemSecundaria = document.getElementById('m-secundaria');
        
        
        if (imagem) imagem.style.display = 'none'; 
        if (mensagemPrincipal) mensagemPrincipal.style.display = 'none'; 
        if (mensagemSecundaria) mensagemSecundaria.style.display = 'none'; 
        
        const h1 = document.getElementById('texto-criptografado');
        if (h1) {
            h1.textContent = texto;
            h1.style.display = 'block'; 
        }
        const botao = document.getElementById('botao-copiar')
        if (botao) {
            botao.textContent = 'Copiar';
            botao.style.display = 'block'; 
        }
    }
}

function copiar() {
    
    const textoElement = document.getElementById('texto-criptografado');

    
    if (textoElement && textoElement.textContent) {
        const texto = textoElement.textContent;

        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(texto)
                .then(() => {
                    alert('Texto copiado para a área de transferência!');
                })
                .catch(err => {
                    console.error('Erro ao copiar texto: ', err);
                    alert('Falha ao copiar o texto.');
                });
        } else {

            const textarea = document.createElement('textarea');
            textarea.value = texto;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                alert('Texto copiado para a área de transferência!');
            } catch (err) {
                console.error('Erro ao copiar texto: ', err);
                alert('Falha ao copiar o texto.');
            }
            document.body.removeChild(textarea);
        }
    } else {
        alert('Nenhum texto encontrado para copiar.');
    }
}

