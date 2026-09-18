# TechStack Builder

A simple and interactive React application where users can explore different technologies and build their own **Technology Stack**.

Users can select technologies they are interested in, add them to their personal stack, remove individual technologies, or clear the entire stack.

##  Features

* 🔍 **Explore Technologies** — Browse different technologies with useful information such as category, description, rating, and difficulty.
* 🧩 **Build Your Stack** — Add your favorite technologies to your personal stack and see the selected technology count.
* 🔔 **Toast Notifications** — Get instant feedback when adding, removing, or clearing technologies from your stack.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify
* JSON Data
* Vite

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript.

It makes React components easier to write and understand because we can describe the UI directly inside the component.

---

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

For example, I used props to send technology data to child components, while state is used to manage the selected technologies.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage changing data inside a component.

I used it to manage the selected technology stack and update the stack when technologies are added or removed.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run some code after a component renders or when specific data changes.

I used it to load the technology JSON data when the application starts, so the technology list can be displayed.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

A unique key helps React understand which item was added, removed, or changed, so it can update the UI efficiently.

Example:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in the **Your Stack** section. If the stack is empty, I show an empty message. Otherwise, I show the selected technologies.

```tsx
{selectToStack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <TechnologyList />
)}
```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

If the child needs to change something in the parent, the parent can pass a **function** as a prop. The child can then call that function.

For example:

```tsx
<SideBar
  selectToStack={selectToStack}
  setSelectToStack={setSelectToStack}
/>
```

Here, the parent passes both the data and the state update function to the `SideBar` child component.
