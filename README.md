![Portfolio Social Preview](./public/social-preview.jpg)

### Aurora portfolio
---
This is a fully customizable portfolio template built with [Nuxt.js](https://nuxtjs.org/) and [Tailwind CSS](https://tailwindcss.com/). Use it to showcase your work, testimonials and other information to your clients.

### Demo
---
You can see a live demo at [aurora.yjineey.kr](https://yjineey.github.io/aurora/).

### Deploy with Vercel
---
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHugoRCD%2Fcanvas&env=NUXT_PUBLIC_AVAILABLE,NUXT_PRIVATE_RESEND_API_KEY,NUXT_PUBLIC_STUDIO_TOKENS,NUXT_PUBLIC_MEETING_LINK,NUXT_PUBLIC_SITE_URL&envDescription=You%20will%20require%20an%20API%20key%20for%20Resend%20and%20Nuxt%20Studio%2C%20but%20it%20is%20not%20essential%20for%20the%20portfolio%20to%20work.%20Simply%20add%20%22test%2C%22%20for%20example%2C%20and%20edit%20the%20variable%20later.&project-name=canvas-portfolio&repository-name=canvas-portfolio&demo-title=Canvas&demo-url=canvas.hrcd.fr&demo-image=https%3A%2F%2Fcanvas.hrcd.fr%2Fsocial-preview.jpg)

### Features
---
- Fully [Nuxt Content](https://content.nuxt.com/) driven with the content driven mode on
- Full and simple [Nuxt Studio](https://nuxt.studio/) editor support
- Built-in Awesome Component & Layout
- [NuxtUI](https://ui.nuxt.com/) for some UI components
- [Tailwind CSS](https://tailwindcss.com/)
- Working contact form with [Resend](https://resend.com/)
- [Nuxt i18n](https://i18n.nuxtjs.org/) for multi-language support
- Open Graph Image support with [Nuxt OG Image](https://nuxtseo.com/og-image/getting-started/installation)
- [Nuxt Robots](https://sitemap.nuxt.com/) for auto-generate robots.txt
- [ESLint](https://eslint.org/) with official Nuxt configuration (ESLint v9 with Flat config)
- Full typescript support
- Optimized images with [Nuxt Image](https://image.nuxt.com/)
- [Vue Composition Collection (Vueuse)](https://vueuse.org/)
- Fully responsive on all modern browsers
- Professional and minimal design
- Easy to customize
- Auto generated sitemap

### Quick Setup
---
1. Clone this repository if you have access or download it from the store
```bash
git clone https://yjineey.github.io/aurora/
```

2. Install dependencies
```bash
npm run install
```

3. Copy the `.env.example` file to `.env` and fill in the values
```bash
cp .env.exemple .env
```

4. Start development server
```bash
npm run dev
```

5. Generate static project
```bash
npm run generate
```

6. Start production server
```bash
npm run deploy
```

### How to Modify the Portfolio Content
---
This portfolio uses [Nuxt Content](https://content.nuxt.com/) to manage the content. Here's how you can modify it:

First check the `app.config.ts` file to change the global configuration of the portfolio, there is a lot of stuff you can change here.

#### Writing

1. Navigate to the `content/2.articles` directory.
2. Here, you'll find Markdown files for each article. To modify an article, simply open its Markdown file and make your changes.
3. To add a new article, create a new Markdown file in this directory. The name of the file will be used as the URL slug for the article.

#### Works

1. Navigate to the `content/1.works/` directory.
2. Here, you'll find Markdown files for each article. To modify an article, simply open its Markdown file and make your changes.
3. To add a new project, add a new JSON file in this directory.

#### Featured Works

To change the featured works on the homepage, simply add the `featured: true` key to front matter of the markdown file.

#### Other Content

Simply go to the `content/` directory and edit any of the Markdown or JSON files to modify the content.

### Setup the Contact Form
---
This portfolio uses [Resend](https://resend.com/) to handle the contact form. To set it up, follow these steps:
- Get your api key from [Resend](https://resend.com/) here [your api key](https://resend.com/api-keys)
- Add your api key in the `.env` file
- change the `from` key in the `sendEmail` route in the `server/api/` folder, you can customize everything you want in this route
- That's it, you're good to go!

### Setup the Open Graph Image
---
To change the main open graph image, go to the `app.config.ts` file and change the `openGrapImage` key.
For the blog open graph image, go to the `content/articles` directory and change the `image` key in the Markdown file of the article.


<details>
  <summary>Local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `bun install`
- Start development server using `bun dev`
- Open [http://localhost:3000](http://localhost:3000) in your browser

</details>





