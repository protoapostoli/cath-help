---
title: Liturgical Presider Scheduling
description: Scheduling priest and deacon mass assignments, liturgical calendar sync, iCal feeds, and public schedules.
---

The **Presider Schedule** module (`/calendar/presider-schedule`) simplifies liturgical planning for pastors and parish staff by automating priest and deacon assignments across daily, weekend, and holy day liturgies.

---

## Accessing the Presider Schedule

- In the navigation bar, click **Calendar** > **Presider Schedule** (`/calendar/presider-schedule`).
- The scheduler presents a monthly and weekly matrix of all parish Masses, complete with the liturgical day, season, and liturgical color (White, Green, Red, Violet, Rose).

---

## Assigning Presiders and Deacons

1. Click on any Mass slot on the schedule.
2. Select:
   - **Presiding Celebrant**: Assign the primary priest celebrating the Mass.
   - **Concelebrants**: Assign any visiting or assisting priests.
   - **Deacon of the Word / Deacon of the Altar**: Assign the assisting deacon.
   - **Preacher / Homilist**: Specify if someone other than the celebrant is preaching.
   - **Liturgical Notes**: Special intentions, bilingual readings, incense use, or choir details.
3. Click **Save Assignment**.

---

## Sync with the Liturgical Calendar API

The scheduler integrates directly with liturgical calendar feeds (USCCB and international Roman Missal standards):
- Displays the proper liturgical rank (Solemnity, Feast, Memorial, Optional Memorial, Ferial Day).
- Accurately renders proper liturgical vestment colors.
- Handles moveable feasts, Holy Week, Easter Triduum, and Holy Days of Obligation.

---

## Sharing and Publishing the Schedule

### 1. Printable Liturgical Roster
- Click **Print Schedule** (`/calendar/presider-schedule/print`) to generate a clean, printer-friendly roster for sacristy bulletin boards and priest vestment areas.

### 2. Public Presider Web Link
- Parishes can publish a secure, live view of presider assignments on parish websites without requiring a login:
  `https://app.catholicoffice.com/public/presider-schedule/{team}/{code}`
- Perfect for bulletin editors, music directors, and sacristans.

### 3. Personal iCal Subscriptions
- Priests and deacons can subscribe to their assignments directly in Apple Calendar, Google Calendar, or Outlook:
  `https://app.catholicoffice.com/calendar/presider/subscription/{team_id}`
- Assignments sync automatically to their mobile devices in real time.
