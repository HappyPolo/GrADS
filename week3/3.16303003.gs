'reinit'
'enable print F:\3.gmf'
'sdfopen F:\data\grads\uwnd.levs.monthly.ERAINT.nc'
********************1
'set dfile 1'
'set lon 0 360'
'set lat 30'
'set lev 1000 300'
'set time jan2010'
'd u'
'print'
'c'
*************2
'set lon 130'
'set lat -90 90'
'set lev 1000 300'
'set time jan2010'
'd u'
'print'
'c'
*************3
'set lon 0 360'
'set lat 10'
'set lev 850'
'set time jan2010 dec2010'
'd u'
'print'
'c'
'disable print'
'quit'
