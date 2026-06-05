# Node.js SAST + DAST Demo

This repo is for testing one GitHub Actions workflow that runs:

- SAST using GitHub CodeQL
- DAST using OWASP ZAP Baseline Scan

## Local run

```bash
npm install
npm start
```

Open:

```text
http://localhost:3000
http://localhost:3000/health
```

## Required GitHub Variables

Create these variables in GitHub:

- DEV_APP_URL
- STG_APP_URL

Example values:

```text
DEV_APP_URL=https://dev.example.com
STG_APP_URL=https://stg.example.com
```
