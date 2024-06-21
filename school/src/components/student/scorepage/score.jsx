import React from 'react';
import { Link } from "react-router-dom";
import "./score.css"

const score = () => {
  return (
    <>
    <div className="ites">
      <div className="subs-container">
        <span><Link to='/home'><button className="a">back</button></Link></span>
      </div>
      <div className="scores">   
        <h2>Score </h2>
      </div>
      <section className="content-info">
        <div className=" paddings-mini">
          <div className="row">
            <div className="col-lg-12">
              <table className="table-striped table-responsive table-hover result-point">
                <thead className="point-table-head">
                  <tr>
                    <th className="text-left">No</th>
                    <th className="text-left">SUBJECT</th>
                    <th className="text-center">ATTENDANCE</th>
                    <th className="text-center">LAB</th>
                    <th className="text-center">ASSIGNMENT</th>
                    <th className="text-center">MID-TERM</th>
                    <th className="text-center">FINAL</th>
                    <th className="text-center">TOTAL</th>
                    <th className="text-center">GRADE</th>
                    
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-left number">1 <i className="fa fa-caret-up" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <span>WCT II</span>
                    </td>
                    <td>10</td>
                    <td>8</td>
                    <td>8</td>
                    <td>15</td>
                    <td>50</td>
                    <td>91</td>
                    <td class="grade">A</td>
                    
                  </tr>
                  <tr>
                    <td className="text-left number">2 <i className="fa fa-caret-up" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <span>SE</span>
                    </td>
                    <td>8</td>
                    <td>10</td>
                    <td>10</td>
                    <td>12</td>
                    <td>25</td>
                    <td>65</td>
                    <td class="grade">C+</td>
                    
                  </tr>
                  <tr>
                    <td className="text-left number">3 <i className="fa fa-caret-up" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <span>NE</span>
                    </td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>20</td>
                    <td>50</td>
                    <td>100</td>
                    <td class="grade">A</td>
                   
                  </tr>
                  <tr>
                    <td className="text-left number">4<i className="fa fa-caret-down" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <span>CG</span>
                    </td>
                    <td>6</td>
                    <td>3</td>
                    <td>5</td>
                    <td>8</td>
                    <td>20</td>
                    <td>42</td>
                    <td class="grade">D</td>
                    
                  </tr>
                  
                  
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    
    </div>
    </>
  );
}

export default score;
