module.exports = {
  plugins: ['stylelint-order', 'stylelint-use-logical'],
  rules: {
    'at-rule-disallowed-list': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-name-case': null,
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-unknown': true,
    'at-rule-property-required-list': null,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': ['never'],
    'at-rule-allowed-list': null,
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-closing-brace-newline-before': null,
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-no-empty': true,
    'block-opening-brace-newline-after': null,
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': null,
    'color-hex-case': null,
    'color-hex-length': 'short',
    'color-named': null,
    'color-no-hex': null,
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
      },
    ],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'never',
    'comment-word-disallowed-list': null,
    'custom-media-pattern': null,
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'custom-property-pattern': null,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': null,
    'declaration-block-semicolon-newline-before': null,
    'declaration-block-semicolon-space-after': null,
    'declaration-block-semicolon-space-before': null,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': null,
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': null,
    'declaration-colon-space-before': null,
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'declaration-no-important': null,
    'declaration-property-unit-disallowed-list': null,
    'declaration-property-unit-allowed-list': null,
    'declaration-property-value-disallowed-list': null,
    'declaration-property-value-allowed-list': null,
    'font-family-name-quotes': null,
    'font-family-no-duplicate-names': [true],
    'font-family-no-missing-generic-family-keyword': [true],
    'font-weight-notation': null,
    'function-disallowed-list': null,
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': null,
    'function-comma-newline-before': null,
    'function-comma-space-after': null,
    'function-comma-space-before': null,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': null,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': null,
    'function-parentheses-space-inside': null,
    'function-url-no-scheme-relative': null,
    'function-url-quotes': null,
    'function-url-scheme-disallowed-list': null,
    'function-url-scheme-allowed-list': null,
    'function-allowed-list': null,
    'function-whitespace-after': 'always',
    'indentation': null,
    'keyframe-declaration-no-important': true,
    'keyframes-name-pattern': null,
    'length-zero-no-unit': true,
    'linebreaks': null,
    'max-empty-lines': null,
    'max-line-length': null,
    'max-nesting-depth': null,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-disallowed-list': null,
    'media-feature-name-case': null,
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': null,
    'media-feature-name-value-allowed-list': null,
    'media-feature-name-allowed-list': null,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': null,
    'media-query-list-comma-newline-before': null,
    'media-query-list-comma-space-after': null,
    'media-query-list-comma-space-before': null,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': [true],
    'no-duplicate-selectors': true,
    'no-empty-first-line': null,
    'no-empty-source': true,
    'no-eol-whitespace': null,
    'no-extra-semicolons': null,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': null,
    'no-unknown-animations': null,
    'number-leading-zero': null,
    'number-max-precision': null,
    'number-no-trailing-zeros': null,
    'property-disallowed-list': [
      'margin-top',
      'margin-bottom',
      'margin-left',
      'margin-right',
      'border-top',
      'border-bottom',
      'border-left',
      'border-right',
      'padding-top',
      'padding-bottom',
      'padding-left',
      'padding-right',
      'height',
      'width',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-top-left-radius',
      'border-top-right-radius',
    ],
    'property-case': null,
    'property-no-unknown': true,
    'property-no-vendor-prefix': null,
    'property-allowed-list': null,
    'rule-empty-line-before': null,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-disallowed-list': null,
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-allowed-list': null,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': null,
    'selector-combinator-disallowed-list': null,
    'selector-combinator-space-after': null,
    'selector-combinator-space-before': null,
    'selector-combinator-allowed-list': null,
    'selector-descendant-combinator-no-non-space': null,
    'selector-id-pattern': null,
    'selector-list-comma-newline-after': null,
    'selector-list-comma-newline-before': null,
    'selector-list-comma-space-after': null,
    'selector-list-comma-space-before': null,
    'selector-max-attribute': null,
    'selector-max-class': null,
    'selector-max-combinators': null,
    'selector-max-compound-selectors': null,
    'selector-max-empty-lines': null,
    'selector-max-id': null,
    'selector-max-pseudo-class': null,
    'selector-max-specificity': null,
    'selector-max-type': null,
    'selector-max-universal': null,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': null,
    'selector-no-vendor-prefix': null,
    'selector-pseudo-class-disallowed-list': null,
    'selector-pseudo-class-case': null,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-class-allowed-list': null,
    'selector-pseudo-element-disallowed-list': null,
    'selector-pseudo-element-case': null,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-pseudo-element-allowed-list': null,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': null,
    'string-no-newline': true,
    'string-quotes': null,
    'time-min-milliseconds': null,
    'unit-disallowed-list': null,
    'unit-case': null,
    'unit-no-unknown': true,
    'unit-allowed-list': ['%', 'fr', 'px'],
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': null,
    'value-list-comma-newline-before': null,
    'value-list-comma-space-after': null,
    'value-list-comma-space-before': null,
    'value-list-max-empty-lines': null,
    'value-no-vendor-prefix': null,
    'order/order': [
      ['custom-properties', 'declarations'],
      {
        unspecified: 'bottom',
      },
    ],
    'order/properties-order': [
      [
        {
          groupName: 'display',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: ['display', 'box-sizing', 'overflow', 'overflow-x', 'overflow-y', 'list-style'],
        },
        {
          groupName: 'grid',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: [
            'grid',
            'grid-template-columns',
            'grid-template-rows',
            'grid-auto-columns',
            'grid-auto-rows',
            'grid-auto-flow',
            'grid-column',
            'grid-row',
            'grid-gap',
            'column-gap',
            'row-gap',
          ],
        },
        {
          groupName: 'dimensions',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: [
            'block-size',
            'min-block-size',
            'max-block-size',
            'inline-size',
            'min-inline-size',
            'max-inline-size',
          ],
        },
        {
          groupName: 'position',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: ['position', 'top', 'bottom', 'left', 'right'],
        },
        {
          groupName: 'margin',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: ['margin', 'margin-block-start', 'margin-block-end', 'margin-inline-start', 'margin-inline-end'],
        },
        {
          groupName: 'border',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: [
            'border',
            'border-block-start',
            'border-block-end',
            'border-inline-start',
            'border-inline-end',
            'border-radius',
          ],
        },
        {
          groupName: 'padding',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: [
            'padding',
            'padding-block-start',
            'padding-block-end',
            'padding-inline-start',
            'padding-inline-end',
          ],
        },
        {
          groupName: 'text',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: [
            'text-align',
            'word-wrap',
            'color',
            'text-decoration',
            'font-size',
            'font-family',
            'font-variant-ligatures',
            'text-shadow',
          ],
        },
        {
          groupName: 'background',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: ['background', 'background-image', 'background-position', 'background-repeat', 'background-size'],
        },
        {
          groupName: 'decorations',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: ['-webkit-box-shadow', 'box-shadow', '-webkit-text-fill-color', 'outline'],
        },
        {
          groupName: 'interaction',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: [
            'cursor',
            'touch-action',
            '-moz-user-select',
            'user-select',
            '-moz-user-drag',
            '-webkit-user-drag',
          ],
        },
        {
          groupName: 'content',
          emptyLineBefore: 'never',
          noEmptyLineBetween: true,
          properties: ['content'],
        },
      ],
      {
        unspecified: 'ignore',
        emptyLineBeforeUnspecified: 'never',
      },
    ],
    'order/properties-alphabetical-order': null,
  },
};
