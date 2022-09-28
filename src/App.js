import './App.css';
import {MarkdownInput} from "./components/MarkdownInput";
import {MarkdownResult} from "./components/MarkdownResult";
import {HelpButton} from "./components/HelpButton";

function App() {
  return (
    <div className="App">
        <div style={{display:'flex', justifyContent: 'end', padding: '20px'}}>
            <HelpButton></HelpButton>
        </div>
        <div style={{display:'flex'}}>
          <MarkdownInput></MarkdownInput>
          <MarkdownResult></MarkdownResult>
        </div>
    </div>
  );
}

export default App;
