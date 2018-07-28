# friend-finder
Compatibility Quiz

Dependencies: express, path, body-parser
## A note to the user:
Welcome to Friend Finder, where you new friend is just a few clicks away! Take our short survey and see who's out there.


## To the developers:

This application utilizes Express to locally host an application which matches users based on the score of their survey results. Each quesstion is answered with a number, and the sum + absolute value of all of a user's answers becomes their score.


To recreate this app: 

Install the dependencies.

Populate a .js file with data of potential matches. Include name, photo, and an array of scores for the 10 questions.

Create these three basic pages:
    1) Home -- displays app name + instructions + 'start' button.
    2) Survey -- Title + about (input fields for name and image) + 10 questions w/ dropdowns to select AND input to type in number + 'submit' button.
    3) Results -- lightbox which shows their best match's name and photo.

Consider the user's steps:
    1) Visits home page and clicks 'Go to survey' button.
    2) Inputs information into the survey.
    3) Clicks 'Submit' and sees their match. Then click 'close' or 'x' and user can resubmit with the same results or change answers. 

Finally, deploy to Heroku.


Happy coding!