# Templaterator

Tool for creating default code templates

## How it works?

```sh
  npm run file /PROJECT_PATH/App tsx "useState useEffect"
```
Example:

```sh
  npm run file /Projects/templaterator/App tsx "useState useEffect"
```
`/Projects/templaterator/App` - directory and file name (required)

`tsx` - file extension (required)

`"useState useEffect"` - options for the generated file (optional)

If you don't set path (only file name) your file created in root directory on the computer

In directory file is created with name `App` and extension `tsx`.
`useState` and `useEffect` are hooks which will be used in and written to the file.

File contain this code after command:

```sh
import React, { useEffect, useState } from 'react';

const App = () => {
  const [stateValue, setStateValue] = useState('');

  useEffect(() => {

  }, [])

  return (
    <div />
  );
}
```

Works same for `.jsx` extension.

## Call how npm module

Add to package.json in your project next npm command:

```sh
npm explore templaterator -- npm run file
```

Set arguments and it's done!
