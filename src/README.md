### Running the application

- First, create a virtual environment to install dependencies:

    ```
    virtualenv venv
    ```

- Then activate it, depending on your OS, it could be different:

    ```Bash
    source venv/bin/activate # Linux, MacOS
    .\venv\Scripts\activate # Windows
    ```

- (Optional) create a superuser to to use the admin page for manual data entry:

    ```
    python manage.py createsuperuser
    ```

- Run migrations and the server:

    ```
    python manage.py makemigrations
    ```

    ```
    python manage.py migrate
    ```

    ```
    python manage.py runserver
    ```

    - By default, the application is expose at port ```8000```.

- The API documentation is [here](/src/docs.yml) (this is chatGPT generated, I'm too tired for this).
