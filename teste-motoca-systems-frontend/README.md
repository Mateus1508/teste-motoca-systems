# 📝 Teste Motoca Systems - Desenvolvedor Front-End

### Rodando Scripts do Projeto

#### Ambiente de Desenvolvimento

Para instalar as dependencias do projeto utilize o comando

```bash
npm install
```

Para iniciar os ambientes de frontend e backend em paralelo, utilize o comando:

```bash
npm run dev
```

Para rodar os testes unitarios utilize o comando

```bash
npm run test
```

## Principais componentes

### TableItems

O componente `TableItem` é responsável por renderizar uma tabela dinâmica de dados de motos, exibindo informações seguindo o modelo do Figma. Ele utiliza hooks personalizados (`useGetAll` e `useDelete`) para buscar dados de motos e gerenciar operações como exclusão e atualização. O componente permite filtrar as motos com base em uma string de pesquisa e oferece botões para excluir e editar cada moto individualmente. Além disso, ele lida com estados de carregamento e erros, exibindo indicadores visuais, como um spinner de carregamento e alertas, para uma experiência de usuário mais robusta.

### Form

O componente `Form` é responsável por gerenciar o formulário de registro e edição de informações de uma moto. Ele recebe opcionalmente um objeto `data` do tipo `MotoType`, que é utilizado para preencher o formulário quando se está editando uma moto existente. O estado `formData` é inicializado com valores padrão vazios ou zero, e é atualizado conforme o usuário interage com os campos de entrada. O componente utiliza hooks personalizados (`useInsert` e `useUpdate`) para realizar operações de inserção e atualização no banco de dados. No evento de submissão do formulário, ele decide se deve atualizar ou inserir os dados com base na presença ou ausência de `data`. O layout é construído com componentes reutilizáveis como `Input`, `SelectField` e `Button`, permitindo uma interface intuitiva para o usuário interagir com os dados da moto.

---

## 📄 Descrição

Bem-vindo ao teste de contratação para a vaga de Desenvolvedor Front-End. Neste teste, você terá a oportunidade de demonstrar suas habilidades em **React** ou **Vue**, **HTML**, **CSS** e **JavaScript** ao criar uma aplicação CRUD baseada em um layout fornecido no Figma.

## 📋 Instruções

1. **Clone** este repositório para o seu ambiente local.
2. Crie uma aplicação CRUD utilizando **React** ou **Vue**, seguindo o layout disponibilizado no Figma.
3. Implemente as funcionalidades de **Criar**, **Ler**, **Atualizar** e **Deletar**.
4. Estilize a aplicação de acordo com o layout fornecido, utilizando **HTML** e **CSS**. Ou se preferir, use a lib de estilização onde você sinta-se confortável.
5. Após completar o teste, crie um repositório no seu GitHub com o nome **`teste-motocaSystems-frontEnd`** e suba o seu código para lá.
6. Envie o link do seu repositório para nós (thalles@motoca.com.br / welliton@motoca.com.br / rodrigocosta@motoca.com.br).
7. Envie o que você conseguir.

## 🎨 Layout

O layout da aplicação está disponível no Figma. Certifique-se de seguir o design o mais próximo possível.

[[Figma Layout](https://www.figma.com/design/YqufsjX9hR7Qzk9mM359fH/Teste-Motoca-Systems?node-id=0-1&t=cMNbEIgJ2wKOufTm-1)](#)

## 📚 Requisitos

- Utilize **React** ou **Vue** para construir a aplicação.
- Utilize **HTML** e **CSS** para estilizar a aplicação. Ou uma lib de estilização onde você sinta-se confortável.
- Implemente as operações de CRUD (Criar, Ler, Atualizar, Deletar).
- Você poderá utilizar o JSON server para simular a API ou qualquer outro mock de API de sua preferência.

## ⏰ Prazo

Você tem até **17/06/2022 as 08:00 horas** para completar este teste.

Será levando em consideração a qualidade e o tempo de entrega do teste.

## 📦 Entrega

1. Após completar o teste, crie um repositório no seu GitHub com o nome **`teste-motocaSystems-frontEnd`**.
2. Suba o código da aplicação para este repositório.
3. Inclua qualquer documentação adicional que julgar necessária.
4. Certifique-se de que o código está bem comentado e fácil de entender.
5. Envie o link do repositório para nós (thalles@motoca.com.br / welliton@motoca.com.br / rodrigocosta@motoca.com.br).

## 📞 Contato

Se você tiver qualquer dúvida durante o teste, sinta-se à vontade para entrar em contato conosco.

Boa sorte! 🍀
