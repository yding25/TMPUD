%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%% Here, we apply AI planning techniques to atuonomous driving.    %%%%%%
%%%%%% Following are rules for actions. 							   %%%%%%
%%%%%% Line 1 of each rule shifts agent from start lane to result lane.%%%%%%
%%%%%% Line 2 represents the complement of Line 1. 					   %%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%n is the number of steps.
step(0..n).

%% 1) Change lane to the left
inlane(L2,I+1) :- changeleft(I), not changeright(I+1), inlane(L1,I), leftof(L2,L1), step(I), I>=0, I<n.
-inlane(L,I+1) :- changeleft(I), not changeright(I+1), inlane(L,I), lane(L), step(I), I>=0, I<n.

%% 2) Change lane to the right
inlane(L2,I+1) :- changeright(I), not changeleft(I+1), inlane(L1,I), leftof(L1,L2), step(I), I>=0, I<n.
-inlane(L,I+1) :- changeright(I), not changeleft(I+1), inlane(L,I), lane(L), step(I), I>=0, I<n.

%% 3) Take a left turn
inlane(L2,I+1) :- turnleft(I), inlane(L1,I), lturn(L1,L2), step(I), I>=0, I<n.
-inlane(L,I+1) :- turnleft(I), inlane(L,I), lane(L), step(I), I>=0, I<n.

%% 4) Take a right turn
inlane(L2,I+1) :- turnright(I), inlane(L1,I), rturn(L1,L2), step(I), I>=0, I<n.
-inlane(L,I+1) :- turnright(I), inlane(L,I), lane(L), step(I), I>=0, I<n.

%% 5) Drive forward
inlane(L2,I+1) :- forward(I), inlane(L1,I), passsignal(L1,L2), step(I), I>=0, I<n.
-inlane(L,I+1) :- forward(I), inlane(L,I), lane(L), step(I), I>=0, I<n.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%  Inertial rule: if the car has no action, it will still in original lane.  %%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%inlane(L, I+1) :- inlane(L, I), not -inlane(L, I+1), lane(L), step(I), I>0, I<=n.
%-inlane(L, I+1) :- -inlane(L, I), not inlane(L, I+1), lane(L), step(I), I>0, I<=n.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%  At each step, chose at least one and at most one action  %%%%%%
%%%%%%  When no action is suitable, chose 'continue'             %%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
1{
	changeleft(I);
	changeright(I);
	forward(I);
	turnleft(I);
	turnright(I)
}1 :- not inlane(y,I), not stop(I), step(I), I>=0, I<n.

#show changeleft/1.
#show changeright/1.
#show forward/1.
#show turnleft/1.
#show turnright/1.
#show stop/1.
%#show step/1.
#show inlane/2.
%#show sum1/1.
