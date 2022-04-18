import Botao from "../components/botao";
import Formulario from "../components/formulario";
import Layout from "../components/layout";
import Tabela from "../components/tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { cliente, clientes, novoCliente, salvarCliente, clienteSelecionado, clienteExcluido, tabelaVisivel, exibirTabela} = useClientes()

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-green-700
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
          <div className="flex justify-end">
            <Botao className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <Formulario 
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={() => exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}