function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!"
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value
    
    if (tarefa.trim() === '') {
        alert("Não pode incluir tarefa vazia")
    }
    else{
    
        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
    
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
        document.getElementById("mensagem").textContent = mensagem

        inputTarefa.value = ""
 }       
}