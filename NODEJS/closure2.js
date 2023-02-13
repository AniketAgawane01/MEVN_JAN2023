function outerscope(){
    const result=[];
    function innerScope(){
        for (let i=0;i<5;i++){
            //This is storing execution of inner funcion
            result[i]=function inner(x){
                //additional enclosing context
                return function(){
                    console.log(x);
                };
            }(i);
        }
    }
    innerScope();
    for(let i=0;i<5;i++){
        result[i]();
    }

    
}
outerscope();