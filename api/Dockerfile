# Use an official Python runtime as the base image
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application's files into the container
COPY . .

# Specify the command to run the application
# NOTE: omitted the --reload flag, but should be added for development
# I do not yet know how to make it have effect when devoloping in Container
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
