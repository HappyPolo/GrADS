'reinit'
'sdfopen F:\data\grads\HadISST_sst.nc'
'sdfopen F:\data\grads\HadISST_ice.nc'
'set gxout fwrite'
'set fwrite F:\data\grads\HadISST.seasonal.1870-2016.dat'
t0=1
while(t0 <= 1753)
    tapr = t0 + 3
    tsum = t0 + 6
    taut = t0 + 9
    twin = t0 + 12
    'set t 'tapr
    'set x 1 360'
    'set y 1 180'
    'd ave(maskout(sst.1,-sic.2),t-1,t+1)'
    'set t 'tsum
    'd ave(maskout(sst.1,-sic.2),t-1,t+1)'
    'set t 'taut
    'd ave(maskout(sst.1,-sic.2),t-1,t+1)'
    'set t 'twin
    'd ave(maskout(sst.1,-sic.2),t-1,t+1)'
    t0=t0+12
endwhile
'disable fwrite'
'quit'
*
