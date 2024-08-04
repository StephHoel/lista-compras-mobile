# App de Lista de Compras

Este é o repositório oficial do aplicativo de Lista de Compras. Nosso aplicativo é projetado para tornar suas idas ao supermercado mais eficientes e organizadas.

![Gif Mobile](.github/mobile.gif)

<!--
Possível melhoria:
  - marcar itens já coletados (ou tachar os itens que tiverem com preço e deixar "normal" os que tiverem sem preço)  
-->

## Funcionalidades Principais

- **Gerenciamento de Lista de Compras:** Crie e gerencie facilmente suas listas de compras, adicione, remova e edite itens conforme necessário.

- **Design Intuitivo:** Interface do usuário intuitiva e amigável, tornando a navegação e o uso do aplicativo uma experiência agradável.

- **Compartilhamento de Lista de Compras:** Compartilhe suas listas de compras com membros da família e amigos, facilitando compras conjuntas.

## Como Usar

1. Faça o download do APK na parte de release do lado direito.
2. Instale e execute o aplicativo em seu dispositivo android. Não é necessário fazer login (a lista fica salva apenas no seu celular).

## Como fazer build depois da modificação

Depois de fazer sua modificação, você deve querer compilar em um apk sua aplicação. Sendo assim, será necessário usar um terminal linux:

1. Fazer o export dos paths:
   1. `export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64`
   2. `export ANDROID_HOME=$HOME/android`
   3. `export ANDROID_SDK_ROOT=${ANDROID_HOME}`
   4. `export PATH=${ANDROID_HOME}/cmdline-tools/latest/bin:${ANDROID_HOME}/platform-tools:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${PATH}`
2. E executar o build: `eas build --platform android --local`

## Contribuição

Adoraríamos receber contribuições para melhorar nosso aplicativo! Sinta-se à vontade para abrir problemas (issues) relatando bugs ou sugerindo novas funcionalidades. Além disso, aceitamos pull requests para correções de bugs, novas funcionalidades ou melhorias de código.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
