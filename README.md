# React technical test

## Comments and description

Taks completed over the weekend. With some fine-tuning on Monday.
Took around 12-15h

It was my first project using styled-components so probably in some places I could do better.
There was not much to do with Redux and it was possible to just use state but
I decided to play a bit with React Hooks while connecting the store.
Just to test it and I find the code much cleaner this way.
Although I needed React-Redux in @next alpha version for that as it is quite new concept.

There are some things I would normally discuss with the team or things that would be already set in the projects like:

-   Media breakpoints
    I made one for the mobile design just for now
    I would consider using library like mobile-detect.js to choose the layout.
    I would also review with graphic designer to decide other media breakpoints , behavior and animations.

-   How you handle redirection and actions on links
    I went with onClick function but it is temporary solution.
    Probably you use React-Router in the project
    then I would go with <Link> or <a> and onClilck function for other actions.

-   I had problems configuring Jest to the project so left just one test as example.
    (known problem with create-react-app - it would take some time to solve)
    Normally I test all helpers, reducers and async actions.
    I had been testing components before but in my recent project we just us selenium integration tests.

-   I decided to generate menu items from array. This way it would be easier to change items dynamically.
    Also I will be more readable when the project grows.

It was tested manually on Chrome, Firefox and Edge.
Of course before going to productions I would test it on mobile devices and other browsers that we support.
Also internationalization is to be considers so I would test how it brakes on other languages.

I am aware that it could be better SEO wise and HTML semantics could be better.
Something I would need to study a bit as it is not important at my current project.

Probably there are some minor thing that could be improved,
but I find it better that you see what I can do in a resonable amount of time.
I believe that the objective of this test was to see what I am capable of doing out of the box.
And I must say I am satisfied with the result and the amount of time it took.

The object of this test is to create an animated menu

## Getting Started

Clone this repository in your local machine.

### Prerequisites

make sure you have _npm_ installed in your machine

### Installing

Use npm to install all the dependencies (from the project folder)

```
npm i
```

Start the launcher

```
npm start
```

## Objectives

-   create fully responsive animated menu
-   should look good on mobile and desktop

### Desired objectives

-   use **styled-components** for styling
-   use **react-transition-group** to manage animations
-   use **fontawesome**

## Screen designs

![mobile](https://raw.githubusercontent.com/Awaymo/react-technical-test/master/design/mobile.png)

![desktop](https://raw.githubusercontent.com/Awaymo/react-technical-test/master/design/desktop.png)
