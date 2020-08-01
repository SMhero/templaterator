const fs = require('fs');
const path = require('path');
const react = require('./templates/react');
const css = require('./templates/css');

const templaterator = () => {
  const dir = process.argv[2]; // direction and file name without extension
  const extension = process.argv[3]; // file extension
  const options = process.argv[4]; // react hooks list

  if (!dir || !extension) {
    throw new Error('File name or extension isnt set');
  }


  create(`${dir}.${extension}`, getTemplate(extension, options));
}

const getTemplate = (extension, options) => {
  const templateOptions = options ? options.split(' ') : undefined;

  if (extension === 'jsx' || extension === 'tsx') {
    return react.create(templateOptions);
  }

  if (extension == 'css') {
    return css.create();
  }

  return '';
}

const create = (dir, value) => {
  fs.writeFile(path.join(__dirname, dir), value, (err) => {
    if (err) throw err;
    console.log('File created!');
  });
};

templaterator();
