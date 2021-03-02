# Notes app

- basic application for storing notes inside of you browser
- Notes are written in Markdown format

# Technologies

- ReactJS
- Styled Components
- React PropTypes
- Eslint
- Prettier
- React Markdown
- React UUID

---

- Styled Components
  - Used for CSS in JS
- React PropTypes
  - Used for Prop type checking
- Eslint
  - Used for synchronisation between multiple dev enviroments, checks for liniting errors
- Prettier
  - Used for synchronisation between multiple dev enviroments, checks for code style errors and formats them
- React Markdown
  - Used for transforming Markdown to HTML
- React UUID
  - Used for generating note id's (universally uniquie identifier)

# Code Structure

- **src**
  - components
    - all components that are used inside of the project
  - context
    - specifies global state that is used for notes
  - fonts
    - css file with custom font imports
  - hooks
    - home of `useNotes` hook which is used for manipulating notes
  - icons
    - custom icons that are used in the application

# Context

- Global state that holds the list of notes
- When something changes inside of the context, it's automatically saved to local storage
- handles local storage -> checks if there are notes in the local storage and adds them to the global state

# useNotes hook

- custom hook that is used for getting to notes
- supports:
  - add -> add new note to the notes list
  - remove -> remove single note from the notes list
  - get -> get one note via ID
  - save -> update one note via ID and new content

### Usage

```javascript
import useNotes from '../hooks/useNotes';

const notes = useNotes();

// add new note
notes.add({id: "simpleId", content: "# heading"});
// delete note
notes.remove({id: "simpleId});
// get note via id
notes.get({id: "simpleId});
// update one note
notes.save({id: "simpleID", content:"# New heading"});

```

# Testing

- Most of the components have render tests
- Enzyme still doesn't support React 17, otherwise we would also have prop checking.
- To run tests use `yarn test`

# How to start?

- checkout the project
- run `yarn install` inside of the project
- after installing run `yarn start` to start the app on port 3000 (if free)

# Optimization

- context notes are memoized
- no direct usage of props inside of state, using useEffect
- immutability

- **idea**: as there are no BE requests (everything is stored inside of the browser) currently there is no need for virtualisation ([react-window](https://github.com/bvaughn/react-window) or [react-virtualized](https://github.com/bvaughn/react-virtualized)). If there would be BE requests the _react-window_ library would be great.
