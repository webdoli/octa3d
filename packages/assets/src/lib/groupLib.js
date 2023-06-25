
function createScriptTag( url ) {

    let script = document.createElement('script');
    script.src = url;

    return script; 

}

const GroupLibs = () => {

    let libNodes = [];

    let jquery = createScriptTag()

    return libNodes;

}

export default GroupLibs