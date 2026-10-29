import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const tasksCollection = collection(db, "Tasks");

const taskNameInput = document.getElementById("taskName");
const descriptionInput = document.getElementById("description");
const priorityInput = document.getElementById("priority");
const addTaskButton = document.getElementById("addTask");
const filterInput = document.getElementById("filter");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskButton.addEventListener("click", async () => {
  const taskName = taskNameInput.value.trim();
  const description = descriptionInput.value.trim();
  const priority = priorityInput.value;

  if (!taskName || !description) {
    alert("Please enter both task name and description.");
    return;
  }

  try {
    await addDoc(tasksCollection, {
      taskName,
      description,
      priority,
      status: "Pending",
      createdAt: serverTimestamp()
    });

    taskNameInput.value = "";
    descriptionInput.value = "";

    alert("Task added successfully!");
    displayTasks();

  } catch (error) {
    console.error("Error adding task:", error);
    alert("Unable to add task. Check Firestore permissions.");
  }
});

// Display tasks
async function displayTasks() {
  taskList.innerHTML = "Loading tasks...";

  try {
    const snapshot = await getDocs(tasksCollection);
    const selectedFilter = filterInput.value;

    taskList.innerHTML = "";

    let found = false;

snapshot.forEach((docSnapshot) => {
        const task = docSnapshot.data();

      if (
        selectedFilter !== "All" &&
        task.status !== selectedFilter
      ) {
        return;
      }

      found = true;

      const taskCard = document.createElement("div");
      taskCard.style.border = "1px solid #ccc";
      taskCard.style.padding = "12px";
      taskCard.style.margin = "10px 0";

      const heading = document.createElement("h3");
      heading.textContent = task.taskName;

      const description = document.createElement("p");
      description.textContent = task.description;

      const details = document.createElement("p");
      details.textContent =
        `Priority: ${task.priority} | Status: ${task.status}`;

      const statusButton = document.createElement("button");
      statusButton.textContent =
        task.status === "Pending"
          ? "Mark Completed"
          : "Mark Pending";

      statusButton.addEventListener("click", async () => {
        const newStatus =
          task.status === "Pending" ? "Completed" : "Pending";

        try {
          await updateDoc(doc(db, "Tasks", docSnapshot.id), {
            status: newStatus
          });

          displayTasks();
        } catch (error) {
          console.error("Error updating task:", error);
          alert("Unable to update task.");
        }
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", async () => {
        if (!confirm("Are you sure you want to delete this task?")) {
          return;
        }

        try {
          await deleteDoc(doc(db, "Tasks", docSnapshot.id));
          displayTasks();
        } catch (error) {
          console.error("Error deleting task:", error);
          alert("Unable to delete task.");
        }
      });

      taskCard.append(
        heading,
        description,
        details,
        statusButton,
        deleteButton
      );

      taskList.appendChild(taskCard);
    });

    if (!found) {
      taskList.textContent = "No tasks found.";
    }

  } catch (error) {
    console.error("Error fetching tasks:", error);
    taskList.textContent = "Unable to load tasks.";
  }
}

// Filter tasks
filterInput.addEventListener("change", displayTasks);

// Load tasks when the page opens
displayTasks();
