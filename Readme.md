# Ansible Project: Node.js Application Deployment

This Ansible project is designed to automate the deployment of a Node.js application to a remote server. The playbook consists of two main parts: installing Node.js and npm on the server, and deploying the Node.js application along with its dependencies.



## Playbook Structure

### 1. Install Node.js and npm

This section of the playbook ensures that Node.js and npm are installed on the target server.

- **Host**: `13.38.117.239`
- **Tasks**:
  1. Update the apt repository and cache.
  2. Install Node.js and npm packages.

### 2. Deploy and Install Dependencies

This section handles the deployment of the Node.js application and its dependencies.

- **Host**: `13.38.117.239`
- **Tasks**:
  1. Copy the application artifact (`nodejs-app-1.0.0.tgz`) to the server.
  2. Extract the application package.
  3. Install the application's dependencies using npm.
  4. Run the application in detached mode.
  5. Wait for the application to start.
  6. Verify the application is running by checking the HTTP response.
  7. Debug and display the application response.
