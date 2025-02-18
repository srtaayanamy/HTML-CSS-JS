document.getElementById('formulario-main').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const inputName = document.getElementById('name').value;
    const inputDate = document.getElementById('date').value;
  
    if (inputName && inputDate) {
      const listaMain = document.getElementById('lista-main');
      listaMain.innerHTML += `<div id="itens-formulario">${inputName} - ${inputDate} <button onclick="this.parentNode.remove()">Cancelar</button></div>`;
      event.target.reset();
      
      listaMain.style.overflowY = 'auto';
      listaMain.style.maxHeight = '200px';

    } else {
      alert('Preencha todos os campos');
    }
});