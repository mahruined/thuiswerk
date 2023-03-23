def function():
    naam = input('wat is je naam ').capitalize()
    leeftijd = int(input('wat is je leeftijd '))
    return {"naam":naam, "leeftijd":leeftijd}

personen = []
invoeren = True
while invoeren:
    persoon = function()
    personen.append(persoon)
    invoer = input("wil je nog een naam invoeren ").lower()
    if invoer in ("nee","n","no"):
        invoeren = False

for mensen in personen:
    print(mensen ["naam"], "is", mensen ["leeftijd"], "jaar")

