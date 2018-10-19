'reinit'
'enable print F:\3.16303003.gmf'
'sdfopen F:\data\grads\Quv.monthly.eraint.1998.nc'
'set gxout vector'
function arrow(x,y,len,scale)
'set line 1 1 4'
'draw line 'x-len/2.' 'y' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y+0.025' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y-0.025' 'x+len/2.' 'y
'set string 1 c'
'set strsiz 0.1'
'draw string 'x' 'y-0.1' 'scale
return
len = 0.3
scale = 2
xrit = 8.0
ybot = 0.5
'set arrscl 'len' 'scale
'set arrlab off'
'd qu;qv'

'print'
'disable print'
*

