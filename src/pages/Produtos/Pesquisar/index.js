import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Pesquisar(props) {

    const { categoria_id } = useParams();

    console.log(categoria_id);

    const [categorias, setCategorias] = useState([]);


    useEffect(() => {
        Listar()
    }, [])

    async function Listar() {
        await fetch('http://localhost:5000/Categorias')
            .then((response) => response.json()
                .then((data) => {
                    console.log(data);
                    setCategorias(data);
                }).catch((err) => {
                    console.log(err);
                })

            )
    }


    const mostrar = e =>{
        e.preventdefault();
        console.log("teste");
    }



    return (
        <div className="container m-5">
            <h1 className="text-center">Categorias:</h1>
            <hr />
            <div className="card text-center">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <select className="form-select" aria-label="Default select example">
                        <option value="">Selecione</option>
                        {
                            categorias.map(categoria => {
                                return (
                                    <optgroup key={categoria.id}>
                                        <option value="">{categoria.nome}</option>
                                    </optgroup>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Pesquisar;
