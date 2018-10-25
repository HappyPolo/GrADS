'reinit'
'open F:\data\grads\station.monthly.China195.ctl'
'open F:\data\grads\grid.ctl'
'enable print F:\scripts\grads\week9\week9.1.16303003.gmf'

'set t 1 12'
'define prcann=ave(oacres(grd.2(z=1,t=1),p),t+0,t=672,12)'
'modify prcann seasonal'
set t 1 672'
'define prcano=oacres(grd.2(z=1,t=1),p)-prcann'
;