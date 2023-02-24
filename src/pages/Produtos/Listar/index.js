import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Produtos() {


  const [produtos, setProdutos] = useState([]);


  useEffect(() => {
    Listar();
  }, [])


  async function Listar() {
    await fetch('http://localhost:5000/produtos')
      .then((response) => response.json()
        .then((data) => {
         // console.log(data);
          setProdutos(data);
        }).catch((err) => {
          console.log(err);
        })

      )
  }



  return (
    <div className="container m-5">
      <h1 className="text-center"> Listar de Produtos:</h1>

      <hr />
      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">descrição</th>
            <th scope="col">preço</th>
            <th scope="col">Acoes</th>
          </tr>
        </thead>
        {
          produtos.map(produto => {
            //console.log(produto);
            return(
           
              <tbody  key={produto.id} >
                <tr className="text-center">
                  <th scope="row">{produto.id}</th>
                  <td>{produto.nome}</td>
                  <td>{produto.descricao}</td>
                  <td>{produto.preco}</td>
                 
                  <td>
                    <Link>
                      <button type="button" className="btn btn-outline-success m-1">Cadastrar</button>
                    </Link>
                    <Link>
                      <button type="button" className="btn btn-outline-danger m-1">Deletar</button>
                    </Link>
                    <Link to={"/Visualizar/"+ produto.id}>
                      <button type="button" className="btn btn-outline-warning m-1">Ver produto</button>
                    </Link>
                    <Link to={"/pesquisar/"+ produto.categoria_id}>
                      <button type="button" className="btn btn-outline-primary m-1">Categorias</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            
            )
          })}
          
      </table>
    </div>
  );
}

export default Produtos;