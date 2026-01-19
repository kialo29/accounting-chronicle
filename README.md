# The Accounting Chronicle

A blog and content site for documenting your ACA journey, with a built-in CMS for easy editing.

---

## 🚀 Quick Setup Guide (15 minutes)

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com) and sign up
2. Verify your email

### Step 2: Upload Your Site to GitHub
1. Click the **+** in the top right → **New repository**
2. Name it `accounting-chronicle` (or whatever you like)
3. Keep it **Public** (required for free Netlify hosting)
4. Click **Create repository**
5. On the next page, click **uploading an existing file**
6. Drag the entire contents of this folder into the upload area
7. Click **Commit changes**

### Step 3: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up with your GitHub account
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** and select your repository
4. Netlify will auto-detect the settings. Just click **Deploy site**
5. Wait 1-2 minutes — your site will be live at a random URL like `random-name-123.netlify.app`

### Step 4: Enable the CMS
1. In Netlify, go to **Site settings** → **Identity** → **Enable Identity**
2. Under **Registration**, select **Invite only**
3. Under **Services** → **Git Gateway**, click **Enable Git Gateway**
4. Go to **Identity** tab → **Invite users** → enter your email
5. Check your email and click the invite link to set your password

### Step 5: Start Writing!
1. Go to `your-site-url.netlify.app/admin/`
2. Log in with your email and password
3. Click **Articles** → **New Article**
4. Write your post, hit **Publish**, and it goes live automatically!

---

## ✏️ How to Write Articles

Once logged into `/admin/`, you'll see a simple editor:

1. **Title**: Your article headline
2. **Date**: When it was published  
3. **Category**: Choose from ACA Journey, Study Guide, Exam Tips, etc.
4. **Description**: Short summary shown on article cards
5. **Read Time**: e.g. "5 min read"
6. **Featured**: Tick this to show on homepage
7. **Body**: Write your article using the visual editor (or Markdown)
8. **YouTube Video ID**: Optional — add a related video

Click **Publish** when done. The site rebuilds automatically (takes ~30 seconds).

---

## 🌐 Custom Domain (Optional)

To use your own domain like `accountingchronicle.co.uk`:

1. Buy a domain from Namecheap, 123 Reg, or similar (~£10/year)
2. In Netlify: **Domain settings** → **Add custom domain**
3. Follow Netlify's instructions to update your DNS settings
4. Free HTTPS is included automatically

---

## 🛠️ Local Development (Optional)

If you want to preview changes locally before publishing:

```bash
# Install dependencies (first time only)
npm install

# Start local server
npm start
```

Then open `http://localhost:8080` in your browser.

---

## 📁 File Structure

```
accounting-chronicle/
├── admin/              # CMS dashboard
│   ├── index.html
│   └── config.yml      # CMS settings
├── src/
│   ├── _includes/      # Page templates
│   ├── articles/       # Your blog posts (Markdown)
│   ├── images/         # Uploaded images
│   └── *.njk           # Main pages
├── styles.css          # Site styling
├── script.js           # Site JavaScript
├── .eleventy.js        # Build configuration
├── netlify.toml        # Netlify settings
└── package.json        # Dependencies
```

---

## 🆘 Troubleshooting

**CMS login not working?**
- Make sure you've enabled Identity and Git Gateway in Netlify
- Check you accepted the email invite

**Site not updating after publish?**
- Give it 30-60 seconds for the build to complete
- Check Netlify's **Deploys** tab for errors

