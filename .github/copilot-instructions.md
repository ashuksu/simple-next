# Commit Message Instructions

Read and strictly follow rules, format, types, and limits defined in `commitlint.config.js`.

Requirements:

1. Detect the current Git branch name and prefix the message: `<branch> - <type>: <subject>`
2. If branch name cannot be detected or equals `main`/`master`, prefixing is optional.
3. Use valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
4. Keep type, scope, and subject in lowercase, with first line under 150 characters.

Examples:

- test - fix: enhance commitlint configuration
- feature/login - feat (auth): add login form
