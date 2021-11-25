import React from 'react';
import Line from '../models/Line';
import Ellipse from '../models/Ellipse';
//import {  } from 'react-p5-wrapper';

const Editor = (p) => {
    let canv
    let selected = null;
    let initX;
    let initY;
    let termX;
    let termY;
    let counter = 0;
    let enabled = false;
    let createShape = false;
    let currentShape = null;

    let shapeList = [];
    p.setup = () => {
        let parent = document.getElementById("editor");
        canv = p.createCanvas(parent.offsetWidth, parent.offsetHeight);
        //canv.position(parent.offsetX, parent.offsetY);
        canv.mouseOver(enabledDrawing);
        canv.mouseOut(disabledDrawing);

    };

    p.updateWithProps = props => {
        if (props.selectedTool != null) {
            selected = props.selectedTool;
        }
    };

    p.draw = () => {
        p.background(220);
        for (let i = 0; i < shapeList.length; i++) {
            let shapeItem = shapeList[i];
            shapeItem.display();
        };
    };

    p.mouseClicked = () => {
        switch (selected) {
            case 'Line':
                currentShape = null;
                currentShape = new Line(p);
                shapeList.push(currentShape);
                createShape = true;
                break;
            case 'Ellipse':
                currentShape = null;
                currentShape = new Ellipse(p);
                shapeList.push(currentShape);
                createShape = true;
                break;
            //p.ellipse(initX, initY, termX, termY);
            default:
                console.log("Unknow Item");

        }
    }

    p.mousePressed = () => {
        console.log(counter)
        if (enabled && (counter === 0)) {
            initX = p.mouseX;
            initY = p.mouseY;
            termX = p.mouseX;
            termY = p.mouseY;

            if (currentShape !== null) {
                currentShape.x1 = initX;
                currentShape.y1 = initY;
                currentShape.x2 = termX;
                currentShape.y2 = termY;
            }
            counter = 1;
        }
    };

    p.mouseDragged = () => {
        termX = p.mouseX;
        termY = p.mouseY;
        if (currentShape !== null) {
            currentShape.x2 = termX;
            currentShape.y2 = termY;
        }
    }

    p.mouseReleased = () => {
        createShape = false;
        counter = 0;
    }

    const enabledDrawing = () => {
        enabled = true;
        console.log("enabled: " + enabled);
    }

    const disabledDrawing = () => {
        enabled = false;
        console.log("enabled: " + enabled);
    }
}


export default Editor;