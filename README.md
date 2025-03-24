Set Up
==========
* Clone the repo
* `npm install`
* `npm start` to begin Server
* cd into `Client`, run `npm install`

---

*Parent TimeSwap: Parents helping other parents to stay productive by swapping time!*
========
### **Why Parent TimeSwap:**
Parent TimeSwap a space for parents to build an instant network of local parent support towards goals (i.e. school, interviewing, work, conferences, mental health break) by viewing the time availability of local parents, and setting up playdates to determine whether their families are a good fit to help one another during the available times listed. 

![Final product recording here](Client/images/Daaimah_final_project_parent_timeswap.gif)

### **User Target:** 
Parents and caregivers with children who may be busy and have responsibilities outside of parenting. This population may not have the funds, support from others, or knowledge of how to get support with filling in care gaps. Parents that have commitments and no one to watch their children in order to productively complete. Parents that don't have relatable or currently insecure support system in place. Parents that wish to connect with others for advices, mentorship, and friendship.

### **User Stories:** 
![User Stories Here](Client/images/users.png)

----------------

**MVP (minimum viable product)**
====================

### **Prioritization of Features:**
* Be able to create a profile
* Enter profile data
* Be able to query by zip code
* Be able to send message to another user

### **Pages**
* Home
* Login
* About 
* Sign In
* Account Set Up
* Search Availability

### **Project description:** 
A parents’ network helping other parents to stay productive by swapping time to help with each other’s children, schedule play dates, and build supportive relationships!

### **APIs:** 
* Firebase (Authorization & Authentication)
* React (Context API)
* Pusher (Chatkit)

### **Hardest part of building your project:**
Setting up Private Rooms in Chat

### **Favorite part of building your project:** 
Working with chatkit, securing authorization on specific pages, figuring out how to apply problem solving skills, watching page authentication breaking past blocks

### **Built-with:**
Node, Express, PostgreSQL, React, CSS, Bootstrap, & Semantic UI

### **Data Model**

Table Name: user_profile

Columns:
- user_id (serial)
- user_name (varchar)
- email (varchar)
- home_zip_code (integer)
- phone_number (varchar)
- nume_children (integer)
- child_group (varchar)
- monday (varchar)
- tuesday (varchar)
- wednesday (varchar)
- thursday (varchar)
- saturday (varchar)
- sunday (varchar)
- friday (varchar)
- description (varchar)

### **Steps:**
 - [x] Database Schema  
  * User data
  * Zip codes
  * Number of children
  * Availability
 - [x] Firebase Authentication API
  * Creating user
  * Signing in existing user
  * Signing out authenticated user
  * Reset password
  * Change password
  * React-App Components
- [x] User Profiles
  * Existing Profiles in Cards
  * New / Create A Profile
- [x] Search Queries by Zip Code
- [x] Three GET queries: 
  * user default zip, 
  * user entered zip
- [x] Pusher ChatKit - Messaging between users
- [x] CSS
- [x] Code clean up
- [x] Tests
- [ ] Deploy to server

----------------

### **Choices Made:**
* Removed multiple search options and narrowed down to two search requests
* User Profile Cards vs Entire Profile - ruled out having to populate a new endpoint for each user
* Firebase to authenticate and authorize
* Chat Room - Start at Public & Buttons to Make Private vs starting in private chat room with name clicked on from search
* Chat Username Screen - user manually enters desired chat name (tradeoff, not currently a saved or remembered username so user must remember/re-enter each time entering chat)


### **Next Steps:**
* leave the chat room link
* remove username form, autogenerate username into private room with another user when click chat link from search card
* is there research / facts that can be added to about page?
* allow user to edit their profile and update database
* email or send text button (will not reveal info to other users) to send connection request
  
### **Challenges:**
Creating a private chat room from chatkit - I had the docs to help me design the function needed to create a room and wasnt abel to generate a working room. I had a difficult time connecting the logic for how I wanted the room to generate, so i broke down the logic:
````
logged in user clicks button --> button generates room between logged in user and clicked user --> room populates in room list for the two users
````
I then had to figure out how to get the private room over to the 'clicked user' and into the room list component. I eventually saw that I was creating the room, but was unable to see which users were being passed in because I hadn't passed the property set on whos online list component to both components in whos online list file. Fixing this helped to show the prescence of which users were in the newly created rooms.
