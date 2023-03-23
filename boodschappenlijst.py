boodschappenlijst = []
doorgaan = True
while doorgaan:
    producten = input('wat wilt u kopen? ')
    hoeveelheid = input('hoeveel van product wilt u? ')
    done = input('bent u klaar? ').lower()
    boodschappenlijst.insert(0,f"{hoeveelheid} {producten} ")  
    if done == 'ja':
        doorgaan = False
    else:
        doorgaan = True 
    
    
list(map(print, boodschappenlijst))
print('___________________________________')

