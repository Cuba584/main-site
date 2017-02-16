#"Cuba's New Wave" main site

##Installation

1. Install these dependencies if you don't already have them:
  - [Git](https://sourceforge.net/projects/git-osx-installer/)
  - [NodeJS](https://nodejs.org/en/download/)
  
2. Open terminal and `cd` into the folder of your choosing. For instance, if you start at root (~), to get to your Desktop, you would run: 
  `cd Desktop`
  Or for your Documents folder, just replace `Desktop` with `Documents`.

3. Clone this repository by running:

  `git clone https://github.com/Cuba584/main-site/`
  
  And then cd into that folder:
  
  `cd main-site`
  
4. Install the NodeJS packages by running:

  `npm install`
  
You are now set up to run the project locally, and unless you delete this folder on your computer, you won't have to follow these instructions again. If you want to set up your computer to also be able to use the Google Docs implementation, read on:
  
5. Retrieve a client_secret.json file from the Slack (you'll have to change the file extension to .json when you download it) to put in your directory.

6. Log in to the Cuba 584 Gmail account (login details are in our Drive) in your browser.

7. Run:

  ``node parse.js``
  
  And follow the instructions.

##Running the site locally

1. In the main-site directory, run: 

  `heroku local web`

2. Open the browser of your choice and navigate to: 

  `localhost:5000`

##Deploying Site Changes

1. Pushing to the `master` branch will automatically deploy changes to the site. You can also check progress of the deployment and push other branches to deployment in the Heroku dashboard.

2. The site is located at [cubayouth.herokuapp.com](cubayouth.herokuapp.com).

##Updating Articles

1. In the main-site directory, run:
  `node parse.js`

2. Add, commit and push the new JSON files:
  
  `git add data/`
  
  `git commit -m "updated articles"`
  
  `git push origin master`

##Adding new inner pages

1. Create a new Google Doc for the page content and make sure it's shared publicly. Then go to File -> Publish to the web... and click the "Publish" button

2. Copy the doc id from the doc URL, between /d/ and /edit. (ex: "1K1u7fOcFDjG3hpQ7J89BO-m23ihIpZJYM-cU5_ztwi0")

3. On line 11 of parse.js, add a new key value pair to fileIds for your document.

4. On line 9 of index.js, add the key from step 3. 

5. Follow the "Updating Articles" instructions.

##Notes for the developers
- Remember that you can add specific files to the tree! Do not `git add -A` unless you're sure that you didn't change anything on your branch that will conflict with someone else's branch.
- Make it a habit to run `git status` before you commit to see peruse the changes you've made and make sure you're not committing something you don't want to.
- If you push to the `master` branch, **you will be deploying those changes to the site**, so do not push to this branch unless you know it's ready for deployment!

##Dependencies

- This site was build up from the [tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs) for how to get started with NodeJS and Heroku. You can find the example code [here](https://github.com/heroku/node-js-getting-started).

- We are using Google Docs to pull in article content, through an [ArchieML](http://archieml.org/) [boilerplate by stuartathompson](https://github.com/stuartathompson/node-archieml-boilerplate).

- SASS is coming soon!
