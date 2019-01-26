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
##################
#@#     ##########
# # # #  #########
# ### ##   #######
#  #   # # #######
#  #   # # #######
# ### ##   #######
#   # #  #########
# # # # ##########
# # # # ##########
#   # # ##########
# ### # ##########
#     # ### ######
### ### ### ######
#   #           ##
# ### ##### ### ##
# ##  ##### ### ##
#  # ########## ##
# ## ########## ##
###  ########## ##
##  ########### ##
#  ############ ##
# ############# ##
# ############# *#
##################
 */

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