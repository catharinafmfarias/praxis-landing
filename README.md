# Práxis · Landing page do Checklist CFM

Landing page para captar leads com o e-book gratuito **"Checklist: seu perfil está dentro das regras do CFM?"**.

Página estática: só HTML, CSS e um pouco de JavaScript, sem dependências nem build.

## Estrutura

```
praxis-landing/
├── index.html          → a landing page completa
├── assets/
│   └── favicon.svg     → ícone da aba do navegador
├── google-apps-script/
│   └── Code.gs         → script que grava os leads na planilha
├── .gitignore
└── README.md
```

## Antes de publicar

No `index.html`:

1. **WhatsApp**: no fim do arquivo, `WHATSAPP` tem o número da Práxis (só dígitos, com DDI 55 e DDD) e `WHATSAPP_MSG` a mensagem que já vem escrita na conversa.
2. **Rodapé**: Instagram (@praxis.mktsaude) e CNPJ ficam no fim do `index.html`, dentro do `<footer>`.
3. **Planilha de leads**: no fim do arquivo, `PLANILHA_URL` tem a URL do Apps Script (veja o passo a passo abaixo).

## Planilha de leads (Google Sheets)

Cada envio do formulário vira uma linha na planilha com: data, nome, WhatsApp, e-mail, especialidade e cidade.

1. Crie uma planilha nova em https://sheets.new (ex.: "Leads Práxis").
2. Na planilha, abra **Extensões › Apps Script**.
3. Apague o conteúdo do editor, cole o conteúdo de `google-apps-script/Code.gs` e salve (ícone de disquete).
4. Clique em **Implantar › Nova implantação**. Em **Selecionar tipo** (engrenagem), escolha **App da Web** e preencha:
   - **Executar como**: Eu
   - **Quem pode acessar**: Qualquer pessoa
5. Clique em **Implantar** e autorize o acesso com sua conta Google. Se aparecer "O Google não verificou este app", clique em **Avançado › Acessar (não seguro)**: o script é seu e só grava nesta planilha.
6. Copie a **URL do app da Web** (termina em `/exec`) e cole no `index.html`, no lugar de `COLE_AQUI_A_URL_DO_APPS_SCRIPT`.

A aba **Leads** é criada sozinha no primeiro envio.

Se depois você alterar o `Code.gs`, vá em **Implantar › Gerenciar implantações › Editar (lápis) › Versão: Nova versão** para a mudança valer. Assim a URL continua a mesma.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `praxis-landing`).
2. Envie os arquivos desta pasta: **Add file › Upload files**, arraste tudo e clique em **Commit changes**.
3. Vá em **Settings › Pages**.
4. Em **Source**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
5. Em 1 a 2 minutos o site fica no ar em `https://SEU-USUARIO.github.io/praxis-landing/`.

### Domínio próprio (opcional)

Em **Settings › Pages › Custom domain**, informe o domínio (ex.: `checklist.praxis.com.br`) e crie no seu provedor de domínio um registro **CNAME** apontando para `SEU-USUARIO.github.io`.

## Rodar localmente

Abra o `index.html` direto no navegador. Não precisa instalar nada.

## Sobre as animações

- Entrada do título, desenho do logo, faixa rolando, e-book flutuando e revelação de elementos ao rolar.
- Funcionam em Chrome, Edge, Safari e Firefox, inclusive no celular.
- Quem ativa "reduzir movimento" no aparelho vê a página estática.
