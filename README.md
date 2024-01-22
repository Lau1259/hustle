# Hustle

This app has been created by Lautaro Cuevas and is meant to be a tool to help job seekers organize and keep track of key information during their search including job posts, contacts, feedback, and resources such as templates.

## Road Map

### Dashboard

- Summary section.

  - [x] UI

  - [x] Functionality

- Contacts section

  - [ ] UI

- Reminders/Alerts Section

  - [ ] UI

- Data Storage

  - [x] Local JSON (Testing Phase)

  - [ ] Database

- Resources Section

  - [ ] UI

  - [ ] Templates Section

  - [ ] Video Section

## local/jobs.json (Testing Phase)

This file should contain the list of job information you have collected.
Here is an example job JSON object:

```JSON
[
   {
    "id": 3,
    "position": "Position",
    "company": "Company",
    "location": "Location",
    "src": "#",
    "status": "in-progress",
    "applied": true,
    "replied": true,
    "offer": true,
    "log": ["Task 01", "Task 02"],
    "people": [
      {
        "id": 0,
        "name": "N/A",
        "email": "N/A",
        "socials": {
          "linkedin": "",
          "whatsapp": ""
        },
        "met": "2024-01-01",
        "latest": "2024-01-01",
        "type": "main"
      }
    ]
  }
]
```
