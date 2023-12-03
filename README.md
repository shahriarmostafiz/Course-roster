# Assignment - 7 by Shahriar Mostafiz

Three main features

- Uses of React.Js core concepts
- Updating the Cart Dynamically using React.Js
- Checking user selection input and giving feedbacks using toasts

# How State was managed

- Here we used the "cards" state to store and keep track of the fetched data and used it whenever necessary in our code

- We used "selectedCourses" State to keep track of the courses the user has selected and updated it whenever a course is selected

- We used the "creditHour" state to keep track of the total number of credit hours the user has to complete and updated after each selection and warned the user if the credit hour is over 20 hours

- We used the remaining credit state to update the ammount of credit the user has left and passed this state to the Cart component

In our project Whenever the handleAddCourse function is called and state needs to be updated, we used the setCreditHour and setRemainingCredit functions to update the creditHour and remainnigCredit state variables, respectively. We also used setCourse to update the selectedCourses state.

- [Live link](https://assignment7byshahriar.surge.sh/)
