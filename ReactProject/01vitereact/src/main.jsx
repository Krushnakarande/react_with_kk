import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1> Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',   // ✅ fixed
//         target: '_blank'
//     },
//     Children: 'Click Me to Open Google'
// }

const AnotherElement = (
  <a href="https://www.google.com" target="_blank">Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'click me to open google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
<App />
  
 
)
