class OctaUI {

    constructor( dom ) {
        this.dom = dom;
    }

    add() {

    }

    remove() {

    }

    clear() {

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

    setAttr( props ) {
        
        Object.entries( props )
        .forEach( ([key, value]) => { 
            this.dom.setAttribute( key, value ) 
        });
        
        return this;
    }

}