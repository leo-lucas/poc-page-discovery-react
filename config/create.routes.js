const glob = require('glob');
const fs = require('fs');

const createRoute = () =>
  glob('**/*.page.jsx', { cwd: 'src/pages' }, function (er, files) {
    const files2 = files.map((el, index) => {
      const teste = `./pages/${el}`;
      return `lazy(() => import('${teste}'))`;
    });

    // .replace('.jsx', '')
    console.log(files, files2);
    const fileJs = `
    import  { lazy } from 'react';
    const routes = [${files2.join()}]
    export default routes;`;

    fs.writeFile('src/routes.js', fileJs, function (err) {
      if (err) return console.log(err);
      console.log('Hello World > helloworld.txt');
    });
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
  });

module.exports = createRoute;
