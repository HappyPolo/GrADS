'reinit'
'enable print F:\week6.2.16303003.gmf'
'sdfopen F:\data\grads\uwnd.levs.monthly.ERAINT.nc'
'sdfopen F:\data\grads\vwnd.levs.monthly.ERAINT.nc'
'set t 1'
'set z 1'
**********************  1  
'set gxout stream'
'd u.1;v.2;mag(u.1,v.2)'
'print'
'c'
**********************  1  
'set gxout stream'
'set strmden 2'
'd u.1;v.2;mag(u.1,v.2)'
'print'
'c'
**********************  1  
'set gxout stream'
'set strmden 8'
'd u.1;v.2;mag(u.1,v.2)'
'print'
'c'
'disable print'
'quit'
