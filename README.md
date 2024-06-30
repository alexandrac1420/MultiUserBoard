# Interactive Drawing Board

An interactive drawing board developed with React and Spring Boot that allows multiple users to draw on a shared board in real-time.
![Demo GIF](https://github.com/alexandrac1420/MultiUserBoard/blob/master/Dise%C3%B1o%20sin%20t%C3%ADtulo.gif)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to install the following tools and configure their dependencies:

1. **Java** (versions 7 or 8)
    ```sh
    java -version
    ```
    Should return something like:
    ```sh
    java version "1.8.0"
    Java(TM) SE Runtime Environment (build 1.8.0-b132)
    Java HotSpot(TM) 64-Bit Server VM (build 25.0-b70, mixed mode)
    ```

2. **Maven**
    - Download Maven from [here](http://maven.apache.org/download.html)
    - Follow the installation instructions [here](http://maven.apache.org/download.html#Installation)

    Verify the installation:
    ```sh
    mvn -version
    ```
    Should return something like:
    ```sh
    Apache Maven 3.2.5 (12a6b3acb947671f09b81f49094c53f426d8cea1; 2014-12-14T12:29:23-05:00)
    Maven home: /Users/dnielben/Applications/apache-maven-3.2.5
    Java version: 1.8.0, vendor: Oracle Corporation
    Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0.jdk/Contents/Home/jre
    Default locale: es_ES, platform encoding: UTF-8
    OS name: "mac os x", version: "10.10.1", arch: "x86_64", family: "mac"
    ```

3. **Git**
    - Install Git by following the instructions [here](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

    Verify the installation:
    ```sh
    git --version
    ```
    Should return something like:
    ```sh
    git version 2.2.1
    ```

4. **Node.js** and **npm**
    - Download Node.js from [here](https://nodejs.org/)
    - npm is included with Node.js

    Verify the installation:
    ```sh
    node -v
    ```
    Should return something like:
    ```sh
    v14.17.0
    ```

    ```sh
    npm -v
    ```
    Should return something like:
    ```sh
    6.14.13
    ```

### Installing

1. Clone the repository and navigate into the project directory:
    ```sh
    git clone https://github.com/alexandrac1420/MultiUserBoard

    cd MultiUserBoard
    ```

2. Build the Spring Boot backend:
    ```sh
    cd demo
    mvn package
    ```

    Should display output similar to:
    ```sh
    [INFO] Building jar: C:\Users\alexa\Downloads\MultiUserBoard\demo\target\demo-0.0.1-SNAPSHOT.jar        
    [INFO] The original artifact has been renamed to C:\Users\alexa\Downloads\MultiUserBoard\demo\target\demo-0.0.1-SNAPSHOT.jar.original
    [INFO] BUILD SUCCESS
    ```

3. Install the React frontend dependencies and build the project:
    ```sh
    cd ../frontboard
    npm install
    npm run build
    ```

### Running the Application

To run the backend and frontend, follow these steps:

1. **Run the Spring Boot backend:**
    ```sh
    cd demo
    mvn spring-boot:run
    ```

    The backend will start on `http://localhost:8080`, and it will store the drawing board's data (i.e., the points that are drawn).

2. **Run the React frontend:**
    ```sh
    cd frontboard
    npm start
    ```

    The frontend will start on `http://localhost:3000` and communicate with the backend to retrieve and update the drawing actions.

### Cross-Origin Resource Sharing (CORS)

To resolve Cross-Origin Resource Sharing (CORS) issues, the backend includes the `@CrossOrigin` annotation on the controller. This allows the frontend running on a different port (3000) to communicate with the backend on port 8080 without any CORS issues.

## How to maintain the result across requests

The interactive drawing board uses HTTP requests to maintain communication between the frontend and backend. Draw actions are sent to the server using POST requests, and the current state of the drawing board can be retrieved using GET requests.

## Architectural Design

![alt text](https://github.com/alexandrac1420/MultiUserBoard/assets/138069735/7df76c74-b996-4a63-8c59-ab8caaf9dc99)

The application architecture is divided into two main parts: the frontend developed with React and the backend developed with Spring Boot. Communication between these parts is done via HTTP requests, with Cross-Origin Resource Sharing (CORS) enabled to facilitate communication across different domains.

### Frontend: React
The frontend handles the user interface and allows users to draw on a shared board. It utilizes the following technologies and libraries:

- React: Primary library for building the user interface.
- p5.js: Library for creating graphics and animations.
- Axios: Library for making HTTP requests to the backend.

#### Frontend Project Structure
- **HTML:** Basic structure of the web application.
- **JavaScript (React):** Application logic and component management.
- **CSS:** Styling of the application.

The frontend communicates with the backend by sending and receiving data via HTTP requests using Axios.

### Backend: Spring Boot
The backend manages server-side logic, stores drawing action data, and handles communication with the frontend. It includes the following key components:

- Controller (DrawingBoardController): Receives and handles HTTP requests from the frontend.
- Model (DrawAction): Represents a drawing action, including action type, coordinates, and color.

#### Backend Project Structure
- **Controller (DrawingBoardController):**
  - `@GetMapping("/actions")`: Retrieves the list of drawing actions.
  - `@PostMapping("/actions")`: Adds a new drawing action.
  - `@PostMapping("/clear")`: Clears all drawing actions.

- **Model (DrawAction):** Defines the structure of a drawing action.

The backend is configured to allow CORS requests from any origin, facilitating communication with the frontend.

### Communication Between Frontend and Backend
- **HTTP:** The frontend sends HTTP requests to the backend to send drawing actions and receive the current state of the board.
- **CORS:** Enabled on the backend to allow communication with the frontend from any origin.


## Built With

* [Maven](https://maven.apache.org/) - Dependency Management for backend
* [npm](https://www.npmjs.com/) - Dependency Management for frontend
* [Spring Boot](https://spring.io/projects/spring-boot) - Backend framework
* [React](https://reactjs.org/) - Frontend framework
* [Git](http://git-scm.com/) - Version Control System

## Versioning

I use [GitHub](https://github.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/alexandrac1420/MultiUserBoard).

## Authors

* **Alexandra Cortes Tovar** - [alexandrac1420](https://github.com/alexandrac1420)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
