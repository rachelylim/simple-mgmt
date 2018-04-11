const tasks = [
  {
    id:2,
    name:"testing second task",
    description:"does the api work?",
    deadline:"2018-04-26",
    complete:false
  },
  {
    id:4,
    name:"another task test",
    description:"to see why there is a type error for the action set",
    deadline:"2018-04-29",
    complete:true
  },
  {
    id:9,
    name:"a very long task name that might take two lines or more",
    description:null,
    deadline:"2018-04-20",
    complete:false
  },
  {
    id:11,
    name:"overdue task",
    description:"with a description",
    deadline:"2018-04-03",
    complete:true
  },
  {
    id:12,
    name:"task due today",
    description:"due today",
    deadline:"2018-04-08",
    complete:false
  },
  {
    id:13,
    name:"task due tomorrow",
    description:"due tomorrow",
    deadline:"2018-04-09",
    complete:false
  },
  {
    id:15,
    name:"new regular task",
    description:"this is a task that needs to get done quickly.\n\nmaybe these line breaks will not show in the details section.",
    deadline:"2018-04-15",
    complete:false
  },
  {
    id:16,
    name:"testing new task creation",
    description:"with docker",
    deadline:"2018-04-11",
    complete:false
  }
];

export const defaultProps = {
  tasks,
  filter: 'all'
};

export const filterProps = {
  tasks,
  filter: 'completed'
};
