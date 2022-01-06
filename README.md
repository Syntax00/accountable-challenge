# Accountable Frontend Challenge 


## Used Technologies & Libraries
1. React.js (create-react-app)
2. TypeScript
3. TailwindCSS (For making UI and responsiveness faster, cleaner, and easier)
4. Redux State Management
5. redux-thunk
6. React Router V6
7. Lodash
8. uuid
9. query-string (For parsing query strings for list search purposes)
10. react-toastify (For feedback notifications)
11. Jest (For Unit testing)


# Installation
The project is built using create-react-app with TypeScript template. To install and run it for development:
```javascript
npm i
npm start
```
To build and run it for production:
```javascript
npm i
npm run build
serve -s build
```

## Implemented Features
1. Listing items in a tree nested structure (using Recursive Tree Data Structure)
2. Expanding to view children lists
3. View details of leaves items (items with no children lists and own an id)
4. Shuffle list items into random orders
5. Search in items by their own searchableText (title + description) and their childrens' searchableText
6. Delete a leaf item from the list and show a notification message upon successful deletion
