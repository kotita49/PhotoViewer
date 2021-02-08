import logo from './logo.svg';
import './App.css';
import { PhotoViewer } from './PhotoViewer/PhotoViewer.js';

function App() {
  return (
        
    <div className="App">
      <div>
            <h1>React Photo Viewer</h1>
            <PhotoViewer src={'https://picsum.photos/200/300'}/>
        </div>
    </div>
  );
}

export default App;
