from fruitmand import fruitmand
from operator import itemgetter
fruitmand = sorted(fruitmand , key = itemgetter('name', 'weight'),reverse=True)
for fruit in fruitmand:
        print(fruit.get('name'),fruit.get('weight'))