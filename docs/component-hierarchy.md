## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**MainContainer**
 - Main
 - Sidebar

**ArtistInfoContainer**
 - NotesHeader
  * NoteIndex

**AlbumContainer**
 - AlbumHeader
  + AlbumIndex

**SearchResultsContainer**
 - Search
 - NoteIndex

**TagContainer**
 - NotebookHeader
  + NoteIndex

**NoteIndex**
 - NoteIndexItem
  + NoteDetail
    + NoteTools
    - NotebookSearch
    - Tags
      - Tag
    * Note

**NewNoteContainer**
 - NewNote
  - RTETools
  - NewNoteButton

**Search**

**NewNotebook**
 - NewNotebook

**NewTag**
 - NewTag

**NotebookSearch**
 + AutoSearch
 * AutoSearchResults

**TagsSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/main" | "MainContainer" |
| "/main/artists/:artistId" | "ArtistContainer" |
| "/main/fans/:fanId" | "FanContainer" |
| "/main/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
| "/main/tag/:tagId/note/:notedId" | "TagContainer" |
| "/main/search-results" | "SearchResultsContainer"
| "/new-note" | "NewNoteContainer" |
| "/search" | "Search" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/notebook-search" | "NotebookSearch" |
