import Imagem from './imagem';
import Texto from './texto';
function Noticia(props)
{
    return (
        <div className="row">
            <div className="col-3">
                <Imagem imagem={props.imagem}/>
            </div>  
            <div className="col-9">
                <Texto titulo={props.titulo} texto={props.texto}/>
            </div> 
      </div>
    );
}

export default Noticia;