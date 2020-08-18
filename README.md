# Templaterator

Tool for creating default code templates

## How it works?

```sh
  npm run file "tsx" "useState useEffect" /PROJECT_PATH/
```
Example:

```sh
  npm run file "tsx" "useState useEffect" /Projects/templaterator/
```

`"tsx"` - file or files, (`"tsx css js"`) extension (required).

`"useState useEffect"` - options for the generated file (optional). Available only for `tsx` and `jsx` now.

`/Projects/templaterator/` - directory (optional). On default files will be create in root directory of your project.

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

## Which file extensions is supporting?

`.jsx`, `.tsx`, `.css` and `.stories.jsx` (`.stories.tsx` of course) are currently supported.

## Call how npm module

Add to package.json in your project next npm command:

```sh
npm explore templaterator -- npm run file `YOUR_PARAMS`
```

And it's done!
