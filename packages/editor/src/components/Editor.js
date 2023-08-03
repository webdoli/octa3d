var Signal = require( 'signals' );
import * as THREE from 'three';

function Editor() {

    this.signals = {

    }

    this.toString();


}

Editor.prototype = {

    toString: () => {
        console.log('@ Editor Start@');
    }

}

export { Editor }