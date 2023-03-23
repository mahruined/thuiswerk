def fibonacci(aantal):
    fibonacci_list = [0,1]
    while len(fibonacci_list) < aantal:
        volgend_getal = fibonacci_list[-2] + fibonacci_list[-1]
        fibonacci_list.append(volgend_getal)

    return fibonacci_list
aantal = int(input('hoe groot moet de sequence zijn? '))
uitslag = fibonacci(aantal)
print(uitslag)
y = uitslag[-2]
x = uitslag[-1]
ratio= (x + y) / x
print(ratio)
