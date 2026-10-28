# CodeAudit AI

React + Monaco + Python/FastAPI + LangChain. Submits snippets to a configured OpenAI model; returns structured findings, an entire suggested-code revision, an editable report download, and a Monaco side-by-side diff. Model output is untrusted and can be wrong; it is not executed. Review and test suggestions before use. The project does not perform deterministic scanning and cannot guarantee detection.

## Security and privacy

Code is sent to the configured OpenAI API. Do not submit secrets or code you lack permission to share. OPENAI_API_KEY and AUDIT_ACCESS_KEY are server-side environment variables; the browser asks users for the separate AUDIT_ACCESS_KEY before sending a review. Use a unique random access key of at least 16 characters; do not reuse the OpenAI key. A shared passcode limits casual access but is not full user authentication or rate limiting; do not make it public in a repo. Apply provider spending limits, access controls, and rate limiting before public launch. Health endpoint reports whether config exists, not whether credentials are valid. No snippets or findings are persisted by the app; hosting/provider policies still apply. Error logs contain exception class names only.

## Local development

Requires Node.js 20+ and Python 3.11+. `npm install`, `npm run build`; create `.venv`, `pip install -r requirements.txt`. Set OPENAI_API_KEY, AUDIT_ACCESS_KEY, and optional OPENAI_MODEL in environment. Run `uvicorn api.index:app --host 127.0.0.1 --port 8000` and `npm run dev`; open http://localhost:5173. The Vite proxy forwards `/api` to FastAPI. Never commit credentials.

## Vercel

Import the repository as one project from GitHub. Build command `npm run build`, output `dist`, install command default npm. `vercel.json` routes review calls to `api/index.py`, detected as a Python function; requirements.txt provides Python dependencies. Set server-side environment OPENAI_API_KEY, AUDIT_ACCESS_KEY and optionally OPENAI_MODEL. Use a model available to your account that supports structured function calling. Vercel and API usage may incur costs. Deploy, open `/api/health`, then enter the access key privately and submit a small harmless snippet. Verify findings, diff and Markdown output; the health endpoint alone does not verify an AI call. Actual deployment/API execution has not been verified in the generation environment.

## Limits

Single snippet up to 16,000 characters; no whole repositories, file uploads, multi-user accounts, permanent reports, or automated code execution. No promise of security correctness. Model provider availability, costs and latency apply. Structured model output, Vercel Python routing and hosted AI integration need end-to-end validation with real credentials.
