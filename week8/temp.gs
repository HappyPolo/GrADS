'reinit'
'open F:\data\grads\uvwnd.ctl'
'sdfopen F:\data\grads\uwnd.levs.monthly.ERAINT.nc'
'sdfopen F:\data\grads\vwnd.levs.monthly.ERAINT.nc'
'open F:\data\grads\topo10.ctl'
*'sdfopen F:\data\NCEP\hgt.sfc.nc'
'enable print F:\scripts\grads\week8\week8.1.16303003.gmf'
'set gxout vector'
'set time sep2016'
'set lon 0 360'
'set lat -90 90'

'set clevs 1500 10000'
'set ccols 16 0 0'
'set clab off'



'set vpage 0 5.5 0 8.5'
'set arrscl 0.2 10'
'd skip(u.2,3,3);skip(v.3,3,3);mag(u.2,v.3)'
'd maskout(tp.4(lev=850,t=1), tp.4(lev=850,t=1)-1500)'

*'set vpage off'
'set vpage 5.5 11 0 8.5'
'set arrscl 0.1 50'
'd skip(u.1,3,3);skip(v.1,3,3);mag(u.1,v.1)'
'd maskout(tp.4(lev=850,t=1), tp.4(lev=850,t=1)-1500)'
'set vpage off'
'print'
'c'
'disable print'
*'quit'
*
quit