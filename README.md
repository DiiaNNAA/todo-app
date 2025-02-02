GIS

გეოგრაფიული - Geographic -- პროექცირებული - Projected | გრადუსები - degrees -- მეტრები - meters | სფერული - მართკუთხა



მართკუთხა

ახალი
WGS 84 / UTM zone 38N EPSG:32638
WGS 84 / UTM zone 37N EPSG:32637

ძველი
Pulkovo 1942 / Gauss-Kruger zone 9 EPSG:28409
Pulkovo 1942 / Gauss-Kruger zone 8 EPSG:28408
Pulkovo 1942 / Gauss-Kruger zone 7 EPSG:28407

სფერული

WGS84 - World Geodetic System 1984, used in GPS EPSG:4326





1. გეორეფერენცირება:

Raster-ში Image ფოლდერში გვაქვს ფოტო და GeoImage-ში უნდა დავამატოთ

გვჭირდება layers: georferencer

სფერული კოორდინატები:
ჰორიზონტალური ღერძი არის north-south შესაბამისად მაგის ზევით ქვევით რაც წერია ეგაა კოორდინატები
ვერტიკალური ღერძი არის west-east

როცა მოვნიშნავთ ოთხივე კოორდინატს:
Transformation Settings: 
რასაც დამიწერს ვორდში Target CRS-ში მივუთითებ მაგას, transformation layer -linear და შევინახავ GeoImageფოლდერში.

მართკუთხრა კოორდინატები: 
უკიდურესისგან შემდეგი ხაზები, იწერება ერთად ბოლოში სამი ნულით, დალშე იგივე


2. დიგიტალიზაცია

Layer -> Create Layer -> New ShapeFile Layer -> file name-ში ვუთითებ Shp ფოლდერს და ვწერთ შესაბამისი 
ლეიერის სახელს

ვდგებით ამ შრეზე, ფანქრით ვიწყებთ ედითს, ვავლებთ ხაზს და ვსვამთ წერტილებს, მაუსის მარჯვენა კლიკიკით ვასეივებთ და მერე Save Layer (ფანქრის გვერდით)


3/4. გლობალური პოზიციონირების სისტემა
გვჭირდება Raster-ში GeoTaggedPhoto სადაც გვაქვს ფოტო და ასევე GPS ფოლდერი (აუცილებლად უნდა იყოს CSV თუ xlsx არის გადავაკეთოთ)

გვჭირდება importPhotos plugin და import photo-ით ვამატებთ:
input folder location-ში ვუთითებთ ბრაუსით თავად GeoTaggedPhotos ფოლდერს
output file location-ში ვუთითებთ shp ფოლდერს და გაფართოება ESRI.shp

layer: Data Source Manager: Delimeted Text -> File Name -ში GPS-ში არსებული csv ფაილი

ვდგებით ამ ლეიერზე: Export -> Save feature as -> format: ESRI.shp, ვინახავთ shp ფოლდერში





ეს არვიცი მოვა თუარა:
ვქმნი GeoDataBase ფოლდერს
GeoPackage-ში Create Database
DB Manager Plugin

ვქონექთდები და Import layer/file -ით ჩემს შექმნილ ლეიერებს ცალცალკე ვაიმპორტებ: Primary key, Geometry column, encoding utf-8, Create special index ამეებს ვჩეკავ

მერე ვდგებით ჩვენს ლეირებზე და Change Data Source-ით ვანაცვლებთ ჩვენს ბაზაში დამატებულებით

მერე ლეიერებზე მარჯვენა კლიკი და open attribute table-ით ვშვრები იმას რაც მინდა :დ (field calculator)






სტრუქტურა:
სახელი გვარი:
- GPS - csv ფაილები
- Raster - GepImage, GeoTaggedPhoto, Image
- Shp
- Project (Optional) 









--Final
1. ვექტორები და ატრიბუტული ცხრილი

