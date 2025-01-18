# Setting up a Virtual Environment 
- **NOTE: there are a few ways to set up a virtual environment. This is just one of them.**
- We are running our application on Django 5.1.5, which requires Python3.11.

- First, check that you have venv/env installed on your local machine by pulling up venv's help menu. Enter this into your terminal:

    ```
    python3.11 -m venv --help
    ```
- If you have venv installed, a manual full of commands and information should be printed in your terminal. 

- Locate to the directory where your project files are (which is where you want to use the virtual environment)
- To create the virtual environment with python3.11, enter this command and replace <directory> with what you want to call your virtual environment
    ```
    python3.11 -m venv <directory>
    ```

- Then activate it, depending on your OS, it could be different:

    ```Bash
    source venv/bin/activate # Linux, MacOS
    .\venv\Scripts\activate # Windows
    ```

- If there commands did not give any errors, then your virtual environment should be running in Python3.11. 
--> Notice The python commands in the rest of this manual are simply written with "python" because the default python version of your venv is 3.11.

- Some IDEs will indicate if you are running your code in a virtual environment, but you should check their documentation

- If you want other ways to check, here is a [Stackoverflow link](https://stackoverflow.com/a/1883251)

**NOTE: Do not push your virtual environment files to GitHub!!**
- If Git is trying to do this, add the name of your virtual environment directory/file to the '.gitignore' file if it is not already there. 


# Installing Dependencies

- Install the dependencies that are required to run our application:

    ```
    pip install -r requirements.txt
    ```
- a bunch of text will appear in your terminal. This is just showing the progress of your installations

### (Optional) create a superuser to to use the admin page for manual data entry:
- Creating a superuser is useful to check and edit the database for your Django site

    ```
    python manage.py createsuperuser
    ```

- Follow the instructions that appear in your terminal. 
--> Django will need you to provide a username, password, and email address to create a superuser
--> Honestly, IDK if you need to enter a valid email address

### Set up the Database
- The following commands will set up the database as configured in models.py (I think)
- When changes are made to the database schema, you should run these commands again.

- In your terminal, move to where manage.py is
--> for this project, go to /src/
- Run migrations and the server:

    ```
    python manage.py makemigrations
    ```

    ```
    python manage.py migrate
    ```
- if you do not recieve any errors, then your DB should be ready to use

# Run the Server Locally
- This command will get your Django project running locally (on your machine)
    ```
    python manage.py runserver
    ```

- By default, the application runs at port ```8000```.
- To open to the application in your browser

# API Documentation

- The API documentation is [here](/src/docs.yml) (this is chatGPT generated, I'm too tired for this).
