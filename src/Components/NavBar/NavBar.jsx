import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import logo from './400dpi.png';
import { RiSearchLine } from 'react-icons/ri';
import { BsFillBellFill, BsPersonFill } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';

class NavBar extends Component {
  state = {
    togglerClicked: true,
  };
  render() {
    return (
      <>
        <div className='flex border-b h-16 justify-between px-5 items-center bg-white z-10 fixed w-screen '>
          <div className=' flex space-x-12 '>
            <div className='logo flex items-center font-semibold space-x-2 text-xl text-gray-700'>
              <img src={logo} alt='' className='w-10 h-10' />
              <h1>Frontendmoe</h1>
            </div>
            <div className='search flex items-center space-x-14 border px-2 rounded-md'>
              <input placeholder='Search Here' type='text'></input>
              <RiSearchLine></RiSearchLine>
            </div>
          </div>
          <div className='right flex space-x-7 items-center'>
            <div
              className={`togglers  rounded-full w-12 h-5 flex items-center px-1 hover:cursor-pointer  ${
                this.state.togglerClicked === true && 'bg-gray-200 justify-end '
              } ${!this.state.togglerClicked && 'bg-blue-500'}`}
              onClick={() =>
                this.setState({ togglerClicked: !this.state.togglerClicked })
              }
            >
              <div className='bg-white w-4 h-4 rounded-full'></div>
            </div>
            <div className='bell text-yellow-400  bg-gray-100 p-2 rounded-full'>
              <BsFillBellFill></BsFillBellFill>
            </div>
            <div className='profile flex items-center space-x-1'>
              <div className='avatar bg-gray-100 rounded-full text-xl p-2 '>
                <BsPersonFill></BsPersonFill>
              </div>
              <p className='name'></p>
              <div className='downarrow'>
                <FiChevronDown></FiChevronDown>
              </div>
            </div>
          </div>
        </div>
        <SideBar></SideBar>

        <Outlet></Outlet>
      </>
    );
  }
}

export default NavBar;
