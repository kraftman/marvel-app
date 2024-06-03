### Project goal

- Create a small web application using the Marvel API to display a list of characters and their details.
- Show capabilities in React, TypeScript, and testing.

Functional requirements:

- Display a list of characters with their name and thumbnail.
- Clicking on a character should show more details about the character.
- Use the Marvel API to fetch the data.

## Architectural choices

- **Next.js**: I chose Next.js for its support of SSR, API routes, and linting out of the box.
- Proxying API requests through the Next.js API routes to avoid CORS issues, and to keep the API key secure.

## UI design

- Standard navigation, list, and pagination components used from Material-UI.

## Approach

1. Get a basic app running, with a request made to the server and data displayed.
2. Lock down the project with prettier, typescript, eslint, husky, and lint-staged.
3. Test the project with jest and storybook.
4. Code cleanup, refactoring code into a better structure, adding documentation.
5. Extras: Test Server side rendering, cleanup styles, add caching to requests.

## Challenges and solutions

Biggest Challenge was using nextjs 14, since I work with nextjs 12 normally. I had to learn the new project structure, the new way to handle dynamic routes, and the new way to handle API requests. Storybook also had issues with React Server Components, which I had to enable in the config.

## Time taken

time taken:
project setup, basic components and API calls running, ~ 40 mins
learning server components and actions, ~ 30 mins
refactoring, adding tests, storybook, etc - 50 mins
code cleanup, styling, etc - 50 mins
Documentation, project cleanup - 40 mins
