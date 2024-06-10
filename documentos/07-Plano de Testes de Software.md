# Plano de Testes de Software

Pré-requisitos: Especificação do Projeto e Projeto de Interface.
Os Requisitos para a realização dos testes de software são:

- Site publicado na internet;
- Navegador da internet: Chrome, Firefox ou Edge.

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-06	O site deverá possuir um campo onde os pacientes possam avaliar os profissionais da psicologia.</li>
    <li>RF-02	Campo para que os pacientes realizem seus cadastros.	ALTA</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as páginas existentes corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Douglas</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento do filtro de busca</td>
  <td>
   <ul>
    <li>RF-04:	O site deve oferecer uma funcionalidade de filtragem/busca para permitir ao usuário localizar o profissional de psicologia por especialidade e região.</li>
   </ul>
  </td>
  <td>Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo usuário</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Profissionais.</li>
    <li>Filtrar ou buscar com o nome da especialidade ou região referente e verificar se a informação é exibida na página.</li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro/busca devem mostrar o nome do psicólogo(a) ou região onde há o dado informado.</td>
  <td>Gabriella</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03: Cadastro de usuários: profissionais e pacientes</td>
  <td>
   <ul>
    <li>RF-01	Campo para que os profissionais da psicologia realizem seus cadastros.</li>
    <li>RF-02	Campo para que os pacientes realizem seus cadastros.</li>
   </ul>
  </td>
  <td>Verificar se todas as informações necessárias estão disponíveis nos campos de cadastro</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na aba de login.</li>
    <li>Visualizar o campo de cadastro e preencher os dados solicitados.</li>
   </ol>
   </td>
  <td>Preenchimento do formulário com todas as informações solicitadas corretamente.</td>
  <td>Lucas</td>
  </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o agendamento de consultas</td>
  <td>
   <ul>
    <li>RF-05	Estabelecer um sistema de agendamento de consultas que permita aos pacientes marcar e cancelar sessões e reuniões.</li>
    <li>RF-04	Criar campo de pesquisa avançada, para filtragem de busca.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro para agendamento de consultas está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li> Clicar em "Agendamentos", no Menu.</li>
    <li>Preencher o formulário selecionando data e hora e clicar em “agendar consulta”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "agendar", deve aparecer a mensagem "Consulta marcada com sucesso".</td>
  <td>Silvia</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar relação de profissionais cadastrados</td>
  <td>
   <ul>
   <li>RF-03	Campo onde especificamente pessoas físicas e jurídicas contratam serviços psicológicos.</li>
    <li>RF-04	Criar campo de pesquisa avançada, para filtragem de busca.</li>
   </ul>
  </td>
  <td>Verificar se o login está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “profissionais”, no menu.</li>
    <li>Consultar os profissionais de acordo com o interesse podendo filtrar na aba de busca.</li>
   </ol>
   </td>
  <td>Após a filtragem/busca deverá ser selecionado o perfil de um profissional.</td>
  <td>Douglas</td>
 </tr>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-06: Agendar diretamente do perfil do profissionals</td>
  <td>
   <ul>
   <li>RF-04	O site deve permitir ao usuário realizar agendamento direto do perfil do profissional.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro de agendamento do perfil do profissional está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “profissionais”, no menu.</li>
    <li>Consultar os profissionais de acordo com o interesse podendo filtrar na aba de busca.</li>
    <li>Visualizar a página Perfil.</li>
    <li>Clicar no “nome próprio do profissional”.</li>
    <li>Visualizar o perfil do profissional.</li>
    <li>agendar consulta clicando em ''Agendar''</li>
    <li>Ser direcionado para a página de agendamentos.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "agendar", deve aparecer a mensagem "Consulta marcada com sucesso".</td>
  <td>Lucas</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-07: Verificar o cadastro de tutores</td>
  <td>
   <ul>
   <li>RF-05	O site deve permitir ao usuário disponibilizar informações das disciplinas de tutoria e suas informações para contato.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro de tutores está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil.</li>
    <li>Clicar em “Cadastro de tutores”, no menu.</li>
    <li>Visualizar a página Cadastro de Tutores.</li>
    <li>Inserir as informações sobre o tutor.</li>
    <li>Clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Tutoria cadastrada com sucesso".</td>
  <td>Beatriz</td>
 </tr>
</table>
 
 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-08: Verificar a página de Tutores</td>
  <td>
   <ul>
   <li>RF-008	O site deve permitir ao usuário visualizar os detalhes dos tutores.</li>
   </ul>
  </td>
  <td>Verificar os detalhes dos Tutores e visualizar seus respectivos perfis. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Tutores”, no menu.</li>
    <li>Visualizar a página "Tutores".</li>
    <li>Na página "Tutores", é possível visualizar os perfis com foto e informações dos tutores, além da barra de pesquisa acima dos perfis.</li>
  
   </ul>
   </ol>
   </td>
  <td>Deve ser possível visualizar todos os perfis de Tutores, com suas respectivas fotos e informações, além da visualização da barra de pesquisa acima dos perfis.</td>
  <td>Pedro</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-09: Verificar a página de perfil de usuários cadastrados</td>
  <td>
   <ul>
   <li>RF-009	O site deve permitir ao usuário verificar as informações registradas no cadastro na página Perfil, após fazer seu login.</li>
   </ul>
  </td>
  <td>Verificar se a página Perfil está apresentando as informações cadastradas pelo usuário corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Cadastre-se", no Menu.</li>
    <li>Preencher o formulário e clicar em “Cadastrar”.</li>
    <li>Visualizar a página Login.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil.</li>
   </ol>
   </td>
  <td>As informações registradas pelo usuário no momento do cadastro devem estar disponibilizadas na página Perfil.</td>
  <td>Silvia</td>
 </tr>
</table>

