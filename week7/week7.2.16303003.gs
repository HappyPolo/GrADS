'reinit'
'sdfopen F:\data\grads\uwnd.levs.monthly.ERAINT.nc'
'sdfopen F:\data\grads\vwnd.levs.monthly.ERAINT.nc'
'set gxout fwrite'
'set fwrite F:\data\grads\uvwnd.dat'
t0 = 1
while(t0 <= 462)
    'set t ' t0
    z0 = 1
    while(z0 <= 6)
        'set z ' z0
        'set x 1 144'
        'set y 1 73'
        'd u.1'
        z0=z0+1
    endwhile
    z0 = 1
    while(z0 <= 6)
        'set z ' z0
        'set x 1 144'
        'set y 1 73'
        'd v.2'
        z0=z0+1
    endwhile    
    t0=t0+1
    endwhile
'disable fwrite'
****** test ***********
'reinit'
'open F:\data\grads\uvwnd.ctl'
'sdfopen F:\data\grads\uwnd.levs.monthly.ERAINT.nc'
'sdfopen F:\data\grads\vwnd.levs.monthly.ERAINT.nc'
'open F:\data\grads\topo10.ctl'
'enable print F:\scripts\grads\week7\week7.2.16303003.gmf'
'set gxout stream'
'set time sep2016'
'set vpage 0 5.5 0 8.5'
*'set arrscl 0.1 1000'
'set dfile 4'
'set x 1'
'set y 1'
'd u.2;v.3;mag(u.2,v.3)'
'set gxout shaded' 
'set rgb 40 170 170 170' 
'set clevs 1500 3000' 
'set ccols 0 40 40'
d maskout(tp,tp-1500)
*'set vpage off'
'set vpage 5.5 11 0 8.5'
'd u.1;v.1;mag(u.1,v.1)'
'set dfile 4'
'set x 1'
'set y 1'
'set gxout shaded' 
'set rgb 40 170 170 170' 
'set clevs 1500 3000' 
'set ccols 0 40 40'
*'d maskout(tp,tp-1500)
'set vpage off'
'print'
'c'
'disable print'
*F:\scripts\grads\week7\week7.2.16303003.gs'quit'
*