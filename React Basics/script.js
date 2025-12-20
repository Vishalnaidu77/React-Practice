
import h1 from "./app.js";
import circle from './test.js'

const parent = () => React.createElement('div', null, [h1(), circle()])

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(parent())
