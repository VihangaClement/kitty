#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const yargs = require('yargs'); // Add yargs for command-line arguments

// Parse command-line arguments
const argv = yargs
  .usage('Usage: $0 [--template <template-name>]')
  .option('template', {
    alias: 't',
    description: 'Choose a template (default, blog, portfolio)',
    type: 'string',
    default: 'default'
  })
  .help()
  .argv;

const templateDir = path.join(__dirname, '..', 'template', argv.template);
const targetDir = process.cwd();

if (!fs.existsSync(templateDir)) {
  console.error(`Template '${argv.template}' does not exist. Available templates: default, blog, portfolio`);
  process.exit(1);
}

// Copy the selected template to the target directory
fs.copy(templateDir, targetDir, (err) => {
  if (err) {
    console.error('Error copying template:', err);
    process.exit(1);
  }
  console.log(`Kitty ${argv.template} template has been set up!`);
  console.log('Run `npm install` and `npm install parcel --save-dev` to begin.');
  console.log('Then start with `npm start` to see your project at http://localhost:2010.');
});