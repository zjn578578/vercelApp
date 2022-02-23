import './App.css';
import {init} from './content/getusermedia/gum'
function App() {
    const onChange =()=>{
        const filterSelect = document.querySelector('select#filter');
        const video = window.video = document.querySelector('video');
        video.className = filterSelect.value;
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>webRtcdemo</p>
                <div className="ButtonGroup">
                    <button id="showVideo" onClick={()=>init()}>开启视频</button>
                    <label htmlFor="filter">滤镜: </label>
                    <select id="filter" onChange={()=>onChange()}>
                        <option value="none">无</option>
                        <option value="blur">毛玻璃</option>
                        <option value="grayscale">黑白</option>
                        <option value="invert">反转</option>
                        <option value="sepia">古典</option>
                    </select>
                </div>

                <video playsInline autoPlay></video>
                <div id="errorMsg"></div>
            </header>
        </div>
    );
}

export default App;
