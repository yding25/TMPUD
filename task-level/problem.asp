#const x=0.
#const y=0.

goallane(y,n).
inlane(x,0).


stop(I) :- inlane(y,I), goallane(y,n), step(I), I>0, I<=n.
stop(I+1) :- stop(I), step(I), I>0, I<n.
:- not stop(n).

%:- changeleft(0).
%:- changeright(0).

:- changeright(I), stop(I+1), step(I), I>0, I<n. 
:- changeleft(I), stop(I+1), step(I), I>0, I<n.

