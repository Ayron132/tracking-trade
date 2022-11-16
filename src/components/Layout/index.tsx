import React, { useState, useRef } from 'react'
import Graphics from '../Graphics';
import MarketplaceList from '../MarketplaceList';
import Menu from '../Menu';
import Navbar from '../Navbar';
import Options from '../Options';
import Product from '../Product';

import { Container, Content } from './style';


const Layout = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    const containerRef = React.useRef<HTMLDivElement>(null);

    const openFullscreen = () => {
        if (fullscreen) {
            document.exitFullscreen();
            setFullscreen(false);
            return;
        }
        if (containerRef.current) {
            containerRef.current.requestFullscreen();
            setFullscreen(true);
            return;
        }
    }
    return (
        <Container ref={containerRef} className="wrapper d-flex align-items-stretch">
            <Menu isMenuOpen={isMenuOpen} />
            <Content>
                <Navbar openFullscreen={openFullscreen} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <div className='row d-flex p-4 g-0'>
                    <div className='col-12 col-md-4'>
                        <Product />
                        <MarketplaceList />
                    </div>
                    <div className='col-12 col-md-8'>
                        <Options />
                        <Graphics />
                    </div>
                </div>
            </Content>
        </Container>
    )
}

export default Layout