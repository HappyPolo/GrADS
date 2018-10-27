'reinit'
'open F:\data\grads\station.monthly.China195.ctl'
'open F:\data\grads\grid.ctl'
'enable print F:\scripts\grads\week9\week8.1.16303020.gmf'

'set grid off'
'set lon 60 140'
'set lat 15 60'
'set time jul1998'
'set parea 1 10 1.5 8'

'set gxout shaded'
'set mpdset mres'
'set poli on'
'set clab on'   
'set clevs -2000 -1000 0 1000 2000 3000 4000 5000 6000'
*'set ccols 23 22 21 31 32 33 34 35 36 37'
'run C:\OpenGrADS2\Contents\Resources\Scripts\define_colors.gs'
'd (oacres(grid.2(t=1,z=1),R)-ave(oacres(grid.2(t=1,z=1),R),t=307,t=655,12))'

*'run basemap O 15 0 H'
'cnbasemap 15 0 H'
'cbarn 1 0 5.5 0.5'

'q w2xy 105 28'
xlo=subwrd(result,3)
ylo=subwrd(result,6)
'q w2xy 120 32'
xhi=subwrd(result,3)
yhi=subwrd(result,6)
'draw rec 'xlo' 'ylo' 'xhi' 'yhi
'draw title 199807_precip_ano(0.1mm)'

'print'
'disable print'

'quit'