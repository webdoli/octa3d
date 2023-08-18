
const menuTopCSS = `
.container-editor {
    width: 100%;
    height: 100vh;
    overflow:hidden;
    display:flex;
    flex-direction: column;
    /* border: 2px solid yellow; */
}

hr {
	border: 0;
	border-top: 1px solid #ccc;
}

button {
	position: relative;
}

input {
	vertical-align: middle;
}

	input[type="color"]::-webkit-color-swatch-wrapper {
		padding: 0;
	}
	input[type="color"]::-webkit-color-swatch {
		border: none;
	}

.Panel {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    /* No support for these yet */
    -o-user-select: none;
    user-select: none;
}

.TabbedPanel {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    /* No support for these yet */
    -o-user-select: none;
    user-select: none;
    position: relative;
    display: block;
    width: 100%;
    min-width: 260px;
}
    
    .TabbedPanel .Tabs {
        position: relative;
        display: block;
        width: 100%;
    }
    
        .TabbedPanel .Tabs .Tab {
            padding: 10px;
            text-transform: uppercase;
        }
    
        .TabbedPanel .Panels {
            position: relative;
            display: block;
            width: 100%;
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
		content: '−';
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

#outliner .type:after {
	content: '●';
}

.Panel {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;

	/* No support for these yet */
	-o-user-select: none;
	user-select: none;
}

.TabbedPanel {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;

	/* No support for these yet */
	-o-user-select: none;
	user-select: none;
	position: relative;
	display: block;
	width: 100%;
	min-width: 260px;
}

.TabbedPanel .Tabs {
	position: relative;
	display: block;
	width: 100%;
}

	.TabbedPanel .Tabs .Tab {
		padding: 10px;
		text-transform: uppercase;
	}

	.TabbedPanel .Panels {
		position: relative;
		display: block;
		width: 100%;
	}


/* */

#outliner .Scene {
	color: #8888dd;
}

#outliner .Camera {
	color: #dd8888;
}

#outliner .Light {
	color: #dddd88;
}

/* */

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

/* */

#outliner .Geometry {
	color: #aaeeaa;
}

#outliner .Material {
	color: #eeaaee;
}

/* */

#outliner .Script:after {
	content: '◎'
}

/*  */

button {
	color: #555;
	background-color: #ddd;
	border: 0px;
	margin: 0px; /* GNOME Web */
	padding: 5px 8px;
	font-size: 12px;
	text-transform: uppercase;
	cursor: pointer;
	outline: none;
}

	button:hover {
		background-color: #fff;
	}

	button.selected {
		background-color: #fff;
	}

input, textarea {
	border: 1px solid transparent;
	color: #444;
}

input.Number {
	color: #08f!important;
	font-size: 12px;
	border: 0px;
	padding: 2px;
}

select {
	color: #666;
	background-color: #ddd;
	border: 0px;
	text-transform: uppercase;
	cursor: pointer;
	outline: none;
}

	select:hover {
		background-color: #fff;
	}


/***********/
/* MenuTop */
/***********/
#menubar {
	/* position: absolute; */
	/* border: 3px solid #f0c83c; */
	/* width: 100%; */
	border-bottom: 1px solid #302b26;
	display: flex;
	/* height: 32px; */
	height: 49px;
	/* background: #eee; */
	/* background: #5138ee; */
	/* background: #313f54; */
	/* background: #594e7a; */
	/* background: #f08835; */
	background: #eea11b;
	padding: 0;
	margin: 0;
	right: 0;
	top: 0;
	z-index:3;
}

#menubar .menu {

    float: left;
    cursor: pointer;
    padding-right: 9px;
}

#menubar .menu.right {
    float: right;
    cursor: auto;
    padding-right: 0;
    text-align: right;
}

    #menubar .menu .title {
        display: inline-block;
        /* color: #888; */
		/* color: #ede9dd; */
		/* color: black; */
		/* color: #302b26; */
		color: #192b33;
		font-size:1.1em;
		font-weight: 450;
        margin-top: 2px;
        padding: 8px;
		margin-left: 8px;
        /* line-height: 16px; */
    }

	#menubar .menu:hover {
		/* background: #98d3d4; */
		/* background: #ede9dd; */
		background: #efc77f;
	}

	#menubar .menu .title:hover {
		color: #302b26;
	}

    #menubar .menu .options {
		/* border: 1px solid blue; */
		z-index: 10;
        position: fixed;
        display: none;
        padding: 5px 0;
		/* background: #9288f8; */
		/* background: #a2aba5; */
		background: #302b26;
        /* background: #eee; */
        /* width: 150px; */
		border-radius: 5px;
        max-height: calc(100% - 80px);
        overflow: auto;
		font-weight: 450;
    }

    #menubar .menu:hover .options {
        display: block;
    }

        #menubar .menu .options hr {
            border-color: #ddd;
        }

        #menubar .menu .options .option {
            /* color: #666; */
			/* color: #f0c83c; */
			/* color: #2b2e2e; */
			/* color: #ede9dd; */
			color: #f0c83c;
			font-weight: 300;
			/* border: 1px solid red; */
            background-color: transparent;
            padding: 5px 25px;
            margin: 0 !important;
        }

            #menubar .menu .options .option:hover {
                /* color: #fff; */
				color: #302b26;
                /* background-color: #08f; */
				/* background-color: #a6b827; */
				background: #f0c83c;
            }

            #menubar .menu .options .option:active {
                color: #666;
                background: transparent;
            }

    #menubar .menu .options .inactive {
        color: #bbb;
        background-color: transparent;
        padding: 5px 10px;
        margin: 0 !important;
    }

`

export default menuTopCSS;