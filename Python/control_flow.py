
# 1. Write a program that takes an array of days like "Mon", "Tue", and "Fri" 
# and uses a switch statement to print what type of delivery is scheduled on each day.

def delivery (days):
    for day in days:
        if day == "Mon":
            print("Door to door deliver")
        elif day == "Tue":
            print("In house delivery")
        elif day == "Fri":
            print("door delivery")
        else:
            print("no delivery due")       

delivery(["Mon","Tue","Fri"])     
# Create a program that loops through an array of book statuses and prints "Ready 
# to lend" if the status is "available" or "Checked out" if the status is "borrowed".

def bookStatus (statuses):
    for state in statuses:
        if state == "available":
            print("Ready to lend")
        elif state == "borrowed":
            print("checked out")    

bookStatus(["available","borrowed"])     

# // Write a program using a while loop that simulates a countdown of lives in a game starting
# //  from 5 and prints "You have X lives left" on each loop until it reaches 0.

def game_countdown ():
    count = 5
    while count >= 0:
        print(f"You have {count} lives left")
        count-=1
game_countdown() 

# // Using a do...while loop, write a program that loops through an array of user feedback and
# // prints each comment until the array is empty.

def user_feedback (feedbacks):
    while len(feedbacks) > 0:
        print(feedbacks.pop())

user_feedback(["I love coding","coding is fun","i like coding"])