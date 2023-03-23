# Function to add two numbers
def add(x, y):
    return x + y

# Function to subtract two numbers
def subtract(x, y):
    return x - y

# Function to multiply two numbers
def multiply(x, y):
    return x * y

# Function to divide two numbers
def divide(x, y):
    return x / y

# Function to increment a number
def increment(x):
    return x + 1

# Function to double a number
def double(x):
    return x * 2

# Function to halve a number
def halve(x):
    return x / 2

# Function to decrement a number
def decrement(x):
    return x - 1

# Main function
def main():
    # Initialize result to user's input
    result = float(input("Enter the initial value for result: "))

    # Loop until user chooses to stop
    while True:
        print("Current result:", result)
        print("Select operation:")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Increment")
        print("6. Double")
        print("7. Halve")
        print("8. Decrement")
        print("9. Stop")

        # Take user input
        choice = input("Enter choice (1-9): ")

        if choice == '9':
            print("Final result:", result)
            break

        if choice in ('1', '2', '3', '4'):
            num = float(input("Enter a number: "))
            if choice == '1':
                result = add(result, num)
            elif choice == '2':
                result = subtract(result, num)
            elif choice == '3':
                result = multiply(result, num)
            elif choice == '4':
                result = divide(result, num)
        elif choice == '5':
            result = increment(result)
        elif choice == '6':
            result = double(result)
        elif choice == '7':
            result = halve(result)
        elif choice == '8':
            result = decrement(result)
        else:
            print("Invalid input")
            continue

        print("Result:", result)

# Call the main function
main()