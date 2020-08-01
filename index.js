const fs = require('fs');
const home = require('os').homedir();
const react = require('./templates/react');
const css = require('./templates/css');

const templaterator = () => {
  const dir = process.argv[2];
  const extension = process.argv[3];
  const options = process.argv[4];

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
  fs.writeFile(`${home}/${dir}`, value, (err) => {
    if (err) throw err;
    console.log('File created!');
  });
};

templaterator();
