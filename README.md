## Templaterator

Tool for creating default code templates

# How it works?

```sh
  npm run file App tsx "useState useEffect"
```

In root directory file is created with name `App` and extension `tsx`.`
`useState` and `useEffect` are hooks which will be used in and written to the file.

File contain this code after command:

```sh
import React, { useEffect, useState } from 'react';

const App = () => {
  const [stateValue, setStateValue] = useState();

  useEffect(() => {

  }, [])

  return (
    <div />
  );
}
```

Works same for `.jsx` extension.
