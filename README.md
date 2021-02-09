
### Build Dapp on Portis
---

> Dapp Name : MAXbeam
---

### Team Name : The Weird Brother

### Member : Adinda Ratnawati Ridwan || email: adinda.ratna.info@gmail.com || Linkedin: https://www.linkedin.com/in/adinda-ratnawati-ridwan-20a980170

### Member : Agin DropDisco || email: dropdisco1408@gmail.com || Linkedin: https://www.linkedin.com/in/agin-dropdisco-5555b7171/
---

>

> 

### MAXbeam

### A simple markdown blog app built with Portis, Web3, React, React Redux, Pouch DB.
---


### Login to Portis Widget then you wil be able to :

> • Create an Article and Publish it to MAXbeam Website ( like medium blog ) 
> 
> • Export Markdown with html file and many more 

---


> [LIVE DEMO](https://maxbeam-portis.web.ap)

> VIDEO DEMO: COOMING SOON

```jsx

yarn install

yarn start
```

> Only after logging in, you can see the editing option and create a new article

---


## Feature List

### Article System

- Edit article
  - Edit markdown
    - [x] Toggle editing and preview mode
    - [x] Sync scrolling of editing and preview panels
    - [x] Highlight the code of markdown according to its usage (I made the CodeMirror color theme)
    - [x] Prompt to save markdown after editing
    - [ ] Support some built-in snippets for markdown
  - Edit other elements
    - [x] Set the tags of article
    - [x] Set the title and excerpt of article
    - [x] Search the heading image based on keyword and set it (The heading image is also the cover of it in the article list)
    - [x] Preview the article info (Hovering on the **info setting button**)
- Manage article
  - [x] Create new article
  - [x] Publish article/save as draft
  - [x] Update article
  - [x] Removed article
- Export article
  - [x] Markdown file
  - [x] Styled HTML file
- Store article
  - [x] Local storage


### User System

- [x] User login/logout ( Now it only supports specified user to log in & Local Storage )

### Future

- [x] Will be available for every user, using JsonServer, lowDB & Substarte


## Showcase 

[YOUTUBE](#)


## Other resources

- [x] [Why only works for Local Storage ?](#)

- [x] [How to Change with Live API ?](#)

## Built With

- JS framework - [React](https://github.com/facebook/react/)
- Backend
   - [PORTIS](https://apps.portis.io/)
   - [PouchDB](https://github.com/facebook/react/)
   - [WEB3](https://github.com/facebook/react/)
- UI Composer - [Ant Design](https://github.com/ant-design/ant-design/)
- State Manager - [Redux](https://github.com/reactjs/redux/)
- Front-End Router - [React-Router](https://github.com/ReactTraining/react-router)
- Text editor - [CodeMirror](https://github.com/codemirror/CodeMirror/)
- markdown parser - [markdown-it](https://github.com/markdown-it/markdown-it/)
- Code highlighting - [Prism](https://github.com/PrismJS/prism/)
- Local storage - [PouchDB](https://github.com/pouchdb/pouchdb/)
- Photo search - [Unsplash](https://github.com/unsplash/unsplash-js)
- Photo display (like Pinterest) - [react-stack-grid](https://github.com/tsuyoshiwada/react-stack-grid)
- File export - [File Saver](https://github.com/eligrey/FileSaver.js/)
- Time transformation - [DayJS](https://github.com/iamkun/dayjs)

## Scripts

Run

```
$ yarn 

$ yarn start
```

Build

```
$ yarn build
```
