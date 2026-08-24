---
title: Setting Up Checklists & Supported Languages
description: How to customize requirement checklist templates, role assignments, document attachments, and multi-language support.
---

CatholicOffice provides parish administrators with full control over the requirement checklists and supported languages used across all Sacramental and Event files (Marriage, Baptism, Quinceañera, Funeral, and Facility Rentals).

---

## 1. How Requirement Checklists Work

Each sacramental or event file type maintains a **Requirement Template** list. When a new file is created, CatholicOffice automatically generates the complete checklist from these templates.

### Configuring Default Checklists (Admin Only)

To configure the default checklist items for each file type, navigate to its respective settings page:

| File Type | Settings Route | Role Assignment Options |
| :--- | :--- | :--- |
| **Marriage Preparation** | `/settings/marriage-requirements` | `Bride`, `Groom`, `Joint` |
| **Baptism Preparation** | `/settings/baptism-requirements` | `Child`, `Mother`, `Father`, `Godmother`, `Godfather`, `Joint` |
| **Quinceañera Blessing** | `/settings/quinceanera-requirements` | `Candidate`, `Parents`, `Joint` |
| **Funeral Liturgy** | `/settings/funeral-requirements` | `Deceased`, `Family`, `Mortuary`, `Joint` |
| **Facility / Hall Rental** | `/settings/rental-requirements` | `Renter`, `Facility`, `Joint` |

---

### Adding a New Requirement Item

1. Navigate to the appropriate settings page (e.g., **Settings** > **Marriage Requirements**).
2. Enter the **Requirement Name** (e.g., *Baptismal Certificate with Notations*, *FOCCUS Inventory*, *State Marriage License*, *Diocesan Event Insurance*).
3. Select the **Assigned Role**:
   - For Marriages: Assign to *Bride*, *Groom*, or *Joint*.
   - For Baptisms: Assign to *Child*, *Mother*, *Father*, *Godmother*, *Godfather*, or *Joint*.
4. Click **Add Requirement**.
5. Newly created cases will automatically include this requirement.

---

### Managing Checklists Inside an Individual Case File

Within any individual case file (e.g., `/marriage-files/{id}` or `/baptism-files/{id}`):

1. **Update Status**: Click on any requirement to mark it as **Pending**, **In Progress**, **Completed**, or **Waived**.
2. **Upload Documents**: Click the upload icon to attach scanned PDF certificates, state licenses, or signed contracts directly to the requirement.
3. **One-Off Custom Requirements**: Staff can add case-specific requirements to an individual file without modifying the global parish template.
4. **Notes & @Mentions**: Add internal notes or tag colleagues (e.g., `@FatherPaul Dispensation granted by Chancery on 8/12`).

---

## 2. Managing Supported Languages

Many parishes minister to diverse, multicultural communities. CatholicOffice allows you to define your parish's **Supported Languages** and set a **Default Language**.

### Where to Manage Languages:
The language manager is located at the top of any Requirement Settings page (e.g., `/settings/marriage-requirements` or `/settings/baptism-requirements`). Changes made here apply across all sacramental and event modules parish-wide.

---

### Adding Supported Languages

1. Go to any Requirement Settings page.
2. In the **Supported Languages** card, enter the language name in the **Add New Language** field (e.g., `Spanish`, `Vietnamese`, `Portuguese`, `French`, `Tagalog`, `Polish`, `Latin`, `Bilingual`).
3. Click **Add Language**.
4. The new language immediately becomes available in language dropdown selectors across all files.

---

### Setting the Parish Default Language

1. In the **Supported Languages** list, find your preferred primary language.
2. Click **Set as Default**.
3. All new sacramental files and public registration intake forms will default to this language choice.

---

### Removing a Language

- Click **Remove** next to any custom language.
- *(Note: `English` is the baseline system language and cannot be removed, but it does not have to be your default language).*

### Selecting Language on Case Files & Public Forms

- **Case Intake**: When staff create or edit a file, they can select the family's preferred language from your parish list.
- **Public Online Baptism Registration**: Parents completing the public online registration form can indicate their preferred language for baptismal prep classes and ceremony liturgies.
