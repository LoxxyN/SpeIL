import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import eslintConfigPrettier from 'eslint-config-prettier'
import fsdPlugin from 'eslint-plugin-fsd-lint'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores(['.next/**', 'out/**', 'build/**', 'dist/**', 'node_modules/**', 'next-env.d.ts']),
  eslintConfigPrettier,

  {
    plugins: {
      fsd: fsdPlugin,
    },
    rules: {
      // Основные FSD правила

      'fsd/forbidden-imports': 'error', // Нельзя импортировать из верхних слоёв в нижние
      'fsd/no-relative-imports': 'error', // Только алиасы для импортов между слайсами
      'fsd/no-public-api-sidestep': 'error', // Только через public API
      'fsd/no-cross-slice-dependency': 'error', // Нельзя импортировать между слайсами одного слоя
      'fsd/no-ui-in-business-logic': 'warn', // В бизнес-логике не должно быть UI компонентов
    },
  },
  {
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }], // Запрещаем console.log
      'no-duplicate-imports': 'error', // Нельзя дублировать импорты
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }], // Явно указываем, что компонент принимает children

      '@typescript-eslint/no-explicit-any': 'warn', // Any можно, но с предупреждением

      // Неиспользуемые переменные — ошибка (кроме prefixed with _)
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // Типы импортируются через import type
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
    },
  },
])

export default eslintConfig
