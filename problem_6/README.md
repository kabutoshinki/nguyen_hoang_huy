# Software Module Specification for API Service

## Overview

The goal is to create a backend service to manage and update a scoreboard for a website. The scoreboard will display the top 10 user scores and update live as users complete certain actions. The backend service will handle score updates and ensure security to prevent unauthorized score increases.

## Requirements

1. Scoreboard Display: Display the top 10 users with the highest scores.
2. Live Update: Provide real-time updates to the scoreboard as users complete actions.
3. Score Update: Increment the user’s score upon completing an action.
4. Security: Ensure that only authorized actions can increase user scores to prevent tampering.

## API Endpoints

1. GET /scores

   - Description: Retrieve the top 10 user scores.
   - Response

   ```bash
   [
    {
        "userId": "string",
        "username": "string",
        "score": "number"
    }
   ]
   ```

2. POST /score
   - Description: Update the user’s score upon completing an action.
   - Request:
   ```bash
   {
    "userId": "string",
    "actionToken": "string"
   }
   ```
   - Response:
   ```bash
    {
    "success": true,
    "newScore": "number"
    }
   ```

## Security Considerations

- Action Token Verification: Each action that updates a user’s score must include a unique actionToken which will be verified by the backend to ensure it is valid and not reused.
- Authentication: Ensure that the user is authenticated before allowing any score updates.
- Rate Limiting: Implement rate limiting to prevent users from spamming score updates.

## Implementation Details

1.  Database Schema:

    - Users Table:

    ```bash
    {
     CREATE TABLE users (
     userId VARCHAR PRIMARY KEY,
     username VARCHAR NOT NULL,
     score INT DEFAULT 0
     )
    }
    ```

    - Actions Table:

    ```bash
    {
      CREATE TABLE actions (
      actionToken VARCHAR PRIMARY KEY,
      userId VARCHAR,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (userId) REFERENCES users(userId)
      )
    }
    ```

2.  Score Update Logic: + Verify the actionToken against the actions table to ensure it is valid and not previously used. + If valid, increment the user's score in the users table. + Invalidate the used actionToken to prevent reuse.

3.  Live Update: + Use WebSockets to push real-time score updates to the frontend.

## Flow of Execution

1. User Completes Action:

   - User performs an action on the frontend.
   - The frontend sends a POST /score request with the userId and actionToken.

2. Backend Verifies and Updates Score:

   - The backend verifies the actionToken to ensure it is valid and not used.
   - If valid, the backend increments the user's score.
   - The backend responds with the new score.

3. Live Update:
   - The backend pushes the updated top 10 scores to the frontend via WebSockets.

## Diagram

![Diagram](https://github.com/kabutoshinki/nguyen_hoang_huy/blob/main/problem_6/images/diagram.png)

## Improvements

1. Action Logging: Log all actions and score updates for auditing and debugging purposes.
2. User Notification: Notify users when their scores are updated, either through email or in-app notifications.
3. Performance Optimization: Use caching for frequently accessed data, such as the top 10 scores, to reduce database load.
