---
title: Homebound Ministry & Visit Logging
description: Managing homebound parishioners, minister assignments, access instructions, and pastoral visit logs.
---

The **Homebound Ministry** module (`/pastoral-care/homebound`) helps parishes coordinate regular pastoral visits and Holy Communion distribution to elderly, convalescent, and homebound parishioners.

---

## Homebound Parishioner Directory

- Navigate to **Pastoral Care** > **Homebound** (`/pastoral-care/homebound`).
- The directory lists all active homebound individuals, their primary contact info, residence type (Private Home vs. Care Facility), frequency of visits requested, and assigned minister.

---

## Managing a Member Profile

Click on any parishioner to open their complete profile (`/pastoral-care/homebound/{id}`):

### 1. Member Profile & Special Needs
- Personal details, emergency contacts, primary language.
- Special access details (keypad lock codes, key hidden locations, elevator codes, dog on premises).
- Dietary or physical restrictions (e.g., low-gluten hosts, non-verbal, hearing impaired).

### 2. Assigned EMHC / Pastoral Minister
- Assign a specific Extraordinary Minister of Holy Communion (EMHC) or pastoral visitor responsible for the parishioner's weekly or monthly visits.

### 3. Logging Pastoral Visits
Pastoral ministers can log visits (`/pastoral-care/homebound/{id}/log-visit`):
- Date and time of visit.
- Minister name.
- Sacraments brought (Holy Communion, prayers, scripture reading).
- Visit notes (e.g., spiritual condition, health updates, request for a priest confession/anointing).

### 4. Printable Roster & Minister Summaries
- Print clean member summary sheets (`/pastoral-care/homebound/{id}/print`) for volunteer ministers visiting parishioners on the weekend.
