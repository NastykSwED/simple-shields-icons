<div align="center">
  <a href="https://simple-shields-icons.vercel.app">
  <img src="https://simple-shields-icons.vercel.app/images/banner.png" />
  </a>
  <br /><br />
</div>

## 👋 Introduction

[**Simple Shields-Icons**](https://simple-shields-icons.vercel.app) is your go-to source for high-quality Shields.io badges for popular brands.

## 📦 Project structure

```
- json
- public
- src
  |- components
  |- hooks
  |- layouts
  |- pages
  |- styles
  |- types
  |- utilities
```

## 🎉 Features

- **+2419** badges.
- **Lightweight**.
- Ready to use with **Markdown** and **Html**

## 🚧 Coming Soon

- Customization options for badges

## 👨‍🚀 Getting Started

> 🚧 You will need [Nodejs +16 (LTS recommended)](https://nodejs.org/en/) installed.

1. Fork this project:

- [Click here](https://github.com/NastykSwED/simple-shields-icons/fork).

2. Clone the repository:

```bash
git clone git@github.com:YOU_USER/simple-shields-icons.git
```

3. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

## 🤔 Can I add my badge?

Yes! Here is a guide for you 🥳:

1. [Fork the repository](https://github.com/NastykSwED/simple-shields-icons/fork).

2. Clone the forked repository:

```bash
git@github.com:YOUR_USERNAME/simple-shields-icons.git
```

3. Add your badge information here following the structure: [`/json/shieldsIcons.json`](https://github.com/pheralb/svgl/blob/main/data/svgs.json).

```json
{
	"pagination": {
		"current_page": 1,
		"total_pages": 49,
		"total_items": 2420 #Update the Total Items
	},
	"data": [
		{
			"id": 2420,
			"name": "Badge Name",
			"url": "Badge Url",
			"logo": "Badge Logo",
			"logoColor": "Badge LogoColor",
			"color": "Badge Color"
		}
     ]
}
```

5. Create a commit and push:

```bash
git add .
git commit -m "Added my Badge bro! ⚡"
git push origin master
```

6. Create a pull request with your changes and 🥳 ready.

## 🎉 Deploy on Vercel

- ✅ [https://simple-shields-icons.vercel.app](https://simple-shields-icons.vercel.app).

## 🔑 License

- [MIT](https://github.com/NastykSwED/simple-shields-icons/blob/master/License).
