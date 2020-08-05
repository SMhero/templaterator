# Templaterator

Tool for creating default code templates

## How it works?

```sh
  npm run file "tsx" /PROJECT_PATH/ "useState useEffect"
```
Example:

```sh
  npm run file "tsx" /Projects/templaterator/ "useState useEffect"
```

`"tsx"` - file or files, (`"tsx css js"`) extension (required).

`/Projects/templaterator/` - directory (optional). On default files will be create in root directory of your project.

`"useState useEffect"` - options for the generated file (optional). Available only for `tsx` and `jsx` now.

In directory file is created with name `Template` and extension `tsx` or `css`.
`useState` and `useEffect` are hooks which will be used in and written to the file.

File contain this code after command:

```sh
import React, { useEffect, useState } from 'react';

import styles from './Template.css'

const Template = () => {
  const [stateValue, setStateValue] = useState('');

  useEffect(() => {

  }, [])

  return (
    <div />
  );
}

export default Template;
```

Works same for `.jsx` extension.

## Call how npm module

Add to package.json in your project next npm command:

```sh
npm explore templaterator -- npm run file `YOUR_PARAMS`
```

And it's done!
