---
layout: ../../layouts/CaseStudyLayout.astro
name: Development
---

# Development

I created a basic web app that

## Competitive Analysis of Favoriting Functionality

Before creating the web app, I conducted a competitive analysis of several existing sites in relation to their favoriting functionality. I compared [GitHub](https://github.com)'s repositiory starring functionality, [coolors.co](https://coolors.co/) ability to save colors and palettes, and [Spotify](https://spotify.com/) liked songs / playlists. All these sites require creating an account to use and persist their favoriting functionality.

### Comparison Table

| Factors | GitHub | Coolors | Spotify |
| ------- | ------ | ------- | ------- |
| Save without account | ❌ | ❌ | ❌ |
| Save to fully customized lists | ✅ | ❌ | ✅ (playlists) |
| Favorite different categories of things | ❌ | ✅ (colors, palettes, etc.) | ✅ (songs and podcasts) |
| Other people can see your favorites | ✅ | ❌ | ✅ (only playlists) |
| Can control visibility of favorites list | ❌ | ❌ | ✅ (only playlists) |
| Can search / filter favorites list | ✅ | ✅ | ✅ |
| Can sort favorites list | ✅ | ❌ | ✅ |

### Summary

The main factors that distinguished these sites were related to the visibility of the favorites list to other users and whether you can save the favorites to multiple, potentially customizable lists. While it is difficult to say for certain which sites are most successful in providing favoriting functionality without user statistics, it seems likely that sites that provide more customizability like Spotify *seem* more successful. Additionally, I'd say that the sites that made different aspects of functionality related to favoriting easy to discover were more successful - for example, I previously was unaware that GitHub had the ability to categorize your starred repositories into custom lists.

### Ideas for implementation

Based on this analysis, I will try to incorporate searching, filtering, and sorting into my site's aggregate functionality - this will give users enough control to find content they want to interact with. Additionally, I will keep the aggregated lists private to each user - while for certain types of content it might make sense to be able to share your list with your friends, with financial information like for my web app, it is probably best to keep private.
