import {useDispatch, useSelector} from "react-redux";
import {changeValue} from "../redux/markdownSlice";

export const MarkdownInput = () => {
    const dispatch = useDispatch();
    const markdown = useSelector(state => state.markdown.text);

    return (
        <div style={{flex: '1', padding: '20px'}}>
            <textarea value={markdown} style={{
                width: '100%',
                display: '-webkit-fill-available',
                padding: '20px',
                border: "1px solid white",
                backgroundColor: '#949191',
                color: 'black',
                wordBreak: 'break-word',
                height: '750px'
            }} onChange={event => dispatch(changeValue(event.target.value))}/>
        </div>
    )
}
