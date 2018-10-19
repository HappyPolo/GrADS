program uwnd
parameter(nx =144,ny=73,nz=6,nt=462)
real u(nt,nz,ny,nx),v(nt,nz,ny,nx)

open(unit    =11,file='/mnt/f/data/grads/uwnd.levs.monthly.ERAINT.dat',form='unformatted',access='direct',recl=4*nx*ny)
irec         =1
do it        =1,nt
	do iz        =1,nz
		read(11,rec  =irec) ((u(it,iz,iy,ix),ix=1,nx),iy=1,ny)
		irec         =irec+1
	enddo
enddo
close(11)

open(unit    =13,file='/mnt/f/data/grads/uwnd.850.300.monthly.ERAINT.dat',form='unformatted',access='direct',recl=4*nx*ny)
irec         =1

do it =1,nt
	! ----uwnd
	do iz        =3,6,3
		write(13,rec =irec) ((u(it,iz,iy,ix),ix=1,nx),iy=1,ny)
		irec         =irec+1
	enddo
enddo

close(13)

end
