# Overall
This project is to create a simple weather app. It shows temperature, weather, wind speed, humidity, sunrise and sunset times,map and real-time temperature changes.

Here is the overall picture
<img src="./weather-client-copy/src/assets/readmepicture/1.jpeg">  


# Environment:
### language
   vue.js  
   flask(Framework of python)
### required package 
+ **Back-end**  
    Flask and related libraries：  
        Flask is a micro-framework for building web applications.jsonify is a function provided by Flask for converting Python objects into JSON format.request is an object provided by Flask for handling HTTP requests.
flask_cors is an extension for handling Cross-Origin Resource Sharing (CORS), which allows cross-origin requests in Flask applications.
requests is a library for sending HTTP requests, used by the OpenWeatherMap API to send requests.  

       pip install flask  
       pip install flask-cors        
       pip install requests
      

+ **Front-end**  
     
Written using Vue.js and Vuetify framework, so you need to install the corresponding dependency packages
   
     npm install vue vuetify
         
Material Design icon dependency package

     
     npm install @mdi/font
     
     
Dependency packages for drawing charts

    
    npm install vue-chartjs
     

# Purpose
## Type of Software Development Process
      Agile Software 
## Reason

 Agile methodologies offer several benefits that align well with the requirements and challenges of developing a weather forecast software.
- Flexibility and Adaptability:  
  Agile methodologies emphasize flexibility and adaptability. In weather forecasting, new data and information constantly emerge, making it essential to respond quickly to changes. Agile allows for iterative development and frequent feedback loops, enabling the software to adapt and incorporate new data sources or models as they become available.
- Incremental Development:  
   Agile promotes incremental development, where software features are developed in short iterations. This approach allows for early delivery of working software and enables the weather forecast software to evolve gradually. It allows meteorologists and forecasters to start using and benefiting from the software sooner, even if it is not yet fully complete.
- Rapid Feedback and Validation:  
   Agile methodologies emphasize regular feedback from users, stakeholders, and subject matter experts. For a weather forecast software, this means that meteorologists and forecasters can provide input and validate the accuracy and relevance of the predictions during the development process. This feedback loop enables the software to be refined and improved continuously, enhancing its performance and reliability.
 - Risk Mitigation:  
    Weather forecasting involves inherent uncertainties and risks. Agile methodologies promote risk mitigation through regular testing and validation. By continuously testing and validating the software against historical data or real-time observations, potential issues or inaccuracies can be identified early on, allowing for timely adjustments and improvements.
 - Time-to-Market Advantage:  
   Agile methodologies can provide a competitive advantage in terms of time-to-market. Weather forecast software developed using agile practices can be released in incremental stages, allowing users to benefit from early functionality while additional features are being developed. This can be particularly valuable in a field where accurate and up-to-date weather forecasts are critical for various industries and decision-making processes.

 In summary, adopting agile software development for a weather forecast software offers flexibility, adaptability, and rapid feedback loops. These benefits enable the software to evolve, incorporate new data sources, and provide accurate and timely predictions, ultimately enhancing the user experience and supporting informed decision-making in various sectors reliant on weather forecasts.

## Usage of Software:  
### Individual Users:

- Everyday users who want to quickly check the current weather conditions, temperature, wind speed, humidity, sunrise and sunset times, and real-time temperature changes in their location or any other city.

- Users who enjoy outdoor activities and want to know if the weather is suitable for traveling, jogging, or other outdoor sports.

- Users who prefer to view weather information in different temperature units (e.g., Celsius, Fahrenheit) and switch between them as needed.

- Users who want to see visually appealing background images that change based on the time of day (morning, night) in a particular location.

### Travelers and Tourists:

- Travelers planning their trips who need to check the weather forecast for their destination city or cities along their route.
- Tourists exploring new cities who want to quickly find out the weather conditions and decide on their activities for the day.

### Outdoor Enthusiasts:
- Outdoor enthusiasts such as hikers, cyclists, and runners who rely on accurate weather information to plan their outdoor adventures.