სნეპინგით ვხავაზავთ რაიმე ვექტორებს, (ფანქარი რომ ახატია ჯერ მაგას ვაჭერთ, მერე სამით გვერდით რომაა სამწერტილიანი რაღაცა და ვხაზავთ), თუ უკვე არსებულის გასწორება გვინდა ვიყენებთ Vertex Tool-ს და ვუთითებთ, რომ აქტიური იყოს მხოლოდ Vertex-ეზბე. შემდეგ ამ ობიექტებს ვნიშნავთ და რომელ ლეიერშიც შეგვაქვს ცვლილება იმის Attribute Tables -  ს ვხსნით. ვქმნით ახალ სვეტს - მაგ. redaqtireba და ვუთითებთ რა ტიპის გვინდა რომ იყოს. შემდეგ მხოლოდ მონიშნულ ობიექტებზე გადავდივართ ფილტრით და იმისთვის რომ ველები ერთიანად შევავსოთ ჯერ დროპდაუნში ვირჩევთ redaqtireba სვეტს და შემდეგ expression-ში ვწერთ სიტყვას ფრჩხილებში ('') და ვაჭერთ update selected. თუ გვინდა გადაადგილება, ვნიშნავთ ობიექთს მერე 
ვაჭერთ edit-ს  edit geometry -> move features.

კატეგორიზაცია: შევდივართ layer-ის properties-ში , მერე symbology, ვირჩევთ Categorized, და value-ში ვუთითებთ იმ სვეტს, რომლის მიხედვითაც გვინდა, რომ მოხდეს კატეგორიზაცია და ვაჭერთ Classify-ს.

შემდეგ ვინახავთ style-ს, ვირჩევთ ლეიერს, შემდეგ export და ვირჩევთ Save AS QGIS Layer Style File და ფაილში ვუთითებთ შესაბამის მისამართს (style folder).





2. მონიშვნები, ექსპორტი,  მეტამონაცემები, სანიშნეები, სტატისტიკა, ფორმატები.

გვჭირდება ფოლდერი შემდეგი საქაღალდეებით: Geodatabase, KML, DWG (იგივე DXF), HTML Statistic, Bookmarks, Style, shp, Metadata. უკვე მოცემული გვაქვს work.gdb, რომელსაც  ვაგდებთ Geodatabase ფოლდერში და qgis-ის გახსნის შემდეგ ვხსნით მასში არსებულ მონაცემებს. (charcho-ს ფროფერთიში შევდივართ, ვუცვლით symbology-ს და labels-ში single labels და შემდეგ ვირჩევთ ნუმერაციას, შეგვიძლია შევუცვალოთ ფერი და ზომაც). შემდეგ ლეიერში ამ ცვლილებეს ვინახავთ შემდეგნაირად, ვირჩევთ ლეიერს, შემდეგ export და ვირჩევთ Save AS QGIS Layer Style File და ფაილში ვუთითებთ შესაბამის მისამართს (style folder). ასევე ამ შრეს ვინახავთ შემდეგნაირად:  export -> Save Feature As -> ვირჩევთ ESRI Shapefile-ს, ამოვნიშნავთ add saved file to map-ს და ვაჭერთ ok-ს -> ვინახავთ shp ფოლდერში.


style-ის შეტვირთვა, ვირჩევთ ლეიერს და შევდივართ ფროფერთიში -> გადავდივართ symbology-ზე, ქვევით Style დროპდაუნს ვაჭერთ და ვირჩევთ load style-ს  და შემდეგ ვუთითებთ ჩვენ დასეივებულ სტილს style ფოლდერიდან.


ვირჩევთ ლეიერს, შემდეგ ფანქრით ვიწყებთ ედიტს, შემდეგ ზემოთ ვაჭერთ vector-ს, Research Tool-s, select by location. select features from- ში ვირჩევთ parcel-ს და by comparing to the features from -ში ჩარჩოს ანუ რომელი ლეიერის feature-ებსაც ვნიშნავთ. select features only-ს ვნიშნავთ, და are within-ის დახმარებით ამ ორს რაც აკავშირებს ის ყველაფერი უნდა მოინიშნოს. შემდეგ export-ით ვინახავთ save selected features as - format-ში AutoCAD DXF, filename-ში DWG. იგივე შეგვიძლია შევინახოთ KML ფორმატში. advanced ფილტრით შეგვიძლია expression-ებით მოვნიშნოთ რაღაცები მაგ. shape_area > 3000, რომელსაც ვინახავთ ESRI Shapefile ად shp ფოლდერში.


