// Máscaras para os campos do formulário
document.addEventListener('DOMContentLoaded', function() {
    // Máscara para CPF
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            }
            e.target.value = value;
        });
    }

    // Máscara para Telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{2})(\d)/, '($1) $2');
                value = value.replace(/(\d{5})(\d)/, '$1-$2');
            }
            e.target.value = value;
        });
    }

    // Máscara para CEP
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 8) {
                value = value.replace(/(\d{5})(\d)/, '$1-$2');
            }
            e.target.value = value;
        });
    }

    // Validação do formulário
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                alert('Cadastro enviado com sucesso! Entraremos em contato em breve.');
                form.reset();
            }
        });
    }
});

// Função de validação do formulário
function validateForm() {
    let isValid = true;
    
    // Limpar mensagens de erro
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    // Validar Nome Completo
    const nome = document.getElementById('nomeCompleto');
    if (!nome.value.trim() || nome.value.length < 3) {
        document.getElementById('nomeError').textContent = 'Nome deve ter pelo menos 3 caracteres';
        isValid = false;
    }
    
    // Validar E-mail
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').textContent = 'E-mail inválido';
        isValid = false;
    }
    
    // Validar CPF
    const cpf = document.getElementById('cpf');
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf.value)) {
        document.getElementById('cpfError').textContent = 'CPF inválido';
        isValid = false;
    }
    
    // Validar Telefone
    const telefone = document.getElementById('telefone');
    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!telefoneRegex.test(telefone.value)) {
        document.getElementById('telefoneError').textContent = 'Telefone inválido';
        isValid = false;
    }
    
    // Validar Data de Nascimento
    const dataNascimento = document.getElementById('dataNascimento');
    if (!dataNascimento.value) {
        document.getElementById('dataError').textContent = 'Data de nascimento obrigatória';
        isValid = false;
    }
    
    // Validar CEP
    const cep = document.getElementById('cep');
    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(cep.value)) {
        document.getElementById('cepError').textContent = 'CEP inválido';
        isValid = false;
    }
    
    // Validar Endereço
    const endereco = document.getElementById('endereco');
    if (!endereco.value.trim()) {
        document.getElementById('enderecoError').textContent = 'Endereço obrigatório';
        isValid = false;
    }
    
    // Validar Cidade
    const cidade = document.getElementById('cidade');
    if (!cidade.value.trim()) {
        document.getElementById('cidadeError').textContent = 'Cidade obrigatória';
        isValid = false;
    }
    
    // Validar Estado
    const estado = document.getElementById('estado');
    if (!estado.value) {
        document.getElementById('estadoError').textContent = 'Estado obrigatório';
        isValid = false;
    }
    
    return isValid;
}