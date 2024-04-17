# [data.gov.tw](https://data.gov.tw/en)

* <https://data.gov.tw/en/about>

A friendly API since you don't need API key, but... you need to create a proxy server since most data endpoints don't provide CORS headers.

In addition, there are different formats an endpoint will response, like JSON, CSV, XML... The most used format format is CSV. Fornatelly, it is simple.

Oh, their columns are different. Of course.

> <https://data.taipei/api/dataset/26de6b22-10bf-4415-b87b-8348c2303570/resource/8dbb1aeb-4035-4908-aa3d-090952b70377/download> (https://data.gov.tw/dataset/145581)

```csv
S_Category,S_Item,S_Geo,S_Pic01_ALT,S_Pic01_URL
Tickets,information center,MULTIPOINT ((121.5810397 24.998279)),Tourist Information Center,http://www.zoo.gov.tw/iTAP/02_Services/01_Info/VisitorCenter_01.jpg
Tickets,Volunteer Service (Counter),MULTIPOINT ((121.5900452 24.9946592)),information center,http://www.zoo.gov.tw/iTAP/02_Services/01_Info/Volunteers_01.jpg
Tickets,Volunteer Service (Counter),MULTIPOINT ((121.5818739 24.9977563)),information center,http://www.zoo.gov.tw/iTAP/02_Services/01_Info/Volunteers_02.jpg
Tickets,Volunteer Service (Counter),MULTIPOINT ((121.5806334 24.9966733)),information center,http://www.zoo.gov.tw/iTAP/02_Services/01_Info/Volunteers_03.jpg

(elided for readability)
```