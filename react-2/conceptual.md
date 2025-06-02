### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

- React Router's purpose is to handle client-side routing in single-page applications. It enables navigation within these websites or mobile apps without refreshing the page.

- What is a single page application?

-A single-page application is built on a single HTML page that dynamically updates content instead of loading entirely new pages for each user action. This is often the modern approach to web development, offering faster interactions and a smoother user experience.

- What are some differences between client side and server side routing?

- Server-side routing will retrieve or return data depending on the URL and load the HTML. Each URL pathname will retrieve the relevant data from its database. The user will need to make a request to the server upon subsequent requests to load the HTML.

- Client-side routing means the server is called once and provides a single HTML file. Upon navigation, the page is manipulated by JavaScript running in the browser to display data without completely reloading the page.

- What are two ways of handling redirects with React Router? When would you use each?

-One method is to use a useNavigate. This allows use to navigate to a new page dependate on a button or upon a condition is met during the rendering. You should use this method when it comes to genneral navigation for the website. This should be the more common.

- The other is the <Redirect /> not known as <Navigate />. This will replace the current page with another with the components needed this can have poor effects on the history making it difficult to go back. You should use this when the previous page should be accussed once upon a condition such as a login or log out.

- What are two different ways to handle page-not-found user experiences using React Router?

- The two different ways of handleing page-not found user experiences using React is either to redirect a user to a not found page/compoent or to redirct them to a home or known page. The not found page is often use with the route \* to catch all unkowns.

- How do you grab URL parameters from within a component using React Router?

- You would use useParams to get parameters within a component. This allows you to access values from the URL and use them in your component. For example, you might use it to navigate to a page for a specific product by its ID.

- What is context in React? When would you use it?

- Context is a way to declare a value and make it accessible to any component within the tree where it was defined. This is especially helpful when a value needs to be shared between a parent and a deeply nested child component including a great-grandchild. Instead of passing the value down through props at every level, you can use Context to allow any descendant to access it directly.

- Describe some differences between class-based components and function
  components in React.

  -A differences between class-based components and function is the lifescycle method. in fucntion based components we would use the hook useEffect() while in the use a componentDidMount and a ComponentWillUnmount. In a function based component is faster and lighter waite due to a simular struction. In class for event handling required the method binding which can be difficult to understand when to use.

- What are some of the problems that hooks were designed to solve?

- Hooks allow for more streamlined and readable code in React. Hooks like useState and useEffect help eliminate issues caused by this and manual binding in class components. Additionally, they enable the creation of custom hooks, which can reduce clutter in components and make logic reusable across multiple parts of an app. This improves performance, increases flexibility, and simplifies development in React.
