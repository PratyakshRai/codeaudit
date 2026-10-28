# CodeAudit AI — Vercel deployment

1. ZIP extract karo. codeaudit folder ke andar ka content GitHub repository root par upload karo: package.json, requirements.txt, vercel.json, api, client. .env aur node_modules upload mat karo.
2. Vercel par Add New → Project → GitHub repo import karo. Root directory repository root hai. Framework Other/none; build `npm run build`; output directory `dist`. vercel.json ye values set karta hai.
3. Environment Variables mein Production ke liye: `OPENAI_API_KEY` = apni OpenAI API key; `AUDIT_ACCESS_KEY` = unique random password (kam se kam 16 characters); optional `OPENAI_MODEL` = tumhare account par available structured-output capable model. Default gpt-4o-mini. API key aur access key alag honi chahiye.
4. Deploy karo. Production `/api/health` par configured: true aana chahiye; actual API call ka proof nahi hai.
5. Website kholo, access key daalo, short sample code aur language select karke Review code dabao. Findings, suggested changes aur Markdown download check karo.
6. Public repo ya chat mein API key, access key ya sensitive code mat daalo. OpenAI usage ka charge ho sakta hai; usage limits set karo. Shared key protection complete login/rate limiting nahi hai.
7. Error aaye toh Vercel runtime logs ka secret-free screenshot bhejo. Invalid key, missing credit, model access aur timeouts possible causes hain.

This deployment and real model integration have not yet been tested with account credentials.
