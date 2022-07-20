import React, { Component } from 'react';
import { BsFillPersonFill, BsFillPersonPlusFill } from 'react-icons/bs';
import {
  MdOutlineSupervisorAccount,
  MdSupervisorAccount,
} from 'react-icons/md';
import { IoMdStats } from 'react-icons/io';
class Dashboard extends Component {
  state = {
    CurrentPage: 1,
    GeneralStat: [
      {
        Name: 'Suspect',
        icon: MdOutlineSupervisorAccount,
        Value: 2,
        Color: 'text-red-700 text-5xl',
      },
      {
        Name: 'Prospect',
        icon: MdSupervisorAccount,
        Value: 5,
        Color: 'text-purple-700 text-5xl',
      },
      {
        Name: 'Clients',
        icon: BsFillPersonFill,
        Value: 4,
        Color: 'text-green-600',
      },
      {
        Name: 'My Agents',
        icon: BsFillPersonPlusFill,
        Value: 8,
        Color: 'text-blue-500',
      },
    ],
    leftDashItemsClicked: 'Opportunities',
    leftDashItems: [
      {
        Name: '',
        icon: IoMdStats,
        data: 'Complete Your Order to Get Full Website',
      },
      {
        Name: 'Opportunities',
        icon: '',
        data: 'data',
      },
      {
        Name: 'Tasks',
        icon: '',
        data: 'Complete Your Order to Get Full Website',
      },
    ],
    Opportunities: [
      {
        Name: 'Asif ahmed',
        Line: 'Auto Insurance',
        Escd: '14/12/22',
        Probability: '56%',
      },
      {
        Name: 'Asif ahmed',
        Line: 'Auto Insurance',
        Escd: '14/12/22',
        Probability: '56%',
      },
      {
        Name: 'Asif ahmed',
        Line: 'Auto Insurance',
        Escd: '14/12/22',
        Probability: '56%',
      },
    ],
  };
  render() {
    return (
      <div className='page w-screen pl-56 pr-4  pt-20 h-screen bg-gray-50'>
        <div className='header font-semibold text-2xl'>
          <h1>Dashboard</h1>
        </div>
        <div className='stat bg-white flex justify-around py-5 my-5 border  '>
          {this.state.GeneralStat.map((e) => (
            <div className='element flex items-center space-x-3'>
              <e.icon className={`text-4xl ${e.Color}`}></e.icon>
              <div className='text'>
                <p>{e.Name}</p>
                <p>{e.Value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='data  flex h-2/3 bg-white'>
          <div className='left  w-1/2  min-h-full border flex flex-col justify-between'>
            <div className='header bg-slate-800 text-white rounded-t-md h-12 flex items-center pl-2'>
              <ul className='flex space-x-7 items-center justify-center h-full'>
                {this.state.leftDashItems.map((e) => (
                  <li
                    className={` ${
                      this.state.leftDashItemsClicked === e.Name &&
                      'bg-white text-black'
                    } hover:bg-white hover:text-black hover:cursor-pointer min-h-full flex justify-center items-center px-2 
                     
                    `}
                    onClick={() =>
                      this.setState({ leftDashItemsClicked: e.Name })
                    }
                  >
                    {e.Name === '' && <e.icon></e.icon>}
                    <p>{e.icon === '' && e.Name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='data'>
              {this.state.leftDashItems.map((e) => (
                <div>
                  {this.state.leftDashItemsClicked === e.Name &&
                    this.state.leftDashItemsClicked !== 'Opportunities' &&
                    e.data}{' '}
                  {e.Name === 'Opportunities' &&
                    this.state.leftDashItemsClicked === 'Opportunities' && (
                      <table class='table-auto w-11/12 mx-auto border-2'>
                        <thead>
                          <tr className='bg-gray-200 text-left  '>
                            <th>Name</th>
                            <th>Line Of Business</th>
                            <th>Est,Close Date</th>
                            <th>Probability</th>
                          </tr>
                        </thead>
                        {this.state.CurrentPage === 1 && (
                          <tbody>
                            {this.state.Opportunities.map((e) => (
                              <tr>
                                <td>{e.Name}</td>
                                <td>{e.Line}</td>
                                <td>{e.Escd}</td>
                                <td>{e.Probability}</td>
                              </tr>
                            ))}
                          </tbody>
                        )}
                        {this.state.CurrentPage !== 1 && (
                          <p className='text-center'>
                            Complete Your Order to Get the other Pages
                          </p>
                        )}
                      </table>
                    )}
                </div>
              ))}
            </div>
            {this.state.leftDashItemsClicked === 'Opportunities' && (
              <div className='buttons px-7 flex justify-between'>
                <div className='text'>
                  Showing {this.state.CurrentPage} to 5 of 5 entries
                </div>
                <div className='buttons flex  space-x-2'>
                  <button
                    className='bg-gray-50 py-2 px-3 border'
                    onClick={() =>
                      this.setState({ CurrentPage: this.state.CurrentPage - 1 })
                    }
                  >
                    Previous
                  </button>
                  <p className='bg-blue-500 py-2 px-3 border text-white'>
                    {this.state.CurrentPage}
                  </p>
                  <button
                    className='bg-gray-50 py-2 px-3 border'
                    onClick={() =>
                      this.setState({ CurrentPage: this.state.CurrentPage + 1 })
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            <div className='header bg-slate-800 text-white rounded-b-md h-10 flex items-center pl-2'></div>
          </div>
          <div className='right  w-1/2 pl-3'>
            <div className='header bg-slate-800 text-white rounded-t-md h-12 flex items-center pl-2'>
              {'> '}Farmer's Insurance Commercial
            </div>
            <iframe
              height={'80%'}
              width={'100%'}
              src='https://www.youtube.com/embed/wFiPl96pCus'
              title='Safe Driving Standoff | Farmers Insurance® Policy Perks℠'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <div className='header bg-slate-800 text-white rounded-b-md h-10 flex items-center pl-2'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
