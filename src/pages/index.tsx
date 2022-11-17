import React, { useEffect, useState } from 'react'

import Graphics from '../components/Graphics';
import MarketplaceList from '../components/MarketplaceList';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Options from '../components/Options';
import Product from '../components/Product';

import { Container, Content } from '../../styles/home';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter()

  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      router.replace('/login');
      return;
    }
    setLoading(false);
  }, [])

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
    <>
      {loading ? <p>Loading...</p> :
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
      }
    </>
  )
}

export default Home;