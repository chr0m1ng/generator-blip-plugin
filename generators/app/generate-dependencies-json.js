const fs = require('fs');

const app_package = JSON.parse(
    fs.readFileSync('generators/app/templates/package.json.template', 'utf8')
);

const deps = { ...app_package.dependencies, ...app_package.devDependencies };

console.log(`[DEPS]: found ${Object.keys(deps).length} dependencies`);

const dependencies = Object.entries(deps).map(([k, v]) => `${k}@${v}`);

console.log('[DEPS]: Saving to "dependencies.json"');

fs.writeFileSync(
    'generators/app/dependencies.json',
    JSON.stringify(dependencies),
    'utf8'
);
