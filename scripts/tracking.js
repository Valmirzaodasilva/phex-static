function Limpar1() {
  document.form1.reset();
  document.form1.NR.focus();
}

function Vai1() {
  if (document.form1.cnpj.value == "") {
    alert("Informe o CNPJ do remetente.");
    return;
  }
  if (document.form1.NR.value == "") {
    alert("Informe pelo menos uma Nota Fiscal.");
    return;
  }
  document.form1.submit();
}
