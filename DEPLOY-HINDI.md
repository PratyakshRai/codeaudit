# CodeAudit AI — Gemini aur Vercel

Ye update OpenAI ke bajay Google Gemini API use karta hai. Gemini consumer Pro subscription aur developer API quota/billing alag ho sakte hain. Google AI Studio project par model availability aur free-tier quota check karein.

1. Is ZIP ko extract karein. Existing GitHub CodeAudit repository mein in files ko replace karein: `api/index.py`, `requirements.txt`. Agar kisi file mein aapne pehle custom changes kiye hain, unka backup/compare karein. Secrets kabhi repository par upload na karein.
2. Google AI Studio https://aistudio.google.com/apikey se Gemini Developer API key banayein. Key chat ya screenshot mein share na karein.
3. Existing Vercel project > Settings > Environment Variables mein Production ke liye:
   GEMINI_API_KEY = Google AI Studio ki actual secret key
   AUDIT_ACCESS_KEY = apna alag unique 16+ character random password
   GEMINI_MODEL = gemini-2.5-flash (optional; default bhi yahi hai)
   GEMINI_API_KEY aur AUDIT_ACCESS_KEY alag rakhein. OPENAI_API_KEY is version ko nahi chahiye.
4. Existing repository ki latest commit deploy ho. Environment variable badalne ke baad Deployments se Redeploy karein.
5. Project domain ke /api/health par {"ok":true,"configured":true} check karein. Ye API key valid hone ka proof nahi hai.
6. Website par AUDIT_ACCESS_KEY daliye; ek chhota harmless sample paste karein; Review code click karein; results, suggested diff aur Markdown download verify karein.
7. Error aaye toh Vercel Runtime Logs ka screenshot share karein; credentials, source aur sensitive content hide karke.

Free tier rate limits lagte hain. Provider usage aur privacy terms check karein. AI ke paas bheja gaya code confidential ho sakta hai; secrets/private code paste na karein. Shared access key full authentication, per-user rate limiting ya spending controls nahi hai; Vercel public endpoint par AI costs/abuse guard karein. Real Gemini review bina user key ke is environment mein verify nahi hui.
