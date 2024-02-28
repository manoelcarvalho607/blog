/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import { RiImageAddLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrHelp } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';
import { useState } from 'react';


export default function User() {

    const user = true;

    const [profileOpen, setProfileOpen] = useState(true);

    const close = () => {
        setProfileOpen(false);
    }



    return (
        <>
            <section className="profile">
                {user ? (

                    <>
                        <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
                            <img src={logo} alt='images' />
                        </button>

                        {profileOpen && (
                            <section className='openProfile boxItems' onClink={close}>
                                <Link to='/account'>
                                    <div className='image'>
                                        <figure className='img'>
                                            <img src={logo} alt='images' />
                                        </figure>
                                        <section className='text'>
                                            <h4>Manoel Silva</h4>
                                            <p>Bauru,SP</p>
                                        </section>
                                    </div>
                                </Link>
                                <Link to='/create'>
                                    <button className='box'>
                                        <RiImageAddLine className='icon' />
                                        <h4>Criar Post</h4>
                                    </button>
                                </Link>
                                <Link to='/login'>
                                    <button className='box'>
                                        < IoSettingsOutline className='icon' />
                                        <h4>Minha Conta</h4>
                                    </button>
                                </Link>
                                <button className='box'>
                                    < BsBagCheck className='icon' />
                                    <h4>Meu Pedido</h4>
                                </button>
                                <button className='box'>
                                    < AiOutlineHeart className='icon' />
                                    <h4>Lista de Pedidos</h4>
                                </button>
                                <button className='box'>
                                    < GrHelp className='icon' />
                                    <h4>Ajuda</h4>
                                </button>
                                <button className='box'>
                                    < BiLogOut className='icon' />
                                    <h4>Sair</h4>
                                </button>
                            </section>
                        )}
                    </>
                ) : (
                    <Link to='/login'>
                        <button>Minha Conta</button>
                    </Link>

                )}
            </section>


        </>
    )
}