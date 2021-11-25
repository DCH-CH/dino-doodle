import  { React, useState, useEffect } from 'react';
import Editor from './Editor';
import {ReactP5Wrapper} from 'react-p5-wrapper';


const Body = ({ match, fc }) => {

    let [tool, setTool] = useState(0);

    let t;
    // useEffect((obj)=>{
    //     console.log(tool.tagName);
    // });
    const handleTool = (event)=>{
        setTool(event.target.innerHTML);
    }

    const style = {
        background: '#a8dadc',
        textAlign: 'center',
        padding: '15% 0 22% 0',

    };
    const editorStyle = {
        padding: '5% 0'
    }

    const btn = {

        width: '250px',
        height: '80px'
    }

    if (match.url === '/') {
        return (
            <div className="container-fluid" style={style}>
                <div className="col-sm-12">
                    <h1>Welcome!</h1>
                    <button type="button" className="btn btn-primary" style={btn} onClick={fc}>Proceed to Draw!</button>
                </div>
            </div>
        );
    } else if (match.url === '/dino') {

        const tools = ['line', 'rectangle', 'ellipse', 'triangle', 'square', 'point'];
       

 

        const toolsBtn = tools.map(tool => {
            switch (tool) {
                case 'line':
                    return <button key={tool} className="btn btn-primary" onClick={handleTool}>Line</button>;
                case 'rectangle':
                    return <button key={tool} className="btn btn-primary">Rectangle</button>;
                case 'ellipse':
                    return <button key={tool} className="btn btn-primary" onClick={handleTool}>Ellipse</button>;
                case 'triangle':
                    return <button key={tool} className="btn btn-primary">Triangle</button>;
                case 'square':
                    return <button key={tool} className="btn btn-primary">Square</button>;
                case 'point':
                    return <button key={tool} className="btn btn-primary">point</button>;
                default:
                    return <span key={tool} className="btn btn-primary">Unknown</span>
            }
        });
        return (
            <div className="container-fluid" style={editorStyle}>
                <div>
                    <div className="row">
                        <div className="h-toolbar">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                            <div className="v-toolbar  d-grid gap-1 col-12 mx-auto">
                                {toolsBtn}
                            </div>
                        </div>
                        <div className="col-sm-10">
                            <div className="editor" id="editor" style={{width:'1000px', height:'100%' }}>
                                <ReactP5Wrapper sketch={Editor} selectedTool= {tool}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    } else {
        return (
            <div className="container-fluid" style={style}>
                <div className="row"></div>
                <div className="row"></div>
                <div className="row"></div>
            </div>
        );
    }

}

export default Body;