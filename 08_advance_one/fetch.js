/*
                        CORE JS
        
            1.call stack                2.heap memory
  ------------>      
  |    ------>
  |    |     |       |
  |    |     |fn call|  
  |    |     |Global |
  |    |     |_______|
  |    |
  |    |                 WEB API/node
  |    |      
  |    |       1.DOM API
  |    |       2.SetTimeout() ------------------->{Register a callback}
  |    |       3.SetInterval()                       |
  |    |       4.fetch()---|                         |
  |    |                   |                         |
  |    --------------[cb1,cb2]                       |
  |                 fetch queue                      |
  |--------------------------------------------[cb1,cb2]
                  EVENT LOOP                task queue


*/ 

/*                  
                    fetch()
             
        response=fetch('something',object(optional))
                        |
                        |
                        |
            ------------ ---------------
            |                           |
            |                           |
            data=empty                  web Browser/node
            onfulfilled[]               |
                 {yes} ,{404}           |
            onrejection[]              network request
                {no}                  yes   /    no
 cant be accessed directly

 onfulfilled[] mein value aa gayi toh voh response variable global execution vale ko bhejta hai
*/