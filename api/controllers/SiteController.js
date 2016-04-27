/**
 * SiteController
 *
 * @description :: Server-side logic for managing sites
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


postalHandler : function(req, res) {
		
		
			Site.find({postal_code:req.params.postal})
			.populate('study').
			exec(function (err, resUser){
				
				return res.json(resUser);
			});

		

}


};

