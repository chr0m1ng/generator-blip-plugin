const glob = require('glob-promise');
const fs = require('fs');

(async () => {
    const paths = await glob('generators/app/templates/**/*.template');

    console.log(`[FILES]: found ${paths.length} files`);

    const files = paths.map((p) => {
        p = p.replace('generators/app/templates/', '');

        const file = {
            template: p
        };

        // replace paths with {variable} to <%= variable %>
        if (p.match(/\{.+\}/)) {
            p = p.replace(/\{/g, '<%= ').replace(/\}/g, ' %>');
        }

        // remove .template to destination
        file.destination = p.replace('.template', '');

        return file;
    });

    console.log('[FILES]: Saving to "files.json"');

    fs.writeFileSync(
        'generators/app/files.json',
        JSON.stringify(files),
        'utf8'
    );
})();
