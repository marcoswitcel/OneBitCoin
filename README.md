# App OneBitCoin

O material didático em vídeo estudado pode ser encontrado no YouTube, na playlist [Curso React Native (aprendize) - One Bit Code](https://www.youtube.com/playlist?list=PLdDT8if5attEd4sRnZBIkNihR-_tE612_).
É uma série de vídeos sobre desenvolvimento de aplições mobile com React Native.

## Rodando e testando

Primeiro instale o `Expo`, caso não tenha.
[Documentação detalhada para instalar](https://docs.expo.dev/get-started/installation/), ou digite o sguinte comando no terminal:

```bash
$ npm install --global expo-cli
```

A partir daí basta clonar este repositório, instalar as dependências do NodeJS e rodar `npm run start`.
Exemplo completo abaixo:

```bash
$ cd <pasta-deste-repositorio>
$ npm install
$ npm run start
```

Para testar, será necessário instalar o [App do Expo na Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US), ou na Apple Store se tiver um Iphone.
A partir do app do expo no seu celular é só scanear o QRCode que aparecerá na janela do terminal onde você rodou `npm run start`.

## Em que template essa estrutura de pastas se baseia

Esse repositório foi criado usando a `expo-cli`

```bash
# criando o projeto com o expo (template blank)
$ expo init OneBitCoin
# Instalando as dependências pra gerar os gráficos
$ npm install react-native-chart-kit
$ npm install react-native-svg
```

## O que falta?

Gerar as imagens da Splash Screen, favicon, e gerar um build.

## Referências

- Instalação da ferramenta ExpoCli [https://docs.expo.dev/get-started/installation/](https://docs.expo.dev/get-started/installation/)
- Utilização do `jsconfig.json` e diretiva de compilação `checkJs` [https://code.visualstudio.com/docs/languages/jsconfig](https://code.visualstudio.com/docs/languages/jsconfig)
- React Native Chart Kit Documentation: [https://github.com/indiespirit/react-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit)
- Gerando um APK: [https://docs.expo.dev/classic/building-standalone-apps/](https://docs.expo.dev/classic/building-standalone-apps/)
