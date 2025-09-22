#!/bin/bash
for (( count=10; count>0; count-- ))
do touch fichier$count
echo  fichier$count
done
