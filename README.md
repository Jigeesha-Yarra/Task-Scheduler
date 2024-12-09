## Project Overview ##
The Task Management Scheduler is a simple web application designed to help users efficiently manage their tasks. It allows users to add tasks, assign priorities (HIGH, MEDIUM, LOW), set deadlines, and track completion. Tasks are automatically organized by priority, with high-priority tasks displayed first.


# Features
1. Add tasks with a description, priority, and deadline.
2. Automatically sort tasks by priority:
    2.1 HIGH priority tasks appear at the top.
    2.2 Followed by MEDIUM and then LOW priority tasks.
3. Visual indication of completed tasks (highlighted in pink after marking as done).
4. Responsive design for use on various devices.


# Technology Stack
1. HTML: For structuring the web page.
2. CSS: For styling the page (linked via style.css).
3. JavaScript: For interactive functionality and task management logic (via script.js).


# How to Use
1. Enter a Task: Provide a description of the task in the input field.
2. Select Priority: Choose a priority level from the dropdown (HIGH, MEDIUM, LOW).
3. Set Deadline: Use the date picker to set a future deadline.
4. Add Task: Click the "Add Task" button to add the task to the list.
Tasks with a past or invalid deadline will not be added.
Tasks are sorted by priority.
5. Mark as Done: Click the "Mark Done" button to highlight completed tasks. The button will be disabled once a task is marked done.


# Project Structure
Task Management Scheduler/
├── index.html         # The main HTML file.
├── style.css          # Stylesheet for page styling.
├── script.js          # JavaScript file for task management logic.
└── README.md          # Documentation for the project.


# Future Enhancements
1. Add the ability to edit tasks.
2. Implement a feature to save tasks to local storage for persistence.
3. Include a "Delete Task" button to remove unwanted tasks.
4. Add filters for tasks based on priority or deadline.