'reinit'
'open F:\data\grads\station.monthly.China195.ctl'
'open F:\data\grads\grid.ctl'
'enable print F:\scripts\grads\week9\week9.1.16303003.gmf'
'set dfile 2'
'set t 1 12'
*=========================================================
'define prcann=ave(oacres(grid.2(z=1,t=1),R.1),t=307,t=672,12)/10'
'modify prcann seasonal'
'set t 307 672'
'define prcano=oacres(grid.2(z=1,t=1),R.1)/10-prcann'
*=========================================================
'set gxout shaded'
'set mpdset lowres'
'set poli on'
'set clab on'
'set time jul1998'
'set lat 15 55'
'set lon 72 140'
'colormap precip2_17lev'
*'set clevs 0 1000 2000 3000 4000 5000 6000 7000'
'd prcano'
'cnbasemap  15 0 H'
'cbarn.gs 0.8 0 5.5 0.3'
'q w2xy 105 28'
xlo=subwrd(result,3)
ylo=subwrd(result,6)
'q w2xy 120 32'
xhi=subwrd(result,3)
yhi=subwrd(result,6)
'draw rec 'xlo' 'ylo' 'xhi' 'yhi
'print'
'disable print'
*

