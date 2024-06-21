import '../assi_less/assign_main.css'
import { Link } from 'react-router-dom'
export function assign_main() {
    return (
        <>
            <div className="subs-container">
                <span><Link to='/home'><button className="a">back</button></Link></span>
                <p>CG</p>
            </div>
            <div className='inform'>
                <>
                <h1>Week 1 Assignment</h1>
                <p>Due 1 Oct</p>
                <div className="about_assi">
                    <h1>Instructions</h1>
                    <p>Please check attachment for detail</p>
                    <div className="file_run">
                        <p>File</p>
                        <span><i class="fa-solid fa-ellipsis"></i></span>
                    </div>
                    <div className="add_file">
                        <h1>My Work</h1>
                        <label for="fileInput">
                            <span>Click to Add File <i class="fas fa-plus"></i></span>
                            <input type="file" id="fileInput" />
                        </label>
                    </div>
                </div>
                </>
            </div>
        </>
    )
}
export default assign_main