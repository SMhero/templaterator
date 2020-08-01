
const tools = require('../tools/index');

module.exports.create = function (hooks) {
  return (
`import React${ hooks ? `, { ${hooks.sort().join(', ')} }` : `` } from 'react';

const App = () => {
  ${hooks ? `
  ${tools.findOption(hooks, 'useRef') ? `const refValue = useRef(null);` : ``}
  ${tools.findOption(hooks, 'useState') ? `const [stateValue, setStateValue] = useState('');` : ``}

  ${tools.findOption(hooks, 'useEffect') ?
    `useEffect(() => {

  }, [])` : ``}`.trim()
  : ``}

  return (
    <div />
  );
}`)
};
