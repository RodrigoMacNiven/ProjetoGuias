import { HeaderSearchArea } from '../headerSearchArea';
import { HeaderMenuArea } from '../headerMenuArea';
import { HeaderLoginArea } from '../headerLoginArea';
import './header.css'

export const Header: React.FC = () => {
    return (
        <header className='container'>
            <div className='LogoArea'>
                <img src='./LogoFinal.svg' alt='Logo da empresa' />
            </div>
            <HeaderSearchArea />
            <HeaderLoginArea />
            <HeaderMenuArea />
        </header>
    );
};