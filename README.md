# Relackx
### Overview
Lackx is a Slack clone that supports live messaging, channels, workspaces, and all of the basic features found in Slack. It utilizes a Rails/Postgres backend with a React/Redux frontend.

### Technologies Used
* Rails
* React/Redux + Hooks
* Postgres
* Action Cable
 
 ![Landing image](https://user-images.githubusercontent.com/67240903/125955611-ca7063e5-648f-495c-b0dc-288f522f9fe1.png)

### Link to Live Site
* https://relackx.herokuapp.com

## Features
### User Authentication
  * Login is implemented with sliding modals, a user will be displayed error messages upon entry of invalid credentials. A demo user is added to allow quick viewing of the site.

### Channels
 A channel browser allows users to quickly view all channels in the workspace and join, create, and leave channels as they please. The search bar quickly filters results.

https://user-images.githubusercontent.com/67240903/125957200-51c5f1d6-6bbe-461e-a2c8-7ebca90b7c5c.mov

### Messaging
  Action cable allows for instant messaging across sessions. Users can send and receive messages in real time with websockets. Messages are displayed based on timestamps and the window will automatically adjust to the bottom of the page.

https://user-images.githubusercontent.com/67240903/125957887-66194ad9-3dc4-4578-b244-ac42298a1af1.mov

### Direct Messaging
 Direct messaging for users. Behaves the same way as channel messaging with a search bar for finding users and creating new channels.

## Takeaways
### Known Issues 
  * Login/Signup modal will sometimes close randomly on first open (FIXED).
  * Styling of transitions when going backwards is choppy, both when resetting the navbar and flipping backwards in login/signup.
  * Admin flag and owner_id are redundant, admin flag will only be used if I have enough time to get there
  * Context menu is non-intuitive and styling is rough (FIXED)
  * Timestamps have issues
  * Channel Browser members don't update immediately

### Important Things I've Learned
  * How to use useState/useEffect hooks. This project drilled them into me.
  * !!!Flexbox. I neglected fully learning and utilizing flexbox during the early stages of my project.
  * How to properly utilize inheritance in css. Learned from overeager styling of parent containers or child elements before layout was complete.
  * Learned how to utilize the power of useEffect properly on component load.
  * Focus on minimum data principle more. Worry less about component/container clutter, but also make structure as clean as possible. 
  * Make components more reusable. The majority of apps have shared components that can be made flexible given a little bit of foresight.
### Things to note
  * For CSS, setting up containers is crucially important and helps the rest of your styling, make sure that your content boxes are exactly how the size you want them to be before continuing onward. 
  * Keys don't work for elements immediately wrapped in ghost tags. Kinda strange.
  * Plan for handling time in advance, timestamps can be annoying especially if your application needs to keep track of different days.
### Things that worked but I would do differently
  * Really be more careful when implementing multi step sign up. It's difficult to display errors to the user and harder to layout nicely so stick with single page login for most purposes.
  * USE REDUX MORE!!! Specifically containers, I strayed away from using containers early in my development process to clean up the file tree but the clutter that results is not worth it!
  * Use grid template areas instead of grid-template-columns/rows. Way more semantic and easy to use. Luckily this time the grid layout way relatively simple though
  * Implementation of fetching direct messages is not designed for scalability. The time frame of this project is relatively short.
  * Passing workspaceId is clunky. I have no idea why it took me so long to figure out to use match.params for this. I didn't utilize routing well this entire project.
  * IMPORTANT!! Selectors should be passed slice of state, not state for most cases
  * Separation of concerns was not done well in this project. It felt rushed and many features bleed into each other. Especially the way data is fetched from the db. I wish I had more carefully thought through my inital setup before coding.
