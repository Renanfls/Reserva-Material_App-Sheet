function myFunction(nome, photo, address, useremail, registro, id) {
  // Refere ao arquivo
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/18xhENLF2t5PbBifMQRKtlvFQ8xnz7Xd5bZ-LIP2pa-U/edit#gid=27715399");
  // Refere a aba
  var registroAnteriores = ss.getSheetByName("registroAnteriores");

  // Adiciona na ultima linha da BaseDeDados
  var ultimaLinha = registroAnteriores.getLastRow() + 1;

  // getRange(2, 1) isso quer dizer célula A2
  registroAnteriores.getRange(ultimaLinha, 1).setValue(id);
  registroAnteriores.getRange(ultimaLinha, 2).setValue(idvisitante);
  registroAnteriores.getRange(ultimaLinha, 3).setValue(nome);
  registroAnteriores.getRange(ultimaLinha, 4).setValue(photo);
  registroAnteriores.getRange(ultimaLinha, 5).setValue(address);
  registroAnteriores.getRange(ultimaLinha, 6).setValue(useremail);
  registroAnteriores.getRange(ultimaLinha, 7).setValue(registro);
}
