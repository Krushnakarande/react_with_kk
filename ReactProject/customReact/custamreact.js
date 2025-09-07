function custamRender(reactElement, container) {
   /* const domElement = document.createElement(reactElement.type);
    domElement.innerHTMl = reactElement.Children;   // keep same syntax
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
    */
   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.Children; // fixed typo from innerHTMl to innerHTML
    for(const prop in reactElement.props){
        if(prop === 'container') continue;
        domElement.setAttribute(prop, reactElement.props[prop])

    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',   // ✅ fixed
        target: '_blank'
    },
    Children: 'Click Me to Open Google'
}

const mainContainer = document.querySelector('#root');

custamRender(reactElement, mainContainer);
