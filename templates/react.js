
const tools = require('../tools/find-option');

module.exports.create = function (hooks) {
  return (
`import React${ hooks ? `, { ${hooks.sort().join(', ')} }` : `` } from 'react';

import styles from './Template.css';

const Template = () => {
  ${`${hooks && tools.findOption(hooks, 'useRef') ?
    `const refValue = useRef(null);` : ``}

  ${hooks && tools.findOption(hooks, 'useState') ?
    `const [stateValue, setStateValue] = useState('');` : ``}

  ${hooks && tools.findOption(hooks, 'useEffect') ?
    `useEffect(() => {

  }, [])` : ``}`.trim()}

  return (
    <div />
  );
}

export default ${hooks ? `${tools.findOption(hooks, 'memo') ? `memo(Template)` : ``}` : `Template`};
`)
};
