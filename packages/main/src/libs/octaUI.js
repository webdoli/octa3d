class OctaUI {

    constructor( dom ) {
        this.dom = dom;
    }

    add() {
        for( let i = 0; i < arguments.length; i++ ) {
            const argument = arguments[i];
            if( argument instanceof OctaUI ) {
                this.dom.appendChild( argument.dom );
            } else {
                console.error('add UIElement Error: ', argument, 'is not an instance of OctaUI');
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
                if( arguments[i] instanceof OctaUI ) {
                    if( arguments[i+1] ) arguments[i].dom.appendChild( arguments[i+1].dom );
                }else {
                    console.error('add UIElement Error: ', arguments[i], 'is not an instance of OctaUI');
                }
            }
            this.dom.appendChild( arguments[0].dom);
        }
        return this;
    }

    // after() {
    //     console.log('arguments length: ', arguments.length );

    //     if( arguments[0] instanceof OctaUI ) {
    //         this.dom.after( arguments[0].dom );
    //     }else {
    //         console.error('add UIElement Error: ', arguments[0], 'is not an instance of OctaUI');
    //     }
        
    //     return this;

    // }


    remove() {
        for( let i = 0; i < arguments.length; i++ ) {
            const argument = arguments[ i ];
            if( argument instanceof OctaUI ){
                this.dom.removeChild( argument.dom );
            } else {
                console.error('add UIElement Error: ', argument, 'is not an instance of OctaUI');
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

//heritage
class UIDiv extends OctaUI {
    constructor() {
        super( document.createElement('div') )
    }
}

class UISpan extends OctaUI{
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

class UIInput extends OctaUI {
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

class UITextArea extends OctaUI {
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

class UIButton extends OctaUI {
    constructor( value ) {
        super( document.createElement( 'button' ));
        this.dom.textContent = value;
    }
}

class UIP extends OctaUI {
    constructor( value ) {
        super( document.createElement('p'));
        this.dom.textContent = value;
    }
}

class UIH extends OctaUI {
    constructor( value, num ) {
        super( document.createElement(`h${num}`));
        this.dom.textContent = value;
    }
}

class UIUL extends OctaUI {
    constructor() {
        super( document.createElement('ul'));
    }
}

class UILI extends OctaUI {
    constructor() {
        super( document.createElement('li'));
    }
}

class UIA extends OctaUI {
    constructor( url ) {
        super( document.createElement('a'));
        this.dom.href = url;
    }
}

class UIImg extends OctaUI {
    constructor() {
        super( document.createElement('img'));
    }
}

class UIIcon extends OctaUI {
    constructor() {
        super( document.createElement('i'));
    }
}


export {  OctaUI, UIDiv, UISpan, UIRow, UIInput, UITextArea, UIButton, UIP, UIH, UIUL, UILI, UIA, UIImg, UIIcon }