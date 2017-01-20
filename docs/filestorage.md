# File Storage on Amazon Cloudinary

The splash video on the main page is stored on the Amazon Cloudinary storage service.

Due to the large file sizes, audio files are uploaded directly to Cloudinary. Meanwhile, Artist info such as songs, images, and descriptions are seeded through Rails and processed by a Spotify gem called RSpotify. They are seeded directly to the database.

## Cloudinary Seeding

For fast loading and browsing on an app with potentially large audio files, Cloud hosting must be used. That is why my long term plan would be to seed all the data from Cloudinary, not Rails. This would result in greater speed of the site.
