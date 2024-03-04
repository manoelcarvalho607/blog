/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import { RiImageAddLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrHelp } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';

import './header.css';

export default function User() {

    const user = true;

    const [profileOpen, setProfileOpen] = useState(false);

    const close = () => {
        setProfileOpen(false);
    }



    return (
        <>
            <section className="profile">
                {user ? (

                    <>
                        <button className='imgUser' onClick={() => setProfileOpen(!profileOpen)}>
                            <UserOutlined style={{ fontSize: '22px' }} />
                        </button>

                        {profileOpen && (
                            <section className='openProfile boxItems' onClink={close}>
                                <Link to='/account'>
                                    <div className='image'>
                                        <figure className='imgUser'>
                                            <UserOutlined style={{ fontSize: '22px', margin:'10px', color: '#3c80e6;' }} />
                                        </figure>
                                        <section className='text'>
                                            <h4>Manoel Carvalho</h4>
                                            <p>Iacanga,SP</p>
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