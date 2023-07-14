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

    setId( id ) {
        this.dom.id = id;
        return this;
    }

    getId() {
        return this.dom.id;
    }

    setClass( name ) {
        this.dom.className = name;
        return this;
    }

    addClass( name ) {
        this.dom.classList.add( name );
        return this;
    }

    removeClass( name ) {
        this.dom.classList.remove( name );
        return this;
    }

    setStyle( style, arr ) {
        for( let i = 0; i < arr.length; i ++ ) {
            this.dom.style[ style ] = arr[ i ];
        }
        return this;
    }

}