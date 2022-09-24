import './App.css';
import {MarkdownInput} from "./components/MarkdownInput";
import {MarkdownResult} from "./components/MarkdownResult";

function App() {
  return (
    <div className="App">
        <div style={{display:'flex', justifyContent: 'end', padding: '20px'}}>
            <img style={{width:'75px', border:'1px solid gray', padding: '15px', backgroundColor: '#6c5c73'  }} src={`/question-mark.svg`} />
        </div>
        <div style={{display:'flex'}}>
          <MarkdownInput></MarkdownInput>
          <MarkdownResult></MarkdownResult>
        </div>
    </div>
  );
}

export default App;
