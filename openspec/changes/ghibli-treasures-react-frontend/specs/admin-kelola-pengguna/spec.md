## ADDED Requirements

### Requirement: Admin user management table
The `AdminKelolaUser` page SHALL display a table of dummy user accounts with columns: No, Avatar, Nama, Email, Role (Admin/Customer), Tanggal Daftar, Status (Aktif/Nonaktif), Aksi.

#### Scenario: Dummy users shown in table
- **WHEN** admin navigates to `/admin/pengguna`
- **THEN** at least 8 dummy user rows are visible

### Requirement: User role badge
Each user row SHALL show a role badge: "Admin" (forest green) or "Customer" (sky blue).

#### Scenario: Role badge color correct
- **WHEN** a user with role "Admin" is shown
- **THEN** badge has forest green background; "Customer" has sky blue background

### Requirement: User search filter
The page SHALL include a search input to filter users by name or email.

#### Scenario: Search narrows user list
- **WHEN** admin types an email in search
- **THEN** only matching users are shown

### Requirement: Toggle user active status
Each row SHALL have an Aktif/Nonaktif toggle or button.

#### Scenario: Status toggle changes badge
- **WHEN** admin clicks the toggle for an active user
- **THEN** the user's status badge changes to "Nonaktif"
