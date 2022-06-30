# Project-4
Project Four - My Kitchen 

## Overview
My final project in the Software Engineering Immersive course is a solo full-stack project, the whole application was built and delivered in 7 days.

You will find the deployed app here: **[MyKitchen](https://mykitchenproject4.herokuapp.com/)**
To see the full features for MyKitchen, please feel free to login using the following credentials:

email: liuyuanmeng66@gmail.com
password: pass

## Technologies Used
Backend:
* Python
* Diango
* Diango REST Framework
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
Planning (day1)
I decided very quickly on the idea of building a restaurant app for my final project. It is the combination of my love for gastronomy and my love for programming. I used Excalidraw to plan my draft for the relationship between frontend and backend. 

 <img src="https://user-images.githubusercontent.com/100864042/175339847-aa9f8930-205c-4bc6-a116-bb367a1cd7f3.png" width="600">

<img src="https://user-images.githubusercontent.com/100864042/175339868-5bbc547b-22d3-44c5-ba53-65f388534cd9.png" width="600">)

I used QuickDBD to design all the table relationships for the database architecture.

<img src="https://user-images.githubusercontent.com/100864042/175521468-27bcd2c6-15d2-4137-9dba-080543d28269.png" width="600">)






## Demonstration of the App Flow 

https://user-images.githubusercontent.com/100864042/175494749-4e7f5927-c321-4164-a7ca-8c56b4ba4ff2.mov

## Functionality 

In My Kitchen restaurant application, users can:
* Register & Login to make a booking and view their booking history
* View all of the dishes on the menu
* Modify their booking
* Delete their booking

## Final Product - Screenshot Walkthrough

## Home Page 
On the home page there are three links that will take users to different pages.
<img src="https://user-images.githubusercontent.com/100864042/175341505-c2d1f7bd-e182-4df4-a10e-cc72f756af19.png" width="600">

<img src="https://user-images.githubusercontent.com/100864042/175341595-0aa3e07c-6d08-4dbd-a115-559095147451.png" width="600">


## Menu Page 
On the menu page I display name, price, image and types of the dishes.
<img src="https://user-images.githubusercontent.com/100864042/175341959-245b9e31-1374-4f4f-bb81-d4ac216e0e1f.png" width="600">
<img src="https://user-images.githubusercontent.com/100864042/175496753-4db1e47c-3b3a-4925-a53c-e138a00c3271.png" width="600">
 

## FindUs Page 
<img src="https://user-images.githubusercontent.com/100864042/175342152-448d09b0-f357-40f5-af9f-830e16d11367.png" width="600">


## Register Page
<img src="https://user-images.githubusercontent.com/100864042/175342219-f7293ff1-4870-4476-805e-de50628bf07d.png" width="600">

## Login Page
<img src="https://user-images.githubusercontent.com/100864042/175342320-d193055e-7e25-4b41-b7f7-19884082ba1c.png" width="600">




## Location Page
This page uses React bootstrap offcanvas and embeds Google Maps to provide user imformation regarding the address of the restaurants. 

<img src="https://user-images.githubusercontent.com/100864042/175342338-182b9fa4-164c-45ec-9b11-e71a7a28bce4.png" width="600">
<img src="https://user-images.githubusercontent.com/100864042/175342350-ce92a051-7288-4153-a6d2-b4f9f612d9ca.png" width="600">





## Story Page
On this page there is a video for which controls were added so that users can pause and play.

<img src="https://user-images.githubusercontent.com/100864042/175342362-090d2239-eaf0-4b77-a89d-fcd01e2a5b06.png" width="600">



## Booking Page 
This page uses a modal from react-bootstrap-modal to show the booking form. 
<img src="https://user-images.githubusercontent.com/100864042/175342408-8cc6cf3f-23f0-40cc-9c11-34cb16aad7d8.png" width="600">





## Individual Booking Page
Users can change or delete their bookings.

<img src="https://user-images.githubusercontent.com/100864042/175342455-5caa3e35-5c40-4a16-a032-6d88137e42af.png" width="600">





## Email confirmation is sent to customers after booking is made or changed

<img src="https://user-images.githubusercontent.com/100864042/175342726-185449c5-7a75-4a84-9f75-1bf24a89bfb4.png" width="600">
Featured Code - Post Method - post booking and send out email
 * we use this variable as we are going to reassign request.data['location']
 * we reformat the date using the datetime module
 * location name was sent but we need location id to store booking in the database
 * we do that by finding the location that has the location name we were sent and then we take its ID
 * we use the format method for templating
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




## Reflection
### Challenges 


### Key Learnings
* Using Python and Django for the first time
* Designing relationships on Back-End and control flow on Front-end
* Reaching before making an APP (understanding market standard)
* Time management


### Future Features
* Add a blog page to allow users to post their reviews and images about the restaurants.
* Add bookings with availability indicator.


