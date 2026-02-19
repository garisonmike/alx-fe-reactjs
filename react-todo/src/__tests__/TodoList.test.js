// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Add new todo");
    const addButton = screen.getByText("Add");

    // Simulate typing
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    // Check if new todo is rendered
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // Click to toggle
    fireEvent.click(todo);

    // Completed todos have line-through
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Build Todo App");
    const deleteButton = todo.nextSibling; // The Delete button next to todo

    fireEvent.click(deleteButton);

    // Todo should no longer be in the document
    expect(screen.queryByText("Build Todo App")).not.toBeInTheDocument();
  });
});
