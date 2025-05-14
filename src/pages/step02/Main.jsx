
import List01 from "../step03/List01";
import List02 from "../step03/List02";
import Profile from "../step03/Profile";
import CommentList from "../step04/CommentList";
import Counter from "./Counter";

function Main(props){
    return(
        // 태그의 첫글자가 소문자이면 일반적인 html 태그, 대문자이면 컴포넌트
        <main>

            <h1>Welcome React</h1>
                <Counter />
                <List01 />
                <List02 />
                <Profile />
                <CommentList />
        </main>
    )

};

export default Main;