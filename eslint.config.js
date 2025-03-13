import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginQuery from '@tanstack/eslint-plugin-query';
import publicApi from '@feature-sliced/eslint-config/rules/public-api/index.js';
import importPlugin from 'eslint-plugin-import';
import layersSlices from '@feature-sliced/eslint-config/rules/layers-slices/index.js';
import boundaries from 'eslint-plugin-boundaries';

export default tseslint.config(
    ...pluginQuery.configs['flat/recommended'],
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'interface',
                    format: ['PascalCase'],
                    prefix: ['I']
                },
                {
                    selector: 'typeAlias',
                    format: ['PascalCase'],
                    prefix: ['I']
                }
            ],
            'max-params': ['error', 3],
            'no-magic-numbers': 'warn',
            'no-new-func': 'error',
            'no-return-await': 'warn'
        }
    },
    {
        files: ['/*.{ts,tsx}'],
        plugins: {
            import: importPlugin
        },
        rules: publicApi.rules
    },
    {
        files: ['/*.{ts,tsx}'],
        ...boundaries.configs.recommended,
        plugins: {
            boundaries
        },
        settings: layersSlices.settings,
        rules: layersSlices.rules
    },
    {
        files: ['/*.d.ts'],
        rules: {
            '@typescript-eslint/naming-convention': 'off'
        }
    }
);
