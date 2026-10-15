# Security maintenance — 2026-10-15

Removed the unintended wepback dependency and declared webpack explicitly. Updated the development server and restricted it to localhost. Dependencies and generated bundles are no longer committed.

Compatible dependency updates and a weekly Dependabot configuration are included. CRA 3/4 projects move to react-scripts 5.0.1 to build with current Node versions; React itself retains its existing major version. Legacy peer declarations are retained through the documented npm legacy-peer-deps setting.

## Validation

Installation: passed. Build: passed.

npm audit reports 8 affected packages: 0 critical, 6 high, 2 moderate, 0 low. Baseline total: 66.

## Remaining dependency findings

- @babel/cli: high; registry suggests @babel/cli@8.0.6 (major upgrade).
- webpack-dev-server: high; registry suggests webpack-dev-server@6.0.0 (major upgrade).

## Limits and deployment

This is a source/dependency maintenance review, not a security certification or a penetration test. npm audit counts vulnerable packages, not distinct exploitable defects. Legacy build tooling still has known advisories and requires a future migration; a successful build does not resolve those advisories. Audit suggestions to replace react-scripts with a nonfunctional package must not be applied automatically.

Local builds used Node 24.19.0 and npm 11.21.0 with installation lifecycle scripts disabled. Existing lint warnings are not treated as a successful lint audit. Browser permissions, live hosting configuration, account MFA, branch protections, cloud IAM, and full Git history were not comprehensively verified.

Reproduce with `npm ci --ignore-scripts`, `npm audit`, and `npm run build`. For redux-react-tuto, install at the root and in webpack-demo, then build in webpack-demo.

