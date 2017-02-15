#"Cuba is Young" Project

##Instructions

###Dependencies

- This site was build up from the [tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs) for how to get started with NodeJS and Heroku. You can find the example code [here](https://github.com/heroku/node-js-getting-started).

###For the devs
- This was the basic layout when I stripped the tutorial extra code:
  - public
    - stylesheets
  - views
    - pages
      - index.ejs
    - partials
      - header.ejs
      - nav.ejs
  - index.js
  - Procfile
  - package.json
  - README.md
- Now we just need to pull in a data set (which is TBD from the Google Docs API)...
- ...Make our page templates...
- ...And take care of some git house cleaning.

###Git things
- Running `touch .gitignore` in our directory will create a .gitignore file for us. Inside the .gitignore we'll list files that don't need to be included when we push to our repository. For now, I'm including `.DS_Store` — an extra annoying hidden file that shows up inside a directory on Macs and could mess up our branch merges — and `node_modules/`, which is the directory that populates when you run `npm install`.
  - In the future, we'll probably put our photo folder in the .gitignore so we don't keep pushing all of those large files up the tree every time we push.
- Remember that you add specific files to the tree! Do not `git add -A` unless you're sure that you didn't change anything on your branch that will conflict with someone else's branch.
- Make it a habit to run `git status` before you commit to see peruse the changes you've made and make sure you're not committing something you don't want to.

###Node things
- To install our Node dependencies (the packages we need for our app to run, which are listed in package.json), run `npm install` in the main directory.

###Heroku things
- To view this app, we have to run a local server. The Heroku command to run a local server is:`heroku local web`. Now if you go to http://localhost:5000/ in your browser, you'll see a local version of your app.
- If you push to the `deploy` branch, **you will be deploying those changes to the site**, so do not push to this branch unless you know it's ready for deployment!
- Our site is located at [cubayouth.herokuapp.com](cubayouth.herokuapp.com).
