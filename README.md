# Next.js AI Platform SaaS

## [Next JS AI Platform SaaS](https://www.youtube.com/watch?v=ffJ38dBzrlY)

## Demo video

## [![Ecommerce Project with NextJs](https://img.youtube.com/vi/kVKMu_YfVRw/0.jpg)](https://www.youtube.com/watch?v=kVKMu_YfVRw)

| #   | Component        | Provider                            |
| --- | ---------------- | ----------------------------------- |
| 1   | Conversation     | [OpenAi](https://openai.com/)       |
| 2   | Code Generation  | [OpenAi](https://openai.com/)       |
| 3   | Image Generation | [OpenAi](https://openai.com/)       |
| 4   | Music Generation | [Replicate](https://replicate.com/) |
| 5   | Video Generation | [Replicate](https://replicate.com/) |

---

## Artificial Intelligence SaaS

> ai-saas

```bash
npx create-next-app@latest ai-saas --typescript --tailwind --eslint
```

1. [Shadcn UI library](https://ui.shadcn.com/docs)
   > **_NOTE:_** Unlike meterial-ui, we have complete ownership of our component system

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
npx shadcn-ui@latest add sheet                  # mobile sidebar
npx shadcn-ui@latest add card
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add progress
npx shadcn-ui@latest add dialog                 # for pro-modal
npx shadcn-ui@latest add badge                  # for pro-modal
```

2. [Clerk Authentication](https://clerk.com/)
   > Authentication

```bash
npm install @clerk/nextjs
```

3. [Prisma DB-ORM](https://www.prisma.io/)
   > ORM for PlanetScale MySQL

```bash
npm i -D prisma
npm i @prisma/client
npx prisma init
....
npx prisma generate                 # for intellisense
npx prisma db push

npx prisma migrate reset            # how to reset db
npx prisma generate                 # pushes model to node modules so you can use
npx prisma db push                  # pushed db to remote

npx prisma studio                   # management console web app

"postinstall": "prisma generate"    # for deployment add it to the package.json scripts
```

4. [Stripe](https://stripe.com/)
   > Payment Provider

```bash
npm install stripe
....
# cli
stripe login
stripe listen --forward-to localhost:3000/api/webhook
```

5. [Crisp](https://crisp.chat/en/)
   > Customer Support Chatbot provider

```bash
npm install crisp-sdk-web
```

### Tricks:

1. **Primary button gradient:**

```js
premium: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0",
```

2. **Typewriting effect:**

```bash
npm i typewriter-effect
```

```js
<TypewriterComponent
  options={{
    strings: [
      "Chatbot.",
      "Photo Generation.",
      "Music Generation.",
      "Code Generation.",
      "Video Generation.",
    ],
    autoStart: true,
    loop: true,
  }}
/>
```
