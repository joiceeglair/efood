import facebook from '../../assets/icon/icon-facebook.svg'
import instagram from '../../assets/icon/icon-instagram.svg'
import twitter from '../../assets/icon/twitter-2-svgrepo-com.svg'
import logoEfood from '../../assets/Logo-Efood/logo-efood.svg'
import { FooterContainer, LinkFooter } from './styled'

export default function Footer() {
  return (
    <FooterContainer>
      <img src={logoEfood} alt="efood" />
      <nav>
        <LinkFooter href="https://www.instagram.com/">
          <img src={instagram} alt="instagram" />
        </LinkFooter>
        <LinkFooter href="https://web.facebook.com/">
          <img src={facebook} alt="facebook" />
        </LinkFooter>
        <LinkFooter href="https://twitter.com/">
          <img src={twitter} alt="twitter" />
        </LinkFooter>
      </nav>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterContainer>
  )
}
