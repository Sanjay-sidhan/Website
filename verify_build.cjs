const { execSync } = require('child_process');

console.log('=== START LINT ===');
try {
    execSync('npx eslint .', { encoding: 'utf8', stdio: 'inherit' });
    console.log('LINT SUCCESS');
} catch (e) {
    console.error('LINT FAILED');
}

console.log('\n=== START BUILD ===');
try {
    execSync('npx vite build', { encoding: 'utf8', stdio: 'inherit' });
    console.log('BUILD SUCCESS');
} catch (e) {
    console.error('BUILD FAILED');
}
