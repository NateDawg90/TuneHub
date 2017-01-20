# TuneHub

[TuneHub.audio][chime] is a web application for users to stream music and follow artists. Inspired by Bandcamp, TuneHub allows users to browse artist pages, listen to their tracks, follow those artists, and discover other artists.

TuneHub is a personal project by Nathan Johnson.

![TuneHub home page: http://www.chime.audio][home page]

## Features

- User accounts with secure authentication
- Music streaming with controls and no interruption
- Artist pages
- Searching for artists
- Artist follows allowing users to consolidate music
- Artist Descriptions
- Adding tracks to a temporary queue for playback
- Image views for artists

![demo_user's tracks: http://www.chime.audio/demo_user/tracks][tracks]

## Project Design

TuneHub was designed and built in a week and a half weeks.

A [proposal][proposal] was drafted to help provide an implementation timeline during the development process.

A [database schema][schema] was prepared alongside the design proposal.

## Technology

TuneHub is a single-page application built on Rails and React.js, with many dependencies in both the backend and the frontend.

- [Backend technology][backend]
- [Frontend technology][frontend]
- [File storage][file storage] via Amazon Cloudinary

## Future Implementations

The features that will be added are listed in the [future implementations][future] outline.

[chime]: https://chime.audio
[home page]: ./docs/images/main_page.png "TuneHub home page"
[artist]: ./docs/images/artist_page.png "An Artist's page"
[proposal]: ./docs/proposal.md
[schema]: ./docs/schema.md
[backend]: ./docs/backend.md
[frontend]: ./docs/frontend.md
[file storage]: ./docs/file_storage.md
[future]: ./docs/future.md
