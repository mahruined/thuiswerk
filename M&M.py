import random

kleuren = ["Oranje", "Blauw", "Groen", "Bruin","Rood"]
hoeveelheid = int(input("Hoeveel M&m's? "))
kom = {}
for mms in range(4):
   value = random.randint(0,hoeveelheid)
   hoeveelheid -= value
   kleur = random.choice(kleuren)
   kleuren.remove(kleur)
   kom[kleur]= value
kom[kleur[0]] = hoeveelheid
print(f"Er zitten nu {kom}")






