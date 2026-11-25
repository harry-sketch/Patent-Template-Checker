# Patent Template Checker

A small prototype for testing changes to shared patent drafting templates. Run the same template across four sample drafts and see which sections would be missing before you use the updated template.

## How it works

Choose whether to include abstracts and figure descriptions, then click **Run checks**. The app compares each generated draft with its source material side by side and marks any missing sections.

## Try it

1. Leave both settings on and click **Run checks**. All four drafts pass.
2. Turn off **Include abstract** and rerun the checks. All four drafts need attention.
3. Turn the abstract back on, turn off **Include figure descriptions**, and rerun. Three drafts need attention, while the duplicate-payment example still passes.

## Screenshots

### Before running checks

![Template settings and four sample drafts before running checks](screenshots/before-checks.png)

### All drafts passed

![All four drafts passed with abstracts and figure descriptions enabled](screenshots/all-drafts-passed.png)

### Missing abstracts

![All four drafts need attention after turning off abstracts](screenshots/missing-abstracts.png)

### Missing figure descriptions

![Three drafts need attention after turning off figure descriptions](screenshots/missing-figure-descriptions.png)

## Tech stack

- Next.js
- React
- TypeScript
