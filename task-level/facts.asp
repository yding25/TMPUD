%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%  Domain Knowledge                                             %%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% Lanes
lane(1..156).

%% Lane change rules
% intersection 1
leftof(105,106).
leftof(104,103).

leftof(75,76).
leftof(74,73).

leftof(2,1).
leftof(3,4).

leftof(42,41).
leftof(43,44).


% intersection 2
leftof(78,77).
leftof(79,80).

leftof(71,72).
leftof(70,69).

leftof(51,52).
leftof(50,49).


% intersection 3
leftof(83,84).
leftof(82,81).

leftof(23,24).
leftof(22,21).

leftof(38,37).
leftof(39,40).


% intersection 4
% leftof(140,139).


% intersection 5
leftof(109,110).
leftof(108,107).

leftof(7,8).
leftof(6,5).

leftof(136,135).
leftof(137,138).


% intersection 6
leftof(112,111).
leftof(113,114).

leftof(55,56).
leftof(54,53).


% intersection 7
leftof(27,28).
leftof(26,25).

leftof(132,131).
leftof(133,134).


% intersection 8
leftof(147,148).
leftof(146,145).

leftof(11,12).
leftof(10,9).

leftof(18,17).
leftof(19,20).


% intersection 9
leftof(143,144).
leftof(142,141).

leftof(59,60).
leftof(58,57).


% intersection 10
leftof(31,32).
leftof(30,29).

leftof(154,153).
leftof(155,156).


% intersection 11
leftof(125,126).
leftof(124,123).

leftof(35,36).
leftof(34,33).

leftof(129,130).
leftof(128,127).


% intersection 12
leftof(121,122).
leftof(120,119).

leftof(15,16).
leftof(14,13).


% intersection 13
leftof(117,118).
leftof(116,115).

leftof(63,64).
leftof(62,61).


% intersection 14
leftof(150,149).
leftof(151,152).

% leftof(46,45).


% intersection 15
leftof(67,68).
leftof(66,65).

% leftof(47,48).


% intersection 16


% intersection 17
leftof(101,102).
leftof(100,101).

leftof(98,97).
leftof(99,98).

leftof(95,96).
leftof(94,95).

leftof(92,91).
leftof(93,92).


% intersection 18
leftof(89,90).
leftof(88,89).

leftof(87,86).
leftof(86,85).


% intersection 19


% intersection 20


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% right, left and forward turn rules
%intersection 1
passsignal(3,105).
passsignal(4,106).
passsignal(104,2).
passsignal(103,1).

passsignal(42,75).
passsignal(41,76).
passsignal(74,43).
passsignal(73,44).

rturn(73,106).
lturn(74,2).

rturn(4,76).
lturn(3,43).

rturn(41,1).
lturn(42,105).

rturn(103,44).
lturn(104,75).


%intersection 2
passsignal(51,78).
passsignal(52,77).
passsignal(79,50).
passsignal(80,49).

passsignal(70,74).
passsignal(69,73).
passsignal(75,71).
passsignal(76,72).

rturn(69,77).
lturn(70,50).

rturn(52,72).
lturn(51,74).

rturn(76,49).
lturn(75,78).

rturn(80,73).
lturn(79,71).


%intersection 3
passsignal(23,83).
passsignal(24,84).
passsignal(81,21).
passsignal(82,22).

passsignal(37,41).
passsignal(38,42).
passsignal(43,39).
passsignal(44,40).

rturn(44,84).
lturn(43,22).

rturn(24,41).
lturn(23,39).

rturn(37,21).
lturn(38,83).

rturn(81,40).
lturn(82,42).


%intersection 4
passsignal(140,104).
passsignal(105,139).

passsignal(78,82).
passsignal(77,81).
passsignal(84,80).
passsignal(83,79).

rturn(77,139).
lturn(78,104).

rturn(106,80).
lturn(105,82).

rturn(84,103).
lturn(83,139).

rturn(140,81).
lturn(140,79).


%intersection 5
passsignal(1,5).
passsignal(2,6).
passsignal(7,3).
passsignal(8,4).

passsignal(135,107).
passsignal(136,108).
passsignal(109,137).
passsignal(110,138).

rturn(110,4).
lturn(109,6).

rturn(8,107).
lturn(7,137).

rturn(135,5).
lturn(136,3).

rturn(1,138).
lturn(2,108).


%intersection 6
passsignal(49,53).
passsignal(50,54).
passsignal(56,52).
passsignal(55,51).

passsignal(114,110).
passsignal(113,109).
passsignal(108,112).
passsignal(107,111).

rturn(114,52).
lturn(113,54).

