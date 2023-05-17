/** @type {import('ts-jest').JestConfigWithTsJest} */

// module.exports = {
//     preset: 'ts-jest',
//     transform: {
//         '^.+\\.(ts|tsx)?$': 'ts-jest',
//         '^.+\\.(js|jsx)$': 'babel-jest',
//     },
// }
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    },
}
