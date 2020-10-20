const fs = require('fs');

const app_package = JSON.parse(
    fs.readFileSync('generators/app/templates/package.json.template', 'utf8')
);

console.log(
    `[DEPS]: found ${Object.keys(app_package.dependencies).length} dependencies`
);

const dependencies = Object.entries(app_package.dependencies).map(
    ([k, v]) => `${k}@${v}`
);

console.log('[DEPS]: Saving to "dependencies.json"');

fs.writeFileSync(
    'generators/app/dependencies.json',
    JSON.stringify(dependencies),
    'utf8'
);
