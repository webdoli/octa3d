class abstractMount {
    
    constructor() {

        //this.signals = signals;       
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