# Trivia Dome 2.0!

## Why?

Due to Tyler’s continual dominance at trivia, a new game type has been proposed where everybody get’s to answer a question with those who are correct gaining points and those who are incorrect don’t lose points. 

## What? 

Trivia app 2.0! Let’s build a multiple choice trivia app that keeps track of scores using [https://the-trivia-api.com/docs/](https://the-trivia-api.com/docs/) as our API

## Structure

Login page (MVP, allow for a name to be input to be used during the game)

Home Page

- category list
- displays question once category is selected along with all possible answers
- timer triggers on category selection
- all users can enter a guess
- checks to make sure question hasn’t been asked before
- updates scores (since the api has 3 levels of question difficulty the possible points should be different based on what the difficulty is)

Leaderboard Page

- Shows ordered list of players with the correct scores next to them
