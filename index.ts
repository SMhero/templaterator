import fs from 'fs';
import path from 'path';
import { create as createReactTemplate } from './templates/react';
import { create as createCSSTemplate} from './templates/css';

const templaterator = () => {
  const dir = process.argv[2]; // direction and file name without extension
  const extension = process.argv[3]; // file extension
  const options = process.argv[4]; // react hooks list

  if (!dir || !extension) {
    throw new Error('File name or extension isnt set');
  }


  create(`${dir}.${extension}`, getTemplate(extension, options));
}

const getTemplate = (extension: string, options: string) => {
  const templateOptions = options ? options.split(' ') : undefined;

  if (extension === 'jsx' || extension === 'tsx') {
    return createReactTemplate(templateOptions);
  }

  if (extension == 'css') {
    return createCSSTemplate();
  }

  return '';
}

const create = (dir: string, value: string) => {
  fs.writeFile(path.join(__dirname, dir), value, (err: any) => {
    if (err) throw err;
    console.log('File created!');
  });
};

templaterator();
