import {useSelector} from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'https://esm.sh/remark-gfm@3'


export const MarkdownResult = () =>{
    const markdown = useSelector(state => state.markdown.text);
    return (
        <div className={`result-box`} style={{flex: '1', padding: '20px'}}>
            <div style={{padding:'20px',border:"1px solid white", backgroundColor: '#949191', color: 'black', wordBreak:'break-word',height:'750px',overflowY:'scroll'}}>
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}>
                </ReactMarkdown>
            </div>
        </div>
    )
}
