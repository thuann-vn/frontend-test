import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className='footer-links'>
                    <Link to="#" title='会員登録'>
                        会員登録
                    </Link>
                    <Link to="#" title='運営会社'>
                        運営会社
                    </Link>
                    <Link to="#" title='利用規約'>
                        利用規約
                    </Link>
                    <Link to="#" title='個人情報の取扱について'>
                        個人情報の取扱について
                    </Link>
                    <Link to="#" title='特定商取引法に基づく表記'>
                        特定商取引法に基づく表記
                    </Link>
                    <Link to="#" title='お問い合わせ'>
                        お問い合わせ
                    </Link>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;