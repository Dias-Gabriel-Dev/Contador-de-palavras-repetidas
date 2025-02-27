function filtarOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
};

function montaSaidaArquivo(listaPalavras) {
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtarOcorrencias(paragrafo).join(', ');
        if (duplicadas <= 0) {
            return;
        } else {
        return textoFinal += `Palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`;
        }
    })

    return textoFinal;
}
export {montaSaidaArquivo};