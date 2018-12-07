/*
map - show map
legend - legend for map
north - move forward
east - move right
south - move back
west - move left
isFree - say what direction you want check
hint - hint
restart - restart
 */

/*
#########
#@      #
####### #
#   #   #
# # # ###
# # # ###
# #   ###
# #######
#      *#
#########
 */


if (isFree('east') != false) {
    while (isFree('east')) {
        east();
    }
}

if (isFree('south') == true) {
    while (isFree('south')) {
        south();
    }
}
if (isFree('west') == true) {
    while (isFree('west')) {
        west();
    }
}

if (isFree('south') == true) {
    while (isFree('south')) {
        south();
    }
}

if (isFree('west') == true) {
    while (isFree('west')) {
        west();
    }
}

if (isFree('north') != false) {
    while (isFree('north')) {
        north();
    }
}

if (isFree('west') == true) {
    while (isFree('west')) {
        west();
    }
}
if (isFree('south') == true) {
    while (isFree('south')) {
        south();
    }
}
if (isFree('east') != false) {
    while (isFree('east')) {
        east();
    }
}

//"next"