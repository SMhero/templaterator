
const tools = require('../tools/index');

module.exports.create = function (hooks) {
  return (
`import React${ hooks ? `, { ${hooks.sort().join(', ')} }` : `` } from 'react';

import styles from './Template.css';

const Template = () => {
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
}

export default Template;
`)
};
