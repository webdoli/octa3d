

const preLoader = () => {

    let container = document.createAttribute('div');
        container.className = 'preloader';
        container.innerHTML += `
            <div class="preloader-inner">
                <div class="preloader-icon">
                    <span></span>
                    <span></span>
                </div>
            </div>
        `
    return container

}

export default preLoader