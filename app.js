function pesquisar() {

  let section = document.getElementById("resultados-pesquisa")
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
  //se o campoPesquisa for uma string vazia
  if(!campoPesquisa) {
    
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de algum artista ou banda ;)</p>";
    return;
  }
  
  campoPesquisa = campoPesquisa.toLowerCase();
  
  let titulo = "", descricao = "", tags = "", resultados = "";

  //iterando sobre cada banda/artista do arquivo "dados.js"
  for(let dado of bandasArtistas) {

    titulo = dado.titulo.toLowerCase();
    descricao = dado.titulo.toLowerCase();
    tags = dado.tags.toLocaleLowerCase();

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

      //cria um novo elemento
      resultados += ` 
      
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta"><strong>Descrição:</strong> ${dado.descricao}</p>
          <p class="descricao-meta"><strong>Ano de Formação:</strong> ${dado.anoFormacao}</p>
          <p class="descricao-meta"><strong>Integrantes:</strong> ${dado.integrantes}</p>
          <p class="descricao-meta"><strong>Curiosidades:</strong> ${dado.curiosidades}</p>
          <p class="descricao-meta"><strong>Rede Social:</strong><a href="https://www.instagram.com/thecure/"> ${dado.redeSociail}</a></p>
          <p class="descricao-meta"><strong>Vídeo Entrevista:</strong> ${dado.videoEntrevista}</p>
          <p class="descricao-meta"><strong>Discografia:</strong> ${dado.discografia}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
       </div>
      `;
    }
  }

  if(!resultados) {

    resultados = "<p>Nada foi encontrado! :)</p>"  
  }

  section.innerHTML = resultados;
}