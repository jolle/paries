module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    preset: 'jest-puppeteer',
    testPathIgnorePatterns: [
        '/node_modules/',
        '/test-suite/',
        '/helpers/',
        '/utils/'
    ],
    setupTestFrameworkScriptFile: './jest.setup.js'
};
