module.exports = {
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^@/screens/(.*)$',
    '^@/ui/(.*)$',
    '^@/hooks/(.*)$',
    '^@/shared/(.*)$',
    '^@/services/(.*)$',
    '^@/assets/(.*)$',
    '^@/utils/(.*)$',
    '^@/config/(.*)$',
    '^@/store/(.*)$',
    '^@/providers/(.*)$',
    '^../(.*)',
    '^./(.*)',
    '(.scss)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 120,
  endOfLine: 'auto',
}
