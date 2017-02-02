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

###Little Set-up things
- the `touch .gitignore` command in our directory will create a .gitignore file for us. Inside the .gitignore we'll list files that don't need to be included when we push to our repository. For now, I'm including `.DS_Store`, which is an extra annoying hidden file that shows up inside a directory in a Mac and could mess up our branch merges.
  - In the future, we'll probably put our photo folder in the .gitignore so we don't keep pushing all of those large files up the tree every time we push.
