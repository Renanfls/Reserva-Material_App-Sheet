// Variavel global, pois está fora do scopo do myFunction
var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/10fvA1TY9OU3ZRmsIwrUdTukUb0LS5jUMAXxfQEEShz8/edit?pli=1#gid=1184446824")

function myFunction(nome, photo, address, userEmail, dateTime, id, idVisitante) {
  /* 
    - Define variavel ss para todo projeto
    - adicionta a variavel ss que recee a classe SpreadsheetApp no qual 
      é relacionado a uma planiha google, ou seja, o que será manipulado.
    - A propriedade openByUrl, aponta para uma URL que desejamos manipular os dados.
  
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/10fvA1TY9OU3ZRmsIwrUdTukUb0LS5jUMAXxfQEEShz8/edit?pli=1#gid=1184446824")
*/
  //esta variavel se refe registrosAnteriores referencia a Aba do arquivo
  var registrosAnteriores = ss.getSheetByName("registrosAnteriores") // valor entre "aspas" faz referencia a aba que estou utilizando.

  //getRange(ROW, COLUMN) representa a célula que está sendo manipulada A2
  /**
   * As alterações são feitas na aba registrosAnteriores (na planilha),
   * porém, sempre acessa a mesma range, ou seja a mesma linha, logo,
   * se faz necessario usar uma class que capture a proxima linha.
   */

  // Reto
  var lr = registrosAnteriores.getLastRow()+1 //Encontra ultima linha e soma + 1, indo para próxima linha.

  registrosAnteriores.getRange(lr, 1).setValue(id)
  registrosAnteriores.getRange(lr, 2).setValue(idVisitante)
  registrosAnteriores.getRange(lr, 3).setValue(nome)
  registrosAnteriores.getRange(lr, 4).setValue(photo)
  registrosAnteriores.getRange(lr, 5).setValue(address)
  registrosAnteriores.getRange(lr, 6).setValue(userEmail)
  registrosAnteriores.getRange(lr, 7).setValue(dateTime)

  
}

function myFunction2(nome, photo, address, userEmail, dateTime, id, idResponsaveis){
  var registroAnteriores = ss.getSheetByName("registroAnteriores2")

  var lr = registrosAnteriores.getLastRow()+1
  
  registrosAnteriores.getRange(lr, 1).setValue(id)
  registrosAnteriores.getRange(lr, 2).setValue(idResponsaveis)
  registrosAnteriores.getRange(lr, 3).setValue(nome)
  registrosAnteriores.getRange(lr, 4).setValue(photo)
  registrosAnteriores.getRange(lr, 5).setValue(address)
  registrosAnteriores.getRange(lr, 6).setValue(userEmail)
  registrosAnteriores.getRange(lr, 7).setValue(dateTime)
}

