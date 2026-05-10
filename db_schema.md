# Database Schema Design - Personal Portfolio & CMS

## PostgreSQL / Supabase Schema

```sql
-- Projects Table
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    thumbnail_url TEXT,
    category VARCHAR(100), -- UI/UX, Graphic Design, Phonegraphy
    project_url TEXT,
    tags TEXT[], -- Array of tools used (Figma, React, etc.)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Activities Table (Chronological Log)
CREATE TABLE activities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    documentation_url TEXT,
    activity_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Admin Users (Simple Auth reference)
CREATE TABLE admins (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    last_login TIMESTAMP WITH TIME ZONE
);
```

## Firebase Database Structure (Firestore)

```json
{
  "projects": {
    "project_id": {
      "title": "FashionNest Ecommerce App",
      "description": "Mobile app design for luxury fashion...",
      "thumbnailUrl": "...",
      "category": "UI/UX",
      "tags": ["Figma", "Prototyping"],
      "createdAt": "timestamp"
    }
  },
  "activities": {
    "activity_id": {
      "title": "Kanela Champion Series",
      "description": "Attended as a lead designer...",
      "location": "Kabupaten Garut",
      "imageUrl": "...",
      "date": "timestamp",
      "createdAt": "timestamp"
    }
  }
}
```
