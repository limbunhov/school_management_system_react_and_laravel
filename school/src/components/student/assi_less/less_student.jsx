import {Link} from 'react-router-dom'
import React from 'react';
export function lesson_stu(){
    return (
        <>
        <div className="subs-container">
        <span><Link to='/home'><button class="a">back</button></Link></span>
      </div>
            <div className="cont_ass">
                <Link to='/lesson/cg'>
                <div className="items">
                    <div className="tittle">
                        <h1>CG</h1>
                    </div>
                </div>
                </Link>
                <div className="items">
                    <div className="tittle">
                        <h1>WCT</h1>
                    </div>
                </div>
                <div className="items">
                    <div className="tittle">
                        <h1>NE</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default lesson_stu;