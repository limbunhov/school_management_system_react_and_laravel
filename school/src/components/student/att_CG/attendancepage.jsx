import React from 'react';
import { Link } from "react-router-dom";
import "./attendancepage.css"

const Attendance2 = () => {
  return (
    <div className="ites">
      <div>
      <div className="subs-container">
        <span><Link to='/home'><button class="a">back</button></Link></span>
      </div>
        <div className="scores">
          <h2 className="display-18 display-md-16 display-lg-14 mb-0"> Attendance </h2>
        </div>

        <section className="content-info">
          <div className=" paddings-mini">
            <div className="row">
              <div className="col-lg-12">
                <table className="table-striped table-responsive table-hover result-point">
                  <thead className="point-table-head">
                    <tr>
                      <th className="text-left">No</th>
                      <th className="text-left">Student</th>
                      <th className="text-center">1</th>
                      <th className="text-center">2</th>
                      <th className="text-center">3</th>
                      <th className="text-center">4</th>
                      <th className="text-center">5</th>
                      <th className="text-center">6</th>
                      <th className="text-center">8</th>
                      <th className="text-center">9</th>
                      <th className="text-center">10</th>
                      <th className="text-center">11</th>
                      <th className="text-center">12</th>
                      <th className="text-center">13</th>
                      <th className="text-center">14</th>
                      <th className="text-center">15</th>
                      <th className="text-center">16</th>
                      <th className="text-center">17</th>
                      <th className="text-center">18</th>
                      <th className="text-center">19</th>
                      <th className="text-center">20</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="text-left number">1 <i className="fa fa-caret-up" aria-hidden="true"></i></td>
                      <td className="text-left">
                        <span>Lim Bunhov</span>
                      </td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="cross-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="cross-icon"></td>
                      <td >A</td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                    </tr>
                    <tr>
                      <td className="text-left number">2 <i className="fa fa-caret-up" aria-hidden="true"></i></td>
                      <td className="text-left">
                        <span>Lim Chila</span>
                      </td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="cross-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="cross-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="cross-icon"></td>
                      <td >A</td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                    </tr>
                    <tr>
                      <td className="text-left number">3 <i className="fa fa-caret-up" aria-hidden="true"></i></td>
                      <td className="text-left">
                        <span>Leang ChanMolika</span>
                      </td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="cross-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="cross-icon"></td>
                      <td >A</td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="cross-icon"></td>
                      <td className="checkmark-icon"></td>

                    </tr>
                    <tr>
                      <td className="text-left number">4<i className="fa fa-caret-down" aria-hidden="true"></i></td>
                      <td className="text-left">
                        <span>Vong Salin</span>
                      </td>
                      <td className="cross-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="cross-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td >A</td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="checkmark-icon"></td>
                      <td className="cross-icon"></td>
                      <td className="checkmark-icon"></td>
                    </tr>
                    {/* Add other rows */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Attendance2;
