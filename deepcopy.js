
        let source = {
            str:"text",
            num:10, 
            flag:true,
            arr:[1,2,3],
            date: new Date(2030,10,20),
            obj: {a:9, b:"txt"}
        };
        var result = deepCopy(source);

        function deepCopy(obj){
            var copy;

            if(obj === null || typeof obj !== "object")
             return obj;

            if(obj instanceof Date){
                copy = new Date();
                copy.setTime(obj.getTime());
                return copy;
            }
            
            if(obj instanceof Array){
                copy= [];
                for(let i=0; i<obj.length; i++){
                    copy[i]=deepCopy(obj[i]);
                }
                return copy;
            }
            

            if(obj instanceof Object){
                for(key in obj) {
                  //  console.log(key + " " + obj[key]);
                    copy[key] = deepCopy( obj[key] );
                }
            }
        }
        console.log(result);
        document.getElementsByClassName("result").innerHTML=result;
    
