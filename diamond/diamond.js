function diamond(number) {
    line='';
    //up
    for(i=1;i<=number;i++) {
        for(j=1;j<=i;j++) {
            line+=' '+j;
    }
        line+='<br>';
    }
    for(i=number-1;i>=1;i--) {
        for(j=1;j<=i;j++) {
            line+=' '+j;
    }
		line+='<br>';
    }
    document.getElementById('result').innerHTML=line;
    } 