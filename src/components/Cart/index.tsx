import { useEffect, useState } from 'react'
import close from '../../assets/icon/lixeira.svg'
import {
  Aside,
  ButtonCard,
  Container,
  Content,
  Figure,
  FinalOrder,
  Order,
  Overlay
} from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'

import { activeTheCart } from '../../store/reducers/Cart'
import { formatPrice } from '../../utils/function'
import { remove } from '../../store/reducers/Cart'
const Cart = () => {
  const { activeTheCart: activeTheCartValue, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [active, setAcitve] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (activeTheCartValue) {
      setTimeout(() => {
        setAcitve(true)
      }, 500)
    }
  }, [activeTheCartValue])

  function getActiveTheCart() {
    setAcitve(false)
    setTimeout(() => {
      dispatch(activeTheCart())
    }, 1000)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <Container className={activeTheCartValue ? 'container--isactive' : ''}>
      <Aside className={active ? 'aside--isActive' : ''}>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Order>
                <Figure>
                  <img src={item.foto} alt={item.nome} />
                </Figure>
                <Content>
                  <h2>{item.nome}</h2>
                  <p>R$ {item.preco}</p>
                </Content>
                <ButtonCard
                  onClick={() => removeItem(item.id)}
                  type="button"
                  title="Deletar pedido"
                >
                  <img src={close} alt="Excluir pedido" />
                </ButtonCard>
              </Order>
            </li>
          ))}
        </ul>
        <FinalOrder>
          <div>
            <p>Valor Total</p>
            <p>{formatPrice(getTotalPrice())}</p>
          </div>
          <button>Continuar com a entrega</button>
        </FinalOrder>
      </Aside>
      <Overlay onClick={getActiveTheCart}></Overlay>
    </Container>
  )
}

export default Cart
