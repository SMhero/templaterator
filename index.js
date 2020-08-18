const fs = require('fs');
const home = require('os').homedir();
const react = require('./templates/react');
const css = require('./templates/css');
const stories = require('./templates/stories');

const templaterator = () => {
  const extensions = process.argv[2]; // jsx tsx css
  const dir = process.argv[4] ? `${home}${process.argv[4]}` : __dirname;
  // if has argument directory will be: user/user_name/your_path
  const options = process.argv[3]; // react hooks

  if (!extensions) {
    throw new Error('File(s) extension isnt set');
  }

  const extensionsList = extensions.split(' ');
  extensionsList.forEach((ext) => {
    create(`${dir}/Template.${ext}`, getTemplate(ext, options));
  })
}

const getTemplate = (extension, options) => {
  if (extension === 'jsx' || extension === 'tsx') {
    const templateOptions = options ? options.split(' ') : undefined;
    return react.create(templateOptions);
  }

  if (extension === 'css') {
    return css.create();
  }

  if (extension === 'stories.jsx' || extension === 'stories.tsx') {
    return stories.create();
  }

  return '';
}

const create = (dir, value) => {
  fs.writeFile(dir, value, (err) => {
    if (err) {
      throw new Error(err);
    }

    console.log(`${dir} is created!`);
  });
};

templaterator();
