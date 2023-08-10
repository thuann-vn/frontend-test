import React, { useEffect, useState } from 'react';
import { Badge, Container, Nav, NavDropdown, NavLink, Navbar } from 'react-bootstrap';
import { Link, useLocation  } from 'react-router-dom';

function Navigation() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsDropdownOpen(false);
      }, [location]);
    
    return (
        <Navbar className="navbar-dark bg-dark main-navbar">
            <Container>
                <Link className="navbar-brand" to="/">
                    <img
                        src={'/Imagine/logo.png'}
                        alt="Logo"
                        height="64"
                        width="144"
                    />
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Link className={`nav-link ${location.pathname === '/records' ? 'active' : ''}`} to="/records">
                            <img src={process.env.PUBLIC_URL + '/Imagine/menu/icon_memo.svg'} alt='自分の記録' /> 自分の記録
                        </Link>
                        <Link className={`nav-link`} to="#">
                            <img src={process.env.PUBLIC_URL + '/Imagine/menu/icon_challenge.svg'} alt='チャレンジ' /> チャレンジ
                        </Link>
                        <Link className={`nav-link`} to="#">
                            <img src={process.env.PUBLIC_URL + '/Imagine/menu/icon_info.svg'} alt='お知らせ' /> お知らせ <Badge>1</Badge>
                        </Link>
                        <NavDropdown
                            title={
                                <img src={isDropdownOpen ? '/Imagine/menu/icon_close.svg' : '/Imagine/menu/icon_menu.svg'} alt='ユーザー' />
                            }
                            onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
                            show={isDropdownOpen}
                            align={'end'}
                        >
                            <Link className={`dropdown-item`} to="/records">
                                自分の記録
                            </Link>
                            <Link className={`dropdown-item`} to="#">
                                体重グラフ
                            </Link>
                            <Link className={`dropdown-item`} to="#">
                                目標
                            </Link>
                            <Link className={`dropdown-item`} to="#">
                                選択中のコース
                            </Link>
                            <Link className={`dropdown-item`} to="/news">
                                コラム一覧
                            </Link>
                            <Link className={`dropdown-item`} to="#">
                                設定
                            </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;