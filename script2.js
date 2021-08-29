console.log('Javascript carregado');


function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");

}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.

        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);

    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.

            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";


            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};


function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

// para imprimir a mensagem//

function validacao() {
    console.log('Iniciando validação CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';

    }
}

/* Função Validar */
function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var data = document.getElementById("data");
    var profissao = document.getElementById("profissao");
    var email = document.getElementById("email");
    var celular = document.getElementById("celular");
    var cep = document.getElementById("cep");
    var cidade = document.getElementById("cidade");
    var uf = document.getElementById("uf");
    var endereco = document.getElementById("rua");
    var numero = document.getElementById("numero");
    var bairro = document.getElementById("bairro");

    // verificar se o nome está vazio
    if (nome.value == "") {
        // document.getElementById('errorNome').style.display = 'block';
        alert("Insira seu nome");
        // Deixa o input com o focus
        nome.focus();
        return;
    }

    if (data.value == "") {
        //document.getElementById('errorData').style.display = 'block';
        alert("Insira sua data de nascimento");
        data.focus();
        return;

    }

    if (profissao.value == "") {
        // document.getElementById('errorProfissao').style.display = 'block';
        alert("Insira sua profissão");
        profissao.focus();
        return;

    }

    if (email.value == "") {
        //document.getElementById('errorEmail').style.display = 'block';
        alert("Insira seu email");
        email.focus();
        return;

    }

    if (celular.value == "") {
        // document.getElementById('errorCelular').style.display = 'block';
        alert("Insira seu celular");
        celular.focus();
        return;

    }
    if (cep.value == "") {
        // document.getElementById('errorCep').style.display = 'block';
        alert("Insira seu cep");
        cep.focus();
        return;

    }

    if (cidade.value == "") {
        // document.getElementById('errorCidade').style.display = 'block';
        alert("Insira sua cidade");
        cidade.focus();
        return;

    }

    if (uf.value == "") {
        // document.getElementById('errorUf').style.display = 'block';
        alert("Insira sua UF");
        uf.focus();
        return;

    }

    if (rua.value == "") {
        //document.getElementById('errorRua').style.display = 'block';
        alert("Insira seu endereço");
        rua.focus();
        return;


    }
    if (numero.value == "") {
        //  document.getElementById('errorNumero').style.display = 'block';
        alert("Insira o número de sua residência");
        numero.focus();
        return;

    }

    if (bairro.value == "") {
        //  document.getElementById('errorBairro').style.display = 'block';
        alert("Insira seu celular");
        bairro.focus();
        return;

    }
    alert("Formulário enviado!");
    // envia o formulário
    //formulario.submit();
}