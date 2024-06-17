# 📝 Teste Motoca Systems - Desenvolvedor Front-End

### Rodando Scripts do Projeto

#### Ambiente de Desenvolvimento

Para instalar as dependencias do projeto utilize o comando

```bash
npm install
```

Para iniciar os ambientes de frontend e o json-server em paralelo, utilize o comando:

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