HTML Statistic - ვაჭერთ  ზემოთ vector -> analysis tool -> Basic Statistics for Fields, ვირჩევთ რომელი ფილდით გვინდა სტატისტიკა და ვინახავთ შესაბამის ფოლდერში.

Bookmarks - View -> Spatial BookMark Manager და new bookmark-ით ვქმნით ახალს. შემდეგ export-ით ვინახავთ bookmarks ფოლდერში.


Metadata -  ვირჩევთ ლეიერს, შევდივართ properties- ში , ვაწერთ title-ს, type - ში featureType, language - GEO და აბსტრაქტში ვწერთ რამეს, categories ჩანართში თუ გვინდა ვირჩევთ რამეს, access-ში შეგვიძლია დამატება, extent-ში ვაჭერთ Set CRS from layer da calculate from layer da ყველაფრის შევსების შემდეგ ვინახავთ ქვევით მარცხნივ დროპდაუნს ვაჭერთ და Save Metadata და ვინახავთ შესაბამის ფოლდერში.


3. OGC სერვისები

Create Workspace -> check default.

შემდეგ შევდივართ, ვნიშნავთ, რომ იყოს აქტიური და ვრთავთ WMS სერვისს.
 

Stores - Add new stores და ვუთითებთ ჩვენს პროექტს. რაც გვინდა რომ გავიდეს, ვაჭერთ publish -ს და ვთვლით კოორიდნატებს compute from data-ით.

Layer -> Data Source Manager -> WMS/WMTS -> da new-ით ვქმნით ახალ ქონექშენს.


4. მონაცემების ორგანიზება
layout- ში ინახება .qpt (QGIS Composer Template) ტიპის ფაილები. დუბლირებულებს ვანაცვლებთ.
Project - ში ინახება .qgz გაფართოებით QGS ტიპის ფაილები
Raster -ში დაბეჭდილებს ვინახავთ Print ფოლდერშიში, ფოტოებს კოორდინატებით GeoTaggedPhotos ფოლდერში, რელიეფისთვის (.tfw, .tif.aux, .tif) ვქმნით DEM ფოლდერს. (ეს ყველა ფოლდერიც ინახება raster-ში).
Shp ფოლდერში - გვხვდება შემდეგი გაფართოებებით, .cpg, .dbf, .prj, .shp, .shx, .sbn
Google_Format - KML/KMZ ფაილები
xml-ს ფორმატებს ვამოწმებთ, თუ open with notepad-ით გახსნისას დასაწყის ბუქმარქები აწერია, ვინახავთ Bookmark ფოლდერში.
CAD - ში ვაგდებთ .dxf ფაილს.
ექსელს კოორდინატებით ვინახავთ GPS_Coordinates ფოლდერში. თუ ისე ექსელი იქნებოდა, მაგისთვის ცალკე შევქმნიდით(Table ფოლდერში ან ექსელისთვის დავარქმევდით რამეს).
.qmd -ის ფაილებს ვამოწმებთ ჯერ მეტამონაცემები თუ არის, (შევტვირთოთ QGIS-ში და შევამოწმოთ) თუ არის ვინახავთ Metadata ფოლდერში.
ფონტებს ვყრით - fonts folder -ში.
BaseMaps-ს ვინახავთ Raster საქაღალდეში.
Raster-ში ვინახავთ რუკასაც და მისი რეფერენცირებით დაბრუნებულ ფაილსაც (.tif.points)
Database ფოლდერში ვინახავთ .sqlite. (Database-საც).
Style - ფოლდერში ინახება .QML ფაილები.

თუ ნებისმიერ ფაილს რომ გავხსნით დაგვხდა connection-ს მაშინ ამ ფაილს ვაგდებთ raster ფოლდერში.
html ფაილში თუ დაგვხვდა სტატისტიკა ვაგდებთ HTML Statisctisc(HTML_Stat) ფოლდერში.

5. რაღაც ბოლო ჯანდაბა:

შემოგვაქვს ლეიერები, ვნიშავთ სექციას და ვაჭერთ ზემოთ Raster -> Extraction -> Clip raster my mask layer, ვინახავთ რასტერში.

DEM ფოლდერს ვაგდებთ რასტერში. ვქმნით print layout-ს. 

Raster -> analysis -> Hillshade - > Hillshade folder ს ვქმნით რასტერში და იქ ვინახავთ.
