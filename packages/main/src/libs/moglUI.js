class MoglUI {

    constructor( dom ) {
        
        this.dom = dom;
    }

    add() {
        for( let i = 0; i < arguments.length; i++ ) {
            const argument = arguments[i];
            if( argument instanceof MoglUI ) {
                this.dom.appendChild( argument.dom );
            } else {
                console.error('add UIElement Error: ', argument, 'is not an instance of MoglUI');
            }
        }
        return this;
    }

    addSeq() {
        if( arguments < 2 ) {
            console.log('argument size under 2');
            this.add();
        } else {
            
            for( let i = 0; i < arguments.length; i++ ) {
                if( arguments[i] instanceof MoglUI ) {
                    if( arguments[i+1] ) arguments[i].dom.appendChild( arguments[i+1].dom );
                }else {
                    console.error('add UIElement Error: ', arguments[i], 'is not an instance of MoglUI');
                }
            }
            this.dom.appendChild( arguments[0].dom);
        }
        return this;
    }

    // after() {
    //     console.log('arguments length: ', arguments.length );

    //     if( arguments[0] instanceof MoglUI ) {
    //         this.dom.after( arguments[0].dom );
    //     }else {
    //         console.error('add UIElement Error: ', arguments[0], 'is not an instance of MoglUI');
    //     }
        
    //     return this;

    // }


    remove() {
        for( let i = 0; i < arguments.length; i++ ) {
            const argument = arguments[ i ];
            if( argument instanceof MoglUI ){
                this.dom.removeChild( argument.dom );
            } else {
                console.error('add UIElement Error: ', argument, 'is not an instance of MoglUI');
            } 
        }
        return this;
    }

    clear() {
        while( this.dom.children.length ) {
            this.dom.removeChild( this.dom.lastChild );
        }
    }

    getId() {
        return this.dom.id;
    }

    addClass( name ) {
        this.dom.classList.add( name );
        return this;
    }

    removeClass( name ) {
        this.dom.classList.remove( name );
        return this;
    }

    setTextContent( value ) {
        this.dom.textContent = value;
        return this;
    }

    inner( value ) {
        this.dom.innerHTML = value;
        return this; 
    }

    setAttr( props ) {
        
        Object.entries( props )
            .forEach( ([key, value]) => { 
                this.dom.setAttribute( key, value ) 
            });
        
        return this;
    }

}

//Events
const events = [ 'KeyUp', 'KeyDown', 'MouseOver', 'MouseOut', 'Click', 'DblClick', 'Change', 'Input' ];

events.forEach(  (evt) => {

    const method = 'on' + evt;

    MoglUI.prototype[ method ] = function ( cb ) {

        this.dom.addEventListener( evt.toLowerCase(), cb.bind( this ) );

        return this;

    }

})


//heritage
class UIDiv extends MoglUI {
    constructor() {
        super( document.createElement('div') )
    }
}

class UISpan extends MoglUI{
    constructor(){
        super( document.createElement( 'span' ));
    }
}

class UIRow extends UIDiv{
    constructor(){
        super();
        this.dom.className = 'row';
    }
}

class UIInput extends MoglUI {
    constructor() {
        super( document.createElement('input') );
    }

    getValue() {
        return this.dom.value;
    }

    setValue( value ) {
        this.dom.value = value;
        return this;
    }
}

class UITextArea extends MoglUI {
    constructor() {
        super( document.createElement('textarea') );
    }

    getValue() {
        return this.dom.value;
    }

    setValue( value ) {
        this.dom.value = value;
        return this;
    }
}

class UIButton extends MoglUI {
    constructor( value ) {
        super( document.createElement( 'button' ));
        this.dom.textContent = value;
    }
}

class UIP extends MoglUI {
    constructor( value ) {
        super( document.createElement('p'));
        this.dom.textContent = value;
    }
}

class UIH extends MoglUI {
    constructor( value, num ) {
        super( document.createElement(`h${num}`));
        this.dom.textContent = value;
    }
}

class UIUL extends MoglUI {
    constructor() {
        super( document.createElement('ul'));
    }
}

class UILI extends MoglUI {
    constructor() {
        super( document.createElement('li'));
    }
}

class UIA extends MoglUI {
    constructor( url ) {
        super( document.createElement('a'));
        this.dom.href = url;
    }
}

class UIImg extends MoglUI {
    constructor() {
        super( document.createElement('img'));
    }
}

class UIIcon extends MoglUI {
    constructor() {
        super( document.createElement('i'));
    }
}


export {  MoglUI, UIDiv, UISpan, UIRow, UIInput, UITextArea, UIButton, UIP, UIH, UIUL, UILI, UIA, UIImg, UIIcon }