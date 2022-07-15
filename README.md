# Project-4
Project Four - My Kitchen 

## Overview
My final project in the Software Engineering Immersive course is a solo full-stack project, the whole application was built and delivered in 7 days.

You will find the deployed app here: **[MyKitchen](https://mykitchenproject4.herokuapp.com/)**
To see the full features for MyKitchen, please feel free to log in using the following credentials:

email: liuyuanmeng66@gmail.com
password: pass

## Brief 
* Build a full-stack application by making your own backend and your own front-end

* Use a Python Django API using Django REST Framework to serve your data from a Postgres database

* Consume your API with a separate front-end built with React

* Be a complete product which most likely means multiple relationships and CRUD functionality

* Implement thoughtful use stories/wireframes that are significant enough to help you know which features are core and which you can cut out

* Be deployed online so it's publicly accessible.



## Technologies Used
Backend:
* Python
* Django
* Django REST Framework
* Psycopg2
* pyJWT
* Django emails

Frontend:
* React
* Axios
* Scss
* React Bootstrap
* chakra-ui

## Planning:
* Excalidraw 
* QuickDBD

## Approach Taken
* Planning 


I decided very quickly on the idea of building a restaurant app for my final project. It is the combination of my love for gastronomy and my love for programming. I used Excalidraw to plan my draft for the relationship between frontend and backend. 

 <img src="https://user-images.githubusercontent.com/100864042/175339847-aa9f8930-205c-4bc6-a116-bb367a1cd7f3.png" width="600">

<img src="https://user-images.githubusercontent.com/100864042/175339868-5bbc547b-22d3-44c5-ba53-65f388534cd9.png" width="600">)


* I used QuickDBD to design all the table relationships for the database architecture. By mapping out the different relationships, it made it relatively clear how I should build out my back-end and where I needed to establish relationships between PostgreSQL tables.


<img src="https://user-images.githubusercontent.com/100864042/175521468-27bcd2c6-15d2-4137-9dba-080543d28269.png" width="600">)


## Demonstration of the App Flow 

https://user-images.githubusercontent.com/100864042/175494749-4e7f5927-c321-4164-a7ca-8c56b4ba4ff2.mov

## Functionality 

I decided to build an app that was simple but functioned well. I knew that my biggest challenge would be the back-end so decided to keep this as simple as possible to allow myself time to work on the backend. For this project, the key task I want to achieve is that users will receive a confirmation email after booking by using Django email.

In the MyKitchen restaurant application, users can:
* Register & Log in to make a booking and view their booking history
* View all of the dishes on the menu
* Modify their booking
* Delete their booking


##  Code

Once the ERD using QuickDBD was drafted out, I worked to build out the different models, views, and serializers using Django and Python.
Models
* Dishes
* Locations
* Foodtypes
* Bookings
* Jwt-auth




## Back-End code example

 Post Method - making a booking and sending out a confirmation email

 *  We create a location_name variable as we are going to reassign requests.data['location']
 *  We reformat the date using the datetime module
 *  Location name was sent but we need location id to store the booking in the database
 *  We do that by finding the location that has the location name we were sent and then we take its ID
 *  We use the format method for templating
 
 
``` def post(self, request):
        request.data['owner'] = request.user.id
       
        location_name = request.data['location'] 
       
        date_formatted = datetime.strptime(request.data['Date'], '%Y-%m-%d').strftime('%A %d. %B %Y')
        
        request.data['location'] = Location.objects.get(name=request.data['location']).id
        print('request ->', request.data)
        booking_to_add = BookingSerializer(data=request.data)
        try:
            booking_to_add.is_valid(True)
            booking_to_add.save()
            to_email = request.data['email']
            mail_subject = 'My Kitchen - Booking Confirmation'
          
            mail_message = 'We will see you on {date} at {time} at our {location} restaurant! \n\nKind regards, \nDaisy'.format(date=date_formatted, time=request.data['time'], location=location_name)
            send_mail(subject=mail_subject, message=mail_message, from_email=settings.EMAIL_HOST_USER, recipient_list=[to_email], auth_user=settings.EMAIL_HOST_USER, auth_password=settings.EMAIL_HOST_PASSWORD)
            return Response({'message': f"Thank you for booking, {request.data['name']}"}, status.HTTP_201_CREATED)
        except ValidationError:
            return Response(booking_to_add.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
        except Exception as e:
            print(e)
            return Response({'detail': str(e)}, status.HTTP_422_UNPROCESSABLE_ENTITY)
            
          
```

##  Front-End code example

Code for Authentication  
In the auth.js file which creates a payload from the token from local storage by using the split() method to get the middle component of the JWT. The userIsAuthenticated() function uses the payload to check that the user is still logged in - i.e. that the payload hasn't expired .


```export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('project-4')
}

export const getPayload = () => {
  const token = getTokenFromLocalStorage()
  
  if (!token) return

  const payload = token.split('.')[1]
  
  // console.log(JSON.parse(atob(payload)))
  return JSON.parse(atob(payload))
}

// ? function that checks that user is authenticated
export const userIsAuthenticated = () => {
 
  const payload = getPayload()

  if (!payload) return false
 
  const currentTime = Math.floor(Date.now() / 1000)


  return currentTime < payload.exp
}
```






## Reflection
### Challenges 


### Key Learnings
* Using Python and Django for the first time
* Designing relationships on Back-End and control flow on Front-end
* Researching before making an app (understanding market standards)
* Time management


### Future Features
*  Add a blog page to allow users to post their reviews and images about the restaurants.
*  Add bookings with availability indicator.


