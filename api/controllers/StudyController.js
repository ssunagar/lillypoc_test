/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	userHandler : function(req, res) {
		var user,
			userName = "Default";
		// Reurns the state params
		console.info("req params are ",req.params);
		if(req.params && req.params.medicalCondition) {
			Study.findOne({ study_alias : req.params.medicalCondition}, function (err, resUser){
				user = resUser;
				console.info("user: ", user.study_alias);
				if(user && user.study_alias) {
					userName = user.study_id;
				}
				//console.info("other location details are ",user.);
				return res.view('studyInfo', {"studyName" : userName});
			});

		}
		// req.params.userName gives the state params
		// For JSON data
		//return res.json("user infomration");

		// For View
		//return res.render("user view infomration");
		// Location is potinted views
		//return res.view('userInfo', {"userName" : userName});
	},

	allHandler : function(req, res){

		Study.find()
			.populate('sites').
			exec(function (err, resUser){
				
				return res.json(resUser);
			});

		


	},


	medicalHandler : function(req, res) {
		
		
			Study.find({study_alias:req.params.alias})
			.populate('sites').
			exec(function (err, resUser){
				
				return res.json(resUser);
			});

		

},


	bothHandler : function(req, res) {
		
		
			Study.find({study_alias:req.params.alias})
			.populate('sites',{postal_code:req.params.postal}).
			exec(function (err, resUser){
				
				return res.json(resUser);
			});

		

},


	postalHandler2 : function(req, res) {
		
		
			Study.find({study_alias:req.params.alias})
			.populate('sites',{

				or: [	
				{postal_code:req.params.postal},
				{postal_code: null}
				]

			}).
			exec(function (err, resUser){
				
				return res.json(resUser);
			});

		

}


};
