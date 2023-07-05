class abstractMount {
    
    constructor( url ) {
    
        this.url = url;       
    }
    
    mount() {

        throw new Error('must type this');
    
    }

    setEvent() {

        throw new Error('must type this');

    }

    getUrl() {

        return this.url;

    }

}

export default abstractMount