---
title: Sick Calls & Emergency Triage
description: Handling urgent sick calls, priest visit dispatches, EMHC assignments, and emergency printable cards.
---

The **Pastoral Care Sick Calls** module (`/pastoral-care/sick-calls`) ensures that emergency anointing requests, hospital visits, and Viaticum calls are recorded, triaged, and dispatched without delay.

---

## Logging a New Sick Call

1. In the navigation bar, click **Pastoral Care** > **Sick Calls** (`/pastoral-care/sick-calls`).
2. Click **+ New Sick Call Request** (`/pastoral-care/sick-calls/create`).
3. Complete the intake form:
   - **Priority Level**:
     - **Urgent / Imminent Danger of Death**: Triggers immediate emergency notifications to available clergy.
     - **Standard / Routine Visit**: Scheduled pastoral visit.
   - **Patient Information**: Full name, Catholic status, baptized status, and language preference.
   - **Requester Information**: Name, phone number, relationship to patient (Spouse, Child, Nurse, Chaplain).
   - **Location Details**:
     - *Private Home / Residence*: Street address, gate codes, access instructions.
     - *Care Facility / Hospital*: Select from your parish's directory of **Care Facilities**, room/bed number, and unit phone.
   - **Sacraments Requested**: Anointing of the Sick, Confession / Reconciliation, Holy Communion (Viaticum).
   - **Notes & Instructions**: Special medical instructions (e.g., ICU, isolation, hospice, oxygen).
4. Click **Create Sick Call Request**.

---

## Triage & Status Workflow

Each sick call moves through a structured lifecycle:
- **Pending / Unassigned**: Waiting for priest or EMHC pickup.
- **Assigned / In Progress**: A specific priest or extraordinary minister has accepted the call.
- **Completed**: The visit has occurred and sacraments were administered.
- **Cancelled / Unable to Visit**: With documented reason.

---

## Printable Emergency Sick Call Cards

Priests heading out on hospital or home visits can print a formatted **Sick Call Emergency Card** (`/pastoral-care/sick-calls/{id}/print`) with one click:
- Contains patient name, address, GPS-ready directions, room number, gate codes, contact phone numbers, and sacramental history.
- Sized cleanly for carrying in a sick call kit or ritual binder.

---

## Automated Notifications & Slack Routing

When an urgent sick call is submitted:
- Designated clergy and pastoral staff receive instant SMS/email alerts based on team notification settings.
- If **Slack Integration** is enabled, an urgent card is immediately posted to the parish clergy Slack channel.
