## Description

This project leverages the official [Clash Royale API](https://developer.clashroyale.com/#/) to fetch game data using Python. The fetched JSON string is then manipulated dynamically within the Document Object Model (DOM) using JavaScript. By combining the power of Python for backend data retrieval and JavaScript for frontend manipulation, this project provides a seamless integration of data from the Clash Royale API into a dynamic web environment.

## Key Features

- Fetch game data from the official Clash Royale API using Python.
- Dynamically manipulate the DOM with JavaScript to display and interact with the fetched data.
- Seamless integration of backend data retrieval and frontend manipulation for a smooth user experience.

## About

This project is part of a blog post series discussing the integration of backend APIs with frontend web development. The upcoming blog post detailing this project will be published within the next couple of weeks. Stay tuned for more insights and technical discussions!

## How to Contribute?

Contributions are always welcome :)

1. #### Obtain a Clash Royale Developer API Key:

- Before running the Python script, you'll need to obtain an API key from the Clash Royale Developer Portal. Visit https://developer.clashroyale.com/#/ to sign up for an account. During the registration process, you'll be prompted to provide the IP address from which you'll be making API requests. Once registered, you'll receive your unique API key.

2. #### Create a my_key.txt File:

- After obtaining your API key, create a file named my_key.txt in the project directory. Paste your API key inside this file and save it.

<small>

```bash
git clone https://github.com/NipulM/cr-api-python-clientjs.git

cd cr-api-python-clientjs

touch my_key.txt

echo YOUR_API_KEY > my_key.txt
```

</small>

- Alternatively, you can manually create my_key.txt and paste your API key into it by opening your preferred text editor and creating a new file named my_key.txt in the project directory, then pasting your API key into the file and saving it.

3. #### Run the Python Script:

- Execute the module.py Python script. This script will use your API key to fetch data from the Clash Royale API and create a JSON file containing the response data. You can customize the script or use the JSON data as needed for your contributions.

4. #### Start Contributing:

- Now that you have the project set up and the necessary data fetched, you can start contributing! Whether it's improving existing functionality, fixing bugs, or adding new features, your contributions are valuable to the project.
