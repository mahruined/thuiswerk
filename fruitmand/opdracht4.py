from fruitmand import fruitmand
import random

hoeveelheid = int(input("Hoeveel"))

for aantal in range(hoeveelheid):
    fruit = random.choice(fruitmand)
    print(fruit["name"])