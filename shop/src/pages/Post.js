import { Outlet } from "react-router-dom";

function Post() {
    return(
        <div>
            <h4>게시글을 작성할 수 있는 페이지</h4>
            <Outlet></Outlet>
        </div>
    )
}

export default Post;