---
title: Baptism Files & Online Registration
description: Managing infant and child baptism cases, godparent requirements, and public online registration links.
---

The **Baptism Files** module (`/baptism-files`) streamlines the entire baptism preparation process for families, godparents, and parish staff, including automated public online registration.

---

## Accessing Baptism Files

- In the navigation bar, select **Baptism Files** (`/baptism-files`).
- The dashboard shows all registered baptisms, filterable by date, completion status, language, and celebrant.

---

## Creating a Baptism File Internally

1. Click **+ New Baptism File** (`/baptism-files/create`).
2. Enter the family and candidate details:
   - **Child Information**: Name, date of birth, city of birth.
   - **Parents Information**: Father, Mother (with maiden name), contact email, phone, and marriage status.
   - **Godparents**: Godfather and Godmother names, Catholic status, and marital status.
   - **Ceremony Details**: Date, time, celebrant, and language (English, Spanish, Bilingual).
3. Click **Create Baptism Record**.

---

## Public Online Baptism Registration

Parishes can provide parents with a secure, self-service online registration link.

### How It Works:
1. Copy your parish's unique **Public Baptism Registration URL**:
   `https://app.catholicoffice.com/public/baptism/{token}`
2. Share this link on your parish website, bulletin, or via email with inquiring parents.
3. Parents can complete the digital intake form on any device:
   - Enter child, parent, and godparent details.
   - Upload digital copies of the **State Birth Certificate**.
   - Review godparent qualifications under Canon Law.
4. Once submitted, the system automatically creates a new **Baptism File** in your parish dashboard and alerts parish staff.

:::note Secure & Parish-Specific
Public registration links use unique parish tokens, ensuring registrations route directly to your parish workspace.
:::

---

## Managing the Baptism File

Opening any baptism record (`/baptism-files/{id}`) allows staff to:

### 1. Document & Godparent Verification
- Verify the **Civil Birth Certificate**.
- Track **Godparent Eligibility Affidavits** (Confirmation certificates, Catholic marriage proof).
- Record completion of **Baptismal Preparation Classes** for parents and godparents.

### 2. Financial Ledger
- Track sacramental registration fees and voluntary donations.
- Record payments and generate official parish receipts.

### 3. Sacramental Register Recording
- Mark the sacrament as administered after the ceremony.
- Print official **Baptismal Certificates** and parish register summary records.

---

## Configuring Baptism Requirements

To customize the default checklist for new baptism files:
- Go to **Settings** > **Baptism Requirements** (`/settings/baptism-requirements`).
- Enable, disable, or create new mandatory checklist items.
