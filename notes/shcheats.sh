#bash cheats 

#search and open/jump a file in vscode 
code $(find . -type f -name "filename.ext")   #single file 
code $(find . -type f -name "*filename*.ext") #multiple files 


#jump to a file or folder within nested folders 
cd ftl<Tab>/ftl<Tab>/ftl<Tab> #where ftl 👉 first three letters (of folder-name)
#or 
cd path/to/your/file/location


#jump back to parent folder from child folder e.g parent/x/y/z
cd ~/parent 
#or 
cd ../..


#jump back to previous folder 
cd - 


#create multiple files within multiple folders at once 
for f in file1 file2 file3 file4; do 
    cp "$f" folder1
    cp "$f" folder2
done 

