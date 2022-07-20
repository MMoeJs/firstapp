import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { FiChevronRight, FiSettings } from 'react-icons/fi';
import { VscDashboard, VscCalendar } from 'react-icons/vsc';
import {
  MdBusinessCenter,
  MdPublic,
  MdOutlineHelpOutline,
  MdLogout,
} from 'react-icons/md';
import {
  RiMoneyDollarCircleLine,
  RiProfileLine,
  RiBookLine,
  RiAccountCircleLine,
} from 'react-icons/ri';

class SideBar extends Component {
  state = {
    ElementClicked: '/',
    links: [
      {
        Name: 'Admin',
        Link: '/Admin',
        icon: FiSettings,
      },
      {
        Name: 'Dashboard',
        Link: '/Dashboard',
        icon: VscDashboard,
      },
      {
        Name: 'Business',
        Link: '/Admin',
        icon: MdBusinessCenter,
      },
      {
        Name: 'Sales Resources',
        Link: '/Admin',
        icon: RiMoneyDollarCircleLine,
      },
      {
        Name: 'Marketing',
        Link: '/Admin',
        icon: MdPublic,
      },
      {
        Name: 'Events',
        Link: '/Admin',
        icon: VscCalendar,
      },
      {
        Name: 'Liscensing',
        Link: '/Admin',
        icon: RiProfileLine,
      },
      {
        Name: 'Training',
        Link: '/Admin',
        icon: RiBookLine,
      },
      {
        Name: 'Help Center',
        Link: '/Admin',
        icon: MdOutlineHelpOutline,
      },
      {
        Name: 'Account',
        Link: '/Admin',
        icon: RiAccountCircleLine,
      },
      {
        Name: 'Logout',
        Link: '/Admin',
        icon: MdLogout,
      },
    ],
  };
  componentDidMount = () => {
    if (window.location.hash === 'http://localhost:3000/') {
    } else {
      this.state.links.map((e) => {
        if (window.location.href.includes(e.Link)) {
          this.setState({ ElementClicked: e.Name });
        }
      });
    }
  };
  render() {
    return (
      <div className='border h-screen fixed top-0 z-0 w-52 text-gray-500 font-semibold pt-20 bg-white'>
        <ul className='menu'>
          {this.state.links.map((e) => (
            <Link to={e.Link}>
              <li
                className={`flex items-center relative w-full pl-4 h-14 hover:cursor-pointer hover:bg-blue-50 hover:text-blue-900 hover:font-semibold ${
                  this.state.ElementClicked === e.Name &&
                  'text-blue-900 bg-blue-50 font-semibold'
                }`}
                onClick={() => this.setState({ ElementClicked: e.Name })}
              >
                <div className='bg-blue-900 absolute  hoverCol -left-1 w-2 rounded-md h-14'></div>
                <e.icon className='mr-6'></e.icon>
                <div className='w-2/3 flex items-center justify-between'>
                  <p>{e.Name}</p>
                  <FiChevronRight></FiChevronRight>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default SideBar;
