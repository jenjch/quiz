# Homework 4 - Quiz Game Utilizing Javascript

The aim of this assignment was to create an interactive quiz game with multiple choice options, that will run in the browser. Play proceeds with a call to action "Start Quiz", with a timer, navigation to "View High Scores", score tracking, and responsive layout.

## Composition of Website and Code

Early disclaimer - this assignment was a lot tougher than expected, and for some reason I assumed we were supposed to use pure javascript without jQuery for this assignment, so I am sure there are more efficient ways I could have written out my code.

I have two html files, 1 for the main quiz page, and one for the high score page. There are also 3 javascript files, 1 for the main quiz functions/events, 1 for the questions, and 1 for the high score page. I also utilized some bootstrap CSS, an additional external CSS file.

## Process

My approach after reading through the specs was to first create the general layout of the html add some basic CSS. Then I started building out the for loops and functions for populating the divs, questions, buttons, etc. on the page, as well as event controls for starting the quiz and hiding/displaying each question. 

I did some pseudo coding to keep track of each step or component I needed to complete, but struggled with writing out and trial/erroring the syntax and commands.

I tried to use for loops whenever I could to simplify my code, as well as console logging, 

I believe I included most of the required elements, such as the call to action, score tracking, timer (but did not connect score to deduct from the timer), but ran out of time to complete the populating the scores on the high score page. I did connect the "submit" button with the event to save the score to local storage. I had trouble with using just 1 javascript file for both the index and the high score page (due to functions that didn't apply to the high score page), and decided to create a separate javascript file.

The quiz and webpages do have responsive design, although there is some clunky display that I would have liked to clean up. I would also have liked to include some of the bonuses to make my quiz more fun, but again struggled with timing and troubleshooting when things weren't working as expected. 

## Deployment

Once the assignment was "complete" (i did a couple of commits as I gradually built out the code), I then followed steps to update the files in Github and deploy the website for review. 
https://github.com/jenjch/quiz
https://jenjch.github.io/quiz

## Acceptance Criteria

I hope this represents a good attempt at the assignment. Feedback on best practices, and specific improvements I could make would be helpful.
