# TuneHub

[Heroku link][heroku] **Note:** This should be a link to your production site

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/UsLIzPHC/tunehub

## Minimum Viable Product

TuneHub is a web application inspired by Bandcamp built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Artist Pages
- [ ] Song player with locking playbar
- [ ] Search function
- [ ] Ability for fans to follow artists or other fans
- [ ] Ability for artists to upload and fans to download songs
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Artist, Fan, Album, and Song Models, API, and components (2 days)

**Objective:** All of the above can be created, read, edited and destroyed through
the API.

### Phase 3: Associations (.5 day)

**Objective:** Songs belong to Albums. Albums belong to artists and fans(?). Follows have a follower and followee. All can be created, read, edited and destroyed through the API.

### Phase 4: Artist Page (1 days)

**Objective:** Visualization of Artist info.

### Phase 5: Search Function and top nav bar  (2 days)

**Objective:** Search bar is locked to the top of the screen on all screens except sign-in. Results can come from Artists, albums, songs, and fans.

### Phase 6: - Song player and bottom-locked bar (2 day)

**Objective:** Add song play function. Add a bar with play/pause, volume, and hamburger button

### Bonus Features (TBD)
- [ ] Upload / Download Songs
- [ ] Purchase Songs
