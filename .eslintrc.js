module.exports = {
    extends: [
        'airbnb-base',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'preact',
        'plugin:prettier/recommended'
    ],
    plugins: ['preact', 'react'],
    env: {
        browser: true,
        es6: true
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    rules: {
        'linebreak-style': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
