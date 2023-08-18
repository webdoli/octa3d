const viewportMainCSS = `

#viewport_ {
    position: absolute;
    top: 140px;
    left: 80px;
    bottom: 0;
    right: 300px;
    z-index: 1;
}

#resizer {
    position: absolute;
    z-index: 1;
    width: 4px;
    right: 298px;
    top: 140px;
    bottom: 0px;
    background-color: dimgray;
    cursor: col-resize;
}

/* viewport Sidebar */
#sidebar {
    position: absolute;
    z-index: 1;
    top: 140px;
    right: 0;
    bottom: 0;
    width: 300px;
    overflow: auto;
    background: #eee;
}

    #sidebar .Panel {
        color: #888;
        padding: 10px;
        border-top: 1px solid #ccc;
    }

    #sidebar .Row {
        display: flex;
        align-items: center;
        min-height: 24px;
        margin-bottom: 10px;
    }
    

#tabs {
    background-color: #ddd;
    border-top: 1px solid #ccc;
}

    #tabs span {
        color: #aaa;
        border-right: 1px solid #ccc;
        padding: 10px;
    }

    #tabs span.selected {
        color: #888;
        background-color: #eee;
    }
/* outliner */

#outliner .opener {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin: 0px 4px;
    vertical-align: top;
    text-align: center;
}

    #outliner .opener.open:after {
        content: '-';
    }

    #outliner .opener.closed:after {
        content: '+';
    }

#outliner .option {
    border: 1px solid transparent;
}

#outliner .option.drag {
    border: 1px dashed #999;
}

#outliner .option.dragTop {
    border-top: 1px dashed #999;
}

#outliner .option.dragBottom {
	border-bottom: 1px dashed #999;
}

#outliner .type {
	display: inline-block;
	width: 14px;
	height: 14px;
	color: #ddd;
	text-align: center;
}

/* outliner obj color */

#outliner .type:after {
	content: '●';
}

#outliner .Scene {
	color: #8888dd;
}

#outliner .Camera {
	color: #dd8888;
}

#outliner .Light {
	color: #dddd88;
}

#outliner .Object3D {
	color: #aaaaee;
}

#outliner .Mesh {
	color: #8888ee;
}

#outliner .Line {
	color: #88ee88;
}

#outliner .LineSegments {
	color: #88ee88;
}

#outliner .Points {
	color: #ee8888;
}

#outliner .Geometry {
	color: #aaeeaa;
}

#outliner .Material {
	color: #eeaaee;
}

#outliner .Script:after {
	content: '◎'
}



.Outliner {
    color: #444;
    background-color: #fff;
    padding: 0;
    width: 100%;
    height: 140px;
    font-size: 12px;
    cursor: default;
    overflow: auto;
    resize: vertical;
    outline: none !important;
}

    #outliner .option {
        pdding: 4px;
        color: #666;
        white-space: nowrap;
    }

    #outliner .option:hover {
        background-color: rgba(0,0,0,0.02);
    }

    .Outliner .option.active {
        background-color: rgba( 0, 0, 0, 0.04 );
    }


.TabbedPanel .Tabs {
    position: relative;
    display: block;
    width: 100%;
    background-color: #ddd;
    border-top: 1px solid #ccc;
}

    .TabbedPanel .Panels {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }

    .TabbedPanel .Tab {
        color: #aaa;
        font-size: .8em;
        padding: 0 10px;
        border-right: 1px solid #ccc;
    }

    .TabbedPanel .Tabs .Tab {
        padding: 10px;
        text-transform: uppercase;
    }

    .TabbedPanel .Tab.selected {
        color: #888;
        background-color: #eee;
    }

.Panel {
    color: #888;
}

/* viewport Footer */

.viewport-footer {
    position: relative;
    /* z-index: 1; */
    width: 100%;
    height: 100vh;
}

.mocut-timeline {
    border: 3px solid white;
    height: 140px;
    width: 100%;
    position: absolute;
    color: white;
    bottom: 0;
}

`;

export default viewportMainCSS