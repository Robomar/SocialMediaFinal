Overview
This SocialMedia app is designed to manage the user-related functionalities for a social media application. It provides features for creating, updating, deleting, and reading user profiles, as well as for uploading posts and captions. The app utilizes several libraries and hooks to streamline operations and enhance the user experience.

Libraries Used
axios: For making HTTP requests to the server.
cors: To enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
react-router-dom: For handling client-side routing within the React application.
react-icons/fa: For using Font Awesome icons in the React components.
mongoose: For interacting with MongoDB, defining schemas, and modeling data.
express: To set up the backend server and handle API endpoints.

Hooks Used
useState: To manage state within functional components.
useContext: To access global state and functions provided by context providers.
useNavigate: To programmatically navigate between different routes in the application.

Functionalities
User Management

Create User: Allows new users to sign up by providing necessary details such as username, email, and password. Data is sent to the backend using axios and stored in MongoDB using mongoose.
Update User: Enables users to update their username. The component uses useContext to handle form data and axios for submitting updates to the server.
Delete User: Allows users to delete their account through writing username. This triggers an axios request to the backend to remove the user data from the database.
Read User: Fetches and displays user profile information. Data is retrieved from the backend using axios and displayed using React components.

Post and Caption Upload

Upload Post: Users can upload new posts, including images and captions. The component uses useState to handle file input and text, and axios to send the data to the server.
View Posts: Retrieves and displays posts from the database. axios is used to fetch post data, and posts are rendered using React components, with icons from react-icons/fa for interaction options like liking or commenting.

Pages:
Login page
Registration page
Home page
Profile page
Notification: static component
Settings page

The user will Login or register into the app then Home page will appear through which the user can upload his post. Menubar appears at side through which user can navigate through pages Settings, Profile and logout. 
Home page:
upload post
Profile page:
update username
Settings:
delete user


SERVER SIDE:
APIs
userRoute , userController, userModel : user delete update 
AuthRote, AuthController  for authorization : for login signup