- Individuals who enjoy outdoor events and want to ensure the weather is suitable before attending.

### Students and Professionals:
- Students and professionals who may need weather information for academic or work-related purposes, such as research, presentations, or planning outdoor events.

### Local Businesses:

- Local businesses in the hospitality industry, such as restaurants, cafes, and hotels, who can use the app to provide weather-related recommendations to their customers.

- Businesses hosting outdoor events or activities who want to ensure the weather conditions are favorable for their planned activities.

Overall, the target market for the weather app is individuals and small-scale businesses who require quick and easy access to weather information for their daily activities and planning purposes. The app caters to a broad range of users with varying needs related to weather forecasting and outdoor planning.
  
# Software Development plan
 ### Development Process/Status (sample only)
 #### Phase 1: Project Initiation and Planning
 ##### Requirement Gathering and Analysis:
 - Meet with stakeholders to understand the project requirements and user needs.
 - Document features and functionalities based on the provided description.
 - Identify key components such as weather display, search functionality, unit switcher, real-time temperature changes, background image display, and outing tips.
 
 ##### UI/UX Design Planning:
 - Create wireframes and mockups to visualize the user interface and interactions.
 - Design user flows for seamless navigation and user experience.
 - Incorporate design elements for displaying weather information, map integration, and real-time updates.
 
 #### Phase 2: Development Setup and Infrastructure
 ##### Environment Setup:
 - Set up development environments for both client-side (Vue.js) and server-side (Flask) development.
 - Configure tools and dependencies including Vue.js, Flask, and necessary plugins.
 
 ##### Backend Configuration:
 - Develop Flask backend to handle API requests for weather data retrieval and other functionalities.
 - Implement necessary routes and endpoints for data fetching and processing.
 
 #### Phase 3: Client-side Development
 ##### UI Component Implementation:
 - Develop Vue.js components for weather display, search bar, unit switcher, real-time temperature changes, background image display, and outing tips.
 - Implement responsive design for various screen sizes and devices.
 
 ##### Integration with Weather API:
 - Integrate with a weather API (e.g., OpenWeatherMap) to fetch weather data based on user input.
 - Display temperature, weather conditions, wind speed, humidity, sunrise and sunset times, and other relevant information.
 
 #### Phase 4: Server-side Development
 ##### API Endpoint Development:
 - Develop RESTful API endpoints using Flask for weather data retrieval and other functionalities.
 - Implement error handling and validation for API requests.
 
 #### Phase 5: Testing and Quality Assurance
 ##### Unit Testing:
 - Write unit tests for both client-side and server-side code to ensure functionality and reliability.
 - Test API endpoints, UI components, and user interactions.
 
 ##### Integration Testing:
 - Perform integration tests to verify the interaction between frontend and backend systems.
 - Test data retrieval and display accuracy.
 
 #### Phase 6: Deployment and Launch
 ##### Deployment Planning:
 - Choose a suitable hosting provider for deploying the Weather App.
 - Set up deployment pipelines and automate deployment processes using tools like Docker and CI/CD pipelines.
 
 ##### Deployment Execution:
 - Deploy the frontend (Vue.js) and backend (Flask) components to the selected hosting environment.
 - Configure domain settings and SSL certificates for secure access.
 - Perform final testing in the production environment to ensure everything is working as expected.

