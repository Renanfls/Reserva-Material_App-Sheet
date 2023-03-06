function myFunction(nome, photo, address, useremail, registro, id) {
  // Refere ao arquivo
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/18xhENLF2t5PbBifMQRKtlvFQ8xnz7Xd5bZ-LIP2pa-U/edit#gid=27715399")
  // Refere a aba
  var registroAnteriores = ss.getSheetByName("registroAnteriores")

  // getRange(2, 1) isso quer dizer célula A2
  registroAnteriores.getRange(2, 1).setValue(id)
  registroAnteriores.getRange(2, 3).setValue(nome)
  registroAnteriores.getRange(2, 4).setValue(photo)
  registroAnteriores.getRange(2, 5).setValue(address)
  registroAnteriores.getRange(2, 6).setValue(useremail)
  registroAnteriores.getRange(2, 7).setValue(registro)
}
