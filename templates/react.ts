
import { findOption } from '../tools/tools';

export const create = (hooks?: string[]): string => {
  return (
`import React${ hooks ? `, { ${hooks.sort().join(', ')} }` : `` } from 'react';

const App = () => {
  ${hooks ? `
  ${findOption(hooks, 'useRef') ? `const refValue = useRef(null);` : ``}
  ${findOption(hooks, 'useState') ? `const [stateValue, setStateValue] = useState('');` : ``}

  ${findOption(hooks, 'useEffect') ?
    `useEffect(() => {

  }, [])` : ``}`.trim()
  : ``}

  return (
    <div />
  );
}`)
};
