import Entrega from './entrega'
import MercadoLivre from './mercadoLivre'
import Correios from './correios'

const entrega: Entrega = new Entrega(new MercadoLivre(), 300)
const entrega2: Entrega = new Entrega(new Correios(), 300)


console.log(entrega.calcularFrete())
console.log(entrega2.calcularFrete())