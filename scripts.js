// Função para calcular o tempo de serviço em anos, meses e dias
function calcularTempoServico(dataInicial, dataFinal) {
    const inicio = new Date(dataInicial);
    const fim = new Date(dataFinal);
    const totalDias = Math.floor((fim - inicio) / (1000 * 60 * 60 * 24));

    // Contar anos bissextos
    let anos = Math.floor(totalDias / 365);
    let diasRestantes = totalDias % 365;
    let meses = Math.floor(diasRestantes / 30);
    let dias = diasRestantes % 30;

    return { anos, meses, dias };
}

// Função para gerar o resumo
function gerarResumo() {
    const dataInclusao = document.getElementById("dataInclusao").value;
    const dataExclusao = document.getElementById("dataExclusao").value;

    // Cálculo do tempo de efetivo serviço
    const efetivoServico = calcularTempoServico(dataInclusao, dataExclusao);

    // Preenchendo o resumo
    const resumo = document.getElementById("resumo");
    resumo.innerHTML = `
        <p>Tempo de efetivo serviço: ${efetivoServico.anos} anos, ${efetivoServico.meses} meses, ${efetivoServico.dias} dias</p>
    `;
}

// Função para abrir a modal e preencher com os dados do formulário
function gerarApostila() {
    const dialog = document.getElementById("dialog-box");
    dialog.showModal();

    // Preenchendo os campos da modal
    document.getElementById("gradPostoModal").textContent = document.getElementById("gradPosto").value;
    document.getElementById("nomeModal").textContent = document.getElementById("nome").value;
    document.getElementById("rgMilitarModal").textContent = document.getElementById("rgMilitar").value;
    document.getElementById("dataInclusaoModal").textContent = formatarData(document.getElementById("dataInclusao").value);
    document.getElementById("dataExclusaoModal").textContent = formatarData(document.getElementById("dataExclusao").value);
}

// Função para fechar a modal
function fecharModal() {
    const dialog = document.getElementById("dialog-box");
    dialog.close();
}

// Formatar data para dd/mm/aaaa
function formatarData(data) {
    if (data) {
        const partes = data.split("-");
        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }
    return "";
}

// Eventos de clique para botões
document.getElementById("gerarResumo").addEventListener("click", gerarResumo);
document.getElementById("gerarApostila").addEventListener("click", gerarApostila);
document.getElementById("closeModalBtn").addEventListener("click", fecharModal);
