var data = {
	rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
 exports.adminView = function(req, res){
 	res.render('rsvp', data);
 };


 exports.addRSVP = function(req, res){
 	var rsvpEmail = req.body.rsvpEmail;
	//this will print in your terminal when a POST is made
	console.log(rsvpEmail);
	data.rsvp.push(rsvpEmail); //add to current data
	res.send(rsvpEmail);
}