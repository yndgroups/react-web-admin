import { Link } from "react-router-dom";

function Menus() {
    return (
        <div>
            <div>
                <Link to="/">首页导航</Link>
            </div>
            <div>
                <Link to="/users">用户首页</Link>
            </div>
        </div>
    );
}
export default Menus;