rturn(56,111).
lturn(55,109).

rturn(107,53).
lturn(108,51).

rturn(49,110).
lturn(50,112).


%intersection 7
passsignal(21,25).
passsignal(22,26).
passsignal(27,23).
passsignal(28,24).

passsignal(138,134).
passsignal(137,133).
passsignal(132,136).
passsignal(131,135).

rturn(138,24).
lturn(137,26).

rturn(28,135).
lturn(27,133).

rturn(131,25).
lturn(132,23).

rturn(21,134).
lturn(22,136).


%intersection 8
passsignal(5,9).
passsignal(6,10).
passsignal(11,7).
passsignal(12,8).

passsignal(145,20).
passsignal(146,19).
passsignal(18,147).
passsignal(17,148).

rturn(145,8).
lturn(146,10).

rturn(12,148).
lturn(11,19).

rturn(17,9).
lturn(18,7).

rturn(5,20).
lturn(6,147).


%intersection 9
passsignal(53,57).
passsignal(54,58).
passsignal(59,55).
passsignal(60,56).

passsignal(141,145).
passsignal(142,146).
passsignal(147,143).
passsignal(148,144).

rturn(141,56).
lturn(142,58).

rturn(60,144).
lturn(59,146).

rturn(148,57).
lturn(147,55).

rturn(53,145).
lturn(54,143).


%intersection 10
passsignal(25,29).
passsignal(26,30).
passsignal(31,27).
passsignal(32,28).

passsignal(20,156).
passsignal(19,155).
passsignal(154,18).
passsignal(153,17).

rturn(20,28).
lturn(19,30).

rturn(32,17).
lturn(31,155).

rturn(153,29).
lturn(154,27).

rturn(25,156).
lturn(26,18).


%intersection 11
passsignal(29,33).
passsignal(30,34).
passsignal(35,31).
passsignal(36,32).

passsignal(123,127).
passsignal(124,128).
passsignal(129,125).
passsignal(130,126).

rturn(123,32).
lturn(124,34).

rturn(36,126).
lturn(35,128).

rturn(130,33).
lturn(129,31).

rturn(29,127).
lturn(30,125).


%intersection 12
passsignal(9,13).
passsignal(10,14).
passsignal(15,11).
passsignal(16,12).

passsignal(119,123).
passsignal(120,124).
passsignal(125,121).
passsignal(126,122).

rturn(119,12).
lturn(120,14).

rturn(16,122).
lturn(15,124).

rturn(126,13).
lturn(125,11).

rturn(9,123).
lturn(10,121).


%intersection 13
passsignal(57,61).
passsignal(58,62).
passsignal(63,59).
passsignal(64,60).

passsignal(115,119).
passsignal(116,120).
passsignal(121,117).
passsignal(122,118).

rturn(115,60).
lturn(116,62).

rturn(64,118).
lturn(63,120).

rturn(122,61).
lturn(121,59).

rturn(57,119).
lturn(58,117).


%intersection 14
passsignal(40,152).
passsignal(39,151).
passsignal(150,38).
passsignal(149,37).

rturn(40,45).

%lturn(150,45).

rturn(46,152).
%lturn(46,38).


%intersection 15
passsignal(65,69).
passsignal(66,70).
passsignal(71,67).
passsignal(72,68).

rturn(65,48).

%lturn(71,48).

rturn(47,69).
%lturn(47,67).


%intersection 16
passsignal(48,46).
passsignal(45,47).

rturn(139,47).
lturn(139,46).

rturn(45,140).


%intersection 17
passsignal(102,96).
passsignal(101,95).
passsignal(100,94).

passsignal(91,97).
passsignal(92,98).
passsignal(93,99).

lturn(93,66).

rturn(68,96).
lturn(67,99).

rturn(102,65).


%intersection 18
passsignal(94,88).
passsignal(95,89).
passsignal(96,90).

passsignal(85,91).
passsignal(86,92).
passsignal(87,93).

rturn(152,90).
lturn(151,93).

rturn(96,149).

lturn(87,150).


%intersection 19
passsignal(61,36).
passsignal(62,35).
passsignal(34,63).
passsignal(33,64).

rturn(61,16).

lturn(34,15).

rturn(13,36).


%intersection 20
passsignal(97,85).
passsignal(98,86).
passsignal(99,87).

passsignal(88,100).
passsignal(89,101).
passsignal(90,102).


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% through(0, 7) is read as position 0 is reachable through lane 7
through(0,37).
through(1,1).
through(2,57).
through(3,47).
through(4,139).
through(5,106).
through(6,80).
through(7,38).
through(8,75).
