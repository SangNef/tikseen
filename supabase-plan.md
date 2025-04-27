# Livechat App - Vue 3 + Supabase Project Plan

---

## 1. Database Tables (Supabase)

### 1.1 users

| Field      | Type                                 | Note                     |
| :--------- | :----------------------------------- | :----------------------- |
| id         | UUID (auth user id)                  | Primary key              |
| email      | Text                                 |                          |
| username   | Text                                 |                          |
| password   | Text                                 | Managed by Supabase Auth |
| role       | Enum('admin', 'agent', 'superadmin') |                          |
| status     | Enum('active', 'inactive')           |                          |
| created_at | Timestamp                            |                          |
| updated_at | Timestamp                            |                          |

### 1.2 organizations

| Field      | Type                       | Note               |
| :--------- | :------------------------- | :----------------- |
| id         | UUID                       | Primary key        |
| name       | Text                       | Organization name  |
| url        | Text                       | Organization URL   |
| owner_id   | UUID (users.id)            | Organization owner |
| data       | JSONB                      | Additional info    |
| status     | Enum('active', 'inactive') |                    |
| created_at | Timestamp                  |                    |

### 1.3 agents

| Field      | Type                       | Note            |
| :--------- | :------------------------- | :-------------- |
| id         | UUID                       | Primary key     |
| user_id    | UUID (users.id)            | Related user id |
| name       | Text                       | Agent name      |
| avatar_url | Text                       | Agent avatar    |
| status     | Enum('active', 'inactive') |                 |
| created_at | Timestamp                  |                 |

### 1.4 organization_agents

| Field           | Type                    | Note            |
| :-------------- | :---------------------- | :-------------- |
| id              | UUID                    | Primary key     |
| agent_id        | UUID (agents.id)        | Agent id        |
| organization_id | UUID (organizations.id) | Organization id |
| created_at      | Timestamp               |                 |

### 1.5 customers

| Field           | Type                      | Note                   |
| :-------------- | :------------------------ | :--------------------- |
| id              | UUID                      | Primary key            |
| organization_id | UUID (organizations.id)   |                        |
| name            | Text                      | Customer name          |
| status          | Enum('active', 'blocked') |                        |
| data            | JSONB                     | IP, location, metadata |
| ip              | Text                      | IP address             |
| user_agent      | Text                      | Browser info           |
| created_at      | Timestamp                 |                        |

### 1.6 conversations

| Field           | Type                                | Note          |
| :-------------- | :---------------------------------- | :------------ |
| id              | UUID                                | Primary key   |
| organization_id | UUID (organizations.id)             |               |
| customer_id     | UUID (customers.id)                 |               |
| agent_id        | UUID (agents.id)                    | null chat all |
| status          | Enum('active', 'closed', 'pending') |               |
| created_at      | Timestamp                           |               |

### 1.7 messages

| Field           | Type                                      | Note                    |
| :-------------- | :---------------------------------------- | :---------------------- |
| id              | UUID                                      | Primary key             |
| conversation_id | UUID (conversations.id)                   |                         |
| sender_id       | UUID                                      | Agent id or Customer id |
| receiver_id     | UUID                                      |                         |
| sender_type     | Enum('agent', 'customer')                 |                         |
| content         | Text                                      | Message content         |
| type            | Enum('text', 'image', 'file', 'pre-form') |                         |
| created_at      | Timestamp                                 |                         |

### 1.8 settings

| Field      | Type        | Note          |
| :--------- | :---------- | :------------ |
| id         | UUID        | Primary key   |
| key        | Text        | Setting key   |
| value      | Text / JSON | Setting value |
| created_at | Timestamp   |               |

---

## 2. Flow Logic

### 2.1 User Registration

- SignUp with Supabase Auth.
- Insert into `users` table (role: `agent`).
- Check if user belongs to any organization.
  - If not, redirect to create organization page.

### 2.2 Organization Creation

- User creates an organization.
- Automatically:
  - Insert into `organizations`.
  - Insert into `agents`.
  - Insert into `organization_agents`.

### 2.3 Add Agent

- Only user with role `admin`, `superadmin` or `owner` can add agents.
- Max 5 agents per organization.
- Insert into `agents` and `organization_agents`.

### 2.4 Customer Chat

- Customer connects to widget (Vue 3 component).
- Customer data is inserted into `customers` table.
- If first message, create new `conversations` record.
- Messages are inserted into `messages` table in realtime.

### 2.5 Realtime Messaging

- Agents and Customers subscribe to `messages` channel by conversation_id.
- New message triggers UI update in Vue 3 frontend.

### 2.6 Settings Management

- `settings` table stores global configuration.
- Only `admin` and `superadmin` users can update settings.

### 2.7 Admin Management

- Users with `superadmin` role have complete access to all system data.
- Superadmins can:
  - View and manage all users regardless of organization
  - Access all organizations data and settings
  - Monitor all conversations across the platform
  - Manage system-wide settings
  - Override any access restrictions
  - View audit logs and system statistics
  - Create, edit, and delete any records in the system

---

## 3. Supabase RLS (Row Level Security)

- `users`:
  - Regular users can read/update only own user data
  - Admin users can manage users within their organization
  - Superadmin users can manage all users in the system
- `organizations`:
  - Only owner and agents linked can view their organization
  - Superadmin can view and manage all organizations
- `organization_agents`:
  - Only agents and owners inside organization can view
  - Superadmin has full access to all organization_agents relationships
- `customers`:
  - Only agents inside the same organization can view their customers
  - Superadmin can access all customers data
- `conversations`:
  - Regular agents can only view conversations they are linked to
  - Organization admins can view all conversations within their organization
  - Superadmin can view all conversations across the entire platform
- `messages`:
  - Regular users can only view messages they sent or received
  - Admins can view all messages within their organization
  - Superadmin can access all messages in the system
- `settings`:
  - Regular users can only view public settings
  - Admins can update organization-specific settings
  - Superadmin has full access to all system settings

---

## 4. Database Relationships

- `users` -> `agents` (1:1)
- `organizations` -> `organization_agents` -> `agents` (many to many)
- `agents` -> `conversations`
- `customers` -> `conversations`
- `conversations` -> `messages`

---

## 5. Bonus: Next Steps

- ERD Diagram (Entity Relationship Diagram)
- Vue 3 Pages Flow (Screens: Sign Up, Create Org, Dashboard, Agents, Customers, Conversations)
- Starter Vue 3 + Pinia + Supabase SDK setup

---

> Ready to start building! 🚀
