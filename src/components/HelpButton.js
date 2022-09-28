import {useDispatch} from "react-redux";
import {setDefault} from "../redux/markdownSlice";


export const HelpButton = () => {
    const dispatch = useDispatch();


    return (
        <img alt={`help`} onClick={() => dispatch(setDefault())} style={{width:'75px', border:'1px solid gray', padding: '15px', backgroundColor: '#6c5c73'  }} src={`/question-mark.svg`} />
    )
}
