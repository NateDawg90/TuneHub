# TuneHub

[TuneHub.online][tunehub] is a web application for users to stream music and follow artists. Inspired by Bandcamp, TuneHub allows users to browse artist pages, listen to their tracks, follow those artists, and discover other artists.

TuneHub is a personal project by Nathan Johnson.

![TuneHub home page: http://www.tunehub.online][home page]

## Features

### User accounts with secure authentication
Users can quickly sign up and be assured that their password is encrypted (hashed through BCrypt). Prospective users can demo the site using the a guest user profile with pre-seeded artists.
[TuneHub home page: http://www.tunehub.online][home page]

### Music streaming with controls and no interruption
Users can stream music in real time and control volume through a handy play bar locked to the bottom of the screen.

### Artist pages
Each artist has its own page for viewing a sample album, cover, followers, and genre.

### Searching for artists
A search bar on the main page allows for quick lookup of your favorite artists.

### Artist follows allowing users to consolidate music
Fans can follow artists of their choice, consolidating them in a group on the fan's user page.


![demo_user's tracks: http://www.tunehub.online/artist/][artist]

## Project Design

TuneHub was designed and built in a week and a half.

A [proposal][proposal] was drafted to help provide an implementation timeline during the development process.

A [database schema][schema] was prepared alongside the design proposal.

## Technology

TuneHub is a single-page application built on Rails and React.js, with many dependencies in both the backend and the frontend.

- [Backend technology][backend]
- [Frontend technology][frontend]
- [File storage][file storage] via Amazon Cloudinary

## Future Implementations

The features that will be added are listed in the [future implementations][future] outline.

[tunehub]: http://www.tunehub.online/
[home page]: ./docs/images/main_page.png "TuneHub home page"
[artist]: ./docs/images/artist_page.png "An Artist's page"
[proposal]: ./docs/proposal.md
[schema]: ./docs/schema.md
[backend]: ./docs/backend.md
[frontend]: ./docs/frontend.md
[file storage]: ./docs/file_storage.md
[future]: ./docs/future.md
