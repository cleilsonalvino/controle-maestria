
    const sheetdbUrl = 'https://sheetdb.io/api/v1/yfq6zjrp5riy9'
    async function Enviar() {
      const data = document.getElementById('data').value;
      const nomeCliente = document.getElementById('nomeCliente').value;
      const produto = document.getElementById('produto').value;
      const valor = parseFloat(document.getElementById('valor').value);
      

      setTimeout(()=>{
      loader.style.opacity = '0'
      loader.style.visibility = 'hidden'  
      
      }, 2500)

      const loader = document.getElementById('loader');
      loader.style.opacity = '1'
      loader.style.visibility = 'visible'   


      if (!nomeCliente || !valor || !data || !produto) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const newData = {
        data: [
          {
            DATA: data,
            NOME_CLIENTE: nomeCliente,
            PRODUTO: produto,
            VALOR: valor
          }
        ]
      };

      try {
        const response = await fetch(sheetdbUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newData)
        });

        if (response.ok) {
          setTimeout(()=>{
            okk.style.opacity = '0'
            okk.style.visibility = 'hidden'  
            
            }, 3000)
            okk.style.opacity = '1'
            okk.style.visibility = 'visible'  
          // Limpar os campos após o envio
          document.getElementById('data').value = '';
          document.getElementById('nomeCliente').value = '';
          document.getElementById('produto').value = '';
          document.getElementById('valor').value = '';
        } else {
          alert('Erro ao enviar dados.' + response.status);
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar dados.');
      }
    }

  function verDados(){
    window.location.href = './src/table.html'
  }
  
  function Saidas(){
    window.location.href = './src/saidas.html'
  }