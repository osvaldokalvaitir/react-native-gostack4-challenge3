# React Native - Desafio 3

## Desafio 3

Crie uma aplicação do zero e configura as ferramentas: ESLint, Reactotron, Babel Root Import e EditorConfig.

Nesse desafio você utilizará mapas para construir uma interface de cadastro de localização de usuários do Github, o processo é simples, ao pressionar o mapa, um modal será aberto com o campo para digitar um usuário do Github, ao clicar em “Salvar”, uma requisição à API do Github deve ser feita buscando dados como nome, avatar e bio do usuário e aparecer no mapa com seu avatar, ao clicar em cima do usuário no mapa, deve aparecer uma caixa em cima do usuário exibindo seu nome e bio.

A interface da aplicação será como a seguinte:

![Telas da aplicação](/assets/screens.png)

### Regras

- Você pode utilizar a biblioteca [React Native MapBox](https://github.com/mapbox/react-native-mapbox-gl) para criar o mapa, siga os passos de instalação [aqui](https://github.com/mapbox/react-native-mapbox-gl#installation), ou seguindo [esse post](https://blog.rocketseat.com.br/react-native-mapbox/) no blog da Rocketseat;
- A localização inicial do mapa deve ser: Latitude: -27.2177659 e Longitude: -49.6451598, a latitudeDelta deve ser 0.0042 e longitudeDelta 0.0031. Você pode alterar esse valores caso ache melhor.
- O modal para cadastro de localidade só deve ser aberto após o usuário manter pressionado o mapa algum tempo (não é um simples clique).
- A localização utilizada para cadastro deve ser a mesma que o usuário pressionou no mapa.
- Deve-se buscar o nome, bio e avatar do usuário no Github ao cadastrar.
- Ao clicar em cima do avatar do usuário no mapa deve-se exibir seu nome e bio em uma caixa branca, isso pode ser utilizando o recurso de [callout](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/Callout.md).
- A requisição à API deve ser feita utilizando Redux Saga;

### Dicas

- Você irá precisar criar uma conta na aplicação MapBox no plano grátis para conseguir utilizar os mapas: https://www.mapbox.com/signin/
- Para personalizar a marcação no mapa com o avatar do usuário, é necessária a utilização de uma tag Image dentro da tag PointAnnotation do MapBox.
- Para detectar um clique longo em cima do mapa é necessária a utilização da função [onLongPress](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/MapView.md) do MapView;
- Para criar o Modal, utilize o componente [Modal](https://facebook.github.io/react-native/docs/modal.html) do React Native.

## Índice

- [Desenvolvimento](#desenvolvimento)

  - [Configurações Iniciais](#configurações-iniciais)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

  - [Bibliotecas](#bibliotecas)

  - [Outras Ferramentas](#outras-ferramentas)

## Desenvolvimento

### Configurações Iniciais

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga as Configurações Iniciais.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga a Instalação de Projeto.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md) e siga a Execução de Projeto.

### Bibliotecas

- [Babel Root Import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-plugin-root-import.md)

- [babel-eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-eslint.md)

- [eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)

- [ESLint plugin for React Native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-plugin-react-native.md)

- [eslint-import-resolver-babel-plugin-root-import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-import-resolver-babel-plugin-root-import.md)

- [react-native-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md)
