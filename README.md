# simple-mgmt
A simple task management app using React, Redux, and Docker. React components are styled using `react-emotion`.

## Install and Run
1. Clone repository.
2. In base of repository, run `docker-compose build`
3. After it builds, run `docker-compose up` and keep it running in that tab.
4. Open a new tab and run `npm install`.
5. After npm packages are installed, run `npm start` in the same tab.
6. Open browser and run on `localhost:3000`.
7. To run front end tests, run `npm test`.

## Features
1. Create new task with name, description, and deadline.
2. Filter tasks by: all, completed, due soon (today or tomorrow), overdue.
3. Mark tasks incomplete or complete.
4. Remove tasks.
5. Color coded tasks by completion/deadline status.
6. Open task for more details.

## React Components
- `TaskListContainer` - Connects redux to `App` component with dispatch functions to create, set, update, filter, and remove tasks.
- `App` - Parent component holding the `List` and `SideNav` components.
- `SideNav` - A menu component that holds a button to create a new task and the filter options, which also acts as a color key to visually identify tasks that are `complete`, `due soon`, or `overdue`.
- `List` - Component that holds all tasks returned from the database.
- `Task` - Component displaying information about the task. It has two states: the simple display state displays the name, a checkbox indicating if the task is complete or not, and a remove button. The outline of the task component is colored by a related filter. Clicking on this component opens a modal (`TaskDetailModal`) with more details about the task, such as its description and deadline. There is also a button to mark the task complete or incomplete.
- `CreateTaskModal` - a modal that opens when you click the button to create a task.
- `Modal` - a simple component used as a pattern/base for more complex modals, such as the `TaskDetailModal` and `CreateTaskModal`.
- `Input` - a styled input field
- `Checkbox` - a styled checkbox
- `Button` -  a styled button


## Redux Actions and Reducers
### Action Types
  1. `SET_TASKS` - sets the tasks that return from `api/v1/tasks` on to state
  2. `SET_FILTER` - assigns the filter that is selected on to state

### Action Methods
  1. `createTask` - creates task
  2. `updateTask` - updates if task is complete or not
  3. `removeTask` - removes task


## API Documentation - Version 1
### Task (object)
+ `name` (string) *required* - the name of the task
+ `description` (string) *optional* - the description of the task
+ `deadline` (datestring) *optional* - a string form of the date set as the deadline, in format 'YYYY-MM-DD'
+ `complete` (boolean) *default set to `false`* - task completion status

#### Get Tasks [GET]
+ `api/v1/tasks` - Response 200 (application/json)
  + Response Body
  ```
    [
      {
        "id":2,
        "name":"testing second task",
        "description":"does the api work?",
        "deadline":"2018-04-26",
        "complete":false
      }
    ]
  ```

#### Create Task [POST]
+ `api/v1/tasks` - Response 201
+ Request Body
  ```
  {
    "name":"submit this project soon",
    "description":"this project should be submitted tomorrow",
    "deadline":"2018-04-11",
    "complete":false
  }
  ```

#### Update Task [PATCH]
+ `api/v1/tasks/:id` Response 201
+ Request Body
    ```
    {
      complete: true
    }
    ```

#### Remove Task [DESTROY]
+ `api/v1/tasks/:id` Response 204
  + no response body