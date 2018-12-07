//      1 lvl
while(isFree('north')) {
    north();
}
//     2 lvl
while(isFree('east')) {
    east();
}
// 3 lvl
for ( i=0;i < 7; i++) {

    south();
    east();

}
// 4 lvl
for ( i=0;i < 3; i++) {

    while (isFree('south')) {
        south(); }
    while (isFree('east')) {
        east();
    }
}
while (isFree('south')) {
    south(); }
// 5 lvl
while (isFree('east')) {
    east();
}
while (isFree('south')) {
    south();
}
while (isFree('west')) {
    west();
}
while (isFree('south')) {
    south();
}
while (isFree('west')) {
    west();
}
while (isFree('north')) {
    north();
}
while (isFree('west')) {
    west();
}
while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}
// 6 lvl
while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}
for (i = 0; i < 2; i++) {
    while (isFree('north')) {
        north();
    }
    east();
    while (isFree('east')) {
        east();
    }
}
if (isFree('south') == true) {
    while (isFree('south')) {
        south();
    }
    north();
    west()
}
while (isFree('west')) {
    west();
}
while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}
// 7 lvl

while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}
while (isFree('north')) {
    north();
}
east();
while (isFree('east')) {
    east();
}
while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}
while (isFree('south')) {
    south();
}
while (isFree('west')) {
    west();
}
while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}
while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}