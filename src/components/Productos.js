import { Component } from "react";
import Producto from './Producto'

const styles={
    productos:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
}

class Productos extends Component {
    render(){
        const {productos,agregarCarro}=this.props

        return(
            <div style={styles.productos}>
                {productos.map(producto=>
                    <Producto agregarCarro={agregarCarro} key={producto.name} producto={producto}/>)}
            </div>
        )
    }
}

export default Productos