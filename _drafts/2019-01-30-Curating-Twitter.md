---
layout: post
title: A Curated, Daily, Automated Newsletter of Tweets
---

## The Why

I like to keep a high signal-to-noise ratio in my Twitter feed. I follow < 50 people, and I strongly prefer people that tweet relatively infrequently (< 10 tweets per day) and about things I find interesting most of the times.

However, there are many more people I would like to follow. Some of these people either tweet too frequently or inconsistently about things that I find interesting. Now that Twitter has an algorithmic timeline, I wish you could specify what types of content you like to see, similar how the Youtube recommended videos work. But, they don't.

In the past, I've just visited these a few people's Twitter page directly every week or so and skimmed for their most interesting content. While this keeps them out of my daily Twitter feed, I still need to sift through many tweets to find the most interesting ones. I've put together a small project to fix this.

## The How

I decided to write a Python script that emails a daily newsletter of a curated digest of people's "best" tweets. This way, I can quickly catch up on the highlights from lots of people's Twitter feeds.

I am using a couple of tools to get this job done:

- [python-twitter](https://github.com/bear/python-twitter): a Python wrapper around the Twitter API

- [Twitter developer account](https://developer.twitter.com): generate API keys to use in the Python script

- [Heroku](https://www.heroku.com): online environment for running the Python script remotely on a schedule

One key part of curation is how much to curate. First, I score all of their tweets from the past week using `score = (# of favorites) * (# of retweets)`, e.g. 5 favorites and 10 retweets gives a score of 50. Uing the past week of data, I calculate the cutoff score for the 90th percentile. Then, of the tweets that they had in the past day, if they are above the cutoff, I include them in the daily digest email. As a final step, I have a max absolute limit for tweets I will include.

The code is below. Note, I have omitted parts of the code specific to my personal Twitter/Gmail accounts. You will need to replace those with strings for your specific accounts.