import React from "react";
import Noticia from "./components/noticia/noticia";
function App() {
  const [noticias, setNoticias]= React.useState([]);

  function Carregar(){
    setNoticias([{ 
        imagem: "https://picsum.photos/200/300",
        titulo: "TItulo 1",
        texto: "Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Quem num gosta di mé, boa gentis num é.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
      },
      {
        imagem: "https://picsum.photos/200/300",
        titulo: "TItulo 2",
        texto: "2Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Quem num gosta di mé, boa gentis num é.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
      },
    ]);
  }


  return noticias.length >= 2 ?
    (<div className="container">
      
      <button onClick={Carregar}>Carregar Noticias</button>
      <Noticia imagem={noticias[0].imagem} titulo={noticias[0].titulo} texto={noticias[0].texto}/>
      <Noticia imagem={noticias[1].imagem} titulo={noticias[1].titulo} texto={noticias[1].texto}/>
    </div>
    ):(
    <div className="container"> 
      <button onClick={Carregar}>Carregar Noticias</button>
      <div>Sem noticias</div>
    </div>
    )


  ;
}

export default App;
