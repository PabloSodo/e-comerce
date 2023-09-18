import Productos from "../componentes/Productos";
import home from"../estilos/home.module.css"

function Home() {
  return (
    <div>
      <fieldset></fieldset>
      <h1 className={home.title}>Home</h1>
      <Productos />
    </div>
  );
}

export default Home;
