const { execSync } = require('child_process');
const fs = require('fs');

try {
    const eslintOut = execSync('npx eslint .', { encoding: 'utf8' });
    fs.writeFileSync('.eslint_out', eslintOut);
} catch (e) {
    fs.writeFileSync('.eslint_out', e.stdout || e.message);
}

try {
    const viteOut = execSync('npx vite build', { encoding: 'utf8' });
    fs.writeFileSync('.vite_out', viteOut);
} catch (e) {
    fs.writeFileSync('.vite_out', e.stdout || e.message);
}
