var root = document.body.appendChild(document.createElement('div'))
var html = require('yo-yo')
var state = { n: 0 }
update()
function update () {
  html.update(root, html`<div>
    <h1>Clicked ${state.n} times</h1>
    <button onclick=${onclick}>click</button>
  </div>`)
  function onclick () {
    state.n++
    update()
  }
}
