from fruitmand import fruitmand
watermeloen = {'name' : 'watermeloen',
'weight' : 2000,
'color' : 'green',
'round' : True}
fruitmand.append(watermeloen)
for naam in range(len(fruitmand)):
    print(fruitmand[naam]["weight"])