**Need help?**
- Decap CMS docs: [decapcms.org/docs](https://decapcms.org/docs/)
- Eleventy docs: [11ty.dev/docs](https://www.11ty.dev/docs/)

---

Built with ☕ and spreadsheets - Website

Your blog is ready! Here's everything you need to know.

---

## 📁 What's Included

```
accounting-chronicle/
├── index.html              ← Homepage
├── articles.html           ← Accounting/ACA articles listing
├── beyond-the-books.html   ← Wellbeing content listing
├── resources.html          ← Downloadable resources
├── about.html              ← About you
├── youtube.html            ← YouTube videos showcase
├── styles.css              ← All the styling
├── script.js               ← Interactive features
├── package.json            ← For local development
├── articles/               ← Your article files go here
│   ├── _TEMPLATE.html      ← Copy this to create new articles
│   └── month-6-what-i-wish-i-knew.html  ← Example article
└── README.md               ← This file
```

---

## ✍️ How to Create a New Article

### Step 1: Copy the template
1. Go to the `articles` folder
2. Copy `_TEMPLATE.html`
3. Rename it something descriptive like `my-new-article.html` (use dashes, no spaces)

### Step 2: Edit the article
Open your new file and change:
- The `<title>` tag (for the browser tab)
- The category (ACA Journey, Study Guide, Exam Tips, Career Chat)
- The `<h1>` title
- The read time and date
- Write your content in the `<div class="article-body">` section

### Step 3: Add it to the articles page
Open `articles.html` and add a new card linking to your article:

```html
<a href="articles/my-new-article.html" class="article-card">
    <span class="article-category">ACA Journey</span>
    <h3>Your Article Title</h3>
    <p>A short description of what the article is about...</p>
    <div class="article-meta">
        <span class="read-time">5 min read</span>
        <span class="date">Jan 2025</span>
    </div>
</a>
```

### Step 4 (Optional): Feature it on the homepage
If you want it to appear on the homepage, edit `index.html` and update the article cards in the "Latest Articles" section.

---

## 🚀 How to Deploy (Netlify - Easiest)

**Time needed: 5 minutes**

### Step 1: Create a Netlify Account
1. Go to [netlify.com](https://www.netlify.com)
2. Click "Sign up" (you can use your GitHub, GitLab, or email)

### Step 2: Deploy Your Site
1. Once logged in, you'll see your dashboard
2. Look for the area that says **"Drag and drop your site folder here"**
3. Unzip the downloaded file
4. Drag the entire `accounting-chronicle` folder onto that area
5. Wait about 30 seconds...
6. **Done!** You'll get a random URL like `random-name-12345.netlify.app`

### Step 3: Get a Nice URL (Free)
1. Click on "Site settings"
2. Click "Change site name"
3. Enter something like `accounting-chronicle`
4. Your site is now at `accounting-chronicle.netlify.app`

### Step 4 (Optional): Custom Domain
If you want `accountingchronicle.com` or similar:
1. Buy a domain from [Namecheap](https://www.namecheap.com) or [Porkbun](https://porkbun.com) (around £8-10/year)
2. In Netlify, go to "Domain settings" → "Add custom domain"
3. Follow their instructions to connect it

---

## ✏️ How to Update Your Site

### Adding/Editing Content
1. Edit the HTML files on your computer
2. Re-drag the folder to Netlify, OR
3. Use Netlify's drag-and-drop to replace files

### For Resources (Google Drive)
1. Upload your file to Google Drive
2. Right-click → "Get link" → Set to "Anyone with the link"
3. Copy the link
4. Replace `https://drive.google.com/YOUR-LINK-HERE` in `resources.html`

### For YouTube Videos
1. Go to your YouTube video
2. Click Share → Embed
3. Copy the embed code
4. Replace the placeholder in `youtube.html`

---

## 🔧 Things to Customise

### Must Do
- [ ] Replace `YOUR-CHANNEL` with your actual YouTube channel URL (multiple files)
- [ ] Replace `YOUR-PROFILE` with your LinkedIn profile URL
- [ ] Update the About page with your actual story
- [ ] Add your real Google Drive links to Resources page
- [ ] Embed your actual YouTube videos

### Nice to Have
- [ ] Add your photo to the About page
- [ ] Update the example articles with real content
- [ ] Add more resources as you create them
- [ ] Connect a newsletter service (see below)

---

## 📧 Newsletter Setup (Optional)

The newsletter form currently just shows an alert. To make it actually work:

**Free Options:**
- [Buttondown](https://buttondown.email) - Simple, free for up to 100 subscribers
- [Mailchimp](https://mailchimp.com) - Free for up to 500 subscribers
- [ConvertKit](https://convertkit.com) - Free for up to 1,000 subscribers

They'll give you an embed code or form action URL to replace the placeholder.

---

## 🎨 Changing Colours

If you want to tweak the orange or any other colour, open `styles.css` and look at the top:

```css
:root {
    --orange-500: #E86A33;  ← Main orange
    --orange-600: #D55A25;  ← Darker orange (hover states)
    /* etc. */
}
```

Just change the hex codes to whatever you like!

---

## ❓ Need Help?

If you get stuck with deployment, there are loads of tutorials on YouTube for "deploy website to Netlify" - it's genuinely very straightforward.

Good luck with the ACA! 📊

