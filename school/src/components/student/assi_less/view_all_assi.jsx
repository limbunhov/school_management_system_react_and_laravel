import './view_assi.css';
import p1 from '../../assets/image/image_assi.png';
import { Link } from 'react-router-dom'
export function ViewAssi() {

    return (
        <>
            <div className="subs-container">
                <span><Link to='/home'><button class="a">back</button></Link></span>
                <p>CG</p>
            </div>
            <div className="control_view_assi">
                <div className="view_assi">
                    <div className="pro_ass">
                        <div className="thumnail_add">
                            <img src={p1} alt="" />
                        </div>
                        <p>Assignment</p>
                    </div>
                    <div className="card_assi">
                        <div className="note_assi">
                            <h1>Week1 Assignment</h1>
                            <p>Due 1 oct</p>
                        </div>

                        <div className="view_work">
                            <Link to='/assignment/todo'>
                                <p>View Assignment</p>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="view_assi">
                    <div className="pro_ass">
                        <div className="thumnail_add">
                            <img src={p1} alt="" />
                        </div>
                        <p>Assignment</p>
                    </div>
                    <div className="card_assi">
                        <div className="note_assi">
                            <h1>Week1 Assignment</h1>
                            <p>Due 1 oct</p>
                        </div>
                        <div className="view_work">
                            <p>View Assignment</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewAssi;
