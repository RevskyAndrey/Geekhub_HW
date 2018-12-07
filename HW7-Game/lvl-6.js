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
#@#     #
# ## ## #
# #  ## #
# # ### #
# # #   #
#   # # #
### # ###
#   #  *#
#########
 */

if (isFree('south') == true) {    //down
    while (isFree('south')) {
        south();
    }
}
if (isFree('east') != false) {   //right
    while (isFree('east')) {
        east();
    }
}

for ( i=0;i < 2; i++) {

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

if (isFree('west') != false) {
    while (isFree('west')) {
        west();
    }
}

if (isFree('south') == true) {    //down
    while (isFree('south')) {
        south();
    }
}
if (isFree('east') != false) {   //right
    while (isFree('east')) {
        east();
    }
}