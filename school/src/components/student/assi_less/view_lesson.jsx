import { Link } from "react-router-dom"
import './lesson_style.css'
export function view_lesson() {
    return (
        <>
            <div className="subs-container">
                <span><Link to='/home'><button class="a">back</button></Link></span>
                <p>CG</p>
            </div>
            <div className="table_item">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>New folder1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>New folder2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>New folder3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default view_lesson