export const folders = {
  id: "1",
  name: "root",
  isFolder: true,
  children: [
    {
      id: "2",
      name: "src",
      isFolder: true,
      children: [
        {
          id: "3",
          name: "assets",
          isFolder: true,
          children: [
            {
              id: "4",
              name: "folders.js",
              isFolder: false,
              text: "defaultValue: The value that you want the context to have when there is no matching context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify null. The default value is meant as a “last resort” fallback. It is static and never changes over time.",
            },
          ],
        },
        {
          id: "5",
          name: "component",
          isFolder: true,
          children: [
            {
              id: "6",
              name: "Explorer.jsx",
              isFolder: false,
              text: 'value: The value that you want to pass to all the components reading this context inside this provider, no matter how deep. The context value can be of any type. A component calling useContext(SomeContext) inside of the provider receives the value of the innermost corresponding context provider above it.'
            },
          ],
        },
        {
          id: "7",
          name: "App.jsx",
          isFolder: false,
          text: 'children: A function. React will call the function you pass with the current context value determined by the same algorithm as useContext() does, and render the result you return from this function. React will also re-run this function and update the UI whenever the context from the parent components changes.'
        },
        {
          id: "8",
          name: "index.css",
          isFolder: false,
          text: 'By default, the values they receive will be the default values you have specified when creating the contexts. However, by itself this isn’t useful because the default values never change.'
        },
        {
          id: "9",
          name: "main.jsx",
          isFolder: false,
          text: 'Often, components in different files will need access to the same context. This is why it’s common to declare contexts in a separate file. Then you can use the export statement to make context available for other files:'
        },
      ],
    },
    {
      id: "10",
      name: "index.html",
      isFolder: false,
      text: 'This value never changes. React only uses this value as a fallback if it can’t find a matching provider above.'
    },
  ],
};
