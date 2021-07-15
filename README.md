# Relackx

## Known Issues
  * Login/Signup modal will sometimes close randomly on first open.
  * Styling of transitions when going backwards is choppy, both when resetting the navbar and flipping backwards in login/signup.
  * Admin flag and owner_id are redundant, admin flag will only be used if I have enough time to get there
  * Context menu is non-intuitive and styling is rough


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
  
### Things that worked but I would do differently
  * Really be more careful when implementing multi step sign up. It's difficult to display errors to the user and harder to layout nicely so stick with single page login for most purposes.
  * USE REDUX MORE!!! Specifically containers, I strayed away from using containers early in my development process to clean up the file tree but the clutter that results is not worth it!
  * Use grid template areas instead of grid-template-columns/rows. Way more semantic and easy to use. Luckily this time the grid layout way relatively simple though
  * Implementation of fetching direct messages is not designed for scalability. The time frame of this project is relatively short.
  * Passing workspaceId is clunky. I have no idea why it took me so long to figure out to use match.params for this. I didn't utilize routing well this entire project.
  * IMPORTANT!! Selectors should be passed slice of state, not state for most cases
  * Separation of concerns was not done well in this project. It felt rushed and many features bleed into each other. Especially the way data is fetched from the db. I wish I had more carefully thought through my inital setup before coding.

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
