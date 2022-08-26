import Image from 'next/image';
import main1 from '../img/main1.png';
import logo from '../img/logo.png';
import { TextComponent } from './components';
export const Header=()=>{
    return(
        <>
        <Image
        src={logo}
        alt="logo"
        width={53}
        height={52}
      />
      
      </>
    )
}
export const MainImage = () => {
    return (
      <Image
        src={main1}
        alt="Picture main"
        width={300}
        height={300}
      />
    )
  }