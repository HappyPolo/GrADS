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
'quit'
