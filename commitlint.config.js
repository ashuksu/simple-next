/**
 * FORMAT: [branch - ]<type>[(scope)]: <subject>
 * TYPES: feat, fix, docs, style, refactor, test, chore
 * EXAMPLES:
 *   fix: fix bug
 *   main - feat(auth): add login
 */

/** @type {import('@commitlint/types').UserConfig} */
const Configuration = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?:(.+)\s*-\s*)?(\w+)(?:\((.+)\))?!?: (.+)$/,
      headerCorrespondence: ['branch', 'type', 'scope', 'subject'],
    },
  },
  rules: {
    'header-max-length': [2, 'always', 150],
  },
};

export default Configuration;
