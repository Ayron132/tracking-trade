import React, { useState } from 'react'

import {
    Container,
    MenuAndSearch,
    Icon,
    FullscreenAndProfile,
    Profile,
    Name,
    ButtonIcon,
    Menu,
    Button
} from './style';
import Input from '../Search';

import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

type Props = {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
    openFullscreen: () => void;
}

const Navbar = ({ openFullscreen, isMenuOpen, setIsMenuOpen }: Props) => {

    const [searchValue, setSearchValue] = useState("");

    const router = useRouter()

    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        router.push("/login");
    }

    return (
        <>
            <Container className="navbar navbar-expand-lg">
                <MenuAndSearch>
                    <Icon
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvas"
                        src='/hamburger.svg' />
                    <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} color="grey" />
                    <div className='offcanvas offcanvas-start d-sm-none' tabIndex={-1} data-bs-backdrop="false" id="offcanvas">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <p>Try scrolling the rest of the page to see this option in action.</p>
                        </div>
                    </div>
                </MenuAndSearch>
                <FullscreenAndProfile>
                    <Icon onClick={openFullscreen} src='/fullscreen.svg' />
                    <Profile>
                        <div className="dropdown">
                            <Button type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" >
                                <Icon className="profile" src={user && user.image} />
                                <Name>{user && user.name}</Name>
                                <ButtonIcon src="/arrowBottom.svg" />
                            </Button>
                            <ul aria-labelledby="dropdownMenuClickableInside"
                                className="border-0 shadow p-2 dropdown-menu dropdown-menu-end mt-3 ">
                                <Menu onClick={handleLogout}>
                                    <Icon className="logout" src='/onOff.svg' /> Logout
                                </Menu>
                            </ul>
                        </div>
                    </Profile>
                </FullscreenAndProfile>
            </Container>
        </>
    )
}

export default Navbar