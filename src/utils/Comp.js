import React from 'react'

const Comp = () => {
  return (
    <div>
      <h3>Debugging testing</h3>
      <h4>hello World</h4>

      {/* 

         (1)  When we write test case and test case get fail then the reason which is showing in terminal that is comes from 
           automatic debugging

         (2) prettyDOM() => if we want to see whole HTML file in console so we can use this. 

         (3) debug => it is also shows the HTML file in different manner 

         Note: if use normal console.log(container) then It shows HTML file which is not possible to understand so we can use prettyDOM or debug

         (4) DEBUG_PRINT_LIMIT=10000 npm test => There is limit in our terminal to show our code lines, so if we want to increase or want to 
            see more lines which higher than limit so we can use this.

            Default limit is 7000

          (5) logRules => this is show the HTML file with separate logs  

            */}
    </div>
  );
}

export default Comp