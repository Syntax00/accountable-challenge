# Accountable Frontend Challenge 

# Installation
The project is built using create-react-app with TypeScript template to initialize the React.js ecosystem.
So, it's simple to get the project up and running, by simply installing the required dependencies and packages, then start the server for development:
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


## Used Technologies, Third-party Packages, and Libraries 
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


## Implemented Features
1. Listing items in a tree nested structure (using Recursive Tree Data Structure)
2. Expanding to view children lists
3. View details of leaves items (items with no children lists and own an id)
4. Shuffle list items into random orders
5. Search in items by their own searchableText (title + description) and their childrens' searchableText
6. Delete a leaf item from the list and show a notification message upon successful deletion

## Project Structure
```javascript
-- __tests__ (contains the unit testing files structured by functionality)
        |-- search.test.ts
        |-- ...
-- components (contains all the components being utilized and composed to form the features)
        |- ParentItemCard
                |- ParentItemCard.tsx
                |- ChildrenItemsList.tsx
        |- PageLayout.tsx
        |- SearchBar.tsx
        |- ...
        |- UIElements
                |- Skeletons
                        |- ListSkeleton.tsx
                        |- ...
                |- CircularIconButton.tsx
                |- Modal.tsx
                |- ...
-- hooks (contains all the custom reusable React Hooks)
        |- useListItemProps.ts
        |- useTreeGenerator.ts
-- pages (application pages/routes)
        |-- Home.tsx
        |-- ItemDetails.tsx
-- store (includes Redux configurations and components)
        |-- actions
                |-- list.ts
                |-- index.ts
        |-- reducers
                |-- list.ts
                |-- index.ts (reducers combination happens here)
        |-- store.ts
-- utilities
        |-- helpers.ts (functionalities and utilities used and composed across the application)
-- API_MOCK.ts (mocking the static list data JSON happens here as a Promise function)
-- types.d.ts (includes the reusable Types used across the application)
-- App.tsx
-- index.tsx
-- ...
```
