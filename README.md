# Patent Template Checker

A React and TypeScript prototype that helps patent teams test changes to shared drafting templates before publishing them.

A template change can look fine in one draft and leave another incomplete. This tool runs the same template against three fictional inventions and shows which drafts need attention.

## Try the demo

1. Enable **Include figure descriptions** and click **Run checks**. All three samples pass.
2. Turn off **Include figure descriptions** and run the checks again.
3. Open a failed result. The bike lock and desk lamp drafts are missing figure descriptions. The note-taking app still passes because it has no drawings.
4. Turn figure descriptions back on and rerun the checks. All three samples pass again.

## How it works

The template settings control which sections appear in each draft. A TypeScript check compares each draft with its sample invention. If an invention has drawings and its draft has no figure descriptions, the check fails.

## Tech stack

- React
- TypeScript