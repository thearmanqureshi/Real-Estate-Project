# Real Estate Price Prediction: Bangalore House Dataset

## Overview
This project aims to predict house prices in Bangalore using the Bangalore House Dataset. The dataset includes information about various features of houses such as size, number of bedrooms (BHK), and number of bathrooms. The goal is to build a machine learning model that can accurately predict the price of a house based on these features.

## Dataset
The dataset used for this project includes the following columns:
- **Size**: The size of the house in square feet.
- **BHK**: Number of bedrooms (BHK - Bedroom, Hall, Kitchen).
- **Bathroom**: Number of bathrooms.
  
### Target Variable
- **Price**: The price of the house in Indian Rupees (INR).

## Project Structure
This repository contains the following directories:
- **[real_estate_price_prediction](./real_estate_price_prediction)**: Complete project code and files.
- **[model](./Bangluru_house_prices_model.pickle)**: Contains saved machine learning models.
- **HTML, CSS, and JavaScript files** for the client-side web interface.
- **[server](./app.py)**: Python files for the Flask server.
- **[template](./template)**: it contain the html files of the project that are used in the website.
- **[static](./static)**: It contain the css and js file and images folder.
- **[requirements](./requirements.txt)**: it contain the versions and libraries that are used in this project.
  

## Usage
1. **Setting Up the Environment**:
   - Ensure you have Python installed on your machine.
   - Install the required Python packages listed in `requirements.txt`:
     ```bash
     pip install -r requirements.txt
     ```

2. **Running the Flask Server**:
   - Navigate to the `server` directory:
     ```bash
     cd real_estate_price_prediction_project
     ```
   - Run the Flask server:
     ```bash
     python main.py
     ```
   - The server will start running locally at `http://localhost`.

3. **Accessing the Web Interface**:
   - Open your web browser and go to `http://localhost`.
   - You can now interact with the web interface to predict house prices.

## Models
This project includes  machine learning models for predicting house prices. 

## Contact Information
For any inquiries or feedback regarding this project, please feel free to contact:
### Ansh Arora
- Email: ansharora.cs@gmail.com
- LinkedIn: [Connect with me on LinkedIn](https://www.linkedin.com/in/ansh-arora-data-scientist)
- Kaggle: [Follow me on Kaggle](https://www.kaggle.com/ansh1529)

### Arman Qureshi
- Email: thearmanqureshi@gmail.com
- LinkedIn: [Connect with me on LinkedIn](https://www.linkedin.com/in/thearmanqureshi/)
- Github: [Follow me on Github](https://github.com/thearmanqureshi)

## Contibuters
### Ansh Arora
  Created a prediction model using "Bangalore house dataset" performed data cleaning, EDA and others functions to build a accurate prediction model.
  used a python Flask Server to deploy model gateway, so it can be used in Website UI.
### Arman Qureshi
  Developed a "Website UI" for accessing the "real_estate_price_prediction" model and can be viewed by anyone. he deployed the model on
  the website, users can try prediction on it.  

---

**Disclaimer**: This project is for educational purposes and should not be used for real-world applications without proper validation and testing. The developers are not liable for any misuse or misinterpretation of the results.

---

Feel free to customize this README file further to include additional information or details specific to your project.
