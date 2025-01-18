# Setting up a Virtual Environment 
- We are running our application on Django 5.1.5, which requires Python3.11.
**NOTE: there are a few ways to set up a virtual environment. This is just one of them.**

Here are some other resources to help set up a virtual environment if the follow instructions do not work
- [Real Python](https://realpython.com/python-virtual-environments-a-primer/)
- [Python Docs](https://docs.python.org/3/library/venv.html)

#### The following commands shoudl work for MacOS and Linux. 
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
- If Git is trying to do this, add the name of your virtual environment directory/file to the '.gitignore' file. 


# Installing Dependencies

- Install the dependencies that are required to run our application:

    ```
    pip install -r requirements.txt
    ```
- a bunch of text will appear in your terminal. This is just showing the progress of your installations

## (Optional) create a superuser to to use the admin page for manual data entry:
- Creating a superuser is useful to check and edit the database for your Django site

    ```
    python manage.py createsuperuser
    ```

- Follow the instructions that appear in your terminal. 
--> Django will need you to provide a username, password, and email address to create a superuser
--> Honestly, IDK if you need to enter a valid email address

- To access the admin site, put the development server's url in your browser (more info below), and then add "/admin" to the end of it

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
- Set-up info will print in your terminal. 
--> To open the Django project in your web browser, look for the line: 
```
Starting development server at http://....
```
and copy and paste the URL/http link into your chosen browser. You can use your Django site in your web browser as long as you do not quite the server 

- As you use your Django application, status information will print in your terminal -- including error codes

# Quitting the Server
- To stop running your web server/Django application, follow the command from the set-up line that starts with:
```
Quit the server with...
```
- Most likely, the command is CTRL+C


# API Documentation

- The API documentation is [here](/src/docs.yml) (this is chatGPT generated, I'm too tired for this).
