     

      import React ,{useState}from  "react";
      
      function Operator(){
        const[a,b]=useState(0);
        function incNum(){
            b(a+1);
        }
        function decNum(){
            if(a>0){
                b(a-1);
            }else{
                alert("value is less than 0");
            }
           
        }
         return(
            <>
                <div className="main_div">
                    <div className="center_div">
                        <h1>{a}</h1>
                        <div className="btn_div">
                            <button onClick={incNum}>increment</button>
                            <button onClick={decNum}> decrement</button>
                            
                        </div>
                       
                    </div>
                </div>
            </>
         )
      }


      export default Operator;