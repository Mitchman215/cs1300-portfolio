---
layout: ../../layouts/CaseStudyLayout.astro
name: AB Testing
---

# AB Testing

## Summary

I made a small change to a sample page that helps patients book appointments with their doctors. Then, I gathered statistics on how long it took users to book an appointment with a specific doctor with the original version of the page (version A) and my modified version (version B).

## Data Collection

Image

*Version A - the original page*

Image

*Version B - the modified page*

The task given to users was to "schedule an appointment with Adam Ng, MD at Morristown Medical Center on April 23, 2024"

The raw data is available [here](#) for version A and [here](#) for version B

## Analysis

Next, I conducted statistical analysis on a variety of metrics.

### Misclick rates

**Null Hypothesis**: There is no difference in the misclick rate of version A and version B.

**Alternative Hypothesis**: Version B has a lower misclick rate than version A.

- This alternative hypothesis would be true because version B has horizontal dividers between.

**Prediction**: I predict that I won't be able

**Test**: Chi-squared Test

### Time on page

**Null Hypothesis**: There is no difference in the amount of time spent on the page between version A and version B before completing the task.

**Alternative Hypothesis**: Less time was spent on Version B than version A before the task was acomplished.

**Test**: One-tailed T-test

### Time before first click

**Test**: Two-tailed T-test

## Reflection

This project was mostly just an exercise to practice conducting statistical tests. The actual circumstances under which the data was gathered is flawed for several reasons. The users that these tests were conducted upon were other Brown University students who were also completing this assignment. Furthermore, these student users repeatedly completed the exact same task on slightly different versions of the same original page. So they were very familiar with the page and had (usually correct) expectations about where to click before even starting the experiment. The fact that the test population also was the population responsible for organizing the tests has the potential to create conflicting interests (for example, one student might purposefully do poorly on version A so that they would be more likely to conclude that their version B was better).

That is to say, I would not actually trust the results of any of these tests. However, if these tests were conducted in the real world, then I anticipate that the methodology would be a lot more robust (especially regarding how the data was gathered).
