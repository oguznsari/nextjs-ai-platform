# Next.js AI Platform SaaS

[Next JS AI Platform SaaS](https://www.youtube.com/watch?v=ffJ38dBzrlY)

---
| # | Component  | Provider  |
|--- |---|---|
| 1 | Conversation | [OpenAi](https://openai.com/) |
| 2 | Code Generation | [OpenAi](https://openai.com/)  |
| 3 | Image Generation | [OpenAi](https://openai.com/)  |
---
## Artificial Intelligence SaaS
> ai-saas
``` bash
npx create-next-app@latest ai-saas --typescript --tailwind --eslint
```

1. [Shadcn UI library](https://ui.shadcn.com/docs)
> **_NOTE:_**  Unlike meterial-ui, we have complete ownership of our component system
``` bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
npx shadcn-ui@latest add sheet                  # mobile sidebar
npx shadcn-ui@latest add card
npx shadcn-ui@latest add avatar
```

2. [Clerk Authentication](https://clerk.com/)
``` bash
npm install @clerk/nextjs
```