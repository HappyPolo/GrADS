'reinit'
'sdfopen F:\data\grads\HadlSST.seasonal.1870-2016.nc'
'enable print F:\scripts\grads\week9.4.16303003.gmf'
'set gxout shaded'
'set x 1'
'set y 1'
'set t 1 146'
'set grads off'
'set grid off'
'set lon 0 360'
'set lat -90 90'
'colormap temp_19lev'
'define nino34ann=ave(aave(sstwin,lon=-170,lon=-120,lat=-5,lat=5),t=111,t=146,1)'
'modify nino34ann seasonal'
'set t 110 146'
'define ninoano=tloop(aave(sstwin,lon=-170,lon=-120,lat=-5,lat=5)-nino34ann)'
*===============  ===================================
'set lon 0 360'
'set lat -90 90'
'set t 111'
'define coeson = tregr(ninoano,sstaut,time=mar1980,time=mar2016)'
'define coedjf = tregr(ninoano,sstwin,time=mar1980,time=mar2016)'
'define coemam = tregr(ninoano,sstapr,time=mar1981,time=mar2017)'


*============== son =================================
'set vpage 2 9 5.7 8.5'
'set grads off'
'set lon 0 360'
'set lat -90 90'
'set clevs -1 -0.8 -0.6 -0.4 -0.2 0 0.2 0.4 0.6 0.8 1'
'set ccols 14 18 20 22 24 25 26 28 30 32 34 35'
'd coeson'
'basemap L 15 0 L'
'draw title nino3.4_ano_autumn'
'q w2xy 190 -5'
xlo=subwrd(result,3)
ylo=subwrd(result,6)
'q w2xy 240 5'
xhi=subwrd(result,3)
yhi=subwrd(result,6)
'draw rec 'xlo' 'ylo' 'xhi' 'yhi

*============= djf ==================================
'set vpage 2 9 2.9 5.7'
'set grads off'
'set gxout shaded'
'set lon 0 360'
'set lat -90 90'
'set clevs -1 -0.8 -0.6 -0.4 -0.2 0 0.2 0.4 0.6 0.8 1'
'set ccols 14 18 20 22 24 25 26 28 30 32 34 35'
'd coedjf'
'basemap L 15 0 L'
'draw title nino3.4_ano_winter'
'q w2xy 190 -5'
xlo=subwrd(result,3)
ylo=subwrd(result,6)
'q w2xy 240 5'
xhi=subwrd(result,3)
yhi=subwrd(result,6)
'draw rec 'xlo' 'ylo' 'xhi' 'yhi

*============= mam ===================================
'set vpage 2 9 0.1 2.9'
'set grads off'
'set gxout shaded'
'set clevs -1 -0.8 -0.6 -0.4 -0.2 0 0.2 0.4 0.6 0.8 1'
'set ccols 14 18 20 22 24 25 26 28 30 32 34 35'
'd coemam'
'basemap L 15 0 L'
'draw title nino3.4_spring'
'q w2xy 190 -5'
xlo=subwrd(result,3)
ylo=subwrd(result,6)
'q w2xy 240 5'
xhi=subwrd(result,3)
yhi=subwrd(result,6)
'draw rec 'xlo' 'ylo' 'xhi' 'yhi

'cbarn 0.5 0 5.5 0.2'
'set vpage off'
'print'
'disable print'
*