# MongoDB-Database-Application-project<br>
## our DB is employee:has 3 collections <br> 
* emp for employee(id,name,deptnum)<br>
* department (deptnum,deptname,location)<br>
* location(locationno,locationname)<br>
## Videoes Helped me <br>
_TO  POST DOCUMENT_<br>
https://www.youtube.com/watch?v=bJkRnvIT5jQ<br>
_TO DELETE DOCUMENT_<br>
https://www.youtube.com/watch?v=DPHn_qs44QM<br>
_TO PATCH DOCUMENT_<br>
https://www.youtube.com/watch?v=8wxLA_hTuSA<br>
_To help me on validation_<br>
https://www.mongodb.com/docs/v7.0/core/schema-validation/<br>
_This video explain how can we insert field into collection using mongo compass_<br>
https://www.youtube.com/watch?v=bJSj1a84I20<br>
we created empdata. Json to insert documents , then we imported it from mongodb compass(click om import then chose json file)<br><br>
To Export Jscon File from Visual Studio, I have 3 json files departmentdata,empdta,locationdata
1- open MongoDB compass chose your collection then press import Data then press JSON , import file , chose your JSON file<br>

![alt text](./image/image.png)

<br>
2-chose import, then chose your file <br>

![alt text](./image/import.png) 
<br>
*Validation*<br>
_To do validation write this code_ <br>

![alt text](./image/image2.png)
_when I insert number to locationname it gave me that faild vlaidation_<br>

![alt text](./image/wrong.png)
_when I insert ""FFF" string for location name now the validation is success_ <br>

![alt text](./image/right.png)








