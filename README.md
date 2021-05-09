######### How to install #########

 To install this application, you must perform the following step:
1. Download it from this repository.
2. Run the command line and go to the  application folder.
3.Enter the command "npm install" or "npm i" and wait the dependency 
   installation process to complete.
    
4. The application is ready to go!

######### How to use #########

After  installation completed to start the  application, in the folder with the application,
enter the following into the command line " node app.js [OPTIONS]", where options  are 
command line parameters that  determine  the  operation of the  application ( sort alias and full name):

* -s, --shift: a shift
* -i, --input: an input file 
* -o, --output: an output file 
* -a, --action: an action "encode" or "decode"

The **action** option can take the  values of **encode** and **decode** and indicates what
needs  to be done  with the incoming text: **encrypt** or **decrypt**.


The **shift** option must be an integer. It denotes a **shift** of letters for 
encryption and decryption.

The **action**  and  **shift** options are **mandatory**: if one of them absent, there will be an 
**error**. The **input** and **output** options must be relative or absolute path to file or
even filename if file is  in application root folder (**input**  is the path to the file from
which the  text is read; **output** is the path to the file where the text will be  written ).

If the file on any of the paths **doesn't exist** or the path  is **incorrect**, there will be an **error**.

If the **input** and/or **output** options are absent, then **reading** and/or **writing **
will be carried out from/to the **command line**. To **interrupt** the  process, in this 
case ,press **Crtl+C**.



######### Example of usage #########


#####Encryption with shorthand name  of the options:

   ###ENCODE file:
node app.js -a encode -s -1 -i "./input.txt" -o "./output.txt"

###DECODE file:
node app.js -a decode -s -1 -i "./input.txt" -o "./output.txt"

###ENCODE input from console:
node app.js -a encode -s -1 

###DECODE from console:
node app.js -a decode -s -1 


