
#search and open/jump a file in vscode 
code $(find . -type f -name "filename.ext")   #single file 
code $(find . -type f -name "*filename*.ext") #multiple files 


#jump to a file or folder within nested folders 
cd ftl<Tab>/ftl<Tab>/ftl<Tab> #where ftl 👉 first three letters (of folder-name)
#or 
cd path/to/your/file/location
