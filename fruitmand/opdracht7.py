from fruitmand import fruitmand
for naam in range(len(fruitmand)):
    roundness = fruitmand[naam]["round"]
    if roundness == True:
        print(fruitmand[naam]["name"])