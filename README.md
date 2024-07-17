# Code Challenge

## Overview

This repository contains solutions to the code challenge problems provided by 99Tech Team. Each problem is addressed in a separate section below, with a brief introduction and a link to the detailed solution.

## Table of Contents

1. [Problem 4: Three ways to sum to n](#problem-4-three-ways-to-sum-to-n)
2. [Problem: CRUD Backend Server](#problem-crud-backend-server)
3. [Problem: Software Module Specification](#problem-software-module-specification)

---

## Problem 4: Three ways to sum to n

### Task

Provide three unique implementations of the function that calculates the summation of numbers from 1 to `n` in TypeScript. Each implementation should be commented on regarding its complexity or efficiency.

### Solution

The solutions are provided in three separate functions:

1. **Function A**: Uses a loop to sum the numbers.
2. **Function B**: Utilizes the formula for the sum of an arithmetic series.
3. **Function C**: Implements a recursive approach to calculate the sum.

Detailed implementations and explanations can be found in the [problem_4](./problem_4) directory.

---

## Problem: CRUD Backend Server

### Task

Develop a backend server with ExpressJS using TypeScript. The server should provide a set of CRUD operations to interact with a resource, connecting to a database for data persistence.

### Interface Functionalities

1. Create a resource.
2. List resources with basic filters.
3. Get details of a resource.
4. Update resource details.
5. Delete a resource.

### Solution

The solution includes setting up the server, connecting to a PostgreSQL database using Prisma, and implementing the required CRUD operations. Instructions for running the application are provided in the `README.md` file within the [crud-server](./problem_5/crud-server) directory.

---

## Problem: Software Module Specification

### Task

Write the specification for a software module on the API service (backend application server). This includes creating documentation, a flow diagram, and additional comments for improvement.

### Requirements

1. We have a website with a scoreboard showing the top 10 user scores.
2. We want live updates of the scoreboard.
3. Users can perform actions that increase their scores.
4. Upon completing an action, an API call is made to update the score.
5. Prevent unauthorized score increases.

### Solution

The solution involves writing comprehensive documentation for the module, including a flow diagram to illustrate the execution flow. This is intended to be implemented by a backend engineering team.

Detailed documentation and diagrams can be found in the [module_specification](./problem_6) directory.

---
