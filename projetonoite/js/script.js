const btnFiltrar = document.getElementById("btnFiltrar");
const btnLimparFiltros = document.getElementById("btnLimparFiltros");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

btnFiltrar.addEventListener("click", filtrarCursos);

btnLimparFiltros.addEventListener("click", limparFiltros);

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", filtrarCursos);
});

function filtrarCursos() {
  const categoriaSelecionada = obterSelecao("categoria");
  const nivelSelecionado = obterSelecao("nivel");

  const cursos = document.getElementsByClassName("curso");
  let cursosEncontrados = 0;

  for (let i = 0; i < cursos.length; i++) {
    const curso = cursos[i];
    const categoriaCurso = curso.getAttribute("data-categoria");
    const nivelCurso = curso.getAttribute("data-nivel");

    const categoriaMatch =
      categoriaSelecionada.includes(categoriaCurso) ||
      categoriaSelecionada.length === 0;
    const nivelMatch =
      nivelSelecionado.includes(nivelCurso) || nivelSelecionado.length === 0;

    if (categoriaMatch && nivelMatch) {
      curso.style.display = "flex";
      cursosEncontrados++;
    } else {
      curso.style.display = "none";
    }
  }

  exibirMensagemNenhumCurso(cursosEncontrados);
}

function obterSelecao(nome) {
  const checkboxes = document.getElementsByName(nome);
  const selecoes = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selecoes.push(checkbox.value);
    }
  });

  return selecoes;
}

function exibirMensagemNenhumCurso(cursosEncontrados) {
  const mensagemNenhumCurso = document.getElementById("mensagemNenhumCurso");

  if (cursosEncontrados > 0) {
    mensagemNenhumCurso.style.display = "none";
  } else {
    mensagemNenhumCurso.style.display = "block";
  }
}

btnFiltrar.addEventListener("click", filtrarCursos);
btnLimparFiltros.addEventListener("click", limparFiltros);

function limparFiltros() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  filtrarCursos();
}

function esconderDiv() {
  var div = document.getElementById("container-header");
  div.style.display = "none";
}
