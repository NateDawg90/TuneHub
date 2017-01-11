# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
type            | string    | not null
name            | string    | 
location        | string    |
description     | string    |

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
album_id    | integer   | not null, foreign key (references albums), indexed

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
price       | integer   | not null
release_date| integer   | not null
artist_id   | integer   | not null, foreign key (references artists), indexed

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
date        | integer   | not null
album_id    | integer   | not null, foreign key (references albums), indexed
fan_id      | integer   | not null, foreign key (references fans), indexed


## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
note_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
