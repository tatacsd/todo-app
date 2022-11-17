<div align="center" justify="center">
    <img alt="Todo" title="Todo" src="./public/vite.svg" />
    &nbsp;&nbsp;&nbsp;
    <img alt="Todo" title="Todo" src="./src/assets/todo.svg" />
</div>
<br />
<p align="center">
  <a href="#-technologies"> Technologies </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project"> Project </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-challenge">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<div align="center" justify="center">
 <img alt="commits" src="https://img.shields.io/github/last-commit/tatacsd/todo-app?color=7159c1" />
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/tatacsd/todo-app?color=7159c1" />
  <img alt="Snyk Vulnerabilities for GitHub Repo" src="https://img.shields.io/snyk/vulnerabilities/github/tatacsd/todo-app?color=7159c1" />
  <a href="http://www.linkedin.com/in/thayscasado" target="_blank">
  <img alt="Linkedin" src="https://img.shields.io/badge/-Linkedin-7159c1?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thayscasado" />
    </a>
    <a href="https://gofund.me/3265ea9e" target="_blank">
  <img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/tatacsd?color=7159c1" />
  </a>


</div>

<br>

<p align="center">
  <img alt="Todo app" src="./public/todo-app.svg" width="100%">
</p>

## 🚀 Technologies

This project was developed using the following technologies:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Uiid](https://www.uuidgenerator.net/)
- [Phosphor react](https://phosphoricons.com/react/)


## 💻 Project

The todo app is an application that allows the user to create a task list, being able to add, remove and mark as completed.

## 🔖 Layout

You can view the project layout through the links below:

- [Layout Web](https://todo-app-rho-one.vercel.app/)



## 🧠 Challenge

This repository aims to be a challenge to create a todo list application, where the user can add, remove and mark as completed. This challenge was proposed by [Rocketseat](https://rocketseat.com.br/) on the [Ignite](https://rocketseat.com.br/ignite) bootcamp course.
In the challenge: Practicing Concepts.

During this first challenge of the Ignite course, I was able to improve the ReactJS skills by creating a simple to-do list application.

During this challenge, I was able to practice the following concepts: ReactJS, State, Props, Immutability, Components, Hooks, TypeScript, Vite, Uiid, Phosphor react, css modules and more.


## 🚀 How to run

- Clone the repository
```bash
$ git clone git@github.com:tatacsd/todo-app.git
```
- Enter the folder
```bash
$ cd todo-app
```
- Install the dependencies
```bash
$ npm i
```
- Run the application
```bash
$ npm run dev
```
- The application will open on the port:3000 - access http://localhost:3000

You can change the port in the vite.config.ts file.
```ts
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  }
})
```

