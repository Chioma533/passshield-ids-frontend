PassShield-IDS (Cyber Security Threat Detection System)

The frontend is a responsive web application built with React that serves as the user interface for the Cyber Security Intrusion Detection System (IDS). It provides an interactive platform for uploading network traffic data, visualizing threat detection results, and monitoring system activity in real time.

The interface is designed to simplify complex machine learning outputs into an intuitive dashboard experience. Users can upload network datasets in CSV or TXT format, which are processed and sent to the backend API for analysis. The results returned from the machine learning model are displayed in a structured and readable format, highlighting whether the traffic is normal or potentially malicious.

Key features of the frontend include:

Secure file upload system supporting CSV and KDD dataset TXT formats
Real-time communication with the backend prediction API
Clean dashboard for displaying detection results and system feedback
Interactive UI components for monitoring network activity insights
Responsive design for desktop and mobile usability

The frontend is deployed on Vercel and communicates with a Python-based backend hosted separately. This separation of concerns ensures scalability, maintainability, and efficient performance.

Overall, the frontend acts as the visualization and interaction layer of the IDS, translating machine learning predictions into actionable cybersecurity insights for users.
