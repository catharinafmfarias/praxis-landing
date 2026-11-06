/**
 * Recebe os leads do formulário da landing page e grava na planilha.
 * Como instalar: veja a seção "Planilha de leads" no README.md.
 */

var ABA = 'Leads';
var CAMPOS = ['nome', 'whatsapp', 'email', 'especialidade', 'cidade'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var aba = pegarAba_();
    var p = (e && e.parameter) || {};
    var linha = [new Date()].concat(CAMPOS.map(function (c) {
      return limpar_(p[c]);
    }));
    aba.appendRow(linha);
    return resposta_({ ok: true });
  } catch (err) {
    return resposta_({ ok: false, erro: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/* Cria a aba com cabeçalho na primeira vez. */
function pegarAba_() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getSheetByName(ABA);
  if (!aba) {
    aba = planilha.insertSheet(ABA);
    aba.appendRow(['Data', 'Nome', 'WhatsApp', 'E-mail', 'Especialidade', 'Cidade']);
    aba.setFrozenRows(1);
    aba.getRange(1, 1, 1, 6).setFontWeight('bold');
  }
  return aba;
}

/* Limita o tamanho e impede que um texto vire fórmula na planilha. */
function limpar_(valor) {
  var v = String(valor || '').trim().slice(0, 200);
  if (/^[=+\-@]/.test(v)) v = "'" + v;
  return v;
}

function resposta_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
