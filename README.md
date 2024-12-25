# Flair

## Features

- Income-Spending tracking
- Loan Repayment
- Asset Building

---

## Prerequisites

To run this application, you need:

1. **Node.js** (comes with npm):

   - Download and install from [Node.js Official Website](https://nodejs.org/).
   - After installation, verify it by running the following commands in a terminal:
     ```bash
     node -v
     npm -v
     ```
     These commands should output the installed versions of Node.js and npm.

2. **A Code Editor** (optional but recommended):
   - [Visual Studio Code](https://code.visualstudio.com/) is a popular choice.

## How to Run the App

### Step 1: Download or Clone the Repository

1. Click the green "Code" button on the repository page.
2. Select "Download ZIP" and extract it to your desired folder.
   - Alternatively, use the Git command to clone the repository:
     ```bash
     git clone https://github.com/your-repo/wealth-tracker.git
     ```

### Step 2: Open the Project Folder

Navigate to the extracted or cloned folder using your terminal:

```bash
cd wealth-tracker
```

### Step 3: Install Dependencies

Install all required packages using npm:

```bash
npm install
```

This will download and set up everything the app needs to run.

### Step 4: Start the Application

Run the following command to start the app:

```bash
npm start
```

- Your default web browser will open automatically at `http://localhost:3000`.
- If it doesn't, manually open a browser and go to `http://localhost:3000`.

---

## Troubleshooting

### Issue: "Port 3000 is already in use"

- Run the app on a different port by using the following command:
  ```bash
  PORT=3001 npm start
  ```
  (For Windows, use `set PORT=3001 && npm start`.)

### Issue: Missing Dependencies

- If you accidentally delete `node_modules`, reinstall dependencies by running:
  ```bash
  npm install
  ```

---

# Flair
