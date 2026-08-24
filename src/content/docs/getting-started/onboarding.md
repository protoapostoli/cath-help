---
title: Parish Onboarding & Migration Wizard
description: Step-by-step guide to importing parish calendar data, rooms, and ministries into CatholicOffice.
---

The **Parish Onboarding & Migration Wizard** (`/onboarding`) helps parish administrators migrate historical and upcoming events, room bookings, and ministry rosters from legacy church management software into CatholicOffice.

---

## Accessing the Onboarding Wizard

:::note[Admin Only]
The Onboarding Wizard is restricted to **Parish Team Owners** and **Parish Administrators** with permission to manage parish settings.
:::

1. Log in with an administrator account.
2. In the navigation menu or via direct URL, go to `/onboarding`.

---

## Step-by-Step Onboarding Process

The wizard guides you through five automated phases:

### Phase 1: Timezone & Source System Presets
1. **Confirm Parish Timezone**: Select your parish's local timezone (e.g., `America/Chicago`, `America/New_York`, `America/Los_Angeles`).
2. **Choose Your Source Migration Preset**:
   CatholicOffice includes built-in column mapping presets for popular platforms:
   - **ParishSoft**
   - **Planning Center**
   - **Google Calendar (CSV export)**
   - **Microsoft Outlook / Office 365**
   - **Gabriel Software**
   - **iCal / ICS Calendar Data**
   - **Generic CSV** (for custom spreadsheets)

---

### Phase 2: File Upload & Column Mapping
1. Upload your exported `.csv` file.
2. The wizard analyzes the header row and automatically maps standard fields:
   - **Event Name / Title** *(Required)*
   - **Start Date & Start Time** *(Required)*
   - **End Date & End Time** *(Required)*
   - **Room / Location**
   - **Ministry / Group**
   - **Description & Internal Notes**
   - **Contact / Requester Name & Email**
3. Review and adjust any unmapped columns using the dropdown selectors.

---

### Phase 3: Room & Ministry Auto-Discovery
The wizard scans your import file to identify all referenced rooms and ministries:
- **Auto-Map**: Match imported names to existing rooms or ministries in CatholicOffice.
- **Auto-Provision**: Automatically create new rooms (e.g., *Parish Hall*, *Bride's Room*, *Youth Room*) and new ministries directly from your import data.

---

### Phase 4: Import Audit & Duplicate Controls
Configure how CatholicOffice handles historical data and potential duplicates:
- **Duplicate Action**:
  - **Skip Duplicates**: Ignore events that match an existing title, date, and time.
  - **Update Existing**: Overwrite existing events with imported details.
  - **Create Copies**: Import all items as new entries.
- **Date Cutoff Filter**:
  - **Future Events Only**: Import only events occurring after today.
  - **Custom Date Cutoff**: Import events after a specific date (e.g., beginning of the fiscal year).
  - **All Historical Events**: Import the entire calendar history.
- **Default Status**: Choose whether imported events enter as **Approved** (immediately active) or **Pending** (for review).

---

### Phase 5: Batch Processing & Summary Report
1. Click **Start Migration**.
2. A live progress bar processes your records in optimized batches.
3. Once complete, review the **Import Summary Report**:
   - **Total Records Processed**
   - **Successfully Imported Events**
   - **Updated Records**
   - **Skipped Duplicates & Cutoff Events**
   - **Any Row-Level Errors** (with download log)

---

## Next Steps After Onboarding

Once your migration is complete:
1. Open the **[Parish Master Calendar](/guides/master_calendar/aoverview)** to verify imported bookings.
2. Visit **[User Permissions](/guides/accounts/permissions)** to invite parish staff and assign ministry leaders.
3. Configure your **[Presider Schedule](/guides/liturgy/presider_schedule)** and **[Fee Templates](/guides/finance/fee_templates)**.
