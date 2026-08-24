---
title: How do I embed our parish calendar on our website?
description: Embedding live responsive calendar widgets into WordPress, Squarespace, or parish websites.
---

You can embed a live, interactive CatholicOffice calendar on your parish website using a responsive iframe snippet.

---

## How to Get Your Embed Code

1. Navigate to **Calendar** > **Settings** or your Team Settings page.
2. Locate the **Public Calendar Embed** section (`/calendar/embed/{teamId}/{embedCode}`).
3. Copy the embed HTML code:

```html
<iframe 
  src="https://app.catholicoffice.com/calendar/embed/YOUR_TEAM_ID/YOUR_EMBED_CODE" 
  width="100%" 
  height="750px" 
  frameborder="0" 
  allowtransparency="true">
</iframe>
```

4. Paste this snippet into an **HTML Block** or **Custom Embed** widget on your website builder (WordPress, Squarespace, Wix, eCatholic, etc.).

:::tip[Privacy Protection]
Only events flagged as **Public** will be visible on your website. Internal room booking notes and private requester contact details are never exposed.
:::
