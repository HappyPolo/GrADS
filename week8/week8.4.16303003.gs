'reinit'
'sdfopen F:\data\grads\HadlSST.seasonal.1870-2016.nc'
'enable print F:\scripts\grads\week8\week8.4.16303003.gmf'
'set gxout shaded'
'set x 1'
'set y 1'
'set t 1 146'
'set grads off'
'set grid off'
'set lon 0 360'
'set lat -90 90'
'define nino34=aave(sstwin,lon=-170,lon=-120,lat=-5,lat=5)'
'set lon -180 180'
'set lat -90 90'
'set t 1'
'colormap temp_19lev'
*===============  ===================================
'set lon 0 360'
'set lat -90 90'
'define corson = tcorr(nino34,sstaut,t=1,t = 146)'
'define cordjf = tcorr(nino34,sstwin,t=1,t = 146)'
'define cormam = tcorr(nino34,sstapr,t=2,t = 147)'
*'colormap MPL_PuBu'
*============== son =================================
'set vpage 2 9 5.7 8.5'
'set grads off'
'set lon 0 360'
'set lat -90 90'
'set clevs -1 -0.8 -0.6 -0.4 -0.2 0 0.2 0.4 0.6 0.8 1'
'set ccols 14 18 20 22 24 25 26 28 30 32 34 35'
'd corson'
'define sigson = maskout(corson,abs(corson)-0.136)'
'set gxout shp'
'set shp -pt shppt'
'd skip(sigson,2,2)'
'draw title nino3.4_autumn'
'set shpopts -1 3 0.005'
'draw shp shppt'
'set vpage off'
*============= djf ==================================
'set vpage 2 9 2.9 5.7'
'set grads off'
'set gxout shaded'
'set lon 0 360'
'set lat -90 90'
'set clevs -1 -0.8 -0.6 -0.4 -0.2 0 0.2 0.4 0.6 0.8 1'
'set ccols 14 18 20 22 24 25 26 28 30 32 34 35'
'd cordjf'
'draw title nino3.4_winter'
'define sigdjf = maskout(cordjf,abs(cordjf)-0.136)'
'set gxout shp'
'set shp -pt shppt'
'd skip(sigdjf,2,2)'
'set shpopts -1 3 0.005'
'draw shp shppt'
*============= mam ===================================
'set vpage 2 9 0.1 2.9'
'set grads off'
'set gxout shaded'
'set clevs -1 -0.8 -0.6 -0.4 -0.2 0 0.2 0.4 0.6 0.8 1'
'set ccols 14 18 20 22 24 25 26 28 30 32 34 35'
'd cordjf'
'draw title nino3.4_spring'
'define sigmam = maskout(cormam,abs(cormam)-0.136)'
'set gxout shp'
'set shp -pt shppt'
'd skip(sigmam,2,2)'
'set shpopts -1 3 0.01'
'draw shp shppt'
'cbarn 0.5 0 5.5 0.2'
'set vpage off'


'print'
'disable print'
*