---
title: Public Calendar Embeds
description: Embedding live parish calendars into WordPress, Squarespace, or custom parish websites.
---

CatholicOffice allows parishes to embed live, interactive calendar views directly into their external parish website using clean iframe embed codes.

---

## Generating Your Embed Code

1. Navigate to **Calendar** > **Settings** or your Team Calendar profile.
2. Locate the **Public Embed** section (`/calendar/embed/{teamId}/{embedCode}`).
3. Copy the provided HTML embed snippet:

```html
<iframe 
  src="https://app.catholicoffice.com/calendar/embed/YOUR_TEAM_ID/YOUR_EMBED_CODE" 
  width="100%" 
  height="750px" 
  frameborder="0" 
  allowtransparency="true">
</iframe>
```

---

## Key Embed Features

- **Mobile Responsive**: Dynamically adjusts between desktop monthly grid and mobile list view.
- **Privacy Controls**: Only events marked as **Public** with public descriptions are displayed. Internal room numbers, notes, and private contact information remain hidden.
- **Always Up to Date**: Edits made in CatholicOffice reflect on your parish website instantly without manual re-publishing.
