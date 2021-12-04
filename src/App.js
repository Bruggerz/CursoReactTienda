import {Component} from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import NavBar from './components/NavBar'


class App extends Component {

  state={
    productos:[
      {name: 'Tomate',precio:1500, img:'/productos/tomate.jpg'},
      {name: 'Arbejas',precio:2500, img:'/productos/arbejas.jpg'},
      {name: 'Lechuga',precio:500, img:'/productos/lechuga.jpg'},
    ],
    carro:[],
    esCarroVisible:false,
  }

  agregarCarro = (producto) => {
    const {carro} =this.state
    if(carro.find(x=>x.name===producto.name)){
      const newCarro=carro.map(x=>x.name===producto.name
      ?({
        ...x,
        cantidad:x.cantidad+1
      }): x)
      return this.setState({carro:newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad:1,
      })
    })
  }

  mostrarCarro=()=>{
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible:!this.state.esCarroVisible})
  }

  render(){
    const {esCarroVisible}=this.state
    return(
      <div>
        <NavBar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title/>
          <Productos
            agregarCarro={this.agregarCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
