import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
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
                        <Link className="nav-link" to="/">
                            <img src={process.env.PUBLIC_URL + '/Imagine/menu/icon_memo.svg'} alt='自分の記録' /> 自分の記録
                        </Link>
                        <Link className="nav-link" to="/about">
                            <img src={process.env.PUBLIC_URL + '/Imagine/menu/icon_challenge.svg'} alt='チャレンジ' /> チャレンジ
                        </Link>
                        <Link className="nav-link" to="/">
                            <img src={process.env.PUBLIC_URL + '/Imagine/menu/icon_info.svg'} alt='お知らせ' /> お知らせ
                        </Link>
                        <NavDropdown title={
                            <img src={'/Imagine/menu/icon_menu.svg'} alt='ユーザー' />
                        }>
                            <NavDropdown.Item href="#">自分の記録</NavDropdown.Item>
                            <NavDropdown.Item href="#">体重グラフ</NavDropdown.Item>
                            <NavDropdown.Item href="#">目標</NavDropdown.Item>
                            <NavDropdown.Item href="#">選択中のコース</NavDropdown.Item>
                            <NavDropdown.Item href="#">コラム一覧</NavDropdown.Item>
                            <NavDropdown.Item href="#">設定</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;