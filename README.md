# react-react-router
Project with rect and react-router V 6.8.1

#### Definition
React router is an awesome and exceptional library to building SPA with React.
A SPA is when we load all HTML in one page, in one div and handle the logic with javaScript. And as the result, our project gets snappy like feel now.
React does not have building-in routing solutions.
That we reach for extra library and react-router is de most popular and common for this. The latest and greatest version is V6.
Browser needs to run back to the server.
The page load instantly.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

#### Docs

[React Router Docs](https://reactrouter.com/docs/en/v6/getting-started/overview)

#### Install

```sh
npm install react-router-dom@6
```

#### Router Components

- BrowserRouter

This is the first component that we need. This tag that encloses our application, and allows us to use all the functions of react-router.

```js
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>
);
```

- Route

Routes are perhaps the most important part of a React Router app. They couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative.

```js
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Team />}
      path="teams/:teamId"
      loader={async ({ params }) => {
        return fetch(
          `/fake/api/teams/${params.teamId}.json`
        );
      }}
      action={async ({ request }) => {
        return updateFakeTeam(await request.formData());
      }}
      errorElement={<ErrorBoundary />}
    />
  )
);
```
```js
interface RouteObject {
  path?: string;
  index?: boolean;
  children?: React.ReactNode;
  caseSensitive?: boolean;
  id?: string;
  loader?: LoaderFunction;
  action?: ActionFunction;
  element?: React.ReactNode | null;
  errorElement?: React.ReactNode | null;
  handle?: RouteObject["handle"];
  shouldRevalidate?: ShouldRevalidateFunction;
}
```

- Element

The element to render when the route matches the URL. For example a component or a page. 

```js
<Route path="/for-sale" element={<Properties />} />
```

- Error element

When a route throws an exception while rendering, in a loader or in an action, this element will render instead of the normal element.

```js
<Route
  path="/for-sale"
  // if this throws an error while rendering
  element={<Properties />}
  // or this while loading properties
  loader={() => loadProperties()}
  // or this while creating a property
  action={async ({ request }) =>
    createProperty(await request.formData())
  }
  // then this element will render
  errorElement={<ErrorBoundary />}
/>
```

- Link
It is the element that we use to be able to navigate to another URL. Normally we use the <a> tag, however the href loads the whole page again. <Link> replaces the tag and works as we expect without reloading the entire page.

```js
import * as React from "react";
import { Link } from "react-router-dom";

function UsersIndexPage({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

```js
```
```js
```
```js
```
```js
```
