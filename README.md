# Lista de Compras - Aplicativo Mobile

Este é o repositório oficial do **Lista de Compras**, um aplicativo projetado para tornar suas idas ao supermercado mais eficientes e organizadas.

![Demonstração do Aplicativo](.github/mobile.gif)

---

## 📋 Funcionalidades Principais

- **Gerenciamento de Lista de Compras:** Crie, edite e remova itens da sua lista de compras de forma simples e rápida.
- **Design Intuitivo:** Interface amigável e fácil de usar, proporcionando uma experiência agradável.
- **Compartilhamento de Listas:** Compartilhe suas listas com familiares e amigos via WhatsApp.
- **Persistência Local:** Suas listas são salvas localmente no dispositivo, sem necessidade de login.
- **Cálculo Automático de Totais:** O aplicativo calcula automaticamente o valor total da lista com base nos preços e quantidades dos itens.
- **Suporte a Preços com Vírgulas:** Insira preços utilizando vírgulas ou pontos como separadores decimais.

---

## 🌟 Funcionalidades Planejadas

- **Marcar Itens Coletados:** Permitir que itens já coletados sejam marcados ou tachados, facilitando o acompanhamento durante as compras.
- **Destaque de Itens com Preço:** Alterar a cor dos itens com preço diferente de zero para facilitar a identificação.
- **Salvar Itens com Preço Zerado:** Permitir salvar itens mesmo que o preço esteja zerado.
- **Prevenção de Duplicidade:** Impedir a adição de itens com o mesmo nome na lista.
- **Melhoria no Espaço de Input:** Ajustar o layout para melhorar a usabilidade dos campos de entrada.

---

## 🚀 Como Usar

1. **Baixe o APK mais recente:** [Clique aqui para baixar](https://github.com/StephHoel/lista-compras-mobile/releases/download/v1.2.7/lista-compras-v1.2.7.apk).
2. **Instale o aplicativo:** Após o download, instale o APK no seu dispositivo Android.
3. **Comece a usar:** Abra o aplicativo e comece a criar suas listas de compras. Não é necessário login.

---

## 🛠️ Como Fazer Build

Para compilar o aplicativo em um APK após modificações, siga os passos abaixo em um terminal Linux:

1. **Configure os caminhos necessários:**

   ```bash
   export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
   export ANDROID_HOME=$HOME/android
   export ANDROID_SDK_ROOT=${ANDROID_HOME}
   export PATH=${ANDROID_HOME}/cmdline-tools/latest/bin:${ANDROID_HOME}/platform-tools:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${PATH}
   ```

2. **Execute o comando de build:**

   ```bash
   eas build --platform android --local
   ```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- **Abrir Issues:** Relate bugs ou sugira novas funcionalidades.
- **Enviar Pull Requests:** Contribua com correções de bugs, novas funcionalidades ou melhorias no código.

### Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade ou correção: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona minha nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

---

## 📞 Suporte

Se você tiver dúvidas ou problemas, entre em contato abrindo uma [issue](https://github.com/StephHoel/lista-compras-mobile/issues).

---

## 🌟 Agradecimentos

Agradecemos a todos os contribuidores e usuários que ajudam a melhorar este projeto continuamente.