#### Phase 7: Post-Launch Support and Maintenance
##### Monitoring and Performance Optimization:
- Set up monitoring tools to track app performance, server health, and user interactions.
- Monitor error logs and performance metrics to identify and resolve issues promptly.
##### Continuous Improvement:
- Gather user feedback and analytics data to identify areas for improvement.
- Plan and prioritize future enhancements and feature updates based on user feedback and market trends
### Members
1. Ray (P2111671) -- Backend development
2. Angela (P2204782) -- Frontend development
3. Vikey (P2211317) -- UI Design
4. Josh (P2204750) -- Documentation
5. William (P2204954) -- Documentation
      
 ### Schedule
 #### Project Initiation and Planning:
 - Duration: 2 weeks
 #### Development Setup and Infrastructure:
 - Duration: 1 week
 #### Client-side Development:
 - Duration: 4 weeks
 #### Server-side Development:
 - Duration: 2 weeks
 #### Testing and Quality Assurance:
 - Duration: 2 weeks
 #### Deployment and Launch:
 - Duration: 1 week
 #### Post-Launch Support and Maintenance:
 Ongoing
   
 ### Algorithm   
 
 ### Current status 
 + **Descriptions**    
 When you enter the site ，the screen can automatically display weather conditions such as temperature, wind speed, humidity, sunrise, and a map of your location as long as you authorize it.And the site allows you to search for weather conditions by typing place names into the search box. To view the advice for going out, you can also click the "Check Suitability" button. It will show what to do about the weather today and whether it is suitable to do some outdoor sports. Additionally, you can click on the temperature unit to implement different units of temperature switch. Furthermore, different background images can be displayed depending on the sunrise and sunset of the location. Lastly, you can click the Detail row to reveal the temperature trend chart, which displays changes in temperature in real time. When you click a point on the axis, details of the temperature are displayed.

 
+ **use1**
  Enter the city name in the search bar and click the check weather button  <img src="./weather-client-copy/src/assets/readmepicture/2.jpg">  
  
+ **use2**
  Switch to other units for temperature  
  <img src="./weather-client-copy/src/assets/readmepicture/3.jpg">    
  
+ **use3**
  Click on the red circle location to show real-time temperature changes.
    If you don't want it, click again to close it.
    <img src="./weather-client-copy/src/assets/readmepicture/4.jpg">
  
+ **use4**
Depending on the day of the city in the morning and night, different weather background pictures are displayed:
<img src="./weather-client-copy/src/assets/readmepicture/5.png">
<img src="./weather-client-copy/src/assets/readmepicture/6.jpg"> 

+ **use5**
You can also click the "check suitability" button to view outing tips, which will spnghow whether today is suitable for traveling, jogging, etc.
<img src="./weather-client-copy/src/assets/readmepicture/7.png">
<img src="./weather-client-copy/src/assets/readmepicture/8.png"> 

### Future plan
 Here are some ideas for the future plan of software 
1. User Personalization Settings: In addition to the default display of weather units and interface themes, the personalization settings can be further expanded. For example, allowing users to select the weather metrics they want to focus on, such as precipitation, wind speed, humidity, etc., and highlighting them in the forecast results. Furthermore, implementing the ability to save and remove favorite cities means that users can add their most loved or frequently monitored cities to a favorites list for quick access to the weather forecasts of those cities. Users can add cities to their favorites by clicking on a 'Favorite' button on the search results or specific city's weather page.
2. Add map function：

   (1) Adding Distance and Transportation Mode Feature:Enhance the practicality of the software by utilizing the location information and user's search data. Display the distance between two locations in the weather forecast results and provide options for different transportation modes such as walking, driving, and public transportation.

   (2) Calorie Consumption Calculation Feature:For users who choose the walking transportation mode, the software can calculate the calories burned during the walk based on the distance and user's height, weight, etc. This can help users understand their physical activity level and provide additional fitness and health management functionality.
  
   (3) Integrating Map Navigation Feature:Combine weather forecast and map data to provide real-time navigation for users. Users can directly view weather conditions within the software and utilize the map navigation feature to find the optimal route. This will enable users to better plan their trips, avoiding traffic congestion or other unfavorable factors during inclement weather conditions.

3. Multi-language Support: In addition to adding multi-language support, further provide localized weather information and cultural features. Based on the user's location or selected language, offer weather data, weather phenomenon descriptions, traditional customs, and other information relevant to the local area. This will increase the user's sense of familiarity and convenience with the weather forecast, providing a more personalized service experience.

4. Weather Alerts and Push Notifications: Allow users to set weather alerts and push notifications to receive alerts or reminders for specific weather conditions. For example, when weather conditions are not suitable for outdoor activities or when there are extreme weather warnings, users can receive instant notifications to take appropriate actions.

# URL



  
