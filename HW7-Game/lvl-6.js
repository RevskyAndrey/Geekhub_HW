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
