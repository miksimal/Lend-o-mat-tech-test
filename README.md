# Tech Test

## Instructions

A loan consists of a Loan ID, a borrower name, a repayment amount, and a funding amount (amount given to the borrower which is less than the repayment amount).

### Task 1: Web API
Create a C# Web API (.NET or .NET Core) that has methods for (a) adding a loan, (b) getting a loan by loan ID, (c) getting all loans, and (d) deleting a loan.

The loans should be added to an in-memory data store in the Web API. This means data will only exist whilst the API is running.

### Task 2: Website
Create a website with one page that allows you to call all methods of the Web API.


### Bonus points (optional)
+ make the website look nice
+ use Angular/React/Vue
+ use .NET Core
+ use one or more design patterns
+ add tests


## My own answer notes explaining the solution I created

This folder contains a C# Web API (.NET Core) (with in-memory data store and methods to add a loan, get a loan by ID, get all loans, and delete a loan) and a single-page React app to call all methods of the API.

## Instructions for testing
Open the API folder in Visual Studio and run it (incl. generate the necessary packages).

It will (hopefully!) open a browser page that says "This localhost page can’t be found". That's fine.

If it is not being run on https://localhost:5001/, do the following:
+ go into the website project -> src -> open the App.js file
+ change the port number of the axios.defaults.baseURL to the one that your API is running on, and Save.

Next, navigate to the website folder in the terminal and run:
`npm install`
`npm start`

That's it!
+ If you fill in the "Want a loan?" form, it will create the loan by POSTing to the API. If it returns succesfully, it will be added to the Loan Summary table at the bottom of the page. 
+ The app makes a GET request for all loans on initial load (and displays loans - if it gets any back - in the Loan Summary).
+ By typing in an id in the "Too many loans? Search by id:" field, you will trigger a GET request for that specific id.
+ If you click the ❌ on the left hand side for a given loan, a DELETE request is sent for that loan.

Explanation for the website:
+ Fairly standard set-up based off of create-react-app.
+ App.js acts as "container", holding the Handlers and most of the state for its components, namely: LoanCreator and LoanOverview.
+ I use Axios to make requests, setting the baseURL in App.js.


## Some improvements to make / next steps

Web API:
+ Make precise what CORS is needed (instead of the current "AllowAny" Header, Method, and Origin!).
+ Add database and auth, and show only loans relevant for the specific user (through database resolver).
+ Add a simple page to the API so that when localhost:5001/loans opens up successfully that is clear (instead of "Page can't be found").
+ Deal with currencies etc.

React app:
+ Manage state better, using either Hooks + the Context API, or Redux.
+ Add tests.
+ Make prettier, adding some transitions to the table to make it less "jumpy". Relatedly, should have more of a delay before calling the getById GET requests (so if the user types 123 we don't have a get request for each of #1, #12, and #123).
+ Add e.g. "Loading" spinners for when there is actual latency to deal with (not just localhost to localhost).
