# MastodonHub Project
## Overview
At Purdue University, many clubs and events are available for students to explore. However, new students often struggle to find and engage with these opportunities, facing challenges when navigating the PFW portal. To solve this, our project aims to create a comprehensive app that streamlines club and event information, provides a Purdue events calendar. 

## Project Features
- **Club and Event Information**: Searcing for clubs and events.
- **Events Calendar**: View upcoming Purdue events.

## Application Structure
- **Front-End**:
  - Built with React.
  - Hosted at [https://django-mastodonhub-react.onrender.com/](https://django-mastodonhub-react.onrender.com/).

- **Back-End**:
  - Developed with Django.
  - Hosted at [https://django-mastodonhub-react-1.onrender.com/](https://django-mastodonhub-react-1.onrender.com/).
  - Includes the following endpoints:
    - `/admin/` - Admin dashboard for managing the application.
    - `/api/mastodonhub/` - primary endpoint for interacting with clubs and events.
    - `/token/` - Obtain a new authentication token.
    - `/token/refresh/` - Refresh an existing token.
    - `/logout/` - User logout.
    - `/signUp/` - User registration.
    - `/profile/` - User profile information.
  
## Technology Stack
- **Front-End**: React
- **Back-End**: Django
- **Database**: SQLite
- **Deployment/Hosting**: Render
- **Version Control**: Git

## Team Members
- **Roshini Seelamsetty**
- **Amrutha Kollu**
- **Nida Tazeen**
- **Likhita Kadiyala**

### Conclusion
The MastodonHub project is designed to be a one-stop solution for Purdue University students seeking to engage with clubs and events, making it easier to connect, participate, and stay informed